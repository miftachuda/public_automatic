const fs = require('fs/promises');
const lodash = require("lodash")
const moment = require("moment")
var axios = require('axios');
var chalk = require('chalk');
var qs = require('qs');
require('colors');
const inquirer = require('inquirer');
inquirer.registerPrompt("date", require("inquirer-date-prompt"));

var synctime;
var unit;
var shift;
var delay;
var scanner;
var mode;
var lastvalue;
var schedule;


async function getInput() {
    //var username = readlineSync.question('Input Username : ');
    //var password = readlineSync.question('Input Password : ', {
    //hideEchoBack: true // The typed text on screen is hidden by `*` (default).});
    username = 'miftachul.huda';
    password = 'asyncFunti0n';
    scanner = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'scanner',
                message: 'Masukan nama scanner :',
                filter(val) {
                    return val;
                }
            }
        ]).then((w) => {
            return w.scanner;
        })
    unit = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'unit',
                message: 'Pilih unit :',
                choices: ['002', '021', '022', '023', '024', '025', '041'],
                filter(val) {
                    return val;
                }
            }
        ]).then((w) => {
            return w.unit
        })

    shift = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'shift',
                message: 'Pilih jadwal waktu :',
                choices: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
                filter(val) {
                    return val;
                },
            },
        ]).then((w) => {
            return w.shift
        })
    synctime = await inquirer
        .prompt([
            {
                type: 'date',
                name: 'synctime',
                message: 'Pilih waktu syncron :',
                format: { month: "short", hour: "2-digit", minute: "2-digit", hour12: false },
                transformer: (s) => chalk.bold.red(s),
                filter(val) {
                    return val;
                },
            },
        ]).then((w) => {
            return w.synctime
        })
    delay = await inquirer
        .prompt([
            {
                type: 'number',
                name: 'delay',
                message: 'Waktu delay antar equipment :',
                filter(val) {
                    return val;
                }
            }
        ]).then((w) => {
            return w.delay
        })
    mode = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'mode',
                message: 'Pilih mode data :',
                choices: ['skip', 'resync all', 'resync last value', 'resync schedule',],
                filter(val) {
                    return val;
                },
            },
        ]).then((w) => {
            return w.mode
        })

}


async function fire() {
    var getTokenLogin = async function () {
        var data = qs.stringify({
            'username': username,
            'password': password,
            'companyCode': '1010',
            'domainName': 'pertamina'
        });
        var config = {
            method: 'post',
            url: 'https://apps.pertamina.com/bocpp-v2.0/api/logins?secretKey=ee8fbc9dfa034db4a2419bfb4bfa9562',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        console.log("Send Login key....")
        return axios(config)
            .then(function (response) {
                console.log("Sucessfully Login to server".green)
                return response.data.token
            })
            .catch(function (error) {
                console.log('Failed to Login Something Wrong'.red);
            });

    }

    var getLastValue = async function (token) {
        var config = {
            method: 'get',
            url: 'https://apps.pertamina.com/bocpp-v2.0/api/lastValueRecords?bocpp=boc&ru=R401&area=LOC-II',
            headers: {
                'Authorization': `Bearer ${token}`
            },

        };
        console.log("Request Last Value, Please Wait....")
        return axios(config)
            .then(function (response) {
                console.log("Sucessfully Get Last Value".green)
                return response.data
            })
            .catch(function (error) {
                console.log('Failed to get Last Value Record'.red);
                runit()
            });

    }
    var getSchedule = async function (token) {
        var config = {
            method: 'get',
            url: 'https://apps.pertamina.com/bocpp-v2.0/api/scheduleHistories?ru=R401&area=LOC-II',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        console.log("Request Schedule History, Please Wait....")
        return axios(config)
            .then(function (response) {
                console.log("Sucessfully Get Schedule History".green)
                return response.data
            })
            .catch(function (error) {
                console.log("Failed to Get Schedule History".red);
                runit()
            });


    }
    let state = true;
    const gettoken = await getTokenLogin()
    function requireF(modulePath, err) { // force require
        try {
            state = true
            return require(modulePath);
        }
        catch (e) {
            console.log(err)
            state = false
            return false;
        }
    }
    switch (mode) {
        case 'skip':
            lastvalue = requireF('./lastvalue.json', "Last value not available please choose resync mode")
            schedule = requireF('./schedule.json', "Schedule not available please choose resync mode")
            break;
        case 'resync all':
            lastvalue = await getLastValue(gettoken)
            fs.writeFile('lastvalue.json', JSON.stringify(lastvalue)).then(function (response) {
                console.log("Sucessfully Save Last Value".green)
            })
                .catch(function (error) {
                    console.log("Failed Save Last Value".red);
                });
            schedule = await getSchedule(gettoken)
            fs.writeFile('schedule.json', JSON.stringify(schedule)).then(function (response) {
                console.log("Sucessfully Save Schedule".green)
            })
                .catch(function (error) {
                    console.log("Failed Save Schedule".red);
                });
            break;
        case 'resync last value':
            lastvalue = await getLastValue(gettoken)
            fs.writeFile('lastvalue.json', JSON.stringify(lastvalue)).then(function (response) {
                console.log("Sucessfully Save Last Value".green)
            })
                .catch(function (error) {
                    console.log("Failed Save Last Value".red);
                });
            schedule = requireF('./schedule.json', "Schedule not available please choose resync mode")
            break;
        case 'resync schedule':
            lastvalue = requireF('./lastvalue.json', "Last value not available please choose resync mode")
            schedule = await getSchedule(gettoken)
            fs.writeFile('schedule.json', JSON.stringify(schedule)).then(function (response) {
                console.log("Sucessfully Save Schedule".green)
            })
                .catch(function (error) {
                    console.log("Failed Save Schedule".red);
                });
            break;

    }
    if (state) {
        var nowschedule = lodash(schedule).filter({ "unit": unit, "shift": shift, "status": "Running" }).value()
        var newschedule = schedule.filter(item => {
            return item.unit == "026" || item.unit == "024" && item.shift == shift && item.status == "Running"
        })

        var tosend = nowschedule.map(item => {
            synctime = moment(synctime)
            function addSecond(date, second) {
                return (date + (second * 1000))
            }
            var lastvaluefilter = lodash(lastvalue).filter({ "idEquipment": item.idEquipment }).value()
            var lastvaluefilterconcat = Object.keys(lastvaluefilter).reduce(function (arr, key) {
                return arr.concat(lastvaluefilter[key]);
            }, []);

            var addtoday = addSecond(synctime, delay)//(240-600)
            var date = moment(addtoday).format("YYYY-MM-DD HH:mm:ss").toString()
            var jam = moment(addtoday).format("HH:mm:ss").toString()
            synctime = addtoday

            return lastvaluefilterconcat.map(param => {

                return {
                    "idScheduleHistory": item.id,
                    "parentRecord": item.parentRecord,
                    "value": param.value,
                    "idParameter": param.idParameter,
                    "scanWith": "rfid",
                    "timestamp": date,
                    "scanBy": scanner,
                    "approved": 0,
                    "shift": jam,
                    "notesRecord": ""
                }
            })

        })
        var tosendconcat = Object.keys(tosend).reduce(function (arr, key) {
            return arr.concat(tosend[key]);
        }, [])
        await fs.writeFile('tosend.json', JSON.stringify(tosendconcat)).then(function (response) {
            console.log("Sucessfully Save Record Data".green)
        })
            .catch(function (error) {
                console.log("Failed Save Record Data".red);
            })
    } else {
        tosendconcat = null
    }
    return [tosendconcat, gettoken, nowschedule]
}

var syncronize = async function (tosend, token) {
    var data = JSON.stringify(tosend);
    var config = {
        method: 'post',
        url: 'https://apps.pertamina.com/bocpp-v2.0/api/equipRecords/',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: data
    };
    console.log("Uploading Record Data...")
    return axios(config)
        .then(function (response) {
            console.log(response)
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });

}
var runit = async function () {
    await getInput()
    if(scanner != "muhammad.aulya" || scanner != "muhammad.rovalino" || scanner != "satrio.sarjono"){
       console.log("Session Expired Please Update !!)
       } else {
    var resultdata = await fire()
    if (resultdata[2] != null && resultdata[0] != null) {
        resultdata[2].forEach(element => {
            console.log(element.equipment)
        });
        console.log(`${Object.keys(resultdata[2]).length} Equip Record Ready to send`)
        console.log(`Jadwal syncron : ${shift.blue}`)
        console.log(`Waktu sync Equipment terakhir : ${resultdata[0][resultdata[0].length - 1].timestamp.blue}`)
        sync = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'sync',
                    message: 'Data ready to Send, are you sure to upload :',
                    choices: ['yes', 'no'],
                    filter(val) {
                        return val
                    }
                }
            ]).then((w) => {
                if (w.sync === "yes") {
                    console.log(syncronize(resultdata[0], resultdata[1]).data)
                } else {
                    console.log("Upload canceled".red)
                }
                return w.sync
            })

    } else {
        console.log("Data not available".red)
    }

    }

}
runit()

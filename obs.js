var _0x4766a9=_0x3075;function _0xe758(){var _0x206a34=['D2\x20Malam','trunc','password','length','log','diff','Schedule\x20not\x20available\x20in\x20the\x20Disk','map','025','C\x20Off\x20Malam','C\x20Off\x20Pagi','parentRecord','A1\x20Pagi','734472iEusjZ','12:00','random','A2\x20Malam','04:00','B3\x20Pagi','YYYY-MM-DD\x20HH:mm:ss','writeFile','Request\x20Schedule\x20History,\x20Please\x20Wait....','rfid','A1\x20Malam','HH:mm:ss','Failed\x20to\x20Get\x20Schedule\x20History','Sucessfully\x20Sending\x20Records','round','D3\x20Sore','Error\x20no\x20shift\x20match','token','timestamp','Send\x20Login\x20key....','A2\x20Pagi','D1\x20Sore','Sucessfully\x20Get\x20Last\x20Value\x20From\x20Server','A\x20Off\x20Sore','Bearer\x20','red','reduce','A\x20Off\x20Pagi','23659950HaQjyu','green','push','7YuQbLj','https://apps.pertamina.com/bocpp-v2.0/api/scheduleHistories?ru=R401&area=LOC-II','https://apps.pertamina.com/bocpp-v2.0/api/lastValueRecords?bocpp=boc&ru=R401&area=LOC-II','\x20jam\x20','A\x20Off\x20Malam','miftachul.huda','C\x20Off\x20Sore','Failed\x20to\x20Login\x20Something\x20Wrong','Failed\x20sending\x20Telegram\x20message','6267780zJXYSN','D\x20Off\x20Pagi','15753hKujWQ','B2\x20Pagi','stringify','asDays','post','08:00','\x20:[','16:00','then','B1\x20Malam','\x20Equip\x20Record\x20Unit\x20','concat','021','https://apps.pertamina.com/bocpp-v2.0/api/logins?secretKey=ee8fbc9dfa034db4a2419bfb4bfa9562','equipment','024','041','D\x20Off\x20Malam','TAPP','Request\x20Last\x20Value,\x20Please\x20Wait....','Telegram\x20message\x20Sent','\x20Equip\x20Record\x20','bgYellow','value','<b>','\x20user\x20','Uploading\x20Record\x20Data...','A3\x20Pagi','023','Sucessfully\x20Get\x20Schedule\x20History\x20From\x20Server','catch','https://apps.pertamina.com/bocpp-v2.0/api/equipRecord/','D1\x20Pagi','No\x20records\x20available\x20to\x20send','Upload\x20','B2\x20Sore','2580237poPVDq','C2\x20Sore','filter','C1\x20Sore','./schedule.json','duration','unit','D3\x20Malam','739776XCWtWZ','C2\x20Pagi','B1\x20Sore','Failed\x20to\x20get\x20Last\x20Value\x20Record','Failed\x20Get\x20Last\x20Value\x20From\x20Server.\x20Trying\x20to\x20Get\x20From\x20Disk','idEquipment','get','B1\x20Pagi','asMinutes','3171810QgnQCx','blue','add','B3\x20Sore','\x20Messages\x20:\x20','moment','lodash','satrio.sarjono','B\x20Off\x20Malam','fs/promises','022','muhammad.aulya','format','2021-12-22','floor','\x20date\x20','A1\x20Sore','002','data','pertamina','muhammad.rovalino','B3\x20Malam','C3\x20Sore','118vEiFQT','A2\x20Sore','D2\x20Pagi','20:00','C2\x20Malam','B\x20Off\x20Pagi','keys','A3\x20Sore','Data\x20not\x20available','Retrying\x20..\x20','5lnmRLC','\x20time\x20','toString','asyncFunti0n11','application/json','substring'];_0xe758=function(){return _0x206a34;};return _0xe758();}(function(_0x5348d8,_0x4c45f5){var _0x1ac208=_0x3075,_0x5b76c4=_0x5348d8();while(!![]){try{var _0x3d41f7=parseInt(_0x1ac208(0x176))/0x1*(parseInt(_0x1ac208(0x12f))/0x2)+parseInt(_0x1ac208(0x107))/0x3+parseInt(_0x1ac208(0x10f))/0x4*(-parseInt(_0x1ac208(0x139))/0x5)+parseInt(_0x1ac208(0x118))/0x6*(parseInt(_0x1ac208(0x16b))/0x7)+parseInt(_0x1ac208(0x14c))/0x8+parseInt(_0x1ac208(0x174))/0x9+-parseInt(_0x1ac208(0x168))/0xa;if(_0x3d41f7===_0x4c45f5)break;else _0x5b76c4['push'](_0x5b76c4['shift']());}catch(_0x5a1fd5){_0x5b76c4['push'](_0x5b76c4['shift']());}}}(_0xe758,0x879a7));const fs=require(_0x4766a9(0x121)),lodash=require(_0x4766a9(0x11e)),moment=require(_0x4766a9(0x11d)),axios=require('axios'),qs=require('qs');require('colors');var lastvalue,schedule,scannerarr=[_0x4766a9(0x12c),_0x4766a9(0x11f),'miftachul.huda'],unit=['021','022',_0x4766a9(0xff),_0x4766a9(0xf2),_0x4766a9(0x147),_0x4766a9(0xf3)],username='miftachul.huda',password=_0x4766a9(0x13c);const listshift=[[_0x4766a9(0x156),_0x4766a9(0x177),_0x4766a9(0x12e),_0x4766a9(0xf4)],[_0x4766a9(0x14f),_0x4766a9(0x151),_0x4766a9(0x161),_0x4766a9(0x171)],['A3\x20Malam','C1\x20Pagi','D2\x20Sore',_0x4766a9(0x134)],[_0x4766a9(0x17f),_0x4766a9(0x110),_0x4766a9(0x15b),_0x4766a9(0x16f)],['B2\x20Malam','C3\x20Pagi',_0x4766a9(0x128),'D\x20Off\x20Sore'],[_0x4766a9(0x12d),_0x4766a9(0x103),_0x4766a9(0x130),_0x4766a9(0x149)],['C1\x20Malam',_0x4766a9(0x131),_0x4766a9(0x136),_0x4766a9(0x120)],[_0x4766a9(0x133),'D3\x20Pagi',_0x4766a9(0x111),_0x4766a9(0x163)],['C3\x20Malam',_0x4766a9(0x14b),_0x4766a9(0x106),_0x4766a9(0x175)],['D1\x20Malam',_0x4766a9(0x160),_0x4766a9(0x11b),_0x4766a9(0x148)],[_0x4766a9(0x13f),_0x4766a9(0xfe),_0x4766a9(0x10a),'B\x20Off\x20Sore'],[_0x4766a9(0x10e),_0x4766a9(0x116),_0x4766a9(0x108),_0x4766a9(0x167)]];function getPeriod(_0x3bf18e){if(_0x3bf18e<0x1e0)return 0x0;return _0x3bf18e<0x3c0?0x1:0x2;}function checkShift(){var _0x30bb49=_0x4766a9,_0xe3fe25=moment(new Date()),_0x50bb55=moment(_0x30bb49(0x125)),_0x31740d=moment[_0x30bb49(0x10c)](_0xe3fe25[_0x30bb49(0x144)](_0x50bb55)),_0xef44a3=Math[_0x30bb49(0x140)](_0x31740d[_0x30bb49(0x179)]())%0xc,_0x585010=Math['trunc'](_0x31740d[_0x30bb49(0x117)]())%0x5a0;return listshift[_0xef44a3][getPeriod(_0x585010)];}function checkShiftPeriod(){var _0x3b6bf8=_0x4766a9,_0x59cdaa=moment()['hours']();if(_0x59cdaa<0x4)return'00:00';else{if(_0x59cdaa<0x8)return _0x3b6bf8(0x150);else{if(_0x59cdaa<0xc)return _0x3b6bf8(0x17b);else{if(_0x59cdaa<0x10)return _0x3b6bf8(0x14d);else{if(_0x59cdaa<0x14)return _0x3b6bf8(0x17d);else return _0x3b6bf8(0x132);}}}}}function _0x3075(_0x56d847,_0x3e11e9){var _0xe75892=_0xe758();return _0x3075=function(_0x307597,_0x483d3c){_0x307597=_0x307597-0xf1;var _0xefff5=_0xe75892[_0x307597];return _0xefff5;},_0x3075(_0x56d847,_0x3e11e9);}async function callAxiosWithRetry(_0x22ae67,_0x257ffb,_0x220945){var _0x210ef5=_0x4766a9;const _0x31e981=_0x3f0709=>new Promise(_0x16593e=>setTimeout(_0x16593e,_0x3f0709));try{return await axios(_0x22ae67);}catch(_0x53918b){if(_0x257ffb>0x14)throw _0x53918b;return console[_0x210ef5(0x143)](_0x220945[_0x210ef5(0x165)]),await _0x31e981(0x2**_0x257ffb*0x64),console[_0x210ef5(0x143)](_0x210ef5(0x138)['green']+_0x257ffb),callAxiosWithRetry(_0x22ae67,_0x257ffb+0x1,_0x220945);}}async function fire(_0x44abf7,_0x28e7ea){var _0x10fdd6=async function(){var _0x233f72=_0x3075,_0x893775=qs['stringify']({'username':_0x44abf7,'password':_0x28e7ea,'companyCode':'1010','domainName':_0x233f72(0x12b)}),_0x59ae7c={'method':_0x233f72(0x17a),'url':_0x233f72(0x183),'headers':{'Content-Type':'application/x-www-form-urlencoded'},'data':_0x893775};return console[_0x233f72(0x143)](_0x233f72(0x15f)),callAxiosWithRetry(_0x59ae7c,0x0,_0x233f72(0x172))[_0x233f72(0x17e)](function(_0xfba3fb){var _0x234554=_0x233f72;return console[_0x234554(0x143)]('Sucessfully\x20Login\x20to\x20server'[_0x234554(0x169)]),_0xfba3fb['data'][_0x234554(0x15d)];});},_0x52393d=async function(_0x537423){var _0x455348=_0x3075,_0x3e90a4={'method':_0x455348(0x115),'url':_0x455348(0x16d),'headers':{'Authorization':'Bearer\x20'+_0x537423}};return console['log'](_0x455348(0xf6)),callAxiosWithRetry(_0x3e90a4,0x0,_0x455348(0x112))[_0x455348(0x17e)](function(_0x10f74a){var _0x52fad0=_0x455348;return console[_0x52fad0(0x143)](_0x52fad0(0x162)[_0x52fad0(0x169)]),_0x10f74a['data'];});},_0x34f844=async function(_0x321273){var _0x17c103=_0x3075,_0x39377c={'method':_0x17c103(0x115),'url':_0x17c103(0x16c),'headers':{'Authorization':_0x17c103(0x164)+_0x321273}};return console['log'](_0x17c103(0x154)),callAxiosWithRetry(_0x39377c,0x0,_0x17c103(0x158))[_0x17c103(0x17e)](function(_0x156478){var _0x45f983=_0x17c103;return console[_0x45f983(0x143)](_0x45f983(0x100)[_0x45f983(0x169)]),_0x156478['data'];});};let _0x39ac5b=!![];const _0x226d9f=await _0x10fdd6();async function _0x29d84(_0x2b37b3,_0x1a124e,_0x227390){var _0x4f8dbb=_0x3075;try{return _0x39ac5b=!![],require(_0x2b37b3);}catch(_0x1b4dfa){return console[_0x4f8dbb(0x143)](_0x1a124e[_0x4f8dbb(0x165)]),await _0x227390(),_0x39ac5b=![],![];}}return await async function _0x52839d(){var _0x3b28f2=_0x3075;lastvalue=await _0x52393d(_0x226d9f)[_0x3b28f2(0x17e)](_0x1b370f=>_0x1b370f)[_0x3b28f2(0x101)](()=>{var _0x3523f4=_0x3b28f2;return console[_0x3523f4(0x143)](_0x3523f4(0x113)[_0x3523f4(0xf9)]),_0x29d84('./lastvalue.json','Last\x20value\x20not\x20available\x20in\x20the\x20Disk',_0x52839d);}),fs['writeFile']('lastvalue.json',JSON[_0x3b28f2(0x178)](lastvalue)),schedule=await _0x34f844(_0x226d9f)[_0x3b28f2(0x17e)](_0x501b1a=>_0x501b1a)[_0x3b28f2(0x101)](()=>{var _0x38faa5=_0x3b28f2;return console[_0x38faa5(0x143)]('Failed\x20Get\x20Schedule\x20From\x20Server.\x20Trying\x20to\x20Get\x20From\x20Disk'[_0x38faa5(0xf9)]),_0x29d84(_0x38faa5(0x10b),_0x38faa5(0x145));}),fs[_0x3b28f2(0x153)]('schedule.json',JSON[_0x3b28f2(0x178)](schedule));}(),[_0x39ac5b,_0x226d9f];}var filtering=function(_0x5e419b,_0x1f2183,_0x16615e,_0x4a5473,_0x4ffb58){var _0x22080e=_0x4766a9;if(_0x5e419b)var _0x4ab7bd=lodash(schedule)['filter']({'unit':_0x1f2183,'shift':_0x16615e,'status':'Running'})[_0x22080e(0xfa)](),_0x5d0551=_0x4ab7bd[_0x22080e(0x109)](function(_0x1284b8){var _0x2ff0b5=_0x22080e;if(_0x1284b8[_0x2ff0b5(0xf1)]['substring'](0x0,0x4)=='041T'||_0x1284b8[_0x2ff0b5(0xf1)][_0x2ff0b5(0x13e)](0x0,0x4)==_0x2ff0b5(0xf5))return![];else return!![];}),_0x456893=_0x5d0551[_0x22080e(0x146)](_0x1c3175=>{var _0x41026e=_0x22080e;function _0x51baf5(){function _0x31b6e9(_0xa5663b,_0x4a341f){var _0x40a2c9=_0x3075;return Math['floor'](Math[_0x40a2c9(0x14e)]()*(_0x4a341f-_0xa5663b+0x1)+_0xa5663b);}return random=_0x31b6e9(0x27,0x78),random;}_0x4ffb58=moment(_0x4ffb58);function _0x5a1b59(_0x4d4d41,_0xcf9ede){return _0x4d4d41+_0xcf9ede*0x3e8;}var _0x43f393=lodash(lastvalue)[_0x41026e(0x109)]({'idEquipment':_0x1c3175[_0x41026e(0x114)]})[_0x41026e(0xfa)](),_0x199172=Object['keys'](_0x43f393)[_0x41026e(0x166)](function(_0x4d8001,_0x140ce7){var _0x58f30e=_0x41026e;return _0x4d8001[_0x58f30e(0x181)](_0x43f393[_0x140ce7]);},[]),_0x2e2e9e=_0x5a1b59(_0x4ffb58,_0x51baf5()),_0x4152c6=moment(_0x2e2e9e)[_0x41026e(0x124)](_0x41026e(0x152))['toString'](),_0x220b1e=moment(_0x2e2e9e)[_0x41026e(0x124)](_0x41026e(0x157))[_0x41026e(0x13b)]();return _0x4ffb58=_0x2e2e9e,_0x199172[_0x41026e(0x146)](_0x1d1b7d=>{var _0x3e28f4=_0x41026e;return{'idScheduleHistory':_0x1c3175['id'],'parentRecord':_0x1c3175[_0x3e28f4(0x14a)],'value':_0x1d1b7d[_0x3e28f4(0xfa)],'idParameter':_0x1d1b7d['idParameter'],'scanWith':_0x3e28f4(0x155),'timestamp':_0x4152c6,'scanBy':_0x4a5473,'approved':0x0,'shift':_0x220b1e,'notesRecord':''};});}),_0x24eb18=Object['keys'](_0x456893)[_0x22080e(0x166)](function(_0x108396,_0x7ba811){var _0x3bf06e=_0x22080e;return _0x108396[_0x3bf06e(0x181)](_0x456893[_0x7ba811]);},[]);else _0x24eb18=null;return[_0x24eb18,_0x5d0551];},syncronize=async function(_0xec196a,_0xe4a146,_0xa48e2f,_0x5a5048){var _0xd3cc2d=_0x4766a9,_0x1cf5de=JSON[_0xd3cc2d(0x178)](_0xec196a),_0x4f0a54={'method':'post','url':_0xd3cc2d(0x102),'headers':{'Authorization':_0xd3cc2d(0x164)+_0xe4a146,'Content-Type':_0xd3cc2d(0x13d)},'data':_0x1cf5de};return console[_0xd3cc2d(0x143)](_0xd3cc2d(0xfd)),callAxiosWithRetry(_0x4f0a54,0x0,_0xd3cc2d(0x105)+_0xa48e2f+_0xd3cc2d(0x13a)+_0x5a5048+'\x20Failed')[_0xd3cc2d(0x17e)](function(_0x2fca52){var _0x10a881=_0xd3cc2d;return console['log'](_0x10a881(0x159)[_0x10a881(0x169)]),_0x2fca52[_0x10a881(0x12a)][0x0]['Message'];});};async function sendMessage(_0x31066d){var _0x51080f=_0x4766a9;let _0x5d8c32=encodeURIComponent(_0x31066d);var _0x33bd53={'method':_0x51080f(0x17a),'url':'https://api.telegram.org/bot5266529032:AAG6oq2TOmKOXrt5qaeVLk3ehvYF0bJZ6ko/sendMessage?chat_id=-575255072&parse_mode=HTML&text='+_0x5d8c32,'headers':{}};await axios(_0x33bd53)[_0x51080f(0x17e)](function(_0x5a44e3){var _0x51ccfd=_0x51080f;console['log'](_0x51ccfd(0xf7));})[_0x51080f(0x101)](function(_0x48c42d){var _0x38285b=_0x51080f;console[_0x38285b(0x143)](_0x38285b(0x173)),console[_0x38285b(0x143)](_0x48c42d);});}var uploadscene=async function(_0x28cc88,_0x2585c1,_0x56f563,_0x5a9509,_0x2a35ed,_0x350540){var _0x47544b=_0x4766a9,_0x335a54=filtering(_0x28cc88,_0x2585c1,_0x56f563,_0x5a9509,_0x2a35ed);_0x335a54[0x1]!=null&&_0x335a54[0x0]!=null?await syncronize(_0x335a54[0x0],_0x350540,_0x2585c1,_0x56f563)[_0x47544b(0x17e)](async _0x34c523=>{var _0x2300b3=_0x47544b;console['log'](_0x2300b3(0x105)+Object[_0x2300b3(0x135)](_0x335a54[0x1])[_0x2300b3(0x142)]+_0x2300b3(0x180)+_0x2585c1+_0x2300b3(0x16e)+_0x56f563+_0x2300b3(0x127)+_0x335a54[0x0][_0x335a54[0x0][_0x2300b3(0x142)]-0x1][_0x2300b3(0x15e)][_0x2300b3(0x119)]+_0x2300b3(0xfc)+_0x5a9509+_0x2300b3(0x11c)+_0x34c523[_0x2300b3(0x119)]),await sendMessage(_0x2300b3(0xfb)+_0x5a9509+'</b>\x20Unit\x20<b>'+_0x2585c1+'</b>\x20'+Object[_0x2300b3(0x135)](_0x335a54[0x1])['length']+_0x2300b3(0xf8)+_0x56f563+_0x2300b3(0x127)+_0x335a54[0x0][_0x335a54[0x0]['length']-0x1][_0x2300b3(0x15e)]+_0x2300b3(0x17c)+_0x34c523+']');})['catch'](()=>{var _0x4f1d4d=_0x47544b;console[_0x4f1d4d(0x143)]('failed\x20upload\x20record');}):(console[_0x47544b(0x143)](_0x47544b(0x137)['red']),await sendMessage(_0x47544b(0x104)));};async function asyncForEach(_0xc90d0e,_0x5a8a58){var _0x1540ed=_0x4766a9;for(let _0x151e48=0x0;_0x151e48<_0xc90d0e[_0x1540ed(0x142)];_0x151e48++){await _0x5a8a58(_0xc90d0e[_0x151e48],_0x151e48,_0xc90d0e);}}const proceed=async function(_0x33fd65){var _0x44f54a=_0x4766a9,_0x10bb90=moment()[_0x44f54a(0x124)]('YYYY-MM-DD')[_0x44f54a(0x13b)](),_0x24566e=checkShiftPeriod(),_0x293411=await fire(_0x33fd65['username'],_0x33fd65[_0x44f54a(0x141)]);function _0x42e6bc(){function _0x4c64f8(_0x4b8ac0,_0x4cec7d){var _0x309883=_0x3075;return Math[_0x309883(0x126)](Math[_0x309883(0x14e)]()*(_0x4cec7d-_0x4b8ac0+0x1)+_0x4b8ac0);}return random=_0x4c64f8(0x384,0x6a4),random;}function _0x2e297f(_0x476c0c){var _0x2f27c0=_0x44f54a;return moment(_0x10bb90+'\x20'+_0x476c0c)[_0x2f27c0(0x11a)](_0x42e6bc(),'seconds')['format']('YYYY-MM-DD\x20HH:mm:ss')[_0x2f27c0(0x13b)]();}var _0x1c1424=_0x2e297f(_0x24566e);await asyncForEach(_0x33fd65[_0x44f54a(0x10d)],async _0x2835fa=>{await asyncForEach(_0x2835fa[0x1],async _0x1e1656=>{var _0x20d35c=_0x3075;console[_0x20d35c(0x143)](_0x293411[0x0],_0x1e1656,_0x24566e,_0x2835fa[0x0],_0x1c1424,_0x293411[0x1]),await uploadscene(_0x293411[0x0],_0x1e1656,_0x24566e,_0x2835fa[0x0],_0x1c1424,_0x293411[0x1]);});});};var runit=async function(){var _0x880252=_0x4766a9,_0x545a55=checkShift();switch(_0x545a55[0x0]){case'A':break;case'B':break;case'C':proceed({'username':_0x880252(0x123),'password':'Pertamina752906752','unit':[[_0x880252(0x123),['021',_0x880252(0x122),_0x880252(0x147)]]]});break;case'D':var _0x38e94a={'username':_0x880252(0x170),'password':_0x880252(0x13c),'unit':[[_0x880252(0x12c),[_0x880252(0x182),_0x880252(0x122),_0x880252(0x147)]],['satrio.sarjono',[_0x880252(0xff),'041']],[_0x880252(0x170),[_0x880252(0xf2)]]]},_0x536582=Math[_0x880252(0x15a)](Math[_0x880252(0x14e)]());_0x536582==0x1&&_0x38e94a[_0x880252(0x10d)][0x0][0x1][_0x880252(0x16a)](_0x880252(0x129));proceed(_0x38e94a);break;default:console[_0x880252(0x143)](_0x880252(0x15c));break;}};runit();

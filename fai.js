var _0x356e97=_0x14fa;function _0x14fa(_0x3d33cf,_0x7d04ba){var _0x320a0b=_0x320a();return _0x14fa=function(_0x14faf8,_0x417695){_0x14faf8=_0x14faf8-0xc7;var _0x483afe=_0x320a0b[_0x14faf8];return _0x483afe;},_0x14fa(_0x3d33cf,_0x7d04ba);}(function(_0x1de33c,_0x9abb4f){var _0x105174=_0x14fa,_0x52f189=_0x1de33c();while(!![]){try{var _0x5bba95=parseInt(_0x105174(0x145))/0x1*(-parseInt(_0x105174(0xcb))/0x2)+-parseInt(_0x105174(0x155))/0x3*(-parseInt(_0x105174(0x10b))/0x4)+parseInt(_0x105174(0x127))/0x5*(parseInt(_0x105174(0xde))/0x6)+-parseInt(_0x105174(0xe8))/0x7*(parseInt(_0x105174(0xc8))/0x8)+parseInt(_0x105174(0x153))/0x9*(-parseInt(_0x105174(0x13a))/0xa)+parseInt(_0x105174(0x124))/0xb*(parseInt(_0x105174(0x151))/0xc)+parseInt(_0x105174(0xdd))/0xd*(parseInt(_0x105174(0xd8))/0xe);if(_0x5bba95===_0x9abb4f)break;else _0x52f189['push'](_0x52f189['shift']());}catch(_0x25b65f){_0x52f189['push'](_0x52f189['shift']());}}}(_0x320a,0x29895));const fs=require(_0x356e97(0x148)),lodash=require('lodash'),moment=require(_0x356e97(0x138)),axios=require(_0x356e97(0x113)),qs=require('qs');require('colors');var lastvalue,schedule,scannerarr=['muhammad.rovalino',_0x356e97(0x125),'miftachul.huda'],unit=[_0x356e97(0xca),_0x356e97(0xef),'023',_0x356e97(0xfd),_0x356e97(0x134),_0x356e97(0xeb)],username=_0x356e97(0xfc),password=_0x356e97(0xd9);const listshift=[[_0x356e97(0xcd),_0x356e97(0xd1),_0x356e97(0xe0),_0x356e97(0x152)],['A2\x20Malam',_0x356e97(0x112),_0x356e97(0xc7),_0x356e97(0xce)],['A3\x20Malam',_0x356e97(0x116),_0x356e97(0x129),_0x356e97(0xf0)],[_0x356e97(0x126),_0x356e97(0x154),_0x356e97(0x157),_0x356e97(0x12b)],['B2\x20Malam',_0x356e97(0x11c),_0x356e97(0xf3),_0x356e97(0x117)],[_0x356e97(0x10f),_0x356e97(0xd0),_0x356e97(0x119),'C\x20Off\x20Pagi'],[_0x356e97(0x143),'D2\x20Pagi',_0x356e97(0xea),'B\x20Off\x20Malam'],[_0x356e97(0x115),'D3\x20Pagi',_0x356e97(0xe4),_0x356e97(0xdc)],[_0x356e97(0x11d),_0x356e97(0x133),'B2\x20Sore',_0x356e97(0xfb)],[_0x356e97(0x105),_0x356e97(0xd5),'B3\x20Sore','C\x20Off\x20Malam'],['D2\x20Malam',_0x356e97(0xda),_0x356e97(0xf7),_0x356e97(0x141)],['D3\x20Malam',_0x356e97(0xff),'C2\x20Sore',_0x356e97(0xe3)]];function getPeriod(_0x38f4c3){if(_0x38f4c3<0x1e0)return 0x0;return _0x38f4c3<0x3c0?0x1:0x2;}function checkShift(){var _0x609712=_0x356e97,_0x22f517=moment(new Date()),_0x14bb42=moment(_0x609712(0x14e)),_0x565bfe=moment[_0x609712(0xf2)](_0x22f517[_0x609712(0x12d)](_0x14bb42)),_0x113e87=Math[_0x609712(0x122)](_0x565bfe[_0x609712(0x109)]())%0xc,_0x5525f6=Math[_0x609712(0x122)](_0x565bfe[_0x609712(0x11f)]())%0x5a0;return listshift[_0x113e87][getPeriod(_0x5525f6)];}function _0x320a(){var _0x595f85=['A\x20Off\x20Sore','7390799clZyqe','126948DLVbjB','map','C3\x20Sore','12:00','get','A\x20Off\x20Pagi','B1\x20Sore','log','Sucessfully\x20Login\x20to\x20server','unit','21WTLlrp','floor','A3\x20Sore','041','Last\x20value\x20not\x20available\x20in\x20the\x20Disk','username','\x20Failed','022','B\x20Off\x20Pagi','</b>\x20','duration','A1\x20Sore','Failed\x20to\x20Login\x20Something\x20Wrong','08:00','reduce','C1\x20Sore','./lastvalue.json','writeFile','YYYY-MM-DD','D\x20Off\x20Pagi','miftachul.huda','024','\x20Messages\x20:\x20','B1\x20Pagi','substring','Schedule\x20not\x20available\x20in\x20the\x20Disk','Data\x20not\x20available','blue','keys','D1\x20Malam','catch','green','1010','asDays','muhammad.aulya','8LoqhyI','Send\x20Login\x20key....','Error\x20no\x20shift\x20match','\x20:[','B3\x20Malam','data','red','B3\x20Pagi','axios','Failed\x20Get\x20Schedule\x20From\x20Server.\x20Trying\x20to\x20Get\x20From\x20Disk','C2\x20Malam','C1\x20Pagi','D\x20Off\x20Sore','YYYY-MM-DD\x20HH:mm:ss','A2\x20Sore','\x20Equip\x20Record\x20Unit\x20','application/json','C3\x20Pagi','C3\x20Malam','\x20user\x20','asMinutes','Upload\x20','add','trunc','stringify','22gfNTLD','satrio.sarjono','B1\x20Malam','50gMpOPg','Bearer\x20','D2\x20Sore','Uploading\x20Record\x20Data...','A\x20Off\x20Malam','00:00','diff','random','rfid','Running','Request\x20Last\x20Value,\x20Please\x20Wait....','Telegram\x20message\x20Sent','A1\x20Pagi','025','041T','toString','https://api.telegram.org/bot5266529032:AAG6oq2TOmKOXrt5qaeVLk3ehvYF0bJZ6ko/sendMessage?chat_id=-575255072&parse_mode=HTML&text=','moment','password','490vluxNn','concat','seconds','timestamp','Failed\x20Get\x20Last\x20Value\x20From\x20Server.\x20Trying\x20to\x20Get\x20From\x20Disk','equipment','Sucessfully\x20Get\x20Last\x20Value\x20From\x20Server','B\x20Off\x20Sore','Failed\x20to\x20Get\x20Schedule\x20History','C1\x20Malam','then','7cnRTAA','failed\x20upload\x20record','idEquipment','fs/promises','Failed\x20to\x20get\x20Last\x20Value\x20Record','lastvalue.json','format','No\x20records\x20available\x20to\x20send','https://apps.pertamina.com/bocpp-v2.0/api/logins?secretKey=ee8fbc9dfa034db4a2419bfb4bfa9562','2021-12-22','\x20date\x20','\x20Equip\x20Record\x20','331860tZMZzA','D\x20Off\x20Malam','54432KXfhGH','C2\x20Pagi','54870QxwhJq','parentRecord','D3\x20Sore','post','D1\x20Sore','408104rDyLDs','filter','021','72134BDQKtp','bgYellow','A1\x20Malam','C\x20Off\x20Sore','Request\x20Schedule\x20History,\x20Please\x20Wait....','D1\x20Pagi','B2\x20Pagi','https://apps.pertamina.com/bocpp-v2.0/api/equipRecords/','\x20time\x20','value','A2\x20Pagi','20:00','HH:mm:ss','14AbXnDF','asyncFunti0n11','A3\x20Pagi','length'];_0x320a=function(){return _0x595f85;};return _0x320a();}function checkShiftPeriod(){var _0x59592f=_0x356e97,_0x2abcce=moment()['hours']();if(_0x2abcce<0x4)return _0x59592f(0x12c);else{if(_0x2abcce<0x8)return'04:00';else{if(_0x2abcce<0xc)return _0x59592f(0xf5);else{if(_0x2abcce<0x10)return _0x59592f(0xe1);else{if(_0x2abcce<0x14)return'16:00';else return _0x59592f(0xd6);}}}}}async function callAxiosWithRetry(_0x57a333,_0x26fe3c,_0x1ab099){var _0x46af49=_0x356e97;const _0x44489a=_0xf4185b=>new Promise(_0x4a51c0=>setTimeout(_0x4a51c0,_0xf4185b));try{return await axios(_0x57a333);}catch(_0x3df3ed){if(_0x26fe3c>0x14)throw _0x3df3ed;return console[_0x46af49(0xe5)](_0x1ab099[_0x46af49(0x111)]),await _0x44489a(0x2**_0x26fe3c*0x64),console['log']('Retrying\x20..\x20'['green']+_0x26fe3c),callAxiosWithRetry(_0x57a333,_0x26fe3c+0x1,_0x1ab099);}}async function fire(_0x55f26d,_0x29e89c){var _0x1008c2=async function(){var _0x41b2e5=_0x14fa,_0x48dba6=qs[_0x41b2e5(0x123)]({'username':_0x55f26d,'password':_0x29e89c,'companyCode':_0x41b2e5(0x108),'domainName':'pertamina'}),_0x28386f={'method':_0x41b2e5(0x158),'url':_0x41b2e5(0x14d),'headers':{'Content-Type':'application/x-www-form-urlencoded'},'data':_0x48dba6};return console[_0x41b2e5(0xe5)](_0x41b2e5(0x10c)),callAxiosWithRetry(_0x28386f,0x0,_0x41b2e5(0xf4))[_0x41b2e5(0x144)](function(_0x448b95){var _0x2a302c=_0x41b2e5;return console['log'](_0x2a302c(0xe6)[_0x2a302c(0x107)]),_0x448b95[_0x2a302c(0x110)]['token'];});},_0x447c52=async function(_0x1752db){var _0x17a767=_0x14fa,_0x38c83f={'method':_0x17a767(0xe2),'url':'https://apps.pertamina.com/bocpp-v2.0/api/lastValueRecords?bocpp=boc&ru=R401&area=LOC-II','headers':{'Authorization':_0x17a767(0x128)+_0x1752db}};return console['log'](_0x17a767(0x131)),callAxiosWithRetry(_0x38c83f,0x0,_0x17a767(0x149))[_0x17a767(0x144)](function(_0xe47ceb){var _0x3598af=_0x17a767;return console[_0x3598af(0xe5)](_0x3598af(0x140)[_0x3598af(0x107)]),_0xe47ceb[_0x3598af(0x110)];});},_0x370b51=async function(_0x367a4b){var _0x51f748=_0x14fa,_0x446d35={'method':_0x51f748(0xe2),'url':'https://apps.pertamina.com/bocpp-v2.0/api/scheduleHistories?ru=R401&area=LOC-II','headers':{'Authorization':'Bearer\x20'+_0x367a4b}};return console['log'](_0x51f748(0xcf)),callAxiosWithRetry(_0x446d35,0x0,_0x51f748(0x142))[_0x51f748(0x144)](function(_0x28c81e){var _0x11b541=_0x51f748;return console['log']('Sucessfully\x20Get\x20Schedule\x20History\x20From\x20Server'['green']),_0x28c81e[_0x11b541(0x110)];});};let _0x28ba3d=!![];const _0x2f3966=await _0x1008c2();async function _0x2285f8(_0x1ff934,_0x4d4a99,_0x313c3b){var _0x34cd0d=_0x14fa;try{return _0x28ba3d=!![],require(_0x1ff934);}catch(_0x5b0e60){return console[_0x34cd0d(0xe5)](_0x4d4a99[_0x34cd0d(0x111)]),await _0x313c3b(),_0x28ba3d=![],![];}}return await async function _0x4bc775(){var _0x388690=_0x14fa;lastvalue=await _0x447c52(_0x2f3966)[_0x388690(0x144)](_0x20a729=>_0x20a729)['catch'](()=>{var _0x2619f7=_0x388690;return console[_0x2619f7(0xe5)](_0x2619f7(0x13e)['bgYellow']),_0x2285f8(_0x2619f7(0xf8),_0x2619f7(0xec),_0x4bc775);}),fs[_0x388690(0xf9)](_0x388690(0x14a),JSON[_0x388690(0x123)](lastvalue)),schedule=await _0x370b51(_0x2f3966)['then'](_0x36e1bc=>_0x36e1bc)[_0x388690(0x106)](()=>{var _0x11faf0=_0x388690;return console[_0x11faf0(0xe5)](_0x11faf0(0x114)[_0x11faf0(0xcc)]),_0x2285f8('./schedule.json',_0x11faf0(0x101));}),fs['writeFile']('schedule.json',JSON['stringify'](schedule));}(),[_0x28ba3d,_0x2f3966];}var filtering=function(_0x56222b,_0x5c2e11,_0x1fb893,_0x3a319a,_0x27f20c){var _0x179f46=_0x356e97;if(_0x56222b)var _0x456c9e=lodash(schedule)['filter']({'unit':_0x5c2e11,'shift':_0x1fb893,'status':_0x179f46(0x130)})[_0x179f46(0xd4)](),_0x21e340=_0x456c9e['filter'](function(_0x255636){var _0x71f17b=_0x179f46;if(_0x255636[_0x71f17b(0x13f)][_0x71f17b(0x100)](0x0,0x4)==_0x71f17b(0x135)||_0x255636[_0x71f17b(0x13f)][_0x71f17b(0x100)](0x0,0x4)=='TAPP')return![];else return!![];}),_0x2f5ab2=_0x21e340[_0x179f46(0xdf)](_0x58f60e=>{var _0x5ba1ff=_0x179f46;function _0x4d2970(){function _0x41daad(_0x22a948,_0x29dee2){var _0x4dab5a=_0x14fa;return Math['floor'](Math[_0x4dab5a(0x12e)]()*(_0x29dee2-_0x22a948+0x1)+_0x22a948);}return random=_0x41daad(0x27,0x78),random;}_0x27f20c=moment(_0x27f20c);function _0x38b56f(_0x37079c,_0x165e6b){return _0x37079c+_0x165e6b*0x3e8;}var _0x4823cf=lodash(lastvalue)[_0x5ba1ff(0xc9)]({'idEquipment':_0x58f60e[_0x5ba1ff(0x147)]})['value'](),_0x1d1741=Object['keys'](_0x4823cf)[_0x5ba1ff(0xf6)](function(_0x3f1f26,_0x486a0e){var _0x83f1b=_0x5ba1ff;return _0x3f1f26[_0x83f1b(0x13b)](_0x4823cf[_0x486a0e]);},[]),_0x21862e=_0x38b56f(_0x27f20c,_0x4d2970()),_0xf317d4=moment(_0x21862e)[_0x5ba1ff(0x14b)](_0x5ba1ff(0x118))['toString'](),_0x450a0a=moment(_0x21862e)['format'](_0x5ba1ff(0xd7))[_0x5ba1ff(0x136)]();return _0x27f20c=_0x21862e,_0x1d1741[_0x5ba1ff(0xdf)](_0x3f536a=>{var _0x1f334f=_0x5ba1ff;return{'idScheduleHistory':_0x58f60e['id'],'parentRecord':_0x58f60e[_0x1f334f(0x156)],'value':_0x3f536a[_0x1f334f(0xd4)],'idParameter':_0x3f536a['idParameter'],'scanWith':_0x1f334f(0x12f),'timestamp':_0xf317d4,'scanBy':_0x3a319a,'approved':0x0,'shift':_0x450a0a,'notesRecord':''};});}),_0x17696a=Object[_0x179f46(0x104)](_0x2f5ab2)[_0x179f46(0xf6)](function(_0x373181,_0x31d845){var _0xc05308=_0x179f46;return _0x373181[_0xc05308(0x13b)](_0x2f5ab2[_0x31d845]);},[]);else _0x17696a=null;return[_0x17696a,_0x21e340];},syncronize=async function(_0x2834d7,_0x30e916,_0x183f69,_0xacee1f){var _0xee208e=_0x356e97,_0x23694e=JSON['stringify'](_0x2834d7),_0x38574f={'method':_0xee208e(0x158),'url':_0xee208e(0xd2),'headers':{'Authorization':'Bearer\x20'+_0x30e916,'Content-Type':_0xee208e(0x11b)},'data':_0x23694e};return console[_0xee208e(0xe5)](_0xee208e(0x12a)),callAxiosWithRetry(_0x38574f,0x0,_0xee208e(0x120)+_0x183f69+_0xee208e(0xd3)+_0xacee1f+_0xee208e(0xee))[_0xee208e(0x144)](function(_0x5ebd73){var _0x452043=_0xee208e;return console[_0x452043(0xe5)]('Sucessfully\x20Sending\x20Records'[_0x452043(0x107)]),_0x5ebd73['data'][0x0]['Message'];});};async function sendMessage(_0x41466e){var _0x314559=_0x356e97;let _0x5f3732=encodeURIComponent(_0x41466e);var _0xc80474={'method':_0x314559(0x158),'url':_0x314559(0x137)+_0x5f3732,'headers':{}};await axios(_0xc80474)[_0x314559(0x144)](function(_0x145cee){var _0x41db1c=_0x314559;console[_0x41db1c(0xe5)](_0x41db1c(0x132));})[_0x314559(0x106)](function(_0x36b2a1){var _0x2936e0=_0x314559;console[_0x2936e0(0xe5)]('Failed\x20sending\x20Telegram\x20message'),console['log'](_0x36b2a1);});}var uploadscene=async function(_0x4d27f9,_0x27c588,_0x2f53bb,_0x56254a,_0x38b0a5,_0x5c0353){var _0x20558d=_0x356e97,_0x13e6f8=filtering(_0x4d27f9,_0x27c588,_0x2f53bb,_0x56254a,_0x38b0a5);_0x13e6f8[0x1]!=null&&_0x13e6f8[0x0]!=null?await syncronize(_0x13e6f8[0x0],_0x5c0353,_0x27c588,_0x2f53bb)[_0x20558d(0x144)](async _0x188033=>{var _0x5b93e8=_0x20558d;console[_0x5b93e8(0xe5)](_0x5b93e8(0x120)+Object['keys'](_0x13e6f8[0x1])[_0x5b93e8(0xdb)]+_0x5b93e8(0x11a)+_0x27c588+'\x20jam\x20'+_0x2f53bb+_0x5b93e8(0x14f)+_0x13e6f8[0x0][_0x13e6f8[0x0][_0x5b93e8(0xdb)]-0x1][_0x5b93e8(0x13d)][_0x5b93e8(0x103)]+_0x5b93e8(0x11e)+_0x56254a+_0x5b93e8(0xfe)+_0x188033[_0x5b93e8(0x103)]),await sendMessage('<b>'+_0x56254a+'</b>\x20Unit\x20<b>'+_0x27c588+_0x5b93e8(0xf1)+Object[_0x5b93e8(0x104)](_0x13e6f8[0x1])['length']+_0x5b93e8(0x150)+_0x2f53bb+'\x20date\x20'+_0x13e6f8[0x0][_0x13e6f8[0x0][_0x5b93e8(0xdb)]-0x1][_0x5b93e8(0x13d)]+_0x5b93e8(0x10e)+_0x188033+']');})['catch'](()=>{var _0x2aa6e7=_0x20558d;console[_0x2aa6e7(0xe5)](_0x2aa6e7(0x146));}):(console[_0x20558d(0xe5)](_0x20558d(0x102)[_0x20558d(0x111)]),await sendMessage(_0x20558d(0x14c)));};async function asyncForEach(_0x1031cf,_0x433a69){var _0x599ea6=_0x356e97;for(let _0x5cb7a5=0x0;_0x5cb7a5<_0x1031cf[_0x599ea6(0xdb)];_0x5cb7a5++){await _0x433a69(_0x1031cf[_0x5cb7a5],_0x5cb7a5,_0x1031cf);}}const proceed=async function(_0x1c882a){var _0x3da8d8=_0x356e97,_0x5ce8e7=moment()[_0x3da8d8(0x14b)](_0x3da8d8(0xfa))[_0x3da8d8(0x136)](),_0x2c35a4=checkShiftPeriod(),_0x565d60=await fire(_0x1c882a[_0x3da8d8(0xed)],_0x1c882a[_0x3da8d8(0x139)]);function _0x5460c0(){function _0x1fdfa5(_0x3005f2,_0x72614d){var _0x264ebd=_0x14fa;return Math[_0x264ebd(0xe9)](Math[_0x264ebd(0x12e)]()*(_0x72614d-_0x3005f2+0x1)+_0x3005f2);}return random=_0x1fdfa5(0x384,0x6a4),random;}function _0xea1989(_0x5c14e0){var _0x2bb585=_0x3da8d8;return moment(_0x5ce8e7+'\x20'+_0x5c14e0)[_0x2bb585(0x121)](_0x5460c0(),_0x2bb585(0x13c))[_0x2bb585(0x14b)]('YYYY-MM-DD\x20HH:mm:ss')[_0x2bb585(0x136)]();}var _0xb4fedf=_0xea1989(_0x2c35a4);await asyncForEach(_0x1c882a[_0x3da8d8(0xe7)],async _0x4e18e5=>{await asyncForEach(_0x4e18e5[0x1],async _0x265ecf=>{var _0x339788=_0x14fa;console[_0x339788(0xe5)](_0x565d60[0x0],_0x265ecf,_0x2c35a4,_0x4e18e5[0x0],_0xb4fedf,_0x565d60[0x1]),await uploadscene(_0x565d60[0x0],_0x265ecf,_0x2c35a4,_0x4e18e5[0x0],_0xb4fedf,_0x565d60[0x1]);});});};var runit=async function(){var _0x5d599b=_0x356e97,_0xea7fe3=checkShift();switch(_0xea7fe3[0x0]){case'A':break;case'B':break;case'C':proceed({'username':_0x5d599b(0x10a),'password':'Pertamina752906752','unit':[[_0x5d599b(0x10a),[_0x5d599b(0xca),_0x5d599b(0xef),'025']]]});break;case'D':break;default:console[_0x5d599b(0xe5)](_0x5d599b(0x10d));break;}};runit();

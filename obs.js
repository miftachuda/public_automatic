function _0x25bf(_0x543600,_0x491f65){var _0x148543=_0x1485();return _0x25bf=function(_0x25bffb,_0x2a5ecc){_0x25bffb=_0x25bffb-0xc8;var _0xafcc8c=_0x148543[_0x25bffb];return _0xafcc8c;},_0x25bf(_0x543600,_0x491f65);}function _0x1485(){var _0x24fbb5=['filter','delay','973798OGwqNB','stringify','shift','Request\x20Last\x20Value,\x20Please\x20Wait....','Masukan\x20nama\x20scanner\x20:','muhammad.aulya','schedule.json','https://apps.pertamina.com/bocpp-v2.0/api/lastValueRecords?bocpp=boc&ru=R401&area=LOC-II','concat','./lastvalue.json','equipment','forEach','writeFile','then','20:00','Sucessfully\x20Save\x20Schedule','002','timestamp','prompt','041','unit','scanner','\x20Equip\x20Record\x20Ready\x20to\x20send','fs/promises','Pilih\x20waktu\x20syncron\x20:','length','inquirer-date-prompt','Running','yes','Failed\x20Save\x20Schedule','rfid','registerPrompt','Data\x20not\x20available','application/x-www-form-urlencoded','Sucessfully\x20Save\x20Last\x20Value','2296575bSAjbA','get','527589rZJofN','toString','short','Sucessfully\x20Save\x20Record\x20Data','Schedule\x20not\x20available\x20please\x20choose\x20resync\x20mode','Bearer\x20','red','https://apps.pertamina.com/bocpp-v2.0/api/equipRecord/','1010','mode','map','https://apps.pertamina.com/bocpp-v2.0/api/equipRecords/','025','Pilih\x20jadwal\x20waktu\x20:','Uploading\x20Record\x20Data...','resync\x20schedule','green','value','moment','idEquipment','Pilih\x20mode\x20data\x20:','1312401QxwkkU','format','resync\x20all','Data\x20ready\x20to\x20Send,\x20are\x20you\x20sure\x20to\x20upload\x20:','resync\x20last\x20value','Send\x20Login\x20key....','Pilih\x20unit\x20:','1696152EDnxSs','023','catch','colors','reduce','asyncFunti0n','Failed\x20Save\x20Last\x20Value','https://apps.pertamina.com/bocpp-v2.0/api/logins?secretKey=ee8fbc9dfa034db4a2419bfb4bfa9562','status','inquirer','022','miftachul.huda','021','application/json','number','16:00','16829vbVTSX','token','skip','lastvalue.json','2-digit','Failed\x20to\x20Get\x20Schedule\x20History','date','Sucessfully\x20Get\x20Last\x20Value','post','blue','026','Last\x20value\x20not\x20available\x20please\x20choose\x20resync\x20mode','Request\x20Schedule\x20History,\x20Please\x20Wait....','sync','data','lodash','2iaAgNG','HH:mm:ss','243464gCtrpB','Sucessfully\x20Get\x20Schedule\x20History','Waktu\x20sync\x20Equipment\x20terakhir\x20:\x20','./schedule.json','list','tosend.json','keys','satrio.sarjono','YYYY-MM-DD\x20HH:mm:ss','axios','024','input','log','synctime','Jadwal\x20syncron\x20:\x20','Upload\x20canceled','18piABly'];_0x1485=function(){return _0x24fbb5;};return _0x1485();}var _0x5630b6=_0x25bf;(function(_0xe28d78,_0x517d8c){var _0x2c218c=_0x25bf,_0x132274=_0xe28d78();while(!![]){try{var _0x2360da=-parseInt(_0x2c218c(0x123))/0x1*(-parseInt(_0x2c218c(0x133))/0x2)+parseInt(_0x2c218c(0x10c))/0x3+-parseInt(_0x2c218c(0x135))/0x4+parseInt(_0x2c218c(0xf5))/0x5+-parseInt(_0x2c218c(0xcf))/0x6*(parseInt(_0x2c218c(0xd2))/0x7)+-parseInt(_0x2c218c(0x113))/0x8+parseInt(_0x2c218c(0xf7))/0x9;if(_0x2360da===_0x517d8c)break;else _0x132274['push'](_0x132274['shift']());}catch(_0x4ef7d5){_0x132274['push'](_0x132274['shift']());}}}(_0x1485,0x44d95));const fs=require(_0x5630b6(0xe9)),lodash=require(_0x5630b6(0x132)),moment=require(_0x5630b6(0x109));var axios=require(_0x5630b6(0xc8)),chalk=require('chalk'),qs=require('qs');require(_0x5630b6(0x116));const inquirer=require(_0x5630b6(0x11c));inquirer[_0x5630b6(0xf1)](_0x5630b6(0x129),require(_0x5630b6(0xec)));var synctime,unit,shift,delay,scanner,mode,lastvalue,schedule;async function getInput(){var _0x112690=_0x5630b6;username=_0x112690(0x11e),password=_0x112690(0x118),scanner=await inquirer['prompt']([{'type':_0x112690(0xca),'name':'scanner','message':_0x112690(0xd6),'filter'(_0x5ab786){return _0x5ab786;}}])['then'](_0x328033=>{var _0x3582d9=_0x112690;return _0x328033[_0x3582d9(0xe7)];}),unit=await inquirer[_0x112690(0xe4)]([{'type':_0x112690(0x139),'name':_0x112690(0xe6),'message':_0x112690(0x112),'choices':[_0x112690(0xe2),_0x112690(0x11f),_0x112690(0x11d),_0x112690(0x114),'024',_0x112690(0x103),_0x112690(0xe5)],'filter'(_0x2c1c1e){return _0x2c1c1e;}}])['then'](_0x297f15=>{var _0x124fb1=_0x112690;return _0x297f15[_0x124fb1(0xe6)];}),shift=await inquirer[_0x112690(0xe4)]([{'type':_0x112690(0x139),'name':_0x112690(0xd4),'message':_0x112690(0x104),'choices':['00:00','04:00','08:00','12:00',_0x112690(0x122),_0x112690(0xe0)],'filter'(_0x323e64){return _0x323e64;}}])['then'](_0x357c87=>{var _0xcf4cbd=_0x112690;return _0x357c87[_0xcf4cbd(0xd4)];}),synctime=await inquirer[_0x112690(0xe4)]([{'type':'date','name':'synctime','message':_0x112690(0xea),'format':{'month':_0x112690(0xf9),'hour':_0x112690(0x127),'minute':_0x112690(0x127),'hour12':![]},'transformer':_0x476f54=>chalk['bold'][_0x112690(0xfd)](_0x476f54),'filter'(_0x119ea3){return _0x119ea3;}}])[_0x112690(0xdf)](_0x18b291=>{var _0x28fa1b=_0x112690;return _0x18b291[_0x28fa1b(0xcc)];}),delay=await inquirer['prompt']([{'type':_0x112690(0x121),'name':_0x112690(0xd1),'message':'Waktu\x20delay\x20antar\x20equipment\x20:','filter'(_0x4215b2){return _0x4215b2;}}])[_0x112690(0xdf)](_0x708c64=>{var _0x1e69b5=_0x112690;return _0x708c64[_0x1e69b5(0xd1)];}),mode=await inquirer[_0x112690(0xe4)]([{'type':_0x112690(0x139),'name':_0x112690(0x100),'message':_0x112690(0x10b),'choices':[_0x112690(0x125),_0x112690(0x10e),_0x112690(0x110),_0x112690(0x106)],'filter'(_0x5db436){return _0x5db436;}}])['then'](_0x5e60e8=>{return _0x5e60e8['mode'];});}async function fire(){var _0x2cba38=_0x5630b6,_0x459b09=async function(){var _0x3b0223=_0x25bf,_0x4e15b6=qs['stringify']({'username':username,'password':password,'companyCode':_0x3b0223(0xff),'domainName':'pertamina'}),_0x4dc8e4={'method':_0x3b0223(0x12b),'url':_0x3b0223(0x11a),'headers':{'Content-Type':_0x3b0223(0xf3)},'data':_0x4e15b6};return console[_0x3b0223(0xcb)](_0x3b0223(0x111)),axios(_0x4dc8e4)[_0x3b0223(0xdf)](function(_0x1f9268){var _0x4de6f1=_0x3b0223;return console[_0x4de6f1(0xcb)]('Sucessfully\x20Login\x20to\x20server'[_0x4de6f1(0x107)]),_0x1f9268[_0x4de6f1(0x131)][_0x4de6f1(0x124)];})[_0x3b0223(0x115)](function(_0x589c0b){console['log']('Failed\x20to\x20Login\x20Something\x20Wrong'['red']);});},_0x37573f=async function(_0x350765){var _0x151549=_0x25bf,_0x35ddce={'method':_0x151549(0xf6),'url':_0x151549(0xd9),'headers':{'Authorization':_0x151549(0xfc)+_0x350765}};return console[_0x151549(0xcb)](_0x151549(0xd5)),axios(_0x35ddce)[_0x151549(0xdf)](function(_0x1ca4f0){var _0x3861ab=_0x151549;return console['log'](_0x3861ab(0x12a)[_0x3861ab(0x107)]),_0x1ca4f0[_0x3861ab(0x131)];})['catch'](function(_0x4ab8a2){var _0xba28eb=_0x151549;console[_0xba28eb(0xcb)]('Failed\x20to\x20get\x20Last\x20Value\x20Record'[_0xba28eb(0xfd)]),runit();});},_0x1609ae=async function(_0x27f924){var _0x6d2fec=_0x25bf,_0x39cec3={'method':_0x6d2fec(0xf6),'url':'https://apps.pertamina.com/bocpp-v2.0/api/scheduleHistories?ru=R401&area=LOC-II','headers':{'Authorization':_0x6d2fec(0xfc)+_0x27f924}};return console[_0x6d2fec(0xcb)](_0x6d2fec(0x12f)),axios(_0x39cec3)[_0x6d2fec(0xdf)](function(_0x8683b0){var _0x2e8d09=_0x6d2fec;return console[_0x2e8d09(0xcb)](_0x2e8d09(0x136)[_0x2e8d09(0x107)]),_0x8683b0[_0x2e8d09(0x131)];})[_0x6d2fec(0x115)](function(_0x3686ee){var _0x46066e=_0x6d2fec;console[_0x46066e(0xcb)](_0x46066e(0x128)[_0x46066e(0xfd)]),runit();});};let _0x563101=!![];const _0x342414=await _0x459b09();function _0x2dad6b(_0xe0057,_0x4cc6c7){try{return _0x563101=!![],require(_0xe0057);}catch(_0x30f6a5){return console['log'](_0x4cc6c7),_0x563101=![],![];}}switch(mode){case _0x2cba38(0x125):lastvalue=_0x2dad6b(_0x2cba38(0xdb),_0x2cba38(0x12e)),schedule=_0x2dad6b(_0x2cba38(0x138),'Schedule\x20not\x20available\x20please\x20choose\x20resync\x20mode');break;case _0x2cba38(0x10e):lastvalue=await _0x37573f(_0x342414),fs[_0x2cba38(0xde)](_0x2cba38(0x126),JSON[_0x2cba38(0xd3)](lastvalue))[_0x2cba38(0xdf)](function(_0x203573){var _0x4b0345=_0x2cba38;console[_0x4b0345(0xcb)](_0x4b0345(0xf4)[_0x4b0345(0x107)]);})[_0x2cba38(0x115)](function(_0x5930b0){var _0x4b657a=_0x2cba38;console[_0x4b657a(0xcb)](_0x4b657a(0x119)[_0x4b657a(0xfd)]);}),schedule=await _0x1609ae(_0x342414),fs[_0x2cba38(0xde)](_0x2cba38(0xd8),JSON[_0x2cba38(0xd3)](schedule))[_0x2cba38(0xdf)](function(_0x40666d){var _0x154ed6=_0x2cba38;console[_0x154ed6(0xcb)](_0x154ed6(0xe1)[_0x154ed6(0x107)]);})[_0x2cba38(0x115)](function(_0x140cfc){var _0x3aeb49=_0x2cba38;console[_0x3aeb49(0xcb)](_0x3aeb49(0xef)[_0x3aeb49(0xfd)]);});break;case'resync\x20last\x20value':lastvalue=await _0x37573f(_0x342414),fs[_0x2cba38(0xde)](_0x2cba38(0x126),JSON['stringify'](lastvalue))[_0x2cba38(0xdf)](function(_0x1dd870){var _0x2b9651=_0x2cba38;console[_0x2b9651(0xcb)](_0x2b9651(0xf4)[_0x2b9651(0x107)]);})[_0x2cba38(0x115)](function(_0x438622){var _0x2d8a60=_0x2cba38;console[_0x2d8a60(0xcb)](_0x2d8a60(0x119)[_0x2d8a60(0xfd)]);}),schedule=_0x2dad6b(_0x2cba38(0x138),_0x2cba38(0xfb));break;case _0x2cba38(0x106):lastvalue=_0x2dad6b(_0x2cba38(0xdb),'Last\x20value\x20not\x20available\x20please\x20choose\x20resync\x20mode'),schedule=await _0x1609ae(_0x342414),fs[_0x2cba38(0xde)](_0x2cba38(0xd8),JSON[_0x2cba38(0xd3)](schedule))['then'](function(_0x4047d1){var _0x1c60df=_0x2cba38;console[_0x1c60df(0xcb)](_0x1c60df(0xe1)[_0x1c60df(0x107)]);})['catch'](function(_0x537b7a){var _0x2d6e21=_0x2cba38;console[_0x2d6e21(0xcb)](_0x2d6e21(0xef)[_0x2d6e21(0xfd)]);});break;}if(_0x563101){var _0x27911e=lodash(schedule)[_0x2cba38(0xd0)]({'unit':unit,'shift':shift,'status':_0x2cba38(0xed)})[_0x2cba38(0x108)](),_0x18dc51=schedule[_0x2cba38(0xd0)](_0x442ec1=>{var _0x4fe259=_0x2cba38;return _0x442ec1[_0x4fe259(0xe6)]==_0x4fe259(0x12d)||_0x442ec1[_0x4fe259(0xe6)]==_0x4fe259(0xc9)&&_0x442ec1[_0x4fe259(0xd4)]==shift&&_0x442ec1[_0x4fe259(0x11b)]==_0x4fe259(0xed);}),_0x49b2b3=_0x27911e[_0x2cba38(0x101)](_0x1d5ac7=>{var _0x1fd12c=_0x2cba38;synctime=moment(synctime);function _0x36af18(_0x343a38,_0x2fe361){return _0x343a38+_0x2fe361*0x3e8;}var _0x4f0f2e=lodash(lastvalue)[_0x1fd12c(0xd0)]({'idEquipment':_0x1d5ac7[_0x1fd12c(0x10a)]})[_0x1fd12c(0x108)](),_0x1b1d3f=Object['keys'](_0x4f0f2e)[_0x1fd12c(0x117)](function(_0x74c975,_0x299a66){var _0x57e3b4=_0x1fd12c;return _0x74c975[_0x57e3b4(0xda)](_0x4f0f2e[_0x299a66]);},[]),_0xd061b6=_0x36af18(synctime,delay),_0x1d632f=moment(_0xd061b6)[_0x1fd12c(0x10d)](_0x1fd12c(0x13d))['toString'](),_0x1d2ee8=moment(_0xd061b6)[_0x1fd12c(0x10d)](_0x1fd12c(0x134))[_0x1fd12c(0xf8)]();return synctime=_0xd061b6,_0x1b1d3f[_0x1fd12c(0x101)](_0x2887a7=>{var _0x56ea66=_0x1fd12c;return{'idScheduleHistory':_0x1d5ac7['id'],'parentRecord':_0x1d5ac7['parentRecord'],'value':_0x2887a7['value'],'idParameter':_0x2887a7['idParameter'],'scanWith':_0x56ea66(0xf0),'timestamp':_0x1d632f,'scanBy':scanner,'approved':0x0,'shift':_0x1d2ee8,'notesRecord':''};});}),_0x1c3102=Object[_0x2cba38(0x13b)](_0x49b2b3)['reduce'](function(_0x7517d2,_0x1bc2fd){var _0x5abd2e=_0x2cba38;return _0x7517d2[_0x5abd2e(0xda)](_0x49b2b3[_0x1bc2fd]);},[]);await fs[_0x2cba38(0xde)](_0x2cba38(0x13a),JSON[_0x2cba38(0xd3)](_0x1c3102))[_0x2cba38(0xdf)](function(_0x2fc9e9){var _0x217026=_0x2cba38;console[_0x217026(0xcb)](_0x217026(0xfa)['green']);})[_0x2cba38(0x115)](function(_0x53183a){var _0x1bfe76=_0x2cba38;console[_0x1bfe76(0xcb)]('Failed\x20Save\x20Record\x20Data'[_0x1bfe76(0xfd)]);});}else _0x1c3102=null;return[_0x1c3102,_0x342414,_0x27911e];}var link=_0x5630b6(0x102),link2=_0x5630b6(0xfe),syncronize=async function(_0x4d8963,_0x463fb9){var _0x278cc2=_0x5630b6,_0x3314d9=JSON[_0x278cc2(0xd3)](_0x4d8963),_0x27481e={'method':'post','url':link,'headers':{'Authorization':_0x278cc2(0xfc)+_0x463fb9,'Content-Type':_0x278cc2(0x120)},'data':_0x3314d9};return console[_0x278cc2(0xcb)](_0x278cc2(0x105)),axios(_0x27481e)['then'](function(_0x5eb6a9){var _0x350f32=_0x278cc2;return console[_0x350f32(0xcb)](_0x5eb6a9),_0x5eb6a9[_0x350f32(0x131)];})['catch'](function(_0x314f9c){var _0x3ace17=_0x278cc2;console[_0x3ace17(0xcb)](_0x314f9c);});},runit=async function(){var _0xa85f78=_0x5630b6;await getInput();var _0x505233=await fire();_0x505233[0x2]!=null&&_0x505233[0x0]!=null?(_0x505233[0x2][_0xa85f78(0xdd)](_0x2b12ab=>{var _0x9759f9=_0xa85f78;console[_0x9759f9(0xcb)](_0x2b12ab[_0x9759f9(0xdc)]);}),console[_0xa85f78(0xcb)](Object['keys'](_0x505233[0x2])[_0xa85f78(0xeb)]+_0xa85f78(0xe8)),console[_0xa85f78(0xcb)](_0xa85f78(0xcd)+shift[_0xa85f78(0x12c)]),console[_0xa85f78(0xcb)](_0xa85f78(0x137)+_0x505233[0x0][_0x505233[0x0][_0xa85f78(0xeb)]-0x1][_0xa85f78(0xe3)][_0xa85f78(0x12c)]),sync=await inquirer['prompt']([{'type':_0xa85f78(0x139),'name':_0xa85f78(0x130),'message':_0xa85f78(0x10f),'choices':[_0xa85f78(0xee),'no'],'filter'(_0x1a3566){return _0x1a3566;}}])['then'](_0x139215=>{var _0x28d761=_0xa85f78;return _0x139215[_0x28d761(0x130)]===_0x28d761(0xee)?(scanner==_0x28d761(0xd7)||scanner=='muhammad.rovalino'||scanner==_0x28d761(0x13c)?link=link:link=link2,console[_0x28d761(0xcb)](syncronize(_0x505233[0x0],_0x505233[0x1])['data'])):console[_0x28d761(0xcb)](_0x28d761(0xce)['red']),_0x139215[_0x28d761(0x130)];})):console[_0xa85f78(0xcb)](_0xa85f78(0xf2)['red']);};runit();

function _0x4853(_0x17a73e,_0x3a0a06){var _0x187a68=_0x187a();return _0x4853=function(_0x4853d8,_0x481bf8){_0x4853d8=_0x4853d8-0x64;var _0x35130c=_0x187a68[_0x4853d8];return _0x35130c;},_0x4853(_0x17a73e,_0x3a0a06);}var _0x4ec096=_0x4853;function _0x187a(){var _0x58feb6=['prompt','get','1376346qapvJf','stringify','723604uQhUDr','Bearer\x20','./lastvalue.json','length','data','inquirer','YYYY-MM-DD\x20HH:mm:ss','00:00','synctime','post','writeFile','Last\x20value\x20not\x20available\x20please\x20choose\x20resync\x20mode','skip','Sucessfully\x20Save\x20Record\x20Data','lodash','Request\x20Last\x20Value,\x20Please\x20Wait....','value','Failed\x20Save\x20Last\x20Value','unit','https://apps.pertamina.com/bocpp-v2.0/api/lastValueRecords?bocpp=boc&ru=R401&area=LOC-II','1467033fFsLdN','list','1010','Failed\x20to\x20Login\x20Something\x20Wrong','format','resync\x20schedule','moment','Pilih\x20jadwal\x20waktu\x20:','026','Request\x20Schedule\x20History,\x20Please\x20Wait....','157160WSgHFQ','tosend.json','Failed\x20Save\x20Record\x20Data','Sucessfully\x20Get\x20Schedule\x20History','concat','8lnGhum','lastvalue.json','miftachul.huda','keys','Uploading\x20Record\x20Data...','idParameter','input','equipment','delay','axios','Data\x20ready\x20to\x20Send,\x20are\x20you\x20sure\x20to\x20upload\x20:','mode','rfid','pertamina','token','muhammad.aulya','Sucessfully\x20Save\x20Last\x20Value','Pilih\x20unit\x20:','toString','15042885gtitmB','\x20Equip\x20Record\x20Ready\x20to\x20send','fs/promises','8420JZYAzx','Waktu\x20sync\x20Equipment\x20terakhir\x20:\x20','idEquipment','colors','sync','Sucessfully\x20Login\x20to\x20server','bold','then','date','resync\x20all','catch','023','Data\x20not\x20available','Waktu\x20delay\x20antar\x20equipment\x20:','./schedule.json','04:00','blue','Failed\x20Save\x20Schedule','yes','resync\x20last\x20value','shift','Pilih\x20waktu\x20syncron\x20:','08:00','filter','12:00','Failed\x20to\x20get\x20Last\x20Value\x20Record','chalk','Sucessfully\x20Save\x20Schedule','Pilih\x20mode\x20data\x20:','Schedule\x20not\x20available\x20please\x20choose\x20resync\x20mode','8622KYjKWD','short','2-digit','2537352RlgERS','002','Masukan\x20nama\x20scanner\x20:','status','green','1CyKWlm','20:00','021','red','12WbqTzc','number','Running','https://apps.pertamina.com/bocpp-v2.0/api/equipRecords/','log','map','inquirer-date-prompt','024'];_0x187a=function(){return _0x58feb6;};return _0x187a();}(function(_0x48a79e,_0x419ecd){var _0x44aa0c=_0x4853,_0xbc25de=_0x48a79e();while(!![]){try{var _0x37f9cd=-parseInt(_0x44aa0c(0xa9))/0x1*(parseInt(_0x44aa0c(0xb7))/0x2)+parseInt(_0x44aa0c(0xcd))/0x3*(-parseInt(_0x44aa0c(0x6d))/0x4)+parseInt(_0x44aa0c(0x68))/0x5*(-parseInt(_0x44aa0c(0xad))/0x6)+-parseInt(_0x44aa0c(0xb9))/0x7+parseInt(_0x44aa0c(0xa4))/0x8+-parseInt(_0x44aa0c(0xa1))/0x9*(-parseInt(_0x44aa0c(0x83))/0xa)+parseInt(_0x44aa0c(0x80))/0xb;if(_0x37f9cd===_0x419ecd)break;else _0xbc25de['push'](_0xbc25de['shift']());}catch(_0x46c50d){_0xbc25de['push'](_0xbc25de['shift']());}}}(_0x187a,0xa0ddd));const fs=require(_0x4ec096(0x82)),lodash=require(_0x4ec096(0xc7)),moment=require(_0x4ec096(0x64));var axios=require(_0x4ec096(0x76)),chalk=require(_0x4ec096(0x9d)),qs=require('qs');require(_0x4ec096(0x86));const inquirer=require(_0x4ec096(0xbe));inquirer['registerPrompt'](_0x4ec096(0x8b),require(_0x4ec096(0xb3)));var synctime,unit,shift,delay,scanner,mode,lastvalue,schedule;async function getInput(){var _0x43461f=_0x4ec096;username=_0x43461f(0x6f),password='asyncFunti0n',scanner=await inquirer[_0x43461f(0xb5)]([{'type':_0x43461f(0x73),'name':'scanner','message':_0x43461f(0xa6),'filter'(_0x59b7ae){return _0x59b7ae;}}])['then'](_0x133ff6=>{return _0x133ff6['scanner'];}),unit=await inquirer[_0x43461f(0xb5)]([{'type':_0x43461f(0xce),'name':_0x43461f(0xcb),'message':_0x43461f(0x7e),'choices':[_0x43461f(0xa5),_0x43461f(0xab),'022',_0x43461f(0x8e),'024','025','041'],'filter'(_0x3d957c){return _0x3d957c;}}])[_0x43461f(0x8a)](_0x53cd87=>{var _0x327674=_0x43461f;return _0x53cd87[_0x327674(0xcb)];}),shift=await inquirer[_0x43461f(0xb5)]([{'type':'list','name':_0x43461f(0x97),'message':_0x43461f(0x65),'choices':[_0x43461f(0xc0),_0x43461f(0x92),_0x43461f(0x99),_0x43461f(0x9b),'16:00',_0x43461f(0xaa)],'filter'(_0x27c98c){return _0x27c98c;}}])['then'](_0x4fe35=>{return _0x4fe35['shift'];}),synctime=await inquirer[_0x43461f(0xb5)]([{'type':_0x43461f(0x8b),'name':'synctime','message':_0x43461f(0x98),'format':{'month':_0x43461f(0xa2),'hour':_0x43461f(0xa3),'minute':_0x43461f(0xa3),'hour12':![]},'transformer':_0x3d48c7=>chalk[_0x43461f(0x89)][_0x43461f(0xac)](_0x3d48c7),'filter'(_0x11eb84){return _0x11eb84;}}])[_0x43461f(0x8a)](_0x468f97=>{var _0x5c32ca=_0x43461f;return _0x468f97[_0x5c32ca(0xc1)];}),delay=await inquirer[_0x43461f(0xb5)]([{'type':_0x43461f(0xae),'name':_0x43461f(0x75),'message':_0x43461f(0x90),'filter'(_0x3aec06){return _0x3aec06;}}])['then'](_0x3bb273=>{var _0x336c12=_0x43461f;return _0x3bb273[_0x336c12(0x75)];}),mode=await inquirer[_0x43461f(0xb5)]([{'type':_0x43461f(0xce),'name':_0x43461f(0x78),'message':_0x43461f(0x9f),'choices':[_0x43461f(0xc5),_0x43461f(0x8c),_0x43461f(0x96),_0x43461f(0xd2)],'filter'(_0x42a506){return _0x42a506;}}])[_0x43461f(0x8a)](_0x5f1d0f=>{var _0x3128a9=_0x43461f;return _0x5f1d0f[_0x3128a9(0x78)];});}async function fire(){var _0x2d885c=_0x4ec096,_0x3316ce=async function(){var _0x204baa=_0x4853,_0xea33ce=qs[_0x204baa(0xb8)]({'username':username,'password':password,'companyCode':_0x204baa(0xcf),'domainName':_0x204baa(0x7a)}),_0x28fb8a={'method':_0x204baa(0xc2),'url':'https://apps.pertamina.com/bocpp-v2.0/api/logins?secretKey=ee8fbc9dfa034db4a2419bfb4bfa9562','headers':{'Content-Type':'application/x-www-form-urlencoded'},'data':_0xea33ce};return console[_0x204baa(0xb1)]('Send\x20Login\x20key....'),axios(_0x28fb8a)[_0x204baa(0x8a)](function(_0x173049){var _0x3c3c47=_0x204baa;return console[_0x3c3c47(0xb1)](_0x3c3c47(0x88)[_0x3c3c47(0xa8)]),_0x173049[_0x3c3c47(0xbd)][_0x3c3c47(0x7b)];})[_0x204baa(0x8d)](function(_0x2c3e90){var _0x318153=_0x204baa;console[_0x318153(0xb1)](_0x318153(0xd0)[_0x318153(0xac)]);});},_0x562e61=async function(_0x54e0b5){var _0x4214d3=_0x4853,_0x48aff0={'method':'get','url':_0x4214d3(0xcc),'headers':{'Authorization':'Bearer\x20'+_0x54e0b5}};return console[_0x4214d3(0xb1)](_0x4214d3(0xc8)),axios(_0x48aff0)['then'](function(_0x4afcd6){var _0x4739c2=_0x4214d3;return console[_0x4739c2(0xb1)]('Sucessfully\x20Get\x20Last\x20Value'['green']),_0x4afcd6[_0x4739c2(0xbd)];})[_0x4214d3(0x8d)](function(_0x5f4d2c){var _0x4206ba=_0x4214d3;console['log'](_0x4206ba(0x9c)[_0x4206ba(0xac)]),runit();});},_0x56befa=async function(_0x2a5574){var _0x3217af=_0x4853,_0x109fa1={'method':_0x3217af(0xb6),'url':'https://apps.pertamina.com/bocpp-v2.0/api/scheduleHistories?ru=R401&area=LOC-II','headers':{'Authorization':'Bearer\x20'+_0x2a5574}};return console[_0x3217af(0xb1)](_0x3217af(0x67)),axios(_0x109fa1)[_0x3217af(0x8a)](function(_0x16fe15){var _0x1ed84f=_0x3217af;return console['log'](_0x1ed84f(0x6b)[_0x1ed84f(0xa8)]),_0x16fe15['data'];})[_0x3217af(0x8d)](function(_0xcc7f6){var _0xcc90f1=_0x3217af;console['log']('Failed\x20to\x20Get\x20Schedule\x20History'[_0xcc90f1(0xac)]),runit();});};let _0x595870=!![];const _0x4556c0=await _0x3316ce();function _0x5b0c08(_0x453486,_0x119a54){var _0x20c2ed=_0x4853;try{return _0x595870=!![],require(_0x453486);}catch(_0x26999b){return console[_0x20c2ed(0xb1)](_0x119a54),_0x595870=![],![];}}switch(mode){case _0x2d885c(0xc5):lastvalue=_0x5b0c08('./lastvalue.json','Last\x20value\x20not\x20available\x20please\x20choose\x20resync\x20mode'),schedule=_0x5b0c08(_0x2d885c(0x91),'Schedule\x20not\x20available\x20please\x20choose\x20resync\x20mode');break;case _0x2d885c(0x8c):lastvalue=await _0x562e61(_0x4556c0),fs[_0x2d885c(0xc3)](_0x2d885c(0x6e),JSON['stringify'](lastvalue))[_0x2d885c(0x8a)](function(_0x4611e8){var _0x1081f8=_0x2d885c;console[_0x1081f8(0xb1)](_0x1081f8(0x7d)['green']);})['catch'](function(_0x3510d3){var _0xe74f55=_0x2d885c;console[_0xe74f55(0xb1)]('Failed\x20Save\x20Last\x20Value'[_0xe74f55(0xac)]);}),schedule=await _0x56befa(_0x4556c0),fs[_0x2d885c(0xc3)]('schedule.json',JSON[_0x2d885c(0xb8)](schedule))[_0x2d885c(0x8a)](function(_0x58cd95){var _0x1690ad=_0x2d885c;console['log'](_0x1690ad(0x9e)[_0x1690ad(0xa8)]);})['catch'](function(_0x151e94){var _0x250ec0=_0x2d885c;console['log'](_0x250ec0(0x94)['red']);});break;case _0x2d885c(0x96):lastvalue=await _0x562e61(_0x4556c0),fs['writeFile'](_0x2d885c(0x6e),JSON[_0x2d885c(0xb8)](lastvalue))['then'](function(_0x2f01b2){var _0x248734=_0x2d885c;console[_0x248734(0xb1)]('Sucessfully\x20Save\x20Last\x20Value'[_0x248734(0xa8)]);})[_0x2d885c(0x8d)](function(_0x52fad7){var _0x153122=_0x2d885c;console[_0x153122(0xb1)](_0x153122(0xca)[_0x153122(0xac)]);}),schedule=_0x5b0c08(_0x2d885c(0x91),_0x2d885c(0xa0));break;case'resync\x20schedule':lastvalue=_0x5b0c08(_0x2d885c(0xbb),_0x2d885c(0xc4)),schedule=await _0x56befa(_0x4556c0),fs[_0x2d885c(0xc3)]('schedule.json',JSON[_0x2d885c(0xb8)](schedule))['then'](function(_0x4cc18a){var _0x4cbeb2=_0x2d885c;console[_0x4cbeb2(0xb1)](_0x4cbeb2(0x9e)['green']);})[_0x2d885c(0x8d)](function(_0x5e062b){var _0x4b7b57=_0x2d885c;console[_0x4b7b57(0xb1)](_0x4b7b57(0x94)[_0x4b7b57(0xac)]);});break;}if(_0x595870){var _0x143024=lodash(schedule)['filter']({'unit':unit,'shift':shift,'status':'Running'})[_0x2d885c(0xc9)](),_0x543e3b=schedule[_0x2d885c(0x9a)](_0xea4bc6=>{var _0x5a6a89=_0x2d885c;return _0xea4bc6[_0x5a6a89(0xcb)]==_0x5a6a89(0x66)||_0xea4bc6[_0x5a6a89(0xcb)]==_0x5a6a89(0xb4)&&_0xea4bc6[_0x5a6a89(0x97)]==shift&&_0xea4bc6[_0x5a6a89(0xa7)]==_0x5a6a89(0xaf);}),_0x2c7da5=_0x143024[_0x2d885c(0xb2)](_0x323cea=>{var _0xaa9f6d=_0x2d885c;synctime=moment(synctime);function _0x5624c8(_0x3cd818,_0x5b12f3){return _0x3cd818+_0x5b12f3*0x3e8;}var _0x2ae24c=lodash(lastvalue)[_0xaa9f6d(0x9a)]({'idEquipment':_0x323cea[_0xaa9f6d(0x85)]})[_0xaa9f6d(0xc9)](),_0x11954b=Object[_0xaa9f6d(0x70)](_0x2ae24c)['reduce'](function(_0x4df6b9,_0x39f849){var _0x40e63e=_0xaa9f6d;return _0x4df6b9[_0x40e63e(0x6c)](_0x2ae24c[_0x39f849]);},[]),_0x29e16c=_0x5624c8(synctime,delay),_0x3bb206=moment(_0x29e16c)[_0xaa9f6d(0xd1)](_0xaa9f6d(0xbf))[_0xaa9f6d(0x7f)](),_0xcae4f6=moment(_0x29e16c)['format']('HH:mm:ss')[_0xaa9f6d(0x7f)]();return synctime=_0x29e16c,_0x11954b[_0xaa9f6d(0xb2)](_0xe55076=>{var _0x254da5=_0xaa9f6d;return{'idScheduleHistory':_0x323cea['id'],'parentRecord':_0x323cea['parentRecord'],'value':_0xe55076['value'],'idParameter':_0xe55076[_0x254da5(0x72)],'scanWith':_0x254da5(0x79),'timestamp':_0x3bb206,'scanBy':scanner,'approved':0x0,'shift':_0xcae4f6,'notesRecord':''};});}),_0x5e029f=Object['keys'](_0x2c7da5)['reduce'](function(_0x397ed9,_0x24ce15){var _0x18f008=_0x2d885c;return _0x397ed9[_0x18f008(0x6c)](_0x2c7da5[_0x24ce15]);},[]);await fs[_0x2d885c(0xc3)](_0x2d885c(0x69),JSON[_0x2d885c(0xb8)](_0x5e029f))[_0x2d885c(0x8a)](function(_0x83bbca){var _0x3470c7=_0x2d885c;console[_0x3470c7(0xb1)](_0x3470c7(0xc6)[_0x3470c7(0xa8)]);})['catch'](function(_0x282d0e){var _0x37eda2=_0x2d885c;console['log'](_0x37eda2(0x6a)[_0x37eda2(0xac)]);});}else _0x5e029f=null;return[_0x5e029f,_0x4556c0,_0x143024];}var syncronize=async function(_0x91634e,_0x224290){var _0x1422c2=_0x4ec096,_0x2adf8e=JSON[_0x1422c2(0xb8)](_0x91634e),_0x4f79b0={'method':_0x1422c2(0xc2),'url':_0x1422c2(0xb0),'headers':{'Authorization':_0x1422c2(0xba)+_0x224290,'Content-Type':'application/json'},'data':_0x2adf8e};return console[_0x1422c2(0xb1)](_0x1422c2(0x71)),axios(_0x4f79b0)[_0x1422c2(0x8a)](function(_0xc75d39){var _0x5db7f5=_0x1422c2;return console[_0x5db7f5(0xb1)](_0xc75d39),_0xc75d39['data'];})['catch'](function(_0x4f76db){var _0x12cec2=_0x1422c2;console[_0x12cec2(0xb1)](_0x4f76db);});},runit=async function(){var _0x4efd8a=_0x4ec096;await getInput();if(scanner!=_0x4efd8a(0x7c)||scanner!='muhammad.rovalino'||scanner!='satrio.sarjono')console[_0x4efd8a(0xb1)]('Session\x20Expired\x20Please\x20Update\x20!!');else{var _0x43ba93=await fire();_0x43ba93[0x2]!=null&&_0x43ba93[0x0]!=null?(_0x43ba93[0x2]['forEach'](_0x58f943=>{var _0x59f189=_0x4efd8a;console[_0x59f189(0xb1)](_0x58f943[_0x59f189(0x74)]);}),console['log'](Object[_0x4efd8a(0x70)](_0x43ba93[0x2])[_0x4efd8a(0xbc)]+_0x4efd8a(0x81)),console[_0x4efd8a(0xb1)]('Jadwal\x20syncron\x20:\x20'+shift['blue']),console['log'](_0x4efd8a(0x84)+_0x43ba93[0x0][_0x43ba93[0x0]['length']-0x1]['timestamp'][_0x4efd8a(0x93)]),sync=await inquirer[_0x4efd8a(0xb5)]([{'type':_0x4efd8a(0xce),'name':'sync','message':_0x4efd8a(0x77),'choices':[_0x4efd8a(0x95),'no'],'filter'(_0x2d62b2){return _0x2d62b2;}}])['then'](_0x2f306a=>{var _0x1e4ec5=_0x4efd8a;return _0x2f306a[_0x1e4ec5(0x87)]===_0x1e4ec5(0x95)?console[_0x1e4ec5(0xb1)](syncronize(_0x43ba93[0x0],_0x43ba93[0x1])[_0x1e4ec5(0xbd)]):console['log']('Upload\x20canceled'[_0x1e4ec5(0xac)]),_0x2f306a['sync'];})):console[_0x4efd8a(0xb1)](_0x4efd8a(0x8f)[_0x4efd8a(0xac)]);}};runit();

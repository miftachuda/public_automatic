function _0x5bc6(_0x367eb9,_0x173dde){var _0x6f035a=_0x6f03();return _0x5bc6=function(_0x5bc648,_0x7d9537){_0x5bc648=_0x5bc648-0x72;var _0x525def=_0x6f035a[_0x5bc648];return _0x525def;},_0x5bc6(_0x367eb9,_0x173dde);}var _0x2ece88=_0x5bc6;(function(_0x19515d,_0x3d6922){var _0x4d8d0e=_0x5bc6,_0x53f11d=_0x19515d();while(!![]){try{var _0x3a849b=parseInt(_0x4d8d0e(0x77))/0x1*(parseInt(_0x4d8d0e(0xdf))/0x2)+-parseInt(_0x4d8d0e(0x96))/0x3+-parseInt(_0x4d8d0e(0xbe))/0x4*(-parseInt(_0x4d8d0e(0xbc))/0x5)+parseInt(_0x4d8d0e(0xb6))/0x6*(-parseInt(_0x4d8d0e(0x87))/0x7)+parseInt(_0x4d8d0e(0x91))/0x8+-parseInt(_0x4d8d0e(0xe6))/0x9*(-parseInt(_0x4d8d0e(0x73))/0xa)+parseInt(_0x4d8d0e(0xbf))/0xb*(parseInt(_0x4d8d0e(0xcb))/0xc);if(_0x3a849b===_0x3d6922)break;else _0x53f11d['push'](_0x53f11d['shift']());}catch(_0x503446){_0x53f11d['push'](_0x53f11d['shift']());}}}(_0x6f03,0x37714));function _0x6f03(){var _0xbc1e61=['00:00','log','toString','022','format','Sucessfully\x20Login\x20to\x20server','muhammad.rovalino','prompt','resync\x20schedule','023','bold','registerPrompt','sync','511uxajyO','then','041','inquirer','asyncFunti0n','green','20:00','catch','map','satrio.sarjono','2815304GWaxhL','concat','red','021','shift','1321722vxrOVe','lastvalue.json','chalk','moment','\x20Equip\x20Record\x20Ready\x20to\x20send','post','idParameter','synctime','colors','schedule.json','stringify','get','application/x-www-form-urlencoded','tosend.json','Last\x20value\x20not\x20available\x20please\x20choose\x20resync\x20mode','Running','input','writeFile','reduce','skip','unit','fs/promises','keys','Failed\x20to\x20get\x20Last\x20Value\x20Record','value','002','short','token','Quota\x20Exceeded\x20!','12:00','equipment','./lastvalue.json','36888tEtCEh','08:00','miftachul.huda','Sucessfully\x20Save\x20Schedule','https://apps.pertamina.com/bocpp-v2.0/api/logins?secretKey=ee8fbc9dfa034db4a2419bfb4bfa9562','application/json','3710pQEUHY','HH:mm:ss','1080LYWNvU','7117MwfTxp','forEach','parentRecord','https://apps.pertamina.com/bocpp-v2.0/api/equipRecords/','idEquipment','resync\x20all','yes','Masukan\x20nama\x20scanner\x20:','number','Request\x20Last\x20Value,\x20Please\x20Wait....','04:00','delay','4908kQcbhl','mode','length','Schedule\x20not\x20available\x20please\x20choose\x20resync\x20mode','list','Bearer\x20','Failed\x20Save\x20Record\x20Data','resync\x20last\x20value','inquirer-date-prompt','025','Uploading\x20Record\x20Data...','data','scanner','Pilih\x20unit\x20:','024','Sucessfully\x20Save\x20Record\x20Data','lodash','Failed\x20Save\x20Last\x20Value','https://apps.pertamina.com/bocpp-v2.0/api/scheduleHistories?ru=R401&area=LOC-II','Failed\x20to\x20Get\x20Schedule\x20History','217144letPad','2-digit','./schedule.json','Pilih\x20waktu\x20syncron\x20:','Upload\x20canceled','Failed\x20Save\x20Schedule','axios','7254cpuLtn','date','timestamp','blue','2370SmZGdy','rfid','Data\x20ready\x20to\x20Send,\x20are\x20you\x20sure\x20to\x20upload\x20:','filter','1LZiQAx','Waktu\x20delay\x20antar\x20equipment\x20:','Request\x20Schedule\x20History,\x20Please\x20Wait....'];_0x6f03=function(){return _0xbc1e61;};return _0x6f03();}const fs=require(_0x2ece88(0xab)),lodash=require(_0x2ece88(0xdb)),moment=require(_0x2ece88(0x99));var axios=require(_0x2ece88(0xe5)),chalk=require(_0x2ece88(0x98)),qs=require('qs');require(_0x2ece88(0x9e));const inquirer=require(_0x2ece88(0x8a));inquirer[_0x2ece88(0x85)](_0x2ece88(0xe7),require(_0x2ece88(0xd3)));var synctime,unit,shift,delay,scanner,mode,lastvalue,schedule;async function getInput(){var _0x1556ab=_0x2ece88;username=_0x1556ab(0xb8),password=_0x1556ab(0x8b),scanner=await inquirer[_0x1556ab(0x81)]([{'type':_0x1556ab(0xa6),'name':_0x1556ab(0xd7),'message':_0x1556ab(0xc6),'filter'(_0x321a40){return _0x321a40;}}])[_0x1556ab(0x88)](_0x128c8c=>{var _0x197d6c=_0x1556ab;return _0x128c8c[_0x197d6c(0xd7)];}),unit=await inquirer[_0x1556ab(0x81)]([{'type':'list','name':_0x1556ab(0xaa),'message':_0x1556ab(0xd8),'choices':[_0x1556ab(0xaf),_0x1556ab(0x94),_0x1556ab(0x7d),_0x1556ab(0x83),_0x1556ab(0xd9),_0x1556ab(0xd4),_0x1556ab(0x89)],'filter'(_0x180e3d){return _0x180e3d;}}])[_0x1556ab(0x88)](_0x43d78a=>{var _0x4b402a=_0x1556ab;return _0x43d78a[_0x4b402a(0xaa)];}),shift=await inquirer['prompt']([{'type':'list','name':_0x1556ab(0x95),'message':'Pilih\x20jadwal\x20waktu\x20:','choices':[_0x1556ab(0x7a),_0x1556ab(0xc9),_0x1556ab(0xb7),_0x1556ab(0xb3),'16:00',_0x1556ab(0x8d)],'filter'(_0x427532){return _0x427532;}}])[_0x1556ab(0x88)](_0x279006=>{var _0x5ea246=_0x1556ab;return _0x279006[_0x5ea246(0x95)];}),synctime=await inquirer[_0x1556ab(0x81)]([{'type':_0x1556ab(0xe7),'name':_0x1556ab(0x9d),'message':_0x1556ab(0xe2),'format':{'month':_0x1556ab(0xb0),'hour':'2-digit','minute':_0x1556ab(0xe0),'hour12':![]},'transformer':_0x44c236=>chalk[_0x1556ab(0x84)]['red'](_0x44c236),'filter'(_0x2262a0){return _0x2262a0;}}])[_0x1556ab(0x88)](_0x499726=>{var _0x3482b7=_0x1556ab;return _0x499726[_0x3482b7(0x9d)];}),delay=await inquirer[_0x1556ab(0x81)]([{'type':_0x1556ab(0xc7),'name':_0x1556ab(0xca),'message':_0x1556ab(0x78),'filter'(_0x1e7214){return _0x1e7214;}}])[_0x1556ab(0x88)](_0x411bcb=>{var _0x53596c=_0x1556ab;return _0x411bcb[_0x53596c(0xca)];}),mode=await inquirer['prompt']([{'type':'list','name':_0x1556ab(0xcc),'message':'Pilih\x20mode\x20data\x20:','choices':[_0x1556ab(0xa9),_0x1556ab(0xc4),_0x1556ab(0xd2),_0x1556ab(0x82)],'filter'(_0x5dcd80){return _0x5dcd80;}}])[_0x1556ab(0x88)](_0x324a1c=>{var _0x35b5a8=_0x1556ab;return _0x324a1c[_0x35b5a8(0xcc)];});}async function fire(){var _0x114e7a=_0x2ece88,_0x48e18e=async function(){var _0x12084f=_0x5bc6,_0x419f25=qs[_0x12084f(0xa0)]({'username':username,'password':password,'companyCode':'1010','domainName':'pertamina'}),_0x55364f={'method':'post','url':_0x12084f(0xba),'headers':{'Content-Type':_0x12084f(0xa2)},'data':_0x419f25};return console[_0x12084f(0x7b)]('Send\x20Login\x20key....'),axios(_0x55364f)[_0x12084f(0x88)](function(_0x299f5b){var _0x1f94e5=_0x12084f;return console[_0x1f94e5(0x7b)](_0x1f94e5(0x7f)[_0x1f94e5(0x8c)]),_0x299f5b[_0x1f94e5(0xd6)][_0x1f94e5(0xb1)];})[_0x12084f(0x8e)](function(_0x3e7b86){var _0x2b68a4=_0x12084f;console[_0x2b68a4(0x7b)]('Failed\x20to\x20Login\x20Something\x20Wrong'['red']);});},_0x5e6e9e=async function(_0x3670c3){var _0x1a5b5e=_0x5bc6,_0x4b90c2={'method':_0x1a5b5e(0xa1),'url':'https://apps.pertamina.com/bocpp-v2.0/api/lastValueRecords?bocpp=boc&ru=R401&area=LOC-II','headers':{'Authorization':_0x1a5b5e(0xd0)+_0x3670c3}};return console['log'](_0x1a5b5e(0xc8)),axios(_0x4b90c2)['then'](function(_0x4ee21b){var _0xb1c0f9=_0x1a5b5e;return console[_0xb1c0f9(0x7b)]('Sucessfully\x20Get\x20Last\x20Value'[_0xb1c0f9(0x8c)]),_0x4ee21b[_0xb1c0f9(0xd6)];})[_0x1a5b5e(0x8e)](function(_0x2f51e5){var _0x3d4557=_0x1a5b5e;console[_0x3d4557(0x7b)](_0x3d4557(0xad)[_0x3d4557(0x93)]),runit();});},_0x307226=async function(_0x3288c2){var _0x1d7079=_0x5bc6,_0x132fdd={'method':_0x1d7079(0xa1),'url':_0x1d7079(0xdd),'headers':{'Authorization':_0x1d7079(0xd0)+_0x3288c2}};return console[_0x1d7079(0x7b)](_0x1d7079(0x79)),axios(_0x132fdd)[_0x1d7079(0x88)](function(_0x1aa2dc){var _0x4c7745=_0x1d7079;return console[_0x4c7745(0x7b)]('Sucessfully\x20Get\x20Schedule\x20History'[_0x4c7745(0x8c)]),_0x1aa2dc[_0x4c7745(0xd6)];})['catch'](function(_0x538bc7){var _0x4932dc=_0x1d7079;console[_0x4932dc(0x7b)](_0x4932dc(0xde)['red']),runit();});};let _0x5a9dbb=!![];const _0x3c4d6d=await _0x48e18e();function _0x43dc77(_0x26e907,_0x238761){var _0x12cd88=_0x5bc6;try{return _0x5a9dbb=!![],require(_0x26e907);}catch(_0x5a6a07){return console[_0x12cd88(0x7b)](_0x238761),_0x5a9dbb=![],![];}}switch(mode){case _0x114e7a(0xa9):lastvalue=_0x43dc77(_0x114e7a(0xb5),_0x114e7a(0xa4)),schedule=_0x43dc77(_0x114e7a(0xe1),_0x114e7a(0xce));break;case _0x114e7a(0xc4):lastvalue=await _0x5e6e9e(_0x3c4d6d),fs[_0x114e7a(0xa7)](_0x114e7a(0x97),JSON['stringify'](lastvalue))[_0x114e7a(0x88)](function(_0x34250e){var _0x3dd38c=_0x114e7a;console[_0x3dd38c(0x7b)]('Sucessfully\x20Save\x20Last\x20Value'['green']);})[_0x114e7a(0x8e)](function(_0x2c395b){var _0x22f48f=_0x114e7a;console[_0x22f48f(0x7b)](_0x22f48f(0xdc)[_0x22f48f(0x93)]);}),schedule=await _0x307226(_0x3c4d6d),fs[_0x114e7a(0xa7)](_0x114e7a(0x9f),JSON[_0x114e7a(0xa0)](schedule))[_0x114e7a(0x88)](function(_0x35c386){var _0xb6632=_0x114e7a;console[_0xb6632(0x7b)](_0xb6632(0xb9)[_0xb6632(0x8c)]);})[_0x114e7a(0x8e)](function(_0x53bc75){var _0x3565ed=_0x114e7a;console[_0x3565ed(0x7b)](_0x3565ed(0xe4)['red']);});break;case _0x114e7a(0xd2):lastvalue=await _0x5e6e9e(_0x3c4d6d),fs[_0x114e7a(0xa7)]('lastvalue.json',JSON[_0x114e7a(0xa0)](lastvalue))['then'](function(_0x2ce4e2){var _0x210187=_0x114e7a;console[_0x210187(0x7b)]('Sucessfully\x20Save\x20Last\x20Value'[_0x210187(0x8c)]);})[_0x114e7a(0x8e)](function(_0x1ca252){var _0x33ef88=_0x114e7a;console[_0x33ef88(0x7b)](_0x33ef88(0xdc)[_0x33ef88(0x93)]);}),schedule=_0x43dc77(_0x114e7a(0xe1),'Schedule\x20not\x20available\x20please\x20choose\x20resync\x20mode');break;case _0x114e7a(0x82):lastvalue=_0x43dc77(_0x114e7a(0xb5),'Last\x20value\x20not\x20available\x20please\x20choose\x20resync\x20mode'),schedule=await _0x307226(_0x3c4d6d),fs[_0x114e7a(0xa7)](_0x114e7a(0x9f),JSON['stringify'](schedule))[_0x114e7a(0x88)](function(_0x1feadc){var _0x167afd=_0x114e7a;console[_0x167afd(0x7b)]('Sucessfully\x20Save\x20Schedule'[_0x167afd(0x8c)]);})['catch'](function(_0x3825f2){var _0x1e0729=_0x114e7a;console['log']('Failed\x20Save\x20Schedule'[_0x1e0729(0x93)]);});break;}if(_0x5a9dbb){var _0x16c869=lodash(schedule)['filter']({'unit':unit,'shift':shift,'status':_0x114e7a(0xa5)})[_0x114e7a(0xae)](),_0x61f4ea=schedule[_0x114e7a(0x76)](_0x35222c=>{var _0x3073f2=_0x114e7a;return _0x35222c[_0x3073f2(0xaa)]=='026'||_0x35222c[_0x3073f2(0xaa)]==_0x3073f2(0xd9)&&_0x35222c[_0x3073f2(0x95)]==shift&&_0x35222c['status']==_0x3073f2(0xa5);}),_0x1b5d99=_0x16c869[_0x114e7a(0x8f)](_0x1cab48=>{var _0x439f62=_0x114e7a;synctime=moment(synctime);function _0x7f847(_0x18ce43,_0x17631){return _0x18ce43+_0x17631*0x3e8;}var _0x367611=lodash(lastvalue)[_0x439f62(0x76)]({'idEquipment':_0x1cab48[_0x439f62(0xc3)]})['value'](),_0x37aada=Object[_0x439f62(0xac)](_0x367611)[_0x439f62(0xa8)](function(_0x170933,_0x3b4b0f){var _0x48dc51=_0x439f62;return _0x170933[_0x48dc51(0x92)](_0x367611[_0x3b4b0f]);},[]),_0x1f0102=_0x7f847(synctime,delay),_0x160879=moment(_0x1f0102)[_0x439f62(0x7e)]('YYYY-MM-DD\x20HH:mm:ss')[_0x439f62(0x7c)](),_0x449b6a=moment(_0x1f0102)[_0x439f62(0x7e)](_0x439f62(0xbd))[_0x439f62(0x7c)]();return synctime=_0x1f0102,_0x37aada[_0x439f62(0x8f)](_0x5d6ccf=>{var _0x3faf27=_0x439f62;return{'idScheduleHistory':_0x1cab48['id'],'parentRecord':_0x1cab48[_0x3faf27(0xc1)],'value':_0x5d6ccf[_0x3faf27(0xae)],'idParameter':_0x5d6ccf[_0x3faf27(0x9c)],'scanWith':_0x3faf27(0x74),'timestamp':_0x160879,'scanBy':scanner,'approved':0x0,'shift':_0x449b6a,'notesRecord':''};});}),_0x2e6aa4=Object[_0x114e7a(0xac)](_0x1b5d99)['reduce'](function(_0x53683a,_0x4a7314){var _0x18baca=_0x114e7a;return _0x53683a[_0x18baca(0x92)](_0x1b5d99[_0x4a7314]);},[]);await fs[_0x114e7a(0xa7)](_0x114e7a(0xa3),JSON[_0x114e7a(0xa0)](_0x2e6aa4))['then'](function(_0x25832f){var _0xdcc421=_0x114e7a;console['log'](_0xdcc421(0xda)[_0xdcc421(0x8c)]);})[_0x114e7a(0x8e)](function(_0x439026){var _0x1b0eef=_0x114e7a;console[_0x1b0eef(0x7b)](_0x1b0eef(0xd1)[_0x1b0eef(0x93)]);});}else _0x2e6aa4=null;return[_0x2e6aa4,_0x3c4d6d,_0x16c869];}var syncronize=async function(_0x10c301,_0x364002){var _0x4ae3c4=_0x2ece88,_0x239414=JSON[_0x4ae3c4(0xa0)](_0x10c301),_0x5469b8={'method':_0x4ae3c4(0x9b),'url':_0x4ae3c4(0xc2),'headers':{'Authorization':'Bearer\x20'+_0x364002,'Content-Type':_0x4ae3c4(0xbb)},'data':_0x239414};return console[_0x4ae3c4(0x7b)](_0x4ae3c4(0xd5)),axios(_0x5469b8)['then'](function(_0x7c05e3){var _0x6a4ab9=_0x4ae3c4;return console[_0x6a4ab9(0x7b)](_0x7c05e3),_0x7c05e3[_0x6a4ab9(0xd6)];})[_0x4ae3c4(0x8e)](function(_0x101b9d){var _0x1ba0f7=_0x4ae3c4;console[_0x1ba0f7(0x7b)](_0x101b9d);});},runit=async function(){var _0x2e7c4a=_0x2ece88;await getInput();if(scanner!='muhammad.aulya'||scanner!=_0x2e7c4a(0x80)||scanner!=_0x2e7c4a(0x90))console[_0x2e7c4a(0x7b)](_0x2e7c4a(0xb2));else{var _0xa4ea33=await fire();_0xa4ea33[0x2]!=null&&_0xa4ea33[0x0]!=null?(_0xa4ea33[0x2][_0x2e7c4a(0xc0)](_0x471c49=>{var _0x4b2ce9=_0x2e7c4a;console[_0x4b2ce9(0x7b)](_0x471c49[_0x4b2ce9(0xb4)]);}),console['log'](Object[_0x2e7c4a(0xac)](_0xa4ea33[0x2])[_0x2e7c4a(0xcd)]+_0x2e7c4a(0x9a)),console[_0x2e7c4a(0x7b)]('Jadwal\x20syncron\x20:\x20'+shift[_0x2e7c4a(0x72)]),console['log']('Waktu\x20sync\x20Equipment\x20terakhir\x20:\x20'+_0xa4ea33[0x0][_0xa4ea33[0x0]['length']-0x1][_0x2e7c4a(0xe8)][_0x2e7c4a(0x72)]),sync=await inquirer[_0x2e7c4a(0x81)]([{'type':_0x2e7c4a(0xcf),'name':_0x2e7c4a(0x86),'message':_0x2e7c4a(0x75),'choices':[_0x2e7c4a(0xc5),'no'],'filter'(_0x3a897b){return _0x3a897b;}}])['then'](_0x158182=>{var _0x428c6a=_0x2e7c4a;return _0x158182[_0x428c6a(0x86)]===_0x428c6a(0xc5)?console[_0x428c6a(0x7b)](syncronize(_0xa4ea33[0x0],_0xa4ea33[0x1])[_0x428c6a(0xd6)]):console['log'](_0x428c6a(0xe3)[_0x428c6a(0x93)]),_0x158182[_0x428c6a(0x86)];})):console[_0x2e7c4a(0x7b)]('Data\x20not\x20available'[_0x2e7c4a(0x93)]);}};runit();

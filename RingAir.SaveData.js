//	RingAir Data to Blockchain v0.0.1
//	Developed by @eaposztrof
//	Requirements: Node.js + steem.js
//		npm install steem --save
//	Use:
//		node ringair.savedata.js <GEO> <CO2> <TVOC> <Temp>
//	Example of use
//		node ringair.savedata.js "47.4850296,19.0766376" "400.16" "0.16" "26.16"
//
//	PLEASE USE THIS CODE WITH RESPECT AND ONLY FOR GOOD!
//

var wif = '';		// Posting Private Key Below
var author='';		// registered account name without @
var devID='';		// RingAir Device ID
var parentPermlink='ringair-portable-device-for-environmental-monitoring-big-data-on-blockchain-first-prototype'; //	post permalink only, post about the project, device and user
var parentAuthor= 'best-buy';	// author of the post without @

//	do not edit below
var geo = process.argv[2];
var co2 = process.argv[3];
var tvoc = process.argv[4];
var temp = process.argv[5];
var title='RingAir Data';
var body='GEO|CO2|TVOC|Temp\r\n-|-|-|-\r\n'+geo+'|'+co2+'|'+tvoc+'|'+temp+'';
var jsonMetadata='{"tags":["ringair-data"],"app":"RingAir/'+devID+'"}';
var steem = require('steem');

console.log('RingAir Data to Blockchain v0.0.1 by @eaposztrof');
console.log('NOTE: Sometimes the Script Fails to Hook Into STEEM. Try Running Script Again if it Fails!');
console.log('Prepared Data:\r\n'+body);

var permlink = steem.formatter.commentPermlink(parentAuthor, parentPermlink);
steem.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
	console.log(err, result);
});

## Description
A Node Module to authenticate and interact with the World of Warcraft community REST API from NodeJS.

## Installation
```
npm install warcraft-node-client
```
```javascript
var Warcraft = require('warcraft-node-client').Warcraft;
```
## Usage
You need to create a [Mashery/Blizzard app](https://dev.battle.net/member/register) to use the API.

```javascript
	//Callback functions
	var error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
	};
	var success = function (data) {
    	console.log('Data [%s]', data);
	};

    var Warcraft = require('warcraft-node-client').Warcraft;

	//Get this data from your mashery application dashboard
	var config = {
    	"consumerKey": "XXX",
    	"consumerSecret": "XXX",
    	"accessToken": "XXX",
    	"accessTokenSecret": "XXX",
    	"callBackUrl": "XXX",
    	"region": "XXX"
	}

    var warcraft = new Warcraft(config);

	//Example calls

    warcraft.getAchievementData({ id: 2144, locale: 'en_US'}, error, success);

    warcraft.getAuctionHouseData({ id: 'bloodhoof', locale: 'en_US'}, error, success);

    warcraft.getBattlePetAbility({ id: 640, locale: 'en_US'}, error, success);

    warcraft.getBattlePetSpecies({ id: 258, locale: 'en_US'}, error, success);

    warcraft.getBattlePetStats({ id: 258, locale: 'en_US'}, error, success);

    warcraft.getBattlePetStats({ id: 258, level: 25, breedId: 5, qualityId: 5,locale: 'en_US'}, error, success);

    warcraft.getChallengeModeData({ id: 'bloodhoof', locale: 'en_US' }, error, success);

    warcraft.getRegionLeaderboardData({ locale: 'en_US' }, error, success);

    warcraft.getCharacterProfileData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterAchievementData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterAppearanceData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterActivityData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterGuildData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterHunterPetData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterItemData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterMountData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterBattlePetData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterPetSlotsData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterProgressionData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterPVPData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterQuestData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterReputationData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterStatData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterTalentData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterTitlesData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getCharacterAuditData('bloodhoof', 'xcelence', error, sucess);

    warcraft.getItemData({ id: 18803, locale: 'en_US' }, error, sucess);

    warcraft.getItemSetData({ id: 1060, locale: 'en_US' }, error, sucess);

    warcraft.getGuildProfileData({ 'stormrage', 'death jesters', error, success);

    warcraft.getGuildMembersData({ 'stormrage', 'death jesters', error, success);

    warcraft.getGuildAchievementsData({ 'stormrage', 'death jesters', error, success);

    warcraft.getGuildNewsData({ 'stormrage', 'death jesters', error, success);

    warcraft.getGuildChallengeModeData({ 'stormrage', 'death jesters', error, success);

    warcraft.getPVPData( '2v2', { locale: 'en_US' }, error, success);

    warcraft.getQuestData({ id: 13146, locale: 'en_US'}, error, success);

```
To get the list of expected parameters and results, check [https://dev.battle.net/io-docs](https://dev.battle.net/io-docs)

## Functions
Can be found in the docs listed above, all of which are also shown above in the examples.

## Tests

There is a test file `WarcraftSpec.js` that does a basic integration tests of the client.
It uses a properties file `test/spec/config.json` to inject in the OAuth properties.
These will need to be updated with your own details before the tests will run

## Running tests

	make test
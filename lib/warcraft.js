'use strict';
var OAuth = require('oauth').Oath;
var qs = require('qs');
var rp = require('request-promise');

function Warcraft(config) {
	this.consumerKey = config.consumerKey;
	this.consumerSecret = config.consumerSecret;
	this.accessToken = config.accessToken;
	this.callBackUrl = config.callBackUrl;
	this.region = config.region;
	this.locale = config.locale;
	this.baseUrl = 'https://' + this.region + '.api.battle.net';
}

Warcraft.prototype.doGet = function(url, error, success) {
	url = url + '&apikey=' + this.consumerKey;
  console.log(url); // remove
	rp(url)
		.then( function (body) {
			success( body );
		})
		.catch((error));
};

Warcraft.prototype.queryString = function(params) {
	if (params && Object.keys(params).length > 0) {
		return '/' + params.id + '?locale=' + params.locale;
		// res = '/' + params.id;
		// delete params['id'];
		// res = res + '?' + qs.stringify(params)
		// return res;
	}
	return '';
};

/**
 *
 * This gets data for an individual achievemnt
 *
 */
Warcraft.prototype.getAchievementData = function(params, error, success) {
	var path = '/wow/achievement' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets a generated auction house data dump
 *
 */
Warcraft.prototype.getAuctionHouseData = function(params, error, success) {
	var path = '/wow/auction/data' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets data for an individual battle pet ability ID
 *
 */
Warcraft.prototype.getBattlePetAbility = function(params, error, success) {
	var path = '/wow/battlePet/ability' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets data for an individual pet species. The species IDs can be found
 * under your character profile using the options pets field. Each species also
 * has data about what it's 6 abilities are.
 *
 */
Warcraft.prototype.getBattlePetSpecies = function(params, error, success) {
	var path = '/wow/battlePet/species' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about a given species of pet
 *
 */
Warcraft.prototype.getBattlePetStats = function(params, error, success) {
	var path = '/wow/battlePet/stats' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * The data in this request has data for all 9 challenge mode maps.
 * The map field incldes the times for each dungeon. Inside each ladder
 * they provide data about each character that was aprt of each run.
 * The character data includes the current cached spec of the character
 * while the member field includes the spec of the character during the
 * challenge mode run.
 *
 */
Warcraft.prototype.getChallengeModeData = function(params, error, success) {
	var path = '/wow/challenge' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets the same exact data as the realm leaderboards except there is
 * no realm field. It is simple the top 100 results for each map for all of
 * the available relam leaderboards in a region.
 *
 */
Warcraft.prototype.getRegionLeaderboardData = function(params, error, success) {
	var path = '/wow/battlePet/stats' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about a given character
 *
 */
Warcraft.prototype.getCharacterProfileData = function(realm, characterName, locale, error, success) {
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about achievement data for a given character
 *
 */
Warcraft.prototype.getCharacterAchievementData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=achievements';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about appearance data for a given character
 *
 */
Warcraft.prototype.getCharacterAppearanceData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=appearance';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about activity feed data for a given character
 *
 */
Warcraft.prototype.getCharacterActivityData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=feed';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about the guild for a given character
 *
 */
Warcraft.prototype.getCharacterGuildData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=guild';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale +fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about the hunter pet data for a given character
 *
 */
Warcraft.prototype.getCharacterHunterPetData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=hunterPets';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about equipped items data for a given character
 *
 */
Warcraft.prototype.getCharacterItemData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=items';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about obtained mount data for a given character
 *
 */
Warcraft.prototype.getCharacterMountData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=mounts';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about battle pet data for a given character
 *
 */
Warcraft.prototype.getCharacterBattlePetData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=pets';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about current battle pet slots data for a given character
 *
 */
Warcraft.prototype.getCharacterPetSlotsData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=petSlots';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about the progression data for a given character
 *
 */
Warcraft.prototype.getCharacterProgressionData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=progression';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about pvp data for a given character
 *
 */
Warcraft.prototype.getCharacterPVPData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=pvp';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about quest data for a given character
 *
 */
Warcraft.prototype.getCharacterQuestData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=quests';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};

/**
 *
 * This gets detailed information about reputation data for a given character
 *
 */
Warcraft.prototype.getCharacterReputationData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=reputation';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about stat and attribute data for a given character
 *
 */
Warcraft.prototype.getCharacterStatData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=stats';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about talent data for a given character
 *
 */
Warcraft.prototype.getCharacterTalentData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=talents';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};



/**
 *
 * This gets detailed information about  titles data for a given character
 *
 */
Warcraft.prototype.getCharacterTitlesData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=titles';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about obtained mount data for a given character
 *
 */
Warcraft.prototype.getCharacterAuditData = function(realm, characterName, locale, error, success) {
	var fields = '?fields=audit';
	var path = '/wow/character/' + realm + '/' + characterName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets data for an individual item ID
 *
 */
Warcraft.prototype.getItemData = function(params, error, success) {
	var path = '/wow/item' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets data for an individual item set ID
 *
 */
Warcraft.prototype.getItemSetData = function(params, error, success) {
	var path = '/wow/item/set' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


/**
 *
 * This gets detailed information about a given guild.
 *
 */
Warcraft.prototype.getGuildProfileData = function(realm, guildName, locale, error, success) {
	var fields = '?fields=achievements,challenge';
	var path = '/wow/guild/' + realm + '/' + guildName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getGuildMembersData = function(realm, guildName, locale, error, success) {
	var fields = '?fields=members';
	var path = '/wow/guild/' + realm + '/' + guildName  + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getGuildAchievementData = function(realm, guildName, locale, error, success) {
	var fields = '?fields=achievements';
	var path = '/wow/guild/' + realm + '/' + guildName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getGuildNewsData = function(realm, guildName, locale, error, success) {
	var fields = '?fields=news';
	var path = '/wow/guild/' + realm + '/' + guildName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getGuildChallengeModeData = function(realm, guildName, locale, error, success) {
	var fields = '?fields=challenge';
	var path = '/wow/guild/' + realm + '/' + guildName + '?locale=' + locale + fields;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getPVPData = function(bracket, locale, error, success) {
	var path = '/wow/guild/' + '?locale=' + locale;
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getQuestData = function(params, error, success) {
	var path = '/wow/quest/' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};

Warcraft.prototype.getRealmStatusData = function(realm, error, success) {
	var path = '/wow/' + realm + '/status';
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getRecipeData = function(params, error, success) {
	var path = '/wow/recipe' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getSpellData = function(params, error, success) {
	var path = '/wow/spell' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getBattleGroupsData = function(params, error, success) {
	var path = '/wow/data/battlegroups' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getCharacterRacesData = function(params, error, success) {
	var path = '/wow/data/character/races' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getCharacterClassesData = function(params, error, success) {
	var path = '/wow/data/character/classes' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getCharacterAchievementsData = function(params, error, success) {
	var path = '/wow/data/character/achievements' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getGuildRewardsData = function(params, error, success) {
	var path = '/wow/data/guild/rewards' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getGuildPerksData = function(params, error, success) {
	var path = '/wow/data/guild/perks' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getGuildAchievementsData = function(params, error, success) {
	var path = '/wow/data/guild/achievements' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getItemClassesData = function(params, error, success) {
	var path = '/wow/data/item/classes' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getTalentData = function(params, error, success) {
	var path = '/wow/data/talents' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


Warcraft.prototype.getPetTypesData = function(params, error, success) {
	var path = '/wow/data/pet/types' + this.queryString(params);
	var url = this.baseUrl + path;
	return this.doGet(url, error, success);
};


exports.Warcraft = Warcraft;


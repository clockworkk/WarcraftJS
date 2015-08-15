var Warcraft = require('../../lib/warcraft').Warcraft;
var fs = require('fs');

describe("Warcraft", function() {
	var warcraft;
	var config;
	var error = function(err, response, body) {
		console.log('ERROR [%s]', err);
		done();
	};

	beforeEach(function(done) {
		config = JSON.parse(fs.readFileSync('./test/spec/config.json', encoding="ascii"));
		warcraft = new Warcraft(config);
		expect(warcraft).toBeDefined();
		done();
	});

	it('should get individual achievement data', function (done) {
		var params = {
			id: '2144',
			locale: 'en_US'
		};
		warcraft.getAchievementData(params, error,
			function (data){
				expect(JSON.parse(data)['id']).toEqual(params.id);
				done();
			}
		);
	});


	it('should get Auction House data', function (done) {
		var params = {
			id: 'bloodhoof',
			locale: 'en_US'
		};
		warcraft.getAuctionHouseData(params, error,
			function (data) {
				expect(JSON.parse(data)['files'][0]['url'].not.toBeUnefined());
				done();
			}
		);
	});


	it('should get battle pet ability data', function (done) {
		var params = {
			id: '640',
			locale: 'en_US'
		};
		warcraft.getBattlePetAbility(params, error,
			function (data) {
				expect(JSON.parse(data)['id']).toEqual(params.id);
				done();
			}
		);
	});


	it('should get battle pet species data', function (done) {
		var params = {
			id: '258',
			locale: 'en_US'
		};
		warcraft.getBattlePetSpecies(params, error,
			function (data) {
				expect(JSON.parse(data)['speciesId']).toEqual(params.id);
				done();
			}
		);
	});


	it('should get detailed information about a given species of pet', function (done) {
		var params = {
			id: '258',
			locale: 'en_US'
		};
		warcraft.getBattlePetStats(params, error,
			function (data) {
				expect(JSON.parse(data)['speciesId']).toEqual(params.id);
			}
		);
	});


	it('should get detailed information about a given species of pet given optional parameters', function (done) {
		var params = {
			id: '258',
			level: '25',
			breedId: '5',
			qualityId: '5',
			locale: 'en_US'
		};
		warcraft.getBattlePetStats(params, error,
			function (data) {
				expect(JSON.parse(data)['speciesId']).toEqual(params.id);
				expect(JSON.parse(data)['level']).toEqual(params.level);
				expect(JSON.parse(data)['breedId']).toEqual(params.breedId);
				expect(JSON.parse(data)['qualityId']).toEqual(params.qualityId);
			}
		);
	});


	it('should get detailed information about challenge mode maps for a given realm', function (done) {
		var params = {
			id: 'bloodhoof',
			locale: 'en_us'
		};
		warcraft.getChallengeModeData(params, error,
			function (data) {
				expect(JSON.parse(data)['challengeMode'][0]['realm']).toEqual(params.id);
			}
		);
	});











});
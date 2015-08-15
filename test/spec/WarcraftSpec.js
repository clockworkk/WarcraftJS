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

	it('should get individual achievement data', function(done) {
		var params = {
			id: '2144',
			locale: 'en_US'
		};
		warcraft.getAchievementData(params, error,
			function(data){
				console.log(data);
				expect(JSON.parse(data)['id']).toEqual(params.id);
				done();
			}
		);
	}, 10000);



});
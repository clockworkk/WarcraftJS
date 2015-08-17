var Warcraft = require('../../lib/warcraft').Warcraft;
var fs = require('fs');

describe("Warcraft", function() {
	var warcraft;
	var config;
	var error = function(err, response, body) {
		console.log('ERROR [%s]', err);
		done();
	};

	var success = function (data) {
		console.log('Data [%s]', data);
		done();
  };

	beforeEach(function(done) {
		config = JSON.parse(fs.readFileSync('./test/spec/config.json', encoding='ascii'));
		warcraft = new Warcraft(config);
		expect(warcraft).toBeDefined();
		done();
	});

	it('should get individual achievement data', function (done) {
		var params = {
			id: 2144,
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
        expect(JSON.parse(data)['files'][0]['url'].toBeDefined());
        done();
			}
		);
	});


	it('should get battle pet ability data', function (done) {
		var params = {
			id: 640,
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
			id: 258,
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
			id: 258,
			locale: 'en_US'
		};
		warcraft.getBattlePetStats(params, error,
			function (data) {
				expect(JSON.parse(data)['speciesId']).toEqual(params.id);
				done();
			}
		);
	});


	it('should get detailed information about a given species of pet given optional parameters', function (done) {
		var params = {
			id: 258,
			level: 25,
			breedId: 5,
			qualityId: 5,
			locale: 'en_US'
		};
		warcraft.getBattlePetStats(params, error,
			function (data) {
				expect(JSON.parse(data)['speciesId']).toEqual(params.id);
				expect(JSON.parse(data)['level']).toEqual(params.level);
				expect(JSON.parse(data)['breedId']).toEqual(params.breedId);
				expect(JSON.parse(data)['petQualityId']).toEqual(params.qualityId);
				done();
			}
		);
	});


	it('should get detailed information about challenge mode maps for a given realm', function (done) {
		var params = {
			id: 'bloodhoof',
			locale: 'en_US'
		};
		warcraft.getChallengeModeData(params, error,
			function (data) {
				expect(JSON.parse(data)['challengeMode'][0]['realm']).toEqual(params.id);
				done();
			}
		);
	});


  it('should get detailed information about region leaderboards for challenge mode maps.', function (done) {
    var params = {
      locale: 'en_US'
    };
    warcraft.getRegionLeaderboardData(params, error,
      function (data) {
        expect(JSON.parse(data)).toEqual(1); //change this
        done();
      }
    );
  });


  it('should get detailed information about a specific character', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterProfileData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s achievement data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterAchievementData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s appearance data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterAppearanceData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s activity feed data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterActivityData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s guild data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterGuildData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s hunter pet data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterHunterPetData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s item data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterItemData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s mount data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterMountData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s battle pet data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterBattlePetData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s pets in pet slots data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterPetSlotsData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s raid progression data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterProgressionData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s PVP data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterPVPData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s quest data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterQuestData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s reputation data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterReputationData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s stat data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterStatData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s talents', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterTalentData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s Titles', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterTitlesData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific character\'s audit data', function (done) {
    var params = {
      realm: 'bloodhoof',
      character: 'xcelence',
      locale: 'en_US',
    };
    warcraft.getCharacterAuditData(params.realm, params.character, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.character);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific guild\'s data', function (done) {
    var params = {
      realm: 'bloodhoof',
      guild: 'dark pact',
      locale: 'en_US',
    };
    warcraft.getGuildProfileData(params.realm, params.guild, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.guild);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific guild\'s member data', function (done) {
    var params = {
      realm: 'bloodhoof',
      guild: 'dark pact',
      locale: 'en_US',
    };
    warcraft.getGuildMembersData(params.realm, params.guild, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.guild);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific guild\'s achievement data', function (done) {
    var params = {
      realm: 'bloodhoof',
      guild: 'dark pact',
      locale: 'en_US',
    };
    warcraft.getGuildAchievementData(params.realm, params.guild, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.guild);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific guild\'s news data', function (done) {
    var params = {
      realm: 'bloodhoof',
      guild: 'dark pact',
      locale: 'en_US',
    };
    warcraft.getGuildNewsData(params.realm, params.guild, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.guild);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about a specific guild\'s challenge mode data', function (done) {
    var params = {
      realm: 'bloodhoof',
      guild: 'dark pact',
      locale: 'en_US',
    };
    warcraft.getGuildChallengeModeData(params.realm, params.guild, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['name'].toLowerCase()).toEqual(params.guild);
        expect(JSON.parse(data)['realm'].toLowerCase()).toEqual(params.realm);
        done();
      }
    );
  });


  it('should get detailed information about pvp data for a given bracket', function (done) {
    var params = {
      bracket: '2v2',
      locale: 'en_US'
    };
    warcraft.getPVPData(params.bracket, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['rows'][0]['ranking']).toEqual(1);
        done();
      }
    );
  })




});
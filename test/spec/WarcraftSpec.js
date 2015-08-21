var Warcraft = require('../../lib/warcraft').Warcraft;
var fs = require('fs');

jasmine.getEnv().defaultTimeoutInterval = 30000;

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
        res = JSON.parse(data)['files'][0]['url'];
        expect(typeof res).toEqual('string');
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


	it('should get detailed information about a given species of pet\'s stats given optional parameters', function (done) {
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
				expect(JSON.parse(data)['challenge'][0]['realm']['slug']).toEqual(params.id);
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
  });


  it('should get detailed information about a specific item', function (done) {
    var params = {
      itemId: 18803,
      locale: 'en_US'
    };
    warcraft.getItemData(params.itemId, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['id']).toEqual(params.itemId);
        done();
      }
    );
  });

  it('should get detailed information about an individual item set', function (done) {
    var params = {
      itemId: 1060,
      locale: 'en_us'
    };
    warcraft.getItemSetData(params.itemId, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['id']).toEqual(params.itemId);
        done();
      }
    );
  });

  it('should get detailed information about a specific quest', function (done) {
    var params = {
      questId: 13146,
      locale: 'en_US'
    };
    warcraft.getQuestData(params.questId, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['id']).toEqual(params.questId);
      }
    );
  });

  // Get realm status
  it('should get detailed information about a specific profession recipe', function (done) {
    var params = {
      recipeId: 33994,
      locale: 'en_US'
    };
    warcraft.getRecipeData(params.recipeId, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['id']).toEqual(params.recipeId);
      }
    );
  });

  // Get spell data
  it('should get detailed information about a specific spell', function (done) {
    var params = {
      spellId: 8056,
      locale: 'en_US'
    };
    warcraft.getSpellData(params.spellId, params.locale, error,
      function (data) {
        expect(JSON.parse(data)['id']).toEqual(params.spellId);
      }
    );
  });

  // get battlegroups data

  // Get character races data
  it('should get detailed information about the character races', function (done) {
    var params = {
      locale: 'en_US'
    };
    warcraft.getCharacterRacesData(params.locale, error,
      function (data) {
        expect(JSON.parse(data)['races'][0]['id']).toEqual(1);
      }
    );
  });

  // get character classes data
  it("should get detailed information about the different character classes", function (done) {
    var params = {
      locale: 'en_US'
    };
    warcraft.getCharacterClassesData(params.locale, error,
      function (data) {
        expect(JSON.parse(data)['classes'][0]['id']).toEqual(3);
      }
    );
  });

  // get character achievements data
  it("should get detailed information about all of the different achievements in the game", function (done) {
    var params = {
      locale: 'en_US'
    };
    warcraft.getAllAchivementsData(params.locale, error,
      function (data) {
        expect(JSON.parse(data)['achievements'][0]['id']).toEqual(9);
      }
    );
  });

  // get Guild rewards data
  it("should get detailed information about all of the different guild rewards available in the game", function (done) {
    var params = {
      locale: 'en_us'
    };
    warcraft.getGuildRewardsData(params.locale, error,
      function (data) {
        expect(JSON.parse(data)['rewards'][0]['minGuildLevel']).toEqual(0);
      }
    );
  });

  // get guild perks data
  it("should get detailed information about all of the different guild perks available in the game", function (done) {
    var params = {
      locale: 'en_us'
    };
    warcraft.getGuildPerksResourcesData(params.locale, error,
      function (data) {
        expect(JSON.parse(data)['perks'][0]['id']).toEqual(1);
      }
    );
  });

  // get guild achievements data
    it("should get detailed information about all of the different guild achievements available in the game", function (done) {
    var params = {
      locale: 'en_us'
    };
    warcraft.getGuildPerksAchievementsData(params.locale, error,
      function (data) {
        expect(JSON.parse(data)['achievements'][0]['id']).toEqual(5362);
      }
    );
  });

  // get item classes data
    it("should get a list of item classes", function (done) {
    var params = {
      locale: 'en_us'
    };
    warcraft.getItemClassesData(params.locale, error,
      function (data) {
        expect(JSON.parse(data)['classes'][0]['class']).toEqual(17);
      }
    );
  });

  // get talent data
  it("should get a list of talents, specs and glyphs for each class.", function (done) {
    var params = {
      locale: 'en_us'
    };
    warcraft.getTalentData(params.locale, error,
      function (data) {
        expect(JSON.parse(data)['1']['glyphs'][0]['glyph']).toEqual(483);
      }
    );
  });

  // get pet types data
  it("should get a list of the different battle pet types (including what they are strong and weak against)", function (done) {
    var params = {
      locale: 'en_us'
    };
    warcraft.getPetTypesData(params.locale, error,
      function (data) {
        expect(JSON.parse(data)['petTypes'][0]['id']).toEqual(0);
      }
    );
  });



});
(function() {
  var BrowserPoniesBaseConfig = {
    ponies: [{
      "ini": "Name,Lyra\nCategories,\"supporting ponies\",mares,unicorns\nBehavior,stand,0.25,10,3,0,lyra_stand_right.gif,lyra_stand_left.gif,MouseOver,,,,False,0,0,,True,,,\"46,42\",\"0,0\",False,0,Fixed\nBehavior,happybounce,0.1,15,3,0,lyra_jump_right.gif,lyra_jump_left.gif,None,,,,False,0,0,,True,,,\"60,114\",\"43,114\",False,0,Fixed\nBehavior,walk,0.25,15,3,3,walk_right.gif,walk_left.gif,Diagonal_horizontal,,,,False,0,0,,True,,,\"53,44\",\"44,44\",False,0,Fixed\nBehavior,sit,0.25,15,3,0,lyra_sit_right.gif,lyra_sit_left.gif,MouseOver,,,,False,0,0,,True,,,\"0,0\",\"0,0\",False,0,Fixed\nBehavior,follow,0.02,60,15,3,walk_right.gif,walk_left.gif,All,,hi,,False,39,0,Bon-Bon,True,,,\"53,44\",\"44,44\",False,0,Fixed\nBehavior,sleep,0.15,15,5,0,lyra_sleep_right.gif,lyra_sleep_left.gif,Sleep,,,,False,0,0,,True,,,\"0,0\",\"0,0\",False,0,Fixed\nBehavior,lyrabon,0.25,40,35,0,lyrabench-big.gif,lyrabench-big.gif,None,,sit,,True,0,0,,True,,,\"0,0\",\"0,0\",False,0,Fixed\nBehavior,lyrashine,0.25,40,35,0,lyrabench-big.gif,lyrabench-big.gif,None,,,,True,0,0,,True,,,\"0,0\",\"0,0\",False,0,Fixed\nSpeak,\"Unnamed #1\",\"Where's Bon-Bon?\",,False,0\nSpeak,sit,\"Hey Bon-Bon, come here!\",,True,0\nSpeak,hi,Bon-Bon~,,True,0\n",
      "baseurl": "ponies/lyra/"
    }]
  };

  var cfg = {
    "baseurl": "https://panzi.github.io/Browser-Ponies/",
    "fadeDuration": 500,
    "volume": 1,
    "fps": 25,
    "speed": 3,
    "audioEnabled": false,
    "showFps": false,
    "showLoadProgress": false,
    "dontSpeak": true,
    "spawn": {
      "lyra": 1
    },
    "autostart": false
  };

  BrowserPonies.setBaseUrl(cfg.baseurl);
  BrowserPonies.loadConfig(BrowserPoniesBaseConfig);
  BrowserPonies.loadConfig(cfg);
  BrowserPonies.start();
})();

function loadPonies() {
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
      "sparkler": 1,
      "twilight sparkle": 1
    },
    "autostart": true
  };
  BrowserPonies.setBaseUrl(cfg.baseurl);
  BrowserPonies.loadConfig(BrowserPoniesBaseConfig);
  BrowserPonies.loadConfig(cfg);
}

loadPonies();

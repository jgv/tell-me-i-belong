var App = App || {};

App = {
  'root': 'http://207.251.86.238/cctv',
  'proxy': 'http://s173418.gridserver.com/cams/cams.php?id=',
  'stream': {},
  'playlist': null,
  'trackPosition': 0,
  'canvas': null,
  'ctx': null,
  'goodCams': "1 2 3 4 5 6 7 9 10 12 13 14 15 16 18 19 20 21 22 23 24 25 26 27 28 31 33 35 36 38 42 43 44 45 46 47 48 49 50 52 53 55 56 57 58 59 60 64 65 66 67 68 69 71 72 74 83 84 89 90 95 96 98 102 103 105 106 111 113 122 129 134 137 139 144 146 148 149 153 171 190 191 193 195 198 369 368 361 360 371 363 364 365 366 164 367 390 328 403 398 410 399 400 415 409 408 170 173 414 416 420 359 178 172 187 421 445 175 434 166 329 182 188 253 184 185 186 437 436 183 162 189 157 413 412 404 405 285 406 411 287 466 446 419 426 427 320 344 438 301 441 338 462 464 433 432 431 322 135 140 138 386 388 389 384 428 439 440 207 393 395 425 424 453 457 459 458 460 454 455 456 321 194 327 318 203 277 197 302 391 443 383 448 396 450 281 143 120 316 315 127 372 270 121 314 290 402 289 288 299 213 325 324 303 286 259 358 397 254 258 112 256 257 382 305 340 400".split(' '),
  'loadCamera': function(){

    console.log('loading new camera');

    var xhr = new XMLHttpRequest(),
    id = App.goodCams[Math.floor(Math.random() * App.goodCams.length)], t;

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {

        if (JSON.parse(xhr.response) === true) {

          clearTimeout(App.loadingTimer);
          clearTimeout(t);
          clearTimeout(App.timer);

          App.timer = window.setInterval(function(){
            var image = new Image();
            image.onload = function(){
              App.canvas.width = App.canvas.width;

              App.canvas.width = window.innerWidth;
              App.canvas.height = window.innerHeight;
              if (App.isMobile) {
                var w = App.canvas.width, h = (w / 4) * 3;
                App.ctx.drawImage(image, 0, App.canvas.height / 2 - h / 2, w, h);
              } else {
                var h = window.innerHeight, w = (h * 4) / 3;
                App.ctx.drawImage(image, App.canvas.width / 2 - w / 2, App.canvas.height / 2 - h / 2, w, h); // middle
                App.ctx.drawImage(image, (App.canvas.width / 2 - w / 2) - w, App.canvas.height / 2 - h / 2, w, h); // left
                App.ctx.drawImage(image, (App.canvas.width / 2 - w / 2) + w, App.canvas.height / 2 - h / 2, w, h); // right

                document.getElementById('screenshot').setAttribute('href', image.src);

                App.ctx.font = "lighter 11px monospace";
                App.ctx.fillStyle = "#ffffff";

                var text = "Camera No. " + id;
                var textWidth = App.ctx.measureText(text).width;
                App.ctx.fillText(text, window.innerWidth / 2 - textWidth / 2 , window.innerHeight - 20);
                var title = App.playlist.tracks[App.trackPosition].title;
                var titleWidth = App.ctx.measureText(title).width;
                App.ctx.fillText(title, window.innerWidth / 2 - titleWidth / 2 , window.innerHeight - 10);

              }


            };
            image.src = App.root + id + ".jpg" + "?math=" + Date.now();
          }, 500);

        } else {

          t = setTimeout(App.loadCamera(), 250);
        }

      }
    };
    xhr.open("GET", App.proxy + id, true);
    xhr.send();
  },
  'loading': function(){

    App.canvas.width = window.innerWidth;
    App.canvas.height = window.innerHeight;

    App.loadingTimer = window.setInterval(function(){
    App.canvas.width = App.canvas.width;
      App.ctx.font = "lighter 22px monospace";
      App.ctx.fillStyle = "#ffffff";

      var text = new Date();
      var w = App.ctx.measureText(text).width;
      var h = App.ctx.measureText(text).height;

      App.ctx.fillText(text, window.innerWidth / 2 - w / 2 , window.innerHeight / 2 - 10);
    }, 500);

  },
  'init': function(){

    getComputedStyle(document.getElementById('play')).display != "none" ? App.isMobile = true : this.loading();

    SC.initialize({ client_id: "10fa02e457132d5188ae6dd3ed8a5468" });

    var uri;
    App.isMobile ? uri = "http://soundcloud.com/user85824445/lvrsmpiqasbt" : uri = "https://soundcloud.com/jimestack/sets/tell-me-i-belong/s-bDFq4";

    SC.get('/resolve', { url: uri, client_id: "10fa02e457132d5188ae6dd3ed8a5468" }, function(res){
      if (!res.errors) App.playlist = res;

      if (App.isMobile) {
        App.loadMobile(res.id);
      } else {
        App.loadDesktopPlayer();
        App.loadCamera();

        (function(){
          window.setInterval(function(){
            App.loadCamera();
          }, 9500);
        })();

      }
    });

  },
  'loadDesktopPlayer': function(){

    var next = function(){
      App.trackPosition++;
      if (!App.playlist.tracks[App.trackPosition]) App.trackPosition = 0;

      console.log('playing' + App.playlist.tracks[App.trackPosition].title);
      SC.stream('/tracks/' + App.playlist.tracks[App.trackPosition].id, {
        useHTML5Audio: true,
        preferFlash: false
      }, function(sound) {
        sound.play({
          onfinish: next
        });
        App.stream = sound;
      });
    };

    SC.stream('/tracks/' + App.playlist.tracks[App.trackPosition].id, {
      useHTML5Audio: true,
      preferFlash: false
    }, function(sound) {
      sound.play({
        onfinish: next
      });
      App.stream = sound;
    });
  },
  'loadMobile': function(id){

    var soundToPlay, trigger = document.getElementById('sc-trigger'), play = document.getElementById('play');

    // for mobile need to stream track, not playlist
    SC.stream('/tracks/' + id, { useHTML5Audio: true, preferFlash: false }, function(sound) {
      soundToPlay = sound;
    });

    trigger.addEventListener('touchend', function(){

      console.log('clicked trigger')

      soundToPlay.play();
      play.className += " fadeout";

      App.loadCamera(); // load a camera

      (function(){
        window.setInterval(function(){
          App.loadCamera();
        }, 9500);
      })();
    });
  }
};

window.onload = function(){
  App.canvas = document.getElementById('canvas');
  App.ctx = App.canvas.getContext('2d');
  App.init();
};

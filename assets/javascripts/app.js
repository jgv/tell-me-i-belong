var App = App || {};

App = {
  'root': 'http://207.251.86.238/cctv',
  'stream': {},
  'playlist': null,
  'trackPosition': 0,
  'canvas': null,
  'ctx': null,
  'goodCams': "1 2 3 4 5 6 7 9 10 12 13 14 15 16 18 19 20 22 25 27 28 31 33 35 36 38 42 43 44 48 49 50 53 55 56 57 58 64 65 66 67 68 69 71 72 74 83 84 90 96 98 102 103 106 111 122 134 144 146 148 149 171 191 193 198 369 368 361 360 371 363 364 365 366 367 390 328 403 398 410 399 400 409 408 170 414 416 420 359 178 172 187 421 445 434 166 329 188 185 186 437 436 183 162 189 157 413 412 404 405 285 406 411 287 466 446 419 426 427 320 344 438 441 338 462 464 433 432 431 322 138 386 388 389 384 428 439 440 393 395 425 424 453 457 458 460 454 455 321 194 327 318 203 277 302 391 443 383 448 396 450 281 143 120 316 315 127 372 314 290 402 289 299 213 324 303 286 259 358 397 254 258 382 305 340 400".split(' '),
  'loadCamera': function(){

    //console.log('loading new camera');

    var xhr = new XMLHttpRequest(),
    id = App.goodCams[Math.floor(Math.random() * App.goodCams.length)], t;

    clearTimeout(App.loadingTimer);
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

  },
  'tweaker': function(){
    App.canvas.width = window.innerWidth;
    App.canvas.height = window.innerHeight
    console.log('tweakin');
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
    App.isMobile ? uri = "https://soundcloud.com/user85824445/8tkoowbpxfxm" : uri = "https://soundcloud.com/jimestack/sets/tell-me-i-belong";

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

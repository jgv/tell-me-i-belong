window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback, element) {
      callback();
    };
})();

var App = App || {};

function Cam(camId) {
  var canvas = document.getElementById('canvas');
  this.id = camId;
  this.el = canvas;
  //this.el.id = 'cam';
//  this.description = document.createElement('div');
//  this.description.innerHTML = "<p>NYC Traffic Camera No. " + camId + "</p>";
  this.ctx = this.el.getContext('2d');
  document.body.appendChild(this.el);
//  document.body.appendChild(this.description);
  console.log(this)
  window.clearInterval(App.timer)
  return this;
}

Cam.prototype = {
  destroy: function(){
    return;
    var cam = document.getElementById(this.el.id);
    if (cam) {
      cam.classname = "fadeout"
      window.setTimeout(function(){
        cam.parentNode.removeChild(cam);
      }, 250);
    }
  },
  insert: function(){
    document.body.appendChild(this.el)
  },
  inService: function(){
  }
};

App = {
  'root': 'http://207.251.86.238/cctv',
  'track': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/155709900%3Fsecret_token%3Ds-ZyATf',
  'canvas': null,
  'ctx': null,
  'interval': null,
  'cam': null,
  'goodCams': "1 2 3 4 5 6 7 9 10 12 13 14 15 16 18 19 20 21 22 23 24 25 26 27 28 31 33 35 36 38 42 43 44 45 46 47 48 49 50 52 53 55 56 57 58 59 60 64 65 66 67 68 69 71 72 74 83 84 89 90 95 96 98 102 103 105 106 111 113 122 129 134 137 139 144 146 148 149 153 171 190 191 193 195 198 369 368 361 360 371 363 364 365 366 164 367 390 328 403 398 410 399 400 415 409 408 170 173 414 416 420 359 178 172 187 421 445 175 434 166 329 182 188 253 184 185 186 437 436 183 162 189 157 413 412 404 405 285 406 411 287 466 446 419 426 427 320 344 438 301 441 338 462 464 433 432 431 322 135 140 138 386 388 389 384 428 439 440 207 393 395 425 424 453 457 459 458 460 454 455 456 321 194 327 318 203 277 197 302 391 443 383 448 396 450 281 143 120 316 315 127 372 270 121 314 290 402 289 288 299 213 325 324 303 286 259 358 397 254 258 112 256 257 382 305 340 400".split(" "),
  'loadCamera': function(){

    console.log('loading new camera');

    var xhr = new XMLHttpRequest(),
    id = App.goodCams[Math.floor(Math.random() * App.goodCams.length)], t;

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {

        if (JSON.parse(xhr.response) === true) {

          clearTimeout(t);
          clearTimeout(App.timer);

          console.log('hey')

          App.timer = window.setInterval(function(){
            var image = new Image();
            image.onload = function(){
              App.canvas.width = App.canvas.width;
              App.canvas.width = window.innerWidth;
              App.canvas.height = window.innerHeight;
              if (App.isMobile) {
                var w = 250, h = (w / 4) * 3;
                App.ctx.drawImage(image, App.canvas.width / 2 - w / 2, App.canvas.height / 2 - h / 2, w, h);
              } else {
                var w = App.canvas.width * .7, h = (w / 4) * 3;
                App.ctx.drawImage(image, App.canvas.width / 2 - w / 2, App.canvas.height / 2 - h / 2, w, h);
              }

              App.ctx.font = "lighter 11px monospace";
              App.ctx.fillStyle = "#ffffff";
              var text = "Camera No. " + id;
              var textWidth = App.ctx.measureText(text).width;
              App.ctx.fillText(text, window.innerWidth / 2 - textWidth / 2 , window.innerHeight - 10);
            };
            image.src = App.root + id + ".jpg" + "?math=" + Date.now();
          }, 500);

        } else {

          t = setTimeout(App.loadCamera(), 250);
        }

      }
    }
    xhr.open("GET", "http://s173418.gridserver.com/cams/cams.php?id=" + id, true);
    xhr.responseType = "json";
    xhr.send();
  },
  'init': function(){

    this.loadPlayer(); // load soundcloud

    if (getComputedStyle(document.getElementById('play')).display != "none") {
      App.isMobile = 'true';
      App.mobileEvents();
    } else {
      this.loadCamera(); // load a camera

      (function(){
        window.setInterval(function(){
          App.loadCamera();
        }, 9500);
      })();
    }

  },
  'serialize': function(obj) {
    var str = [];
    for(var p in obj) {
      if (obj.hasOwnProperty(p)) str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return str.join("&");
  },
  'loadPlayer': function(){
    var iframe = document.createElement('iframe');
    iframe.id = 'sc';
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', 'no')

    var params = {
      'auto_play': true,
      'buying': false,
      'liking': true,
      'download': false,
      'sharing': false,
      'show_artwork': false,
      'show_comments': false,
      'show_playcount': false,
      'show_user': false
    };

    iframe.src = this.track + '&' + this.serialize(params);

    document.body.appendChild(iframe);

  },
  'mobileEvents': function(){

    SC.initialize({
      client_id: "10fa02e457132d5188ae6dd3ed8a5468"
    });

    var soundToPlay, trigger = document.getElementById('sc-trigger'), play = documenet.getElementById('play');

    SC.stream("/tracks/117531055", { useHTML5Audio: true, preferFlash: false }, function(sound) {
      soundToPlay = sound;
      // fade in button here

      play.fadeout.className += " fadein";
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
}

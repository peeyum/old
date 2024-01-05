(function (_0x575631, _0x39f04a) {
    var _0x41b410 = _0x575631();
    while (true) {
      try {
        var _0x396eb2 = parseInt(_0x3831(410, 0xb0)) / 1 + -parseInt(_0x3831(418, 0x4df)) / 2 + -parseInt(_0x3831(526, 0x531)) / 3 + parseInt(_0x3831(449, 0x111)) / 4 * (parseInt(_0x3831(423, 0x126)) / 5) + -parseInt(_0x3831(536, 0x19f)) / 6 * (-parseInt(_0x3831(412, 0x4d8)) / 7) + -parseInt(_0x3831(386, 0x46c)) / 8 + parseInt(_0x3831(517, 0x13d)) / 9;
        if (_0x396eb2 === _0x39f04a) {
          break;
        } else {
          _0x41b410.push(_0x41b410.shift());
        }
      } catch (_0x4e448b) {
        _0x41b410.push(_0x41b410.shift());
      }
    }
  })(_0x34bc, 475592);
  var _0x3f9f1e = function () {
    var _0x1d999c = true;
    return function (_0x20a33c, _0x55b170) {
      var _0x317ac3 = _0x1d999c ? function () {
        if (_0x55b170) {
          var _0x9b61f9 = _0x55b170.apply(_0x20a33c, arguments);
          _0x55b170 = null;
          return _0x9b61f9;
        }
      } : function () {};
      _0x1d999c = false;
      return _0x317ac3;
    };
  }();
  var _0x47b875 = _0x3f9f1e(this, function () {
    return _0x47b875.toString().search("(((.+)+)+)+$").toString().constructor(_0x47b875).search("(((.+)+)+)+$");
  });
  function _0x2ae854(_0x4c396a, _0x49e27d, _0x10fbf0, _0x19c366) {
    return _0x3831(_0x49e27d - 0x2bf, _0x19c366);
  }
  _0x47b875();
  var _0x2ddd80 = function () {
    var _0x1d6da5 = true;
    return function (_0x1f67aa, _0x5b33be) {
      var _0x2f796d = _0x1d6da5 ? function () {
        if (_0x5b33be) {
          var _0x49450d = _0x5b33be.apply(_0x1f67aa, arguments);
          _0x5b33be = null;
          return _0x49450d;
        }
      } : function () {};
      _0x1d6da5 = false;
      return _0x2f796d;
    };
  }();
  var _0x569f17 = _0x2ddd80(this, function () {
    var _0x1b1fce = function () {
      var _0x3cb11b;
      try {
        _0x3cb11b = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x42e426) {
        _0x3cb11b = window;
      }
      return _0x3cb11b;
    };
    var _0x1711ae = _0x1b1fce();
    var _0x2a958a = _0x1711ae.console = _0x1711ae.console || {};
    var _0xc81ecd = ["log", "warn", 'info', 'error', "exception", "table", "trace"];
    for (var _0x375699 = 0; _0x375699 < _0xc81ecd.length; _0x375699++) {
      var _0x202c45 = 0;
      var _0x527314 = _0x2ddd80.constructor.prototype.bind(_0x2ddd80);
      var _0x48ea05 = _0xc81ecd[_0x375699];
      var _0x4214aa = _0x2a958a[_0x48ea05] || _0x527314;
      _0x527314.__proto__ = _0x2ddd80.bind(_0x2ddd80);
      _0x527314.toString = _0x4214aa.toString.bind(_0x4214aa);
      _0x2a958a[_0x48ea05] = _0x527314;
    }
  });
  _0x569f17();
  function _0x3831(_0x47b875, _0x3f9f1e) {
    var _0x34bce3 = _0x34bc();
    _0x3831 = function (_0x38315e, _0x49cb2e) {
      _0x38315e = _0x38315e - 385;
      var _0x1c66e2 = _0x34bce3[_0x38315e];
      return _0x1c66e2;
    };
    return _0x3831(_0x47b875, _0x3f9f1e);
  }
  function _0x26f4dd(_0x29d108, _0x2448a0, _0x3f05f5, _0xe01b98) {
    return _0x3831(_0x2448a0 + 0x215, _0x3f05f5);
  }
  var _0x5e4db7 = {
    hoverEffect: "circle-move",
    hoverItemMove: false,
    defaultCursor: false,
    outerWidth: 0x1e,
    outerHeight: 0x1e
  };
  options = _0x5e4db7;
  magicMouse(options);
  document.addEventListener("DOMContentLoaded", function () {
    var _0x500895 = document.querySelector(".enter");
    var _0x51cd99 = document.querySelector(".enter img");
    var _0x27ab96 = document.querySelector(".sbox");
    var _0x3d6c10 = document.querySelector(".dev");
    var _0x3d50b2 = document.querySelector(".status");
    var _0x4e1b7e = document.querySelector(".statusWrap");
    _0x51cd99.addEventListener("click", function () {
      _0x27ab96.style.opacity = '1';
      _0x51cd99.style.opacity = '0';
      _0x500895.classList.add('enterClear');
      setTimeout(function () {
        _0x500895.remove();
      }, 200);
      var _0x3aa62a = document.getElementById('mainAudio');
      _0x3aa62a.volume = 0;
      _0x3aa62a.play();
      var _0x5c08d5 = _0x3aa62a.volume;
      function _0x3917de() {
        if (_0x5c08d5 < 1) {
          _0x5c08d5 += 0.01;
          _0x5c08d5 = Math.min(_0x5c08d5, 1);
          _0x3aa62a.volume = _0x5c08d5;
          setTimeout(_0x3917de, 70);
        }
      }
      _0x3917de();
    });
    _0x51cd99.addEventListener('mouseenter', function () {
      this.src = "assets/img/eye-close.svg";
    });
    _0x51cd99.addEventListener("mouseleave", function () {
      this.src = "assets/img/eye-open.svg";
    });
    _0x3d6c10.addEventListener("click", function () {
      var _0x284f6d = document.querySelector('body');
      if (!_0x284f6d.classList.contains("dev")) {
        var _0x2c651a = document.getElementById('c');
        var _0x52c17e = _0x2c651a.getContext('2d');
        _0x2c651a.height = window.innerHeight;
        _0x2c651a.width = window.innerWidth;
        var _0x35f7f7 = 'neo';
        _0x35f7f7 = _0x35f7f7.split('');
        var _0x5b3f00 = _0x2c651a.width / 11;
        var _0x3b9cd5 = [];
        for (var _0x5c5366 = 0; _0x5c5366 < _0x5b3f00; _0x5c5366++) {
          _0x3b9cd5[_0x5c5366] = 1;
        }
        function _0x4fb444() {
          _0x52c17e.fillStyle = "rgba(0, 0, 0, 0.04)";
          _0x52c17e.fillRect(0, 0, _0x2c651a.width, _0x2c651a.height);
          _0x52c17e.fillStyle = "#2ea967";
          _0x52c17e.font = "11px arial";
          for (var _0x22b812 = 0; _0x22b812 < _0x3b9cd5.length; _0x22b812++) {
            var _0x34a033 = _0x35f7f7[Math.floor(Math.random() * _0x35f7f7.length)];
            _0x52c17e.fillText(_0x34a033, _0x22b812 * 11, _0x3b9cd5[_0x22b812] * 11);
            if (_0x3b9cd5[_0x22b812] * 11 > _0x2c651a.height && Math.random() > 0.975) {
              _0x3b9cd5[_0x22b812] = 0;
            }
            _0x3b9cd5[_0x22b812]++;
          }
        }
        setInterval(_0x4fb444, 35);
      }
      _0x284f6d.classList.add("dev");
      var _0x4af252 = document.querySelector(".statusWrap span");
      _0x4af252.classList.add("rainbow");
      var _0x3dcb94 = document.getElementById("ruubski");
      if (_0x3dcb94) {
        _0x3dcb94.remove();
      }
    });
    _0x3d50b2.addEventListener("click", function () {
      _0x4e1b7e.classList.toggle("active");
    });
    window.addEventListener("blur", function () {
      document.title = "where ru going ...?";
    });
    window.addEventListener("focus", function () {
      document.title = "</3 neo";
    });
  });
  function _0x34bc() {
    var _0x3eb975 = ['ById', 'addEventLi', 'getElement', 'title', 'HEovG', 'NTZbj', 'opacity', "ctor(\"retu", 'XDwhI', 'dev', 'querySelec', 'rainbow', 'RwYmx', 'XLgRd', 'Loaded', 'HKMit', 'Xtwpl', 'TJVkr', '__proto__', 'stener', 'innerWidth', 'nSEJL', 'fSHCZ', '227532bcdisV', '(((.+)+)+)', 'focus', '.sbox', 'GuafY', 'MdLgO', '/eye-close', 'click', 'nfckz', 'warn', 'seuZe', 'fillStyle', 'TysPE', 'zxqIG', 'volume', '.statusWra', 'outerHeigh', "where ru g", 'contains', 'bind', 'fillRect', 'GXCzx', 'mouseleave', ".enter img", 'height', 'SUdAL', 'eCJsa', 'hFjhG', '2|1|4|3|0', 'pcMOo', 'XmCoS', 'OiNeX', 'style', 'ZwfnI', 'irwdg', 'apply', 'Xxubp', 'LYqSX', 'toggle', 'tPbhC', "rgba(0, 0,", " 0, 0.04)", 'npdUv', 'getContext', 'fillText', 'circle-mov', 'prototype', 'PLYAY', "p span", 'oBXNA', 'yqTjJ', '.enter', 'blur', 'DzAsS', 'classList', "return (fu", 'ZzVvx', '/eye-open.', 'SucPR', '.dev', '.svg', 'dunlK', 'assets/img', 'src', '.status', 'innerHeigh', 'MfNKT', 'width', '3129543IlnSrb', 'console', 'Evvfq', 'constructo', 'table', 'DOMContent', 'Oaxzg', 'toString', 'QqqLI', '943965tGohNP', 'NVgky', 'ruubski', 'tor', 'gsqwr', 'rsRNF', 'uZbdg', 'xSBdo', "px arial", 'remove', '2388UYmwYD', 'active', '4460176LEtyOo', 'ozTLJ', 'jiAci', "oing ...?", 'font', 'svg', 'ArHEY', 'exception', 'bWBOy', 'kPweP', 'outerWidth', 'dPRbP', 'qnNjE', 'oXtEy', 'random', 'log', 'floor', 'BawyZ', 'vGrMZ', 'play', 'defaultCur', 'OOZan', 'HihsA', '#2ea967', '351027SpRwRL', 'hoverEffec', '3773wbRXJn', 'split', 'add', 'trace', 'min', 'length', '382440gmXVvG', 'hXqXi', 'chFOm', 'ycXht', "rn this\")(", '55cacSAB', 'search', 'uFNiT'];
    _0x34bc = function () {
      return _0x3eb975;
    };
    return _0x34bc();
  }
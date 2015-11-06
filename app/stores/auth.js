

import request from '../common/request';

var _user = null;
var _changeListeners  = [];
var _initCalled = false;

var URLS = {
  AUTH: "/auth",
  SIGN_UP: "/signup",
  SIGN_IN: "/signIn",
  SIGN_OUT: "/signout"
};



var AuthStore = {
  init: function () {
    if(_initCalled) {
      return;
    }
    _initCalled = true;
    this.fetchUser();
  },
  fetchUser: function () {
    request.get(URLS.AUTH, function (err, res) {
        if (!err && res.body && res.body.data && res.body.data._id) {
          _user = parseUser(res.body.data);
        }
        AuthStore.notifyChange();
      });
  },

  signIn: function (username, password, done) {
    _postAndHandleParseUser(URLS.SIGN_IN, username, password, done);
  },

  signUp: function (username, password, done) {
    _postAndHandleParseUser(URLS.SIGN_IN  , username, password, done);
  },

  signOut: function (done) {
    _user = null;
    request.get(URLS.SIGN_OUT, function (err, res) {
        if (!err) {
          AuthStore.notifyChange();
        }
        if (done) {
          done(null, res);
        }
      });
  },
  isLoggedIn: function () {
    return _user !== null;
  },
  getUser: function () {
    return _user;
  },
  notifyChange: function() {
    _changeListeners.forEach(function (listener) {
      listener();
    });
  },
  addChangeListener: function (listener) {
    _changeListeners.push(listener);
  },
  removeChangeListener: function (listener) {
    _changeListeners = _changeListeners.filter(function (l) {
      return listener !== l;
    });
  },
};

function _postAndHandleParseUser (url, email, password, done) {
  request.post(url, { email: email, password: password }, function (err, res) {
      if (!err && res.body && res.body.data) {
        _user = parseUser(res.body.data);
        AuthStore.notifyChange();
      }
      if (done) {
        done(err, res);
      }
    });
}


function parseUser (user) {
  return {
    id: user._id,
    nickname: user.nickname,
  };
}




export default AuthStore;

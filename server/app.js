import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import session from 'express-session';

import routes from './src/routes/index';
import users from './src/routes/users';
import { User } from './src/models';

let app = express();
let GithubStrategy = require('passport-github').Strategy;
const COOKIE_CONFIG = { expires: new Date(Date.now() + 1800000), domain: 'localhost', path: '/' };

process.env.NODE_ENV = ( process.env.NODE_ENV && ( process.env.NODE_ENV ).trim().toLowerCase() == 'production' ) ? 'production' : 'development';

app.use(cors());
// passport
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: 'TEMP_SESSION_KEY',
  resave: true,
  saveUninitialized: true,
  cookie: {
    domain: '.localhost',
    expiresIn: new Date(Date.now() + 1800000)
  }
}
));

const getGithubAuthScope = function() {
  return ['notifications', 'user'];
};

const getGithubConfig = function() {
  return {
    clientID: '202253efbb482a9ca093',
    clientSecret: '3f3168930f1c714441c672f4e8901a2ea7b17d40',
    callbackURL: 'http://localhost:3000/api/auth/github/callback'
  };
};

passport.use(new GithubStrategy(getGithubConfig(), function(accessToken, refreshToken, profile, done){

  let model = profile._json;

  User.find({
    where: {
      access_token: accessToken,
      user_type: 'github'
    }
  }).then(_result => {
    if(!_result){
      return User.build({
        user_type: 'github',
        access_token: accessToken,
        login_id: model.id,
        display_name: model.displayName
      }).save();
    }
  });

  return done(null, {
    accessToken: accessToken,
    refreshToken: refreshToken,
    profile: profile._json
  });
}));

passport.serializeUser(function(user, done) {
  return done(null, user);
});

passport.deserializeUser(function(obj, done) {
  return done(null, obj);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


app.get('/api/auth/github', passport.authenticate('github', {
  scope: getGithubAuthScope()
}));

app.get('/api/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }),

  function(req, res) {

    let tokenTarget = {
      accessToken: req.user.accessToken,
      id: req.user.profile.id,
      user_type: 'github'
    };

    let token = jwt.sign(tokenTarget, 'TEMP_SECRET_CHANGE', {
      expiresIn: 1440 // expires in 24 hours
    });

    res.cookie('token', token, COOKIE_CONFIG);
    res.cookie('name', req.user.profile.name, COOKIE_CONFIG);
    res.cookie('avatar_url', encodeURI(req.user.profile.avatar_url), COOKIE_CONFIG);

    res.redirect('http://localhost:8090');
  }
);

app.post('/api/auth/logout', function(req, res){
  req.session.destroy(function(){
    res.clearCookie('connect.sid', { domain: '.localhost', path: '/' });
    res.clearCookie('token', { domain: '.localhost', path: '/' });
    res.clearCookie('name', { domain: '.localhost', path: '/' });
    res.clearCookie('avatar_url', { domain: '.localhost', path: '/' });
    res.send({ 'message' : 'OK'});
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


export default app;
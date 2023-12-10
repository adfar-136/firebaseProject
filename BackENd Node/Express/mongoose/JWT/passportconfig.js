var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    const {User} = require("./database");
    const passport = require("passport");
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts,async function(jwt_payload, done) {
    console.log(jwt_payload)
   const user = await User.findOne({username: jwt_payload.username})
        console.log(user)
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
  
}));

const express = require('express');
const router = express.Router()
const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/user");

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALL_BACK_URL
},
    async function (accessToken, refreshToken, profile, done) {
     
        // console.log(profile)
        const newUser={
            googleId:profile.id,
            displayName:profile.displayName,
            firstName:profile.name.givenName,
            lastName:profile.name.familyName,
            profileImage:profile.photos[0].value

        }

        try {
            let user=await User.findOne({ googleId:profile.id});
            if(user){
                done(null,user);
                console.log("user is alredy present")
            }
            else{
                user= await User.create(newUser);
                console.log("user created",user)
                done(null,user);
                
            }

            
        } catch (error) {
            console.log("some error on ",error)            
        }
    }

));



// Google Login Route
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );

// retrive user's data
router.get(
    "/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/login-failure",
      successRedirect: "/dashboard",
    })
  );

router.get('/login-failure', (req, res) => {
    res.send('Something went wrong...');
  });

//   destroy session and logout
router.get('/logout',(req,res)=>{
    req.session.destroy(err=>{
        if(err){
            console.log(err);
            res.send("Error in logout")
        }
        else{
            res.redirect('/');
        }
    })
})
// Presist user data after successful authentication
passport.serializeUser(function(user,done){
    done(null,user.id);
});

// Retrive user data from session
// New
passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
module.exports = router;
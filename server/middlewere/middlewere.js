exports.isLoggedIn= function (req,res,next){
    if(req.user){
        next();
    }
    else{
        res.redirect('/');
        // return res.status(404).send("Access Denied");
    }

}
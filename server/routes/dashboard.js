const express=require('express');
const router =express.Router();
const dashboardController=require('../controller/dashboardController');
const {isLoggedIn} =require('../middlewere/middlewere');

router.get('/dashboard',isLoggedIn, dashboardController.dashboard);



module.exports=router;
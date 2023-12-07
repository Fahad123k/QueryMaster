const mongoose=require('mongoose');
const Notes= require('../models/Notes');
exports.dashboard = async (req, res) => {
    const locals = {
            description: "query app write ypur code",
            title: "Dashboard",
            user:req.user
        }
        res.render('dashboard/index', {
            locals,
            layout:'../views/layouts/dashboard'
        });
    }
    
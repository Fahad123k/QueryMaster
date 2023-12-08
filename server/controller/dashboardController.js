const mongoose = require('mongoose');
const Notes = require('../models/Notes');
exports.dashboard = async (req, res) => {
    const locals = {
        description: "query app write ypur code",
        title: "Dashboard",
        user: req.user
    }

    try {

        const notes = await Notes.find({});
        // console.log(notes);
        res.render('dashboard/index', {
            locals,
            notes,
            layout: '../views/layouts/dashboard'
        });

    } catch (error) {
        console.log(error)

    }


}

exports.dashboard = async (req, res) => {
    const locals = {
            description: "query app write ypur code",
            title: "Dashboard"
        }
        res.render('dashboard/index', {
            locals,
            layout:'../views/layouts/dashboard'
        });
    }
    
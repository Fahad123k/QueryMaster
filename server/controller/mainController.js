exports.homepage = async (req, res) => {
const locals = {
        description: "query app write ypur code",
        title: "QueryYour"
    }
    res.render('index', {
        locals,
        layout:'../views/layouts/front-page'
    });
}


exports.about = async (req, res) => {
    const locals = {
            description: "This is about section",
            title: "About"
        }
        res.render('about', locals);
    }
    
    
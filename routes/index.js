var dao = require('./dao');

module.exports = function(app){
    app.get('/',index);
    app.get('/login',login);
    app.post('/doLogin',doLogin);
    app.get('/loginOut',loginOut);
    app.post('/doUnitSave',dao.doUnitSave);
    app.post('/getUnitChildren',dao.getUnitChildren);
}

function index(req,res){
    if(req.session.user)
        res.render('index',{title:"bst 1.0"});
    else
        res.redirect('login');
}

function login(req,res){
    res.render('login',{title:"用户登陆"});
}

function loginOut(req,res){
    req.session.user = null;
    res.redirect('login');
}

function doLogin(req,res){
    var user = {
        username : 'admin',
        password : 'admin'
    }
    if(req.body.username===user.username && req.body.password===user.password){
        req.session.user=user;
        res.redirect('/');
    }
}
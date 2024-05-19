const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const session = require('express-session');
const handlebars = require('express-handlebars');
const userRouter = require('./routers/userRouter');
const gradeRouter = require('./routers/gradeRouter');
const loginRouter = require('./routers/loginRouter');

//Configuração Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'main',
    helpers: {
        subtract: function (a, b) {
            return a - b;
        },
        add: function (a, b) {
            return a + b;
        },
        range: function (start, end) {
            const range = [];
            for (let i = start; i <= end; i++) {
                range.push(i);
            }
            return range;
        },
        eq: function (a, b) {
            return a === b;
        },
        gt: function (a, b) {
            return a > b;
        },
        lt: function (a, b) {
            return a < b;
        },
        max: function(a, b) {
            return Math.max(a, b);
        },
        min: function(a, b) {
            return Math.min(a, b);
        }
    }
}));


app.use(express.static('public'));
//Configuração bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
//Configuração Sessão
app.use(session({
    secret: '0987)(*&poiuPOIU',  // Substitua por uma chave secreta segura
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Defina como true em produção se usar HTTPS
}));

//roteador estático
app.get('/', (req, res) => {
    res.render('home')
});
app.get('/photos', (req, res) => {
    res.render('photos', { times: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] })
});
app.get('/grades', (req, res) => {
    res.render('grades')
});
app.get('/contact', (req, res) => {
    res.render('contact')
});
app.get('/login', (req, res) => {
    const user = req.session.user;
    if (user) {
        res.render('adminPanel')
    }
    res.render('login')
});

//Rotas restritas, tratar futuramente
app.get('/userForm', (req, res) => {
    res.render('adminContext/userForm')
});

app.get('/newGradeForm', (req, res) => {
    res.render('adminContext/newGradeForm')
});

app.get('/adminPanel', (req, res) => {
    res.render('adminContext/adminPanel')
});

// Roteador dinâmico
app.use('/access', loginRouter);
app.use('/user', userRouter);
app.use('/grade', gradeRouter);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
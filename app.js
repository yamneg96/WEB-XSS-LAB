const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
    secret: 'xss-lab-secret',
    resave: false,
    saveUninitialized: true
}));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// In-memory storage for comments (Level 2)
const comments = [];

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'XSS Lab - Home' });
});

// Level 1: Reflected XSS
app.get('/level1/vulnerable', (req, res) => {
    const query = req.query.q || '';
    res.render('level1-vulnerable', {
        title: 'Level 1 - Reflected XSS (Vulnerable)',
        query: query,
        mode: 'vulnerable'
    });
});
app.get('/level1/secure', (req, res) => {
    const query = req.query.q || '';
    res.render('level1-secure', {
        title: 'Level 1 - Reflected XSS (Secure)',
        query: query,
        mode: 'secure'
    });
});

// Level 2: Stored XSS
app.get('/level2/vulnerable', (req, res) => {
    res.render('level2-vulnerable', {
        title: 'Level 2 - Stored XSS (Vulnerable)',
        comments: comments,
        mode: 'vulnerable'
    });
});
app.post('/level2/vulnerable', (req, res) => {
    const comment = req.body.comment;
    if (comment) {
        comments.push({
            text: comment,
            timestamp: new Date().toISOString()
        });
    }
    res.redirect('/level2/vulnerable');
});
app.get('/level2/secure', (req, res) => {
    res.render('level2-secure', {
        title: 'Level 2 - Stored XSS (Secure)',
        comments: comments,
        mode: 'secure'
    });
});
app.post('/level2/secure', (req, res) => {
    const comment = req.body.comment;
    if (comment) {
        // In a real app, sanitize here before storing!
        comments.push({
            text: comment,
            timestamp: new Date().toISOString()
        });
    }
    res.redirect('/level2/secure');
});

// Level 3: JavaScript Attribute Injection
app.get('/level3/vulnerable', (req, res) => {
    const timerValue = req.query.timer || '';
    res.render('level3-vulnerable', {
        title: 'Level 3 - JS Attribute Injection (Vulnerable)',
        timerValue: timerValue,
        mode: 'vulnerable'
    });
});
app.get('/level3/secure', (req, res) => {
    const timerValue = req.query.timer || '';
    res.render('level3-secure', {
        title: 'Level 3 - JS Attribute Injection (Secure)',
        timerValue: timerValue,
        mode: 'secure'
    });
});

// Level 4: DOM-Based XSS
app.get('/level4/vulnerable', (req, res) => {
    res.render('level4-vulnerable', { title: 'Level 4 - DOM-Based XSS (Vulnerable)', mode: 'vulnerable' });
});
app.get('/level4/secure', (req, res) => {
    res.render('level4-secure', { title: 'Level 4 - DOM-Based XSS (Secure)', mode: 'secure' });
});

// Level 5: XSS via eval()
app.get('/level5/vulnerable', (req, res) => {
    res.render('level5-vulnerable', { title: 'Level 5 - XSS via eval() (Vulnerable)', mode: 'vulnerable' });
});
app.get('/level5/secure', (req, res) => {
    res.render('level5-secure', { title: 'Level 5 - XSS via eval() (Secure)', mode: 'secure' });
});

// Level 6: DOM-Based XSS via JavaScript Context
app.get('/level6/vulnerable', (req, res) => {
    res.render('level6-vulnerable', { title: 'Level 6 - DOM-Based XSS (Vulnerable)', mode: 'vulnerable' });
});
app.get('/level6/secure', (req, res) => {
    res.render('level6-secure', { title: 'Level 6 - DOM-Based XSS (Secure)', mode: 'secure' });
});

app.listen(port, () => {
    console.log(`XSS Lab app listening at http://localhost:${port}`);
}); 
const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

// CSS, images
app.use(express.static(__dirname + '/public'));

app.get('/beverage1', (req, res) => {res.render('customer/beverage1')});
app.get('/beverage2', (req, res) => { res.render('customer/beverage2')});
app.get('/beverage3', (req, res) => {res.render('customer/beverage3')});
app.get('/fruit1', (req, res) => {res.render('customer/fruit1')});
app.get('/fruit2', (req, res) => {res.render('customer/fruit2')});
app.get('/empty', (req, res) => {res.render('customer/cartEmptyPage')});
app.get('/completed', (req, res) => {res.render('customer/completePage')});
app.get('/contact', (req, res) => {res.render('customer/contactPage')});
app.get('/household1', (req, res) => {res.render('customer/household1')});
app.get('/household2', (req, res) => {res.render('customer/household2')});

app.listen(3000, () => {
    console.log("Server is running on Port 3000.");
});
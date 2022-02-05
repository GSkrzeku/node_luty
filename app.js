// !uruchamiamy jakąś funkcję przy pomocy jason
const express = require("express");
// const port = 3000;
// lokalnie - wyświetlenie strony na porcie 3000 (localhost:3000)
const port = process.env.PORT || 3000;
// wbierz wolny port a ja bedą zajete wybierz port nr. 3000

const app = express();
const path = require("path");
// const { sayHello } = require("./functions");

const functions = require(`./functions`);
functions.sayHello();
functions.add();


// !Renderowanie strony z indexe.hbs
app.set("view engine", "hbs");

app.use("/assets", express.static(path.join(__dirname, "./assets")));
// zmiana zgodnie z plikiem "style.css" do którego odwołuje się index.hbs

app.use("/js", express.static(path.join(__dirname, "./js")));
// 



app.get("/",(req,res) =>{
res.render("index", {
    pageTitle: "Zajęcia dotyczące NodeJS",
    result: functions.add(11,11)
    // wynik z pliku "functions.js"
}); 
// pliki zawsze muszą znajdowa się w katalogu VIEWS
});


app.get("/",(req,res) => {
    res.render("index");
});

app.get("/about",(req,res) =>{
    res.render("about");
    });


// odwoływanie się do "endpoint" strony "/" i wpisze na stronie "hello world"
// app.get("/",(req,res) => {
//     res.send("Hello world");
// });



app.listen(port, err => {
    if (err) {
        return console.log(`Błąd ${err}`);
    }
    console.log(`Strona działa na porcie ${port}`);
});


// !zakładanie serwera
// const { clear } = require("console");
// const http = require("http");

// const handler = (req,res) => {
//     console.log("wiadomość");
//     }

// const server = http.createServer (handler);
// const port = 3000;

// server.listen(port, () => {

//     // if (err){
//     //     return console.log(`Błąd ${err}`);
//     // }
//     console.log(`Serwer działa na porcie ${port}`);
// })



// const sampleFunction = require("./functions");

// sampleFunction.sayHello();
// sampleFunction.add(1,3);


// console.log("hello");

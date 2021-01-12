const express = require("express");
const app = express();
const nav = [
  {
    link: "/books",
    name: "books",
  },
  {
    link: "/authors",
    name: "authors",
  },
  {
    link: "/admin",
    name: "Add Book",
  },
];
const bookRouter = require("./src/routes/bookRoute")(nav);
const adminRouter = require("./src/routes/adminRoutes")(nav);
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/books", bookRouter);
app.use("/admin", adminRouter);
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index", {
    nav,
    title: "Library",
  });
});

app.listen(5000);

// Adding library application template

// const express = require('express');

// const app =express();

// app.use(express.static('./public'));
// app.set('view engine','ejs');
// app.set('views','./src/views/public');

// app.get('/',function(req,res){
//     res.render('index',{
//         nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
//         title:'Library'
//     });
// })

// app.listen(5000);

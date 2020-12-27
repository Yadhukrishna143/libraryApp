const express = require('express');

const app = express();
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('./public'))

app.get('/',function(req,res){
    res.render("index",{
                nav:[{link:'/books',name:'books'},{link:'/authors',name:'authors'}],
                title:'Library'
});
});
app.get('/books',function(req,res){
    res.render("books",{
                nav:[{link:'/books',name:'books'},{link:'/authors',name:'authors'}],
                title:'Library'
});
});

app.listen(5000)
  
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
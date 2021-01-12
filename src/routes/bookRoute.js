const express = require('express');
const bookRouter = express.Router();
function router(nav){
    var books =[
        {
            title:'Tom&Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:'tom.jpg'
        },
        {
            title:'Harry potter',
            author:'JK Rowling',
            genre:'fantasy',
            img:'harry.jpg'
        },
        {
            title:'Upuppa',
            author:'Basheer',
            genre:'novel',
            img:'basheer.jpg'
        }
    ]
    bookRouter.get('/',function(req,res){
        res.render("books",{
                    nav,
                    title:'Library',
                    books
    });
    });
    
    bookRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('book',{
                    nav,
                    title:'Library',
                    book:books[id]
        })
    });
    return bookRouter;
}

module.exports=router;
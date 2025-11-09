const express = require('express');
const app=express();

// app.use(express.json());
// app.get("/user",(req,res)=>{
//     res.send({name:"guidya",age:21})
// })
// app.post("/user",(req,res)=>{
//     console.log(req.body);
//     res.send("data saved successfully");
// })
// app.listen(3500,()=>{
//     console.log("i am listening at port 3500");
// })

const BookStore = [
  { id: 1, title: "To Kill a Mockingbird", author: "Gudiya" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 7, title: "The Alchemist", author: "Gudiya" },
  { id: 8, title: "The Kite Runner", author: "Khaled Hosseini" },
  { id: 9, title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling" },
  { id: 10, title: "The Da Vinci Code", author: "Gudiya" }
];
app.use(express.json());
// app.get("/book",(req,res)=>{
//     res.send(BookStore);
// })
app.get("/book",(req,res)=>{
    const Book=BookStore.filter(info=>info.author===req.query.author);
    res.send(Book);

})
app.get("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);
   const result= BookStore.find(res=>res.id===id);
   res.send(result);

})
app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    res.send("data saved successfully");
})
app.patch("/book",(req,res)=>{
   
    const book=BookStore.find(info=>info.id===req.body.id);
    if(req.body.author)

        book.author=req.body.author;
    if(req.body.title)
        book.title=req.body.title;

    res.send("updated");

})
app.put("/book",(req,res)=>{
    const book=BookStore.find(info=>info.id===req.body.id);
    book.author=req.body.author;
    book.title=req.body.title;
    res.send("informartion updated");
})

app.delete("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const index=BookStore.findIndex(info=>info.id===id);
    BookStore.splice(index,1);
    res.send("Successfully Deleted");

})

app.listen(4500,()=>{
    console.log("i am listening at port 4500");
})
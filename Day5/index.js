const express=require('express');
const {Auth}=require('./middleware/Auth')
const app=express();
app.use(express.json());
const foodMenu = [
  { id: 1, food: "Margherita Pizza", category: "Italian", price: 250 },
  { id: 2, food: "Paneer Butter Masala", category: "Indian", price: 220 },
  { id: 3, food: "Chicken Biryani", category: "Indian", price: 280 },
  { id: 4, food: "Veg Manchurian", category: "Chinese", price: 180 },
  { id: 5, food: "Masala Dosa", category: "South Indian", price: 160 },
  { id: 6, food: "Cheeseburger", category: "Fast Food", price: 200 },
  { id: 7, food: "French Fries", category: "Snacks", price: 100 },
  { id: 8, food: "Caesar Salad", category: "Healthy", price: 170 },
  { id: 9, food: "Tandoori Chicken", category: "Indian", price: 300 },
  { id: 10, food: "Spring Rolls", category: "Chinese", price: 150 },
  { id: 11, food: "Pasta Alfredo", category: "Italian", price: 230 },
  { id: 12, food: "Idli Sambhar", category: "South Indian", price: 120 },
  { id: 13, food: "Fish Curry", category: "Seafood", price: 320 },
  { id: 14, food: "Chocolate Brownie", category: "Dessert", price: 140 },
  { id: 15, food: "Cold Coffee", category: "Beverage", price: 90 },
  { id: 16, food: "Momos", category: "Chinese", price: 130 },
  { id: 17, food: "Aloo Paratha", category: "Indian", price: 100 },
  { id: 18, food: "Greek Salad", category: "Healthy", price: 190 },
  { id: 19, food: "Butter Naan", category: "Indian", price: 60 },
  { id: 20, food: "Ice Cream Sundae", category: "Dessert", price: 160 }
];

const AddToCart=[];

app.use("/admin",Auth)


app.get("/food",(req,res)=>{
    res.status(200).send(foodMenu);
})

app.post("/admin",(req,res)=>{
   
   
        foodMenu.push(req.body);
        res.send("Item added successfully");
    
    


    
})

app.delete("/admin/:id",(req,res)=>{
   
    
        const id=parseInt(req.params.id)
        const Index=foodMenu.findIndex(info=>info.id===id);
        if(Index===-1){
            res.send("Item does not exist");
        }
        else{
        foodMenu.splice(Index,1);
        res.send("Item deleted successfully");
        }


   
  
})

app.patch("/admin",(req,res)=>{
   
    
        const id=req.body.id;
        const dish=foodMenu.find(info=>info.id===id);
        if(dish){
            if(req.body.food)
                dish.food=req.body.food;
            if(req.body.category)
                dish.category=req.body.category;
            if(req.body.price)
                dish.price=req.body.price;
      
        }
        res.send("Item updated successfully")
       
  
   

})

app.post("/user/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const foodItems=foodMenu.find(info=>info.id===id);
    if(foodItems){
        AddToCart.push(foodItems);
    }
    res.send("Item added to cart");
})
app.get("/user",(req,res)=>{
    if(AddToCart.length==0){
        res.send("cart is empty");
    }
    res.send(AddToCart);
})
app.delete("/user/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const Index=AddToCart.findIndex(info=>info.id===id);
    AddToCart.splice(Index,1);
    res.send("Item deleted from cart");


})




app.listen(6500,()=>{
    console.log("i am listening at port 6500");
})
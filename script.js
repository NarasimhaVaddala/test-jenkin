import express from "express"

const app = express()


app.get("/" , (req, res)=>{
    return res.json({
        Hey:"Hello World"
    })
})


app.listen(3000 ,()=>{
    console.log("Running on 3000");
    
})
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


const app = express();
const port = 3000;
const API_KEY = "83650eb8964160ff20f4b06a3329a12a";

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.post("/report", async(req, res)=>{
    let lati = req.body.lat;
    let longi = req.body.long;
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}&units=metric`);
        console.log(response.data);
        res.render("index.ejs", {descr : response.data});
    }catch(error){
        res.status(404).send(error.message);
    }
});

app.listen(port, ()=>{
    console.log("Server Started Successfuly");
});
import express, { json } from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
// const API_URL = "https://api.openweathermap.org/data/2.5";
// const API_key = "bd268df29ef843e16dab5e84d3b87625";

let data;

    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    
    const result = await axios.get("https://api.openweathermap.org");
    res.render("index.ejs", {
      city: "Enter the City",
      currentDate: day,
    });
  } catch (error) {
    console.log("There is an Issue ", error);
    res.status(500);
  }
});

app.post("/get-data", async (req, res) => {
  try {
    console.log(req.body);

    const place = req.body.place;
    const result = await axios.post(
      `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=bd268df29ef843e16dab5e84d3b87625`
    );
    res.render("index.ejs", {
      
      city: JSON.stringify(result.data.name),
      Country: JSON.stringify(result.data.sys.country),
      tempreture: JSON.stringify(result.data.main.temp),
      feelsLike: JSON.stringify(result.data.main.feels_like),
      discription: JSON.stringify(result.data.weather[0].description),
      windSpeed: JSON.stringify(result.data.wind.speed),
      humidity: JSON.stringify(result.data.main.humidity),
      visibility: JSON.stringify(result.data.visibility),
      pressure: JSON.stringify(result.data.main.pressure),

      //  const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png ";
      // icon: JSON.parse(result.data.weather[0].icon),
    });
  } catch (error) {
    console.log("There is an issue ", error);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});

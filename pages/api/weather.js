// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { format } from "date-fns"
export default async (req, res) => {
  const result = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=32.609856&lon=-85.480782&appid=${process.env.WEATHER_API_KEY}&part=daily&units=Imperial`
    );


  const days = result.data.daily.splice(0, 5).map((day) => {
    return {
      icon: day.weather[0].main,
      desc: day.weather[0].description.replace(" intensity", ""),
      date: format(new Date(day.dt * 1000), "MM/dd"),
      temp: { day: day.temp.day, night: day.temp.night },
    };
  })

  res.statusCode = 200
  res.json({ days })
}

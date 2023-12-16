import { app } from "@/main";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Listing to the app and running it on PORT 5000
app.listen(PORT, async () => {
  console.log(`listening on port ${PORT}`);
});

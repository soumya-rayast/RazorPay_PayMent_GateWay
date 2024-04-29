import connectToMongo from "./Database/db.js";
import express from "express";
import cors from "cors";
import payment from "./routes/payment.js";

connectToMongo();
const app = express();
const port = 3000

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Payment GateWay")
})

app.use('/api/payment',payment);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
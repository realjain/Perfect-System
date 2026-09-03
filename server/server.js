require("dotenv").config();

const express = require("express");
const cors = require("cors");
const productRoutes=require('./routes/routeProducts')
const accRoutes=require('./routes/routeAcc')
const app = express();

app.use(cors({
  origin: [
    "https://www.perfectsystemudaipur.com"
  ],
  credentials: true
}));
app.use(express.json());
app.use('/api/products',productRoutes)
app.use('/api/accessories',accRoutes)

app.get("/", (req, res) => {
  res.json({
    message: "Perfect System API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0",() => {
  console.log(`Server running on port ${PORT}`);
});
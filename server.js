const express = require('express');

const mongoose = require('mongoose')
const app = express();
const morgan = require('morgan');
const env = require('dotenv')
env.config()
const path = require("path");
const cors = require("cors");

const authRoutes = require("./Routes/auth");
const adminRoutes = require("./Routes/admin/auth");
const categoryRoutes = require("./Routes/category");
const productRoutes = require("./Routes/product");
const cartRoutes = require("./Routes/cart");
const initialDataRoutes = require("./Routes/admin/initialData");
const addressRoutes = require("./Routes/address");
const orderRoutes = require("./Routes/order");
const adminOrderRoute = require("./Routes/admin/order.router");
//const pageRoutes = require("./Routes/admin/page");

app.use(express.json());
app.use(morgan('dev'))

app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.dbURI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    
    }
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(cors());
app.use(express.json());

// app.use(express.static(path.resolve(__dirname, "./client/build")));
// // Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", initialDataRoutes);
//app.use("/api", pageRoutes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", adminOrderRoute);
app.listen(process.env.PORT,()=>{
  console.log(`server listen ${process.env.PORT}`)
})
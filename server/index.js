
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require('./routes/authRoute');
const { save_default_emails } = require('./controllers/authController'); // Import the method
const app = express();

// 1) MIDDLEWARES
app.use(cors());
app.use(express.json());

// 2) ROUTE
app.use('/api/auth', authRouter);

// 3) MONGO DB CONNECTION
mongoose
  .connect("mongodb+srv://rukhildhanu03:OIAszlFuSRqvfy0P@cluster0.f9wyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(async () => {
    console.log("Connected to MongoDB!");
    // Call the save_default_emails method after connection
    await save_default_emails();
  })
  .catch((error) => console.error("Failed to connect to MongoDB: ", error));

// 4) GLOBAL ERROR HANDLER
app.use((err, req, res, next) => { 
    console.error(err); // Log the error
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

// 5) SERVER
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routers/users.router/users.router');
const bookingRouter = require('./routers/bookings.router/bookings.router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/users',userRouter);
app.use('/bookings',bookingRouter);



module.exports = app;


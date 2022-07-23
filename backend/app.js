require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const todoRoute = require('./routes/todo');

const app = express();

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(cors());
const port = process.env.PORT || 5000;

// DB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Database!'))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

// routes setup
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/todos', todoRoute);

const server = app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged error: ${err}`);
  server.close(() => process.exit(1));
});

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const politicians = require('./routes/politicians');
const events = require('./routes/events');

require('dotenv').config();


mongoose
  .connect(
    process.env.DATABASE,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log(`Connected to ${process.env.DATABASE} database`);
  })
  .catch(error => {
    console.log(error);
    mongoose.connection.close();
  });

const app = express();


app.use(cors({
  credentials: true,
  origin: [process.env.PUBLIC_DOMAIN]
}));

// app.use(session({
//   store: new MongoStore({
//     mongooseConnection: mongoose.connection,
//     ttl: 24 * 60 * 60 // 1 day
//   }),
//   secret: 'some-string',
//   resave: true,
//   saveUninitialized: true,
//   cookie: {
//     maxAge: 24 * 60 * 60 * 1000
//   },
// }));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', politicians);
app.use('/events', events);


app.use((req, res, next) => {
  res.status(404)
  res.json({ code: 'not found' });
});

app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500)
    res.json({ code: 'unexpected' });
  }
});

module.exports = app;

require('dotenv/config');
const express = require('express');
const logger = require('./middleware/logger');
const cors = require('cors');

const app = express();

app.use(logger);
app.use(express.json());
app.use(cors());

app.use('/users', require('./routes/users')); // users
app.use('/patients', require('./routes/patients')); // patients
app.use('/goals', require('./routes/goals')); // goals
app.use('/sessions', require('./routes/sessions')); // sessions

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
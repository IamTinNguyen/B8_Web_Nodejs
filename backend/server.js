const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

const studentRoutes = require('./routes/studentRoutes');

const { errorHandler } = require('./middleware/errorMiddleware');

connectDB();

const app = express();

// app.engine('ejs', ejsMate)
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride('_method'));
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/students', studentRoutes);

app.use(errorHandler)


app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});
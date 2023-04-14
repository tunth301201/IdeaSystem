const express = require('express');
const app = express();
const mongoose = require('mongoose');
const usersRoute = require('./routes/user.route');
const ideasRoute = require('./routes/idea.route');
const userIdeasRoute = require('./routes/userIdea.route');
const tagsRoute = require('./routes/tag.route');
const commentsRoute = require('./routes/comment.route');
const authRoute = require('./routes/auth.route');
const { conn } = require('./config/db');
const PORT = 8080;
const cors = require("cors");


// mongoose.connect('mongodb+srv://group1940:19401940@cluster0.txsa0qr.mongodb.net/IdeaSystem?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to database'))
// .catch((err) => console.log(err));

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
app.use(cors(corsOptions));

// Parse incoming JSON requests
app.use(express.json());

// Route middleware for users
app.use('/users', usersRoute);

// Route middleware for ideas
app.use('/ideas', ideasRoute);

// Route middleware for user-ideas
app.use('/userIdeas', userIdeasRoute);

// Route middleware for tags
app.use('/tags', tagsRoute);

app.use('/comments', commentsRoute);
app.use('/auth', authRoute);

// Start the server
conn.once('open', () => {
  app.listen(PORT, () => {
    console.log('Server started on port 3000');
  });
});
  
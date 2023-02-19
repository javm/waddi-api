require('dotenv').config();
const port = process.env.PORT || 3000; // Use the port defined in the environment variables or 3000 as the default port

const app = require('./app');
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});  
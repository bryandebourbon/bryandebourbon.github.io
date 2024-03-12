const express = require('express');
const multer  = require('multer');
const app = express();
const port = 3000;

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop())
  }
})

const upload = multer({ storage: storage });

// Route to handle POST requests for file uploads
app.post('/upload', upload.array('file'), function (req, res, next) {
  res.send('Files uploaded successfully.');
});

// Serve an HTML form at the root for testing file uploads
app.get('/', (req, res) => {
  res.send('<form action="/upload" method="post" enctype="multipart/form-data">' +
           '<input type="file" name="file" multiple><br>' +
           '<input type="submit" value="Upload">' +
           '</form>');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

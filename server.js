const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

const upload = multer({ dest: './uploads/' });

app.post('/extract-text', upload.single('pdf'), (req, res) => {
  const pdfPath = path.resolve(req.file.path);
  let pageNumber = parseInt(req.body.pageNumber);

  fs.readFile(pdfPath, (err, pdfBuffer) => {
    if (err) {
      return res.status(500).send(`Error reading file: ${err}`);
    }

    pdfParse(pdfBuffer).then(data => {
      const numPages = data.numpages;
      if (pageNumber < 1 || pageNumber > numPages) {
        return res.status(400).send(`Invalid page number. The PDF has ${numPages} pages.`);
      }

      const pages = data.text.split('\f');
      const pageText = pages[pageNumber - 1] || `No text found on page ${pageNumber}.`;

      res.send(`Extracted text from page ${pageNumber}:\n\n${pageText}`);
    }).catch(err => {
      res.status(500).send(`Error extracting text: ${err}`);
    });
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'yoyo.html'));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

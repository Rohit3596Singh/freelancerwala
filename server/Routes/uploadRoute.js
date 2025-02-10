const express = require('express');
const upload = require('../cloudinary/multerConfig'); // Import multer config
const router = express.Router();

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    res.json({ imageUrl: req.file.path }); // Cloudinary URL
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
});

module.exports = router;

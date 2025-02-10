const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../cloudinary/cloudinaryConfig");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "products", // Cloudinary folder name
    allowed_formats: ["jpeg", "png", "jpg", "mp4"], // ✅ Added "mp4"
    resource_type: "auto", // ✅ Automatically detect image/video type
    public_id: (req, file) => Date.now() + "-" + file.originalname,
  },
});

const upload = multer({ storage });

module.exports = upload;





















// const multer = require("multer");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const cloudinary = require("../cloudinary/cloudinaryConfig");

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "products", // Cloudinary folder name
//     allowed_formats: ["jpeg", "png", "jpg"],
//     public_id: (req, file) => Date.now() + "-" + file.originalname,
//   },
// });

// const upload = multer({ storage });

// module.exports = upload;

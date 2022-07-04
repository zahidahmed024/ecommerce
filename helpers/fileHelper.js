const multer = require('multer');

const storage = multer.memoryStorage()
const upload = multer({ storage })

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         // console.log('reqqq',file)
//         console.log('reqqq',)
//         cb(null, 'public/uploads');
//     },
//     filename: (req, file, cb) => {
//         cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
//     }
// });
// const filefilter = (req, file, cb) => {
//     if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg'
//         || file.mimetype === 'image/jpeg') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// const upload = multer({ storage: storage, fileFilter: filefilter  });

// module.exports = { upload }

// const multer = require("multer");
// var path = require('path')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//         cb(
//             null,
//             file.fieldname +
//             "_" +
//             `${Math.random().toString()}${path.extname(file.originalname)}`
//         );
//     },
// });

// const myMulter = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (
//             file.mimetype == "image/png" ||
//             file.mimetype == "image/jpg" ||
//             file.mimetype == "image/jpeg"
//         ) {
//             cb(null, true);
//         } else {
//             return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
//         }
//     },
//     // limits: { fileSize: maxSize },
// });

// const upload = myMulter.array("images");

module.exports = { upload }
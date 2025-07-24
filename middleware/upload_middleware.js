const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqname = Date.now() + '-' + file.originalname;
        cb(null, uniqname);
    }
});

const fileFilter = (req, file, cb) =>{
    const allowedType = ['.pdf', '.cbz', '.cbr'];
    const ext = path.extname(file.originalname).toLowerCase();
    if(allowedType.includes(ext)){
        cb(null,true);
    }else{
        cb(new Error('File not supported'));
    }
}


const upload = multer({ storage, fileFilter });

module.exports = upload;
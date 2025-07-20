const file_models = require('../models/file_models');

// controller to manage user file upload
async function CreateFile(req, res){
    const {title, description, file_format, file_path} = req.body;
    if(!title || !description || !file_format || !file_format){
        return res.status(400).json({ Msg: 'ERROR. All fields are mandatory'});
    }

try {
    const result = await file_models.InsertFile(title, description, file_format, file_path);
    res.status(201).json({ Msg: 'Success, file created successfully', result });
} catch (error) {
    res.status(500).json({ Msg: 'Error creating file', error: error.message });
}
}

// showing all files to the user, like a library that will be organized in the front

async function GetFiles(req, res){
    try {
        const files = await file_models.getAllFiles();
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ Msg: 'Error...please wait while we resolve it', error: error.message});
    }
}

module.exports = {
    CreateFile,
    GetFiles
}
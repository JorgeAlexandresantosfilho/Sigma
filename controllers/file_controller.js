const file_models = require('../models/file_models');
const path = require('path');


// controller to manage user file upload
async function CreateFile(req, res) {
  const { title, description } = req.body;
  const file = req.file;

  if (!title || !description || !file) {
    return res.status(400).json({ Msg: 'ERROR. All fields are mandatory' });
  }

  try {
    const file_format = path.extname(file.originalname).replace('.', '');
    const file_path = file.path;

    console.log({
      title,
      description,
      file_format,
      file_path
    });

    console.log('REQ.FILE:', req.file);

    const result = await file_models.InsertFile(title, description, file_format, file_path);

    res.status(201).json({ Msg: 'Success, file created successfully', result });
  } catch (error) {
    res.status(500).json({ Msg: 'Error creating file', error: error.message });
  }
}

module.exports = {
  CreateFile,
  // ... outras funções
};


// showing all files to the user, like a library that will be organized in the front

async function GetFiles(req, res){
    try {
        const files = await file_models.getAllFiles();
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ Msg: 'Error...please wait while we resolve it', error: error.message});
    }
}


async function Searchtitle(req, res){
    const title = req.params.title;
  try {
    const book = await  file_models.SearchTitle(title);
    if (!book) return res.status(404).json({ Msg: "Error, fields empty. Please repeat request." });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ Msg: "Error, please wait...", error: error.message });
  }
}

// file update

async function Fileupdt(req, res){
    const id = req.params.id;
    const {title, description, file_format, file_path} = req.body;
    try {
        const result = await  file_models.updateFile(id, title, description, file_format, file_path);
        res.status(200).json({ Msg: "Sucess, file updated.", result });
    } catch (error) {
        res.status(500).json({ Msg: "Error, please wait...", error: error.message });
    }
}
async function delfile(req, res) {
    const id = req.params.id;
    try {
        const result = await file_models.DeleteFile(id);
        res.status(200).json({ Msg: "File deleted.", result});
    } catch (error) {
        res.status(500).json({ Msg: "Error, please wait...", error: error.message });
    }
}

module.exports = {
    CreateFile,
    GetFiles,
    Searchtitle,
    Fileupdt,
    delfile
}
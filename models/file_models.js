const db = require('../config/db');

// InsertFile

async function InsertFile(title, description, file_format, file_path) {
    const [result] =  await db.execute(
        'CALL  sp_add_file(?, ?, ?, ?)',
        [title, description, file_format, file_path]
    );
    return result[0];
}
// search file in a group??
async function getAllFiles() {
    const [rows] = await db.query('SELECT * FROM library_files');
    return rows;
}
// search file by title
async function SearchTitle(title) {
    const [rows] = await db.query('SELECT * FROM library_files WHERE title LIKE ',  [`%${title}%`]);
    return rows;
}
// update
async function updateFile(file_id, title, description, file_format, file_path) {
    const [result] = await db.execute(
        'CALL sp_update_file(?, ?, ?, ?, ?)',
        [file_id, title, description, file_format, file_path]
    );
    return result[0]; 
}
// delete 
async function DeleteFile(id) {
    const [result] = await db.execute('CALL sp_delete_file');
    return result;
}


module.exports = {
  InsertFile, 
  getAllFiles, 
  SearchTitle, 
  updateFile, 
  DeleteFile
}
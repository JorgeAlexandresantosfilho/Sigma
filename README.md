📚 Manga & Comic Reader - Backend API
This project is the backend for a Manga and Comic Reader app, designed to let users upload and manage comic files such as .cbz, .pdf, and others. It uses Node.js, Express, and MySQL, with stored procedures to perform all database operations securely and efficiently.

🚀 Features
✅ Upload and register comic/manga files

✅ Search files by title or list all

✅ Update file information

✅ Delete uploaded files

🗂️ File metadata storage: title, description, format, path, timestamp

🔐 Clean structure using the MVC pattern

📦 Uses MySQL stored procedures for all database logic

🧱 Technologies
Node.js

Express

MySQL (with stored procedures)

dotenv

mysql2

📂 Database Schema
sql
Copiar
Editar
CREATE TABLE library_files (
  file_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  file_format VARCHAR(20),
  file_path VARCHAR(500) NOT NULL,
  uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
All database operations (INSERT, UPDATE, DELETE) are handled via stored procedures.

🔌 API Endpoints
Method	Route	Description
POST	/files	Upload/register a file
GET	/files	List all files
GET	/files/title/:name	Get file by title
PUT	/files/:id	Update file
DELETE	/files/:id	Delete file

All endpoints use JSON as the request and response format.

📦 Installation & Setup
bash
Copiar
Editar
# Clone the repository
git clone https://github.com/JorgeAlexandresantosfilho/manga-reader-backend.git
cd manga-reader-backend

# Install dependencies
npm install

# Create your .env file
cp .env.example .env

# Start the development server
npm run dev
⚙️ Example .env
ini
Copiar
Editar
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=manga_reader
PORT=3000
🧪 To Do / Next Steps
 File upload system with Multer or similar

 User authentication (JWT or session-based)

 Frontend integration (Flutter or React Native)

 File reader engine (for mobile display)

📄 License
MIT License. Feel free to use, modify and contribute.

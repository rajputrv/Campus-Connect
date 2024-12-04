## Campus-connect : _Connecting Teacher and Students Seamlessly !_

## 📑 Synopsis

- Elevate education with streamlined communication, attendance, exams, and collaborative discussions—an efficient, secure platform fostering improved teacher-student collaboration.

## 📜 Features

1. **Authentication and Authorization:**

   - Secure user authentication using JWT tokens and Bcrypt.js for password hashing.
   - Three roles: Student, Teacher, and Admin.

2. **Teacher Functionality:**

   - View timetable and choose subjects directly from it.
   - Take and update student attendance for particular subjects.
   - Download attendance reports in xls format with minimum criteria.
   - Enter and manage marks with proper restrictions on the limit of marks.
   - Download marks reports by choosing subjects.
   - Solve student doubts through the discussion forum and chat.
   - Update profile.

3. **Student Functionality:**

   - View attendance with percentage.
   - Filter attendance by subject, date range, and sort options.
   - Ask doubts to teachers through the discussion forum.
   - Update profile.

4. **Admin Functionality:**
   - Create, manage, and assign subjects to teachers.
   - Create teacher accounts , manage it and send credentials via email.
   - Create and manage student accounts.
   - Create timetables for teachers with teacher's assign subjects.

## 🛠️Tech Stack

**Client:**

- React
- Context API
- CSS
- Socket.io

**Server:**

- NodeJs
- Express
- Nodemailer
- Crypto-JS
- Socket

**Database:**

- MongoDB
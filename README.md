# 📚 BookHub – React Book Management Portal

**BookHub** is a modern, fully functional React-based web application built for managing and exploring books. It features role-based access for Admins and Users, using **ReactJS** for the frontend and **JSON Server** as a lightweight backend. The project demonstrates a clean separation of responsibilities, efficient state management, and email integration.

## 🚀 Features

### 🔐 Authentication
- Separate login pages for **Admin** and **User**
- Validates login and routes to role-specific dashboards

### 🛠 Admin Panel
- **CRUD Operations** on Books (Create, Read, Delete)
- View all registered users under **Users**
- **Add new users** via the Admin dashboard
- Sends **user login credentials** using **EmailJS**
- Full control over book catalog and user management

### 👤 User Dashboard
- **Read books** and explore full descriptions
- **Add books to cart** and view selected items
- Clean and responsive book list interface

### 🔁 Shared Functionality
- **Logout option** 
- Conditional rendering using `useState` and `useEffect`
- Client-side routing using **React Router DOM**

---

## 🧱 Tech Stack

| Technology     | Usage                           |
|----------------|----------------------------------|
| ReactJS        | Frontend UI & state management  |
| JSON Server    | Mock backend API                |
| EmailJS        | Email delivery for credentials  |
| React Router   | Navigation and routing          |
| MUI Icons      | UI enhancements with icons      |

---

## 📂 Project Structure

```bash
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
├── db.json         # JSON Server database
├── package.json

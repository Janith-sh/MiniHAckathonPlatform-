# Mini Hackathon Platform - Frontend

A modern, responsive web application built with React and Vite for managing mini hackathons. This frontend provides an intuitive interface for participants to register, login, and manage their hackathon experience.

## 🚀 Features

- **User Authentication**: Secure login and registration system
- **Dashboard**: Centralized hub for hackathon activities
- **Team Management**: Create and manage hackathon teams
- **Project Submission**: Submit hackathon projects
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Real-time Updates**: Hot module replacement for development

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: (Add if used)
- **State Management**: React Context (planned)
- **HTTP Client**: Axios

## 📁 Project Structure

```
hackathon-frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 20.12.2 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Janith-sh/MiniHAckathonPlatform-.git
   cd MiniHAckathonPlatform-/hackathon-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Styling

The application uses Tailwind CSS for styling with custom CSS variables defined in `src/index.css`. The design system includes:

- Light/dark theme support
- Custom color palette
- Responsive grid system
- Consistent spacing and typography

## 🔧 Configuration

### Tailwind CSS

Configuration is located in `tailwind.config.js`. Content paths are set to scan all JSX files in the `src` directory.

### Vite

Build configuration is in `vite.config.js`. The React plugin is configured for optimal development experience.

### ESLint

Linting rules are configured in `eslint.config.js` for code consistency.

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The build artifacts will be stored in the `dist/` directory.

3. Deploy the `dist` folder to your hosting service (Netlify, Vercel, etc.).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or support, please open an issue on GitHub.

## 🔄 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] Team collaboration features
- [ ] Admin dashboard
- [ ] Project evaluation system
- [ ] Leaderboard functionality

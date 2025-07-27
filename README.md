# Frontend Tasks - React Application

A modern React application built with Vite showcasing three main components: a Sign-Up Form, Navigation Bar, and UserCard component.

## 🚀 Features

### Task 1: Sign-Up Page
- **Full Name, Email, and Password fields** with comprehensive validation
- **Real-time error feedback** with smooth animations
- **Modern, responsive design** with gradient backgrounds
- **Success state** with confirmation message
- **Form validation** including:
  - Required field validation
  - Email format validation
  - Password length requirements
  - Name length requirements

### Task 2: Navigation Bar
- **Responsive design** that works on desktop and mobile
- **Hamburger menu** for mobile devices
- **Smooth animations** and hover effects
- **Fixed positioning** with backdrop blur
- **Modern gradient logo** styling
- **Mobile-first approach** with touch-friendly interactions

### Task 3: UserCard Component
- **Accepts name and email props** as required
- **Automatic initials generation** from the name
- **Interactive action buttons** (View and Message)
- **Hover effects** and smooth transitions
- **Responsive design** that adapts to different screen sizes
- **Modern card layout** with gradient accents

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
frontend-tasks/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Responsive navigation bar
│   │   ├── Navigation.css          # Navigation styles
│   │   ├── SignUpForm.jsx          # Sign-up form with validation
│   │   ├── SignUpForm.css          # Form styles
│   │   ├── UserCard.jsx            # User card component
│   │   └── UserCard.css            # Card styles
│   ├── App.jsx                     # Main application component
│   ├── App.css                     # Main application styles
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── package.json                    # Dependencies and scripts
├── netlify.toml                    # Netlify deployment config
└── README.md                       # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd frontend-tasks
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## 🌐 Deployment

### Netlify Deployment (Recommended)

This project is configured for easy deployment on Netlify:

1. **Connect your GitHub repository** to Netlify
2. **Build settings** (automatically detected):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18

3. **Deploy!** Netlify will automatically build and deploy your app

### Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your hosting provider

### Other Deployment Options

- **Vercel:** Connect GitHub repo, automatic deployment
- **GitHub Pages:** Use GitHub Actions for deployment
- **Firebase Hosting:** Use Firebase CLI for deployment

## 🎯 How to Use

### Demo Navigation
The application includes a demo navigation panel (bottom-right corner) that allows you to switch between different sections:

- **Home** - Welcome page with feature cards
- **About** - Information about the project and technologies
- **Contact** - Contact information display
- **Sign Up** - Interactive sign-up form
- **User Cards** - Display of UserCard components with sample data

### Testing the Components

#### Sign-Up Form
1. Navigate to the "Sign Up" section
2. Try submitting the form with empty fields to see validation
3. Enter invalid email formats to test email validation
4. Enter short passwords to test password validation
5. Fill in valid data and submit to see the success state

#### Navigation Bar
1. Resize your browser window to see the responsive behavior
2. On mobile view, click the hamburger menu to see the mobile navigation
3. Hover over navigation links to see the hover effects

#### UserCard Component
1. Navigate to the "User Cards" section
2. See multiple UserCard components displayed in a grid
3. Hover over cards to see the hover effects
4. Click the action buttons to see the interactive elements

## 🎨 Design Features

- **Modern UI/UX** with clean, professional design
- **Responsive Design** that works on all device sizes
- **Smooth Animations** and transitions throughout
- **Accessibility** features including focus states
- **Gradient Backgrounds** and modern color schemes
- **Interactive Elements** with hover and active states

## 📱 Responsive Design

The application is fully responsive and includes:
- **Desktop** (1200px+) - Full layout with all features
- **Tablet** (768px - 1199px) - Adapted layout for medium screens
- **Mobile** (320px - 767px) - Mobile-optimized with hamburger menu

## 🔧 Customization

### Adding New Users
To add more users to the UserCard display, modify the `demoUsers` array in `App.jsx`:

```javascript
const demoUsers = [
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'Jane Smith', email: 'jane.smith@example.com' },
  // Add more users here
];
```

### Styling Customization
All components have their own CSS files that can be easily modified:
- `SignUpForm.css` - Form styling
- `Navigation.css` - Navigation styling
- `UserCard.css` - Card styling
- `App.css` - Main application layout

## 🚀 Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React and Vite**

# Smart Hydro Nexus

<div align="center">

![Smart Hydro Nexus](https://img.shields.io/badge/Smart%20Hydro%20Nexus-v1.0-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Intelligent Hydroelectric Power Management & Monitoring System**

[Features](#features) • [Getting Started](#getting-started) • [Architecture](#architecture) • [Contributing](#contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Architecture](#architecture)
- [Key Components](#key-components)
- [API Integration](#api-integration)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**Smart Hydro Nexus** is an advanced hydroelectric power management and monitoring system designed to optimize water resource utilization, improve operational efficiency, and promote environmental sustainability. The platform provides comprehensive dashboards for both administrators and users to monitor, control, and analyze hydroelectric pump systems in real-time.

This project was developed as part of the **Smart India Hackathon (SIH)**, addressing critical challenges in hydroelectric power management and sustainable water resource optimization.

---

## ✨ Features

### For End Users
- 🔐 **Secure Authentication** - User registration and login with role-based access control
- 📊 **Real-time Monitoring** - Live dashboard displaying pump status, water levels, and power generation
- 📈 **Analytics Section** - Historical data visualization and performance metrics
- 🔔 **Notifications** - Real-time alerts for system anomalies and maintenance requirements
- 🌱 **Eco Impact Tracking** - Monitor environmental benefits and carbon offset metrics
- 🛠️ **Maintenance Management** - Track and schedule equipment maintenance tasks

### For Administrators
- 👥 **User Management** - Control user access and permissions
- ⚙️ **System Configuration** - Configure pump parameters and operational settings
- 🎮 **Pump Control** - Direct remote control of pump operations
- 📊 **Advanced Analytics** - Detailed insights into system performance and resource usage
- 🔧 **Maintenance Oversight** - Monitor maintenance schedules across all installations
- 📱 **Multi-dashboard Support** - Comprehensive overview of multiple hydroelectric stations

### General
- 🌓 **Dark/Light Theme** - Seamless theme switching for user preferences
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ♿ **Accessibility Features** - WCAG compliant interface design
- ⚡ **High Performance** - Optimized with Vite and React for fast load times

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3** - UI library with hooks and functional components
- **TypeScript 5.8** - Type-safe JavaScript
- **Vite 5.4** - Next-generation build tool
- **React Router 6.30** - Client-side routing

### UI & Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - High-quality, customizable components
- **Radix UI** - Unstyled, accessible components
- **Framer Motion 12.23** - Animations and transitions

### State Management & Data
- **TanStack React Query 5.83** - Server state management
- **React Hook Form 7.61** - Efficient form handling
- **Zod 3.25** - TypeScript-first schema validation

### Additional Libraries
- **Recharts 2.15** - Data visualization and charts
- **Lucide React 0.462** - Icon library
- **next-themes 0.3** - Theme management
- **Sonner 1.7** - Toast notifications
- **date-fns 3.6** - Date manipulation

### Development Tools
- **ESLint 9.32** - Code linting
- **PostCSS 8.5** - CSS processing
- **Autoprefixer 10.4** - CSS vendor prefixes
- **Bun** - Fast JavaScript runtime and package manager

---

## 📁 Project Structure

```
smart-hydro-nexus/
├── src/
│   ├── components/
│   │   ├── dashboard/              # Dashboard-specific components
│   │   │   ├── DashboardHeader.tsx
│   │   │   ├── DashboardSidebar.tsx
│   │   │   └── sections/           # Dashboard sections
│   │   │       ├── AnalyticsSection.tsx
│   │   │       ├── DashboardOverview.tsx
│   │   │       ├── EcoImpactSection.tsx
│   │   │       ├── MaintenanceSection.tsx
│   │   │       ├── NotificationsSection.tsx
│   │   │       └── PumpControlSection.tsx
│   │   ├── sections/               # Landing page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProblemSolutionSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── SustainabilitySection.tsx
│   │   │   ├── MarketSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── ui/                    # Reusable UI components (shadcn/ui)
│   │   ├── ProtectedRoute.tsx      # User route protection
│   │   ├── AdminProtectedRoute.tsx # Admin route protection
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Index.tsx               # Home/index page
│   │   ├── LandingPage.tsx         # Landing page
│   │   ├── LoginPage.tsx           # User login
│   │   ├── AdminLoginPage.tsx      # Admin login
│   │   ├── Dashboard.tsx           # User dashboard
│   │   ├── AdminDashboard.tsx      # Admin dashboard
│   │   └── NotFound.tsx            # 404 page
│   ├── contexts/
│   │   └── AuthContext.tsx         # Authentication context
│   ├── hooks/
│   │   ├── use-mobile.tsx          # Mobile detection hook
│   │   └── use-toast.ts            # Toast notification hook
│   ├── lib/
│   │   └── utils.ts                # Utility functions
│   ├── assets/                     # Images, icons, etc.
│   ├── App.tsx                     # Root app component
│   ├── main.tsx                    # Application entry point
│   ├── index.css                   # Global styles
│   ├── App.css                     # App-specific styles
│   └── vite-env.d.ts              # Vite environment types
├── public/
│   └── robots.txt
├── vite.config.ts                  # Vite configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.js               # PostCSS configuration
├── eslint.config.js                # ESLint configuration
├── package.json                    # Project dependencies
├── bun.lockb                       # Bun lock file
├── components.json                 # shadcn/ui config
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** or **Bun** (recommended for faster installation and runtime)
- **Git** (for version control)

**Check your versions:**
```bash
node --version
npm --version
# or
bun --version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SinghaniaAbhishek/SmartHydroNexus.git
   cd smart-hydro-nexus
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Or using Bun (recommended):
   ```bash
   bun install
   ```

3. **Environment Configuration**
   
   Create a `.env.local` file in the project root:
   ```bash
   VITE_API_BASE_URL=http://localhost:3000/api
   VITE_APP_NAME=Smart Hydro Nexus
   ```

### Running the Application

**Development Mode:**
```bash
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

**Production Build:**
```bash
npm run build
# or
bun run build
```

**Preview Production Build:**
```bash
npm run preview
# or
bun run preview
```

**Linting:**
```bash
npm run lint
# or
bun run lint
```

---

## 🏗️ Architecture

### Application Flow

```
┌─────────────────────────────────────────────────────────┐
│                    Landing Page                         │
│        (Hero, Features, Problem/Solution)              │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ↓                         ↓
   ┌─────────────┐         ┌──────────────────┐
   │ User Login  │         │ Admin Login      │
   └──────┬──────┘         └────────┬─────────┘
          │                         │
          ↓                         ↓
   ┌──────────────────┐     ┌──────────────────┐
   │ User Dashboard   │     │ Admin Dashboard  │
   │ - Monitoring     │     │ - User Mgmt      │
   │ - Analytics      │     │ - System Config  │
   │ - Alerts         │     │ - Pump Control   │
   │ - Maintenance    │     │ - Analytics      │
   └──────────────────┘     └──────────────────┘
```

### Component Hierarchy

- **App.tsx** - Root component with routing
  - **LandingPage** - Public landing page
  - **LoginPage** - User authentication
  - **AdminLoginPage** - Admin authentication
  - **Dashboard** (Protected) - User dashboard
  - **AdminDashboard** (Protected) - Admin dashboard

### State Management

- **AuthContext** - Global authentication state and user information
- **React Query** - Server state management for API data
- **React Hook Form** - Local form state management
- **Tailwind CSS** - UI state (dark/light theme)

---

## 🔑 Key Components

### Dashboard Components

| Component | Purpose |
|-----------|---------|
| `DashboardHeader` | Top navigation bar for dashboard |
| `DashboardSidebar` | Navigation menu with sections |
| `DashboardOverview` | Main statistics and KPIs |
| `PumpControlSection` | Remote pump operation controls |
| `AnalyticsSection` | Performance charts and metrics |
| `NotificationsSection` | System alerts and notifications |
| `EcoImpactSection` | Environmental benefits tracking |
| `MaintenanceSection` | Equipment maintenance status |

### Landing Page Sections

| Component | Purpose |
|-----------|---------|
| `HeroSection` | Welcome and call-to-action |
| `ProblemSolutionSection` | Problem statement and solution |
| `FeaturesSection` | Key feature highlights |
| `SustainabilitySection` | Environmental benefits |
| `MarketSection` | Market opportunities |
| `TeamSection` | Team information |
| `ContactSection` | Contact form and information |

### Protected Routes

- **ProtectedRoute** - Requires user authentication
- **AdminProtectedRoute** - Requires admin authentication

---

## 🔐 Authentication

The application implements role-based access control (RBAC) with two user types:

### User Flow
1. User registers or logs in at `/login`
2. Credentials are validated against the backend
3. JWT token is stored in `AuthContext`
4. Access to `/dashboard` is protected by `ProtectedRoute`

### Admin Flow
1. Admin logs in at `/admin/login`
2. Admin credentials are validated
3. Admin token is stored in `AuthContext`
4. Access to `/admin/dashboard` is protected by `AdminProtectedRoute`

### AuthContext Features
- User session management
- Token persistence
- Logout functionality
- Role-based route protection

---

## 📡 API Integration

The application communicates with a backend API for:

- User authentication and authorization
- Real-time pump status and data
- Historical analytics and metrics
- Maintenance records
- System notifications
- Configuration management

**API Base URL** (configured via `.env.local`):
```
VITE_API_BASE_URL=http://localhost:3000/api
```

**Integration Points:**
- `React Query` handles API requests and caching
- `React Hook Form` with `Zod` validates form submissions
- Error handling via toast notifications

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started with Development

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Standards

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful component documentation
- Keep components modular and reusable
- Use shadcn/ui components when possible
- Follow React hooks best practices

### Reporting Issues

- Use GitHub Issues for bug reports
- Provide detailed information and reproduction steps
- Include screenshots or error logs when relevant

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📞 Contact & Support

For questions, suggestions, or support:

- **Project Repository:** [SmartHydroNexus](https://github.com/SinghaniaAbhishek/SmartHydroNexus)
- **Developer:** Abhishek Singhania
- **Email:** [Contact via GitHub](https://github.com/SinghaniaAbhishek)

---

## 🙏 Acknowledgments

- Built as a Smart India Hackathon (SIH) submission
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Design inspiration from modern SaaS applications
- Community contributions and feedback

---

<div align="center">

**Made with ❤️ for Sustainable Hydroelectric Power Management**

</div>

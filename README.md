# Sahodaran 2.0 - LGBTQ+ Support Website

## 🌈 Project Overview

Sahodaran is a comprehensive digital platform dedicated to supporting the LGBTQ+ community in India. Version 2.0 represents a significant redesign focusing on accessibility, user experience, and comprehensive support services.

### 🎯 Mission Statement
To provide a safe, inclusive, and supportive digital space that empowers LGBTQ+ individuals through resources, services, and community connection.

## 🚀 Key Features

### User-Facing Features
- Responsive, mobile-first design
- Multilingual support
- Comprehensive service directory
- Community achievements showcase
- Accessibility-focused interface
- Dark/Light mode support

### Admin Dashboard Features
- Secure authentication
- Service management
- User analytics
- Achievement tracking
- Responsive design
- Dark/Light mode support

## 📂 Project Structure

```
Sahodaran/
├── assets/
│   ├── logo.png
│   └── icons/
│
├── admin/
│   ├── html/
│   │   ├── login.html
│   │   ├── dashboard.html
│   │   ├── error.html
│   │   └── password-recovery.html
│   ├── css/
│   │   └── admin-dashboard.css
│   └── js/
│       └── admin-dashboard.js
│
├── src/
│   ├── html/
│   │   ├── landing.html
│   │   ├── services.html
│   │   └── blog.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
│
└── .env
```

## 🛠 Technologies & Libraries

### Frontend
- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Remix Icons
- Inter Font (Google Fonts)

### Design System
- **Primary Color**: #4CAF50 (Neon Green)
- **Secondary Color**: #2196F3
- **Typography**: Inter, sans-serif
- **Responsive Breakpoints**: Mobile, Tablet, Desktop

### Authentication
- Client-side authentication (to be replaced with backend solution)
- localStorage for session management

## 🌐 Responsive Design

### Breakpoints
- **Mobile**: Up to 576px
- **Tablet**: 577px - 992px
- **Desktop**: 993px and above

### Accessibility Features
- High color contrast
- Semantic HTML
- Keyboard navigation support
- Screen reader compatibility

## 🔒 Security Considerations

### Current Implementation
- Client-side authentication
- Basic error handling
- Placeholder for secure backend integration

### Recommended Improvements
- Implement backend authentication
- Add multi-factor authentication
- Integrate secure API endpoints
- Comprehensive input validation

## 🚧 Development Roadmap

### Phase 1 (Completed)
- [x] Responsive design
- [x] Admin dashboard
- [x] Dark/Light mode
- [x] Basic authentication

### Phase 2 (Upcoming)
- [ ] Backend authentication
- [ ] Service management API
- [ ] User analytics integration
- [ ] Internationalization
- [ ] Enhanced security features

## 🤝 Contributing

### Guidelines
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

### Code of Conduct
- Respect community guidelines
- Maintain inclusive language
- Prioritize accessibility

## 📦 Installation

### Prerequisites
- Modern web browser
- Text editor (VS Code recommended)
- Git

### Steps
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/sahodaran.git
   ```
2. Navigate to project directory
   ```bash
   cd sahodaran
   ```
3. Open `index.html` in your browser

## 📞 Contact & Support

**Email**: support@sahodaran.org
**Website**: [www.sahodaran.org](https://www.sahodaran.org)

## 📄 License

This project is open-source and available under the MIT License.

---

**Made with ❤️ for the LGBTQ+ Community in India**

## Deployment Instructions

### Prerequisites
- Vercel CLI
- Node.js (v14 or later)
- Git

### Deployment Steps
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to Vercel:
```bash
vercel
```

### Local Development
```bash
vercel dev
```

## Project Structure
- `index.html`: Main landing page
- `blog.html`: Blog section
- `services.html`: Services overview
- `assets/`: Image and media resources
- `vercel.json`: Deployment configuration

## Performance Optimizations
- Static site deployment
- Minimal JavaScript
- Optimized asset loading

## Security Headers
Implemented in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- Content-Security-Policy

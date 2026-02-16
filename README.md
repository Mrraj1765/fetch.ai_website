# Fetch.ai Developer Club Website

A modern, responsive website for the Fetch.ai Developer Club at R. C. Patel Institute of Technology, Shirpur. Built with React and Vite, featuring a clean design and smooth user experience.

## 🚀 Features

- **Modern Hero Section** - Eye-catching landing page with dynamic image columns and smooth animations
- **About Section** - Comprehensive information about the club's mission and vision
- **Team Showcase** - Dedicated pages for leadership and team members with filtering capabilities
- **Events Gallery** - Beautiful lightbox gallery showcasing club events and activities
- **Contact Form** - Professional contact form with integrated Google Maps
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Engaging transitions and hover effects throughout

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Styling:** Vanilla CSS with modern design patterns
- **Deployment:** Ready for production deployment

## 📁 Project Structure

```
fetch.ai_website/
├── frontend/
│   ├── public/
│   │   ├── images/          # Event and hero images
│   │   ├── events/          # Gallery event photos
│   │   └── team/            # Team member photos
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Teams.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── FAQ.jsx
│   │   ├── pages/           # Full page components
│   │   │   ├── GalleryPage.jsx
│   │   │   └── TeamsPage.jsx
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mrraj1765/fetch.ai_website.git
   cd fetch.ai_website
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📄 Pages

- **Home** (`/`) - Landing page with hero section, about, teams preview, gallery preview, and contact
- **Events** (`/events`) - Full gallery page with lightbox for event photos
- **Team** (`/team`) - Complete team page with member filtering by category

## 🎨 Design Features

### Hero Section
- Multi-column image layout with hover effects
- Gradient text effects
- Call-to-action buttons
- Live statistics display
- Animated scroll indicator

### Gallery
- 4-column responsive grid layout
- Lightbox with image navigation
- Smooth transitions and animations
- Mobile-optimized viewing

### Contact
- Modern glassmorphism design
- Integrated Google Maps (R. C. Patel Institute of Technology)
- Form validation
- Success message feedback

### Team Pages
- Category-based filtering (Technical, Management, Documentation, PR, Design & Media)
- Social media links (LinkedIn, GitHub)
- Hover effects on member cards
- Responsive grid layout



## 📧 Contact

**Fetch.ai Developer Club**  
R. C. Patel Institute of Technology, Shirpur  
Nimzari Naka, Shirpur, Maharashtra 425405

Email: fetchai25@gmail.com




## 🙏 Acknowledgments

- Fetch.ai for the inspiration and technology
- R. C. Patel Institute of Technology for support
- All club members and contributors

---

**Built   by tejas patil**
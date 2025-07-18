# Maleda Printing & Advertising Website

A modern, responsive website for Maleda Printing & Advertising company built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper focus management
- **Component-Based**: Reusable components for easy maintenance

## Pages

- **Home**: Hero section, services overview, and call-to-action
- **About**: Company story, mission, vision, and values
- **Services**: Comprehensive service listings with detailed descriptions
- **Portfolio**: Project showcase with filtering capabilities
- **Contact**: Contact form, company information, and location
- **404**: Custom error page

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development experience
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Vite**: Fast build tool and development server
- **Lucide React**: Beautiful, customizable icons

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── Section.tsx
├── pages/              # Page components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── NotFound.tsx
│   ├── Portfolio.tsx
│   └── Services.tsx
├── App.tsx            # Main app component
├── main.tsx          # App entry point
└── index.css         # Global styles
```

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone [repository-url]
   cd maleda-printing-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Component Guidelines

- Use TypeScript for all components
- Follow the existing naming conventions
- Use Tailwind CSS classes for styling
- Implement proper accessibility features
- Add proper TypeScript interfaces for props

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`
4. Add any necessary types and interfaces

## Design System

### Colors

- **Primary**: Blue (#1E40AF) - Main brand color
- **Secondary**: Orange (#F97316) - Accent color
- **Neutral**: Gray shades for text and backgrounds
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

### Typography

- **Font Family**: Poppins (Google Fonts)
- **Headings**: Bold weights (600-800)
- **Body**: Regular weight (400)
- **Line Height**: 1.6 for body text, 1.2 for headings

### Spacing

- **Base Unit**: 8px
- **Components**: Consistent padding and margins
- **Sections**: 16px vertical padding on mobile, 24px on desktop

## Performance Optimizations

- Lazy loading for images
- Optimized fonts with preload
- Minified CSS and JavaScript
- Efficient bundle splitting
- Proper image formats and sizes

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and belongs to Maleda Printing & Advertising.

## Contact

For questions or support, contact:
- Email: MaledaMaledal4@gmail.com
- Phone: +251-935-85-4117
- Address: Arat Kilo, Addis Ababa, Ethiopia
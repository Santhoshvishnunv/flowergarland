# Bloom & Garland - Flower Garland Sales Website

A beautiful, modern website for selling flower garlands with a responsive design and shopping cart functionality.

## Features

- 🎨 Modern, responsive design that works on all devices
- 🛒 Shopping cart with local storage persistence
- 📱 Mobile-friendly navigation
- 🌸 Beautiful product showcase
- 📧 Contact form for inquiries
- ✨ Smooth animations and transitions

## Getting Started

### Prerequisites

No special requirements! Just a modern web browser.

### Running the Website

You have several options to run the website:

#### Option 1: Direct Browser (Simplest)
1. Simply double-click `index.html` or right-click and select "Open with" your preferred browser
2. The website will open directly - no server needed!

#### Option 2: Python Server (Recommended)
If you have Python installed:
```bash
python server.py
```
Then open http://localhost:8000 in your browser.

Or on Windows, just double-click `start.bat`

#### Option 3: Node.js Server
If you have Node.js installed:
```bash
node server.js
```
Then open http://localhost:8000 in your browser.

#### Option 4: VS Code Live Server
If you're using VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### File Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript for cart and interactivity
├── server.py       # Python HTTP server (optional)
├── server.js       # Node.js HTTP server (optional)
├── start.bat       # Windows batch file to start server
├── start.sh        # Linux/Mac script to start server
└── README.md       # This file
```

## Usage

### Viewing the Website

Simply open `index.html` in any modern web browser:
- Chrome
- Firefox
- Safari
- Edge

### Customization

#### Adding Products

Edit the `products` array in `script.js`:

```javascript
const products = [
    {
        id: 1,
        name: "Your Product Name",
        description: "Product description",
        price: 29.99,
        emoji: "🌹"
    },
    // Add more products...
];
```

#### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #d63384;
    --secondary-color: #ff6b9d;
    /* Modify these values to change the color scheme */
}
```

#### Updating Contact Information

Edit the contact section in `index.html`:

```html
<div class="info-item">
    <span class="info-icon">📞</span>
    <div>
        <h3>Phone</h3>
        <p>Your Phone Number</p>
    </div>
</div>
```

## Features Explained

### Shopping Cart

- Add items to cart by clicking "Add to Cart"
- View cart by clicking the cart icon in the navigation
- Adjust quantities or remove items
- Cart persists in browser's local storage
- Checkout button for completing orders

### Responsive Design

The website automatically adapts to different screen sizes:
- Desktop: Full layout with grid displays
- Tablet: Adjusted spacing and layouts
- Mobile: Stacked layout with hamburger menu

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential features to add:
- Payment gateway integration
- User accounts and order history
- Product search and filtering
- Product reviews and ratings
- Image galleries for products
- Backend API integration

## License

This project is open source and available for personal and commercial use.

## Support

For questions or support, please contact:
- Email: info@bloomandgarland.com
- Phone: +1 (555) 123-4567

---

Made with ❤️ for flower garland enthusiasts


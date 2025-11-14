// Product data
const defaultProducts = [
    {
        id: 1,
        name: "Classic Rose Muhurtham",
        description: "Deep red Bangalore roses with tuberose borders for traditional exchange rituals.",
        price: 5499,
        emoji: "🌹",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
        tags: ["Bride & Groom", "48h lead", "Roses"],
        leadTime: "Make-to-order, 48 hours",
        shopName: "Arjun Floral Works",
        phone: "+91 90000 12345",
        email: "orders@shaadigarlandstudio.com"
    },
    {
        id: 2,
        name: "Jasmine & Orchid Symphony",
        description: "Madurai jasmine base with purple dendrobium highlights for evening receptions.",
        price: 6499,
        emoji: "🌸",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
        tags: ["Reception", "Premium", "Jasmine"],
        leadTime: "Book 72 hours in advance",
        shopName: "Orchid Lane Chennai",
        phone: "+91 98844 22110",
        email: "hello@orchidlane.in"
    },
    {
        id: 3,
        name: "Marigold Rajwadi",
        description: "Layered marigolds with mirror lace ideal for baraat and welcoming ceremonies.",
        price: 4499,
        emoji: "🌼",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
        tags: ["Welcome", "Vibrant", "Marigold"],
        leadTime: "Same-day for morning pickup",
        shopName: "Rajwadi Pushpam",
        phone: "+91 98400 87654",
        email: "rajwadi@flowers.com"
    },
    {
        id: 4,
        name: "Ivory Tube Rose Luxe",
        description: "Long-format mogra & sevanthi mala that pairs with pastel lehengas.",
        price: 5899,
        emoji: "🤍",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
        tags: ["Pastel Palette", "Fragrant"],
        leadTime: "48 hours",
        shopName: "Ivory Bloom Boutique",
        phone: "+91 99520 33221",
        email: "support@ivorybloom.com"
    },
    {
        id: 5,
        name: "Royal Lotus Duo",
        description: "Statement lotus blooms hand-wired with baby’s breath for photo-ready moments.",
        price: 7999,
        emoji: "🌺",
        image: "https://images.unsplash.com/photo-1508182311256-e3f9a5e05c92?auto=format&fit=crop&w=900&q=80",
        tags: ["Signature", "Lotus", "Limited"],
        leadTime: "Pre-order 5 days ahead",
        shopName: "Lotus Atelier",
        phone: "+91 96000 44567",
        email: "orders@lotusatelier.com"
    },
    {
        id: 6,
        name: "Heritage Temple Set",
        description: "Two 5-foot malas with rudraksha beads, jasmine, and gold zari tassels.",
        price: 6999,
        emoji: "🪷",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
        tags: ["Temple Ceremony", "Rudraksha"],
        leadTime: "72 hours",
        shopName: "Kovil Garland House",
        phone: "+91 90909 11122",
        email: "temple@kovilgarland.com"
    },
    {
        id: 7,
        name: "Minimal Chic Twins",
        description: "Slim garlands with spray roses and eucalyptus for contemporary vows.",
        price: 4999,
        emoji: "🌷",
        image: "https://images.unsplash.com/photo-1470137430626-983a37b8ea46?auto=format&fit=crop&w=900&q=80",
        tags: ["Modern", "Lightweight"],
        leadTime: "36 hours",
        shopName: "Studio Minimal",
        phone: "+91 93333 77889",
        email: "hello@studiominimal.in"
    },
    {
        id: 8,
        name: "Entourage Garland Pack",
        description: "Set of 6 coordinating malas for siblings, parents, and VIP guests.",
        price: 10999,
        emoji: "💐",
        image: "https://images.unsplash.com/photo-1459407268459-e7fcc5fb8322?auto=format&fit=crop&w=900&q=80",
        tags: ["Family Set", "Bulk Pack"],
        leadTime: "Order 4 days prior",
        shopName: "Family Florists",
        phone: "+91 94444 66778",
        email: "family@florists.co"
    }
];

let customProducts = (JSON.parse(localStorage.getItem('customProducts')) || []).map(item => ({
    ...item,
    price: Number(item.price) || 0
}));
let products = [...defaultProducts, ...customProducts];
let nextProductId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;

function formatINR(amount) {
    const value = Number(amount) || 0;
    return `₹${value.toLocaleString('en-IN')}`;
}

function sanitizePhone(phone) {
    return phone ? phone.replace(/[^+\d]/g, '') : '';
}

function saveCustomProducts() {
    localStorage.setItem('customProducts', JSON.stringify(customProducts));
}

function refreshProductList() {
    products = [...defaultProducts, ...customProducts];
    renderProducts();
}

// Cart state
let cart = (JSON.parse(localStorage.getItem('cart')) || []).map(item => ({
    ...item,
    price: Number(item.price) || 0
}));

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();
    setupEventListeners();
    renderCart();
});

// Render products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');

    if (!productsGrid) return;

    productsGrid.innerHTML = products.map(product => {
        const phoneLink = product.phone ? `<a href="tel:${sanitizePhone(product.phone)}">${product.phone}</a>` : 'On request';
        const emailLink = product.email ? `<a href="mailto:${product.email}">${product.email}</a>` : 'On request';

        return `
            <div class="product-card">
                <div class="product-image">
                    ${product.image ? `<img src="${product.image}" alt="${product.name}">` : `<span class="product-emoji">${product.emoji || '🌸'}</span>`}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    ${product.tags ? `
                        <div class="product-tags">
                            ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
                        </div>
                    ` : ''}
                    <p class="product-description">${product.description}</p>
                    <p class="product-lead">${product.leadTime || 'Made fresh daily'}</p>
                    <div class="product-footer">
                        <span class="product-price">${formatINR(product.price)}</span>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>
                    </div>
                    <div class="product-contact">
                        <p><strong>Shop:</strong> ${product.shopName || 'Independent Florist'}</p>
                        <p><strong>Phone:</strong> ${phoneLink}</p>
                        <p><strong>Email:</strong> ${emailLink}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
            updateCartCount();
        }
    }
}

// Render cart
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #6c757d; padding: 2rem;">Your cart is empty</p>';
        cartTotal.textContent = formatINR(0);
        return;
    }

    cartItems.innerHTML = cart.map(item => {
        const lineTotal = item.price * item.quantity;
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.emoji || '🌸'} ${item.name}</div>
                    <div class="cart-item-price">${formatINR(item.price)} each</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <div class="cart-item-total">${formatINR(lineTotal)}</div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    }).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatINR(total);
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Cart modal
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeBtn = document.querySelector('.close');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const orderModal = document.getElementById('orderModal');
    const orderCloseBtn = document.querySelector('.order-close');
    const orderForm = document.getElementById('orderForm');
    const orderReview = document.getElementById('orderReview');

    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cartModal.style.display = 'block';
            renderCart();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            cartModal.style.display = 'none';
            openOrderModal();
        });
    }

    if (orderCloseBtn) {
        orderCloseBtn.addEventListener('click', closeOrderModal);
    }

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (cart.length === 0) {
                alert('Please add garlands to your cart before submitting the order.');
                return;
            }

            const orderData = {
                name: document.getElementById('clientName').value,
                phone: document.getElementById('clientPhone').value,
                email: document.getElementById('clientEmail').value,
                eventType: document.getElementById('eventType').value,
                eventDate: document.getElementById('eventDate').value,
                eventTime: document.getElementById('eventTime').value,
                venue: document.getElementById('venue').value,
                deliverySlot: document.getElementById('deliverySlot').value,
                notes: document.getElementById('orderNotes').value || 'No additional notes'
            };

            const orderNumber = `MALA${Date.now().toString().slice(-6)}`;
            const orderItems = cart.map(item => `${item.quantity} x ${item.name}`).join(', ');
            const orderTotal = formatINR(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0));

            alert(`Order ${orderNumber} placed!\n\nItems: ${orderItems}\nTotal: ${orderTotal}\nEvent: ${orderData.eventType} on ${orderData.eventDate} at ${orderData.eventTime}\nVenue: ${orderData.venue}\nDelivery: ${orderData.deliverySlot}\n\nWe will reach out at ${orderData.phone} / ${orderData.email} to confirm flower availability.`);

            orderForm.reset();
            cart = [];
            saveCart();
            updateCartCount();
            renderCart();
            closeOrderModal();
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
        if (e.target === orderModal) {
            closeOrderModal();
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const customNeeds = document.getElementById('customNeeds').value || 'Not specified';
            const message = document.getElementById('message').value;

            alert(`Thank you, ${name}! We have logged your custom floral request.\n\nPhone: ${phone}\nNeeds: ${customNeeds}\nWe will reply to ${email} with sketches and a quote.`);
            contactForm.reset();
        });
    }

    // Listing form
    const listingForm = document.getElementById('listingForm');
    if (listingForm) {
        listingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const imageFile = document.getElementById('listingImage').files[0];
            const name = document.getElementById('listingName').value;
            const price = parseInt(document.getElementById('listingPrice').value, 10) || 0;
            const leadTime = document.getElementById('listingLeadTime').value;
            const description = document.getElementById('listingDescription').value;
            const shopName = document.getElementById('listingShop').value;
            const phone = document.getElementById('listingPhone').value;
            const email = document.getElementById('listingEmail').value;
            const tagsValue = document.getElementById('listingTags').value;
            const tags = tagsValue
                ? tagsValue.split(',').map(tag => tag.trim()).filter(Boolean)
                : [];

            const imageData = await readFileAsDataURL(imageFile);

            const newProduct = {
                id: nextProductId++,
                name,
                description,
                price,
                emoji: "🌸",
                image: imageData,
                tags,
                leadTime,
                shopName,
                phone,
                email
            };

            customProducts.push(newProduct);
            saveCustomProducts();
            refreshProductList();
            showNotification(`${name} added to the website!`);
            listingForm.reset();
        });
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #d63384;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        animation: slideInRight 0.3s;
    `;
    notification.textContent = message;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s reverse';
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 300);
    }, 3000);
}

function openOrderModal() {
    const orderModal = document.getElementById('orderModal');
    const eventDateInput = document.getElementById('eventDate');

    if (eventDateInput) {
        const today = new Date().toISOString().split('T')[0];
        eventDateInput.min = today;
    }

    populateOrderReview();
    orderModal.style.display = 'block';
}

function closeOrderModal() {
    const orderModal = document.getElementById('orderModal');
    orderModal.style.display = 'none';
}

function populateOrderReview() {
    const orderReview = document.getElementById('orderReview');

    if (!orderReview) return;

    if (cart.length === 0) {
        orderReview.innerHTML = '<p style="color:#6c757d;text-align:center;">Add garlands to your cart to see the summary here.</p>';
        return;
    }

    const itemsMarkup = cart.map(item => `
        <div class="order-review-item">
            <span>${item.quantity} × ${item.name}</span>
            <span>${formatINR(item.price * item.quantity)}</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    orderReview.innerHTML = `
        ${itemsMarkup}
        <div class="order-review-total">
            Total: ${formatINR(total)}
        </div>
    `;
}

function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            resolve('');
            return;
        }
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Unable to read file'));
        reader.readAsDataURL(file);
    });
}


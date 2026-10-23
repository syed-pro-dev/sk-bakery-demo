/* ==================== 1. PRODUCT CATALOG DATA ==================== */
const PRODUCTS = [
    {
        id: 101,
        name: "Decadent Choco Fudge Cake",
        category: "Cake",
        price: 15.00,
        rating: 4.9,
        reviews: 128,
        featured: true,
        badge: "Best Seller",
        image: "https://ik.imagekit.io/19imy4f1u/lite_1783138229791_G-qMMtflj.png",
        description: "Baked with rich Belgian cocoa and layered with silky fudge frosting. Moist, fluffy, and irresistibly smooth for celebrations."
    },
    {
        id: 102,
        name: "Classic Butter Croissant",
        category: "Pastry",
        price: 3.50,
        rating: 4.8,
        reviews: 94,
        featured: true,
        badge: "Fresh Daily",
        image: "https://ik.imagekit.io/19imy4f1u/lite_1783237786728_gPi-20Qi9.webp",
        description: "Flaky, golden-brown French pastry laminated with pure cultured butter for a crisp exterior and honeycomb interior."
    },
    {
        id: 103,
        name: "Red Velvet Berry Cake",
        category: "Cake",
        price: 18.00,
        rating: 4.9,
        reviews: 112,
        featured: true,
        badge: "Chef's Special",
        image: "https://ik.imagekit.io/19imy4f1u/lite_1783235885383_nP5VLmAOS.webp",
        description: "Velvety crimson sponge layered with Madagascar vanilla cream cheese frosting and topped with fresh raspberries."
    },
    {
        id: 104,
        name: "Artisan Country Sourdough",
        category: "Bread",
        price: 6.00,
        rating: 4.7,
        reviews: 76,
        featured: true,
        badge: "Organic",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
        description: "Slow-fermented for 36 hours for maximum flavor and digestibility, featuring a blistered crust and chewy crumb."
    },
    {
        id: 105,
        name: "Belgian Choco Chunk Cookies",
        category: "Cookies",
        price: 4.50,
        rating: 4.9,
        reviews: 145,
        featured: true,
        badge: "Hot Pick",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600",
        description: "Crisp golden edges with a gooey, melty dark chocolate center and a sprinkle of flaky sea salt."
    },
    {
        id: 106,
        name: "Parisian Macaron Box (6 Pcs)",
        category: "Cookies",
        price: 12.00,
        rating: 4.8,
        reviews: 88,
        featured: true,
        badge: "Gift Box",
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=600",
        description: "Delicate almond meringue shells filled with pistachio, raspberry, salted caramel, and dark chocolate ganache."
    },
    {
        id: 107,
        name: "Seasonal Berry Fruit Tart",
        category: "Pastry",
        price: 5.50,
        rating: 4.7,
        reviews: 63,
        featured: false,
        badge: "Seasonal",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=600",
        description: "Buttery shortcrust pastry shell filled with silkydiplomat cream and glazed seasonal berries."
    },
    {
        id: 108,
        name: "Glazed Brioche Ring Donut",
        category: "Pastry",
        price: 3.00,
        rating: 4.6,
        reviews: 52,
        featured: false,
        badge: "Sweet",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=600",
        description: " Cloud-soft brioche dough fried to golden perfection and dipped in warm vanilla bean sugar glaze."
    },
    {
        id: 109,
        name: "Grilled Chicken Club Sandwich",
        category: "Snacks",
        price: 7.50,
        rating: 4.8,
        reviews: 91,
        featured: false,
        badge: "Savory",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600",
        description: "Triple-decker toasted sourdough stacked with herb-marinated grilled chicken, cheddar, crispy lettuce, and house aioli."
    },
    {
        id: 110,
        name: "Spanish Iced Caramel Latte",
        category: "Coffee",
        price: 4.99,
        rating: 4.9,
        reviews: 134,
        featured: false,
        badge: "Barista Pick",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600",
        description: "Double shot of our Ethiopian & Brazilian house espresso shaken with sweetened condensed milk over ice."
    },
    {
        id: 111,
        name: "The Ultimate Oreo Shake",
        category: "Coffee",
        price: 6.99,
        rating: 5.0,
        reviews: 160,
        featured: false,
        badge: "Limited Offer",
        image: "https://ik.imagekit.io/19imy4f1u/lite_1783139366885_6AY37yLmP.png",
        description: "Creamy blend of real vanilla bean ice cream, crushed Oreo cookies, chocolate drizzle, and whipped cream."
    },
    {
        id: 112,
        name: "Garlic Herb Cheese Baguette",
        category: "Bread",
        price: 4.25,
        rating: 4.7,
        reviews: 49,
        featured: false,
        badge: "Oven Fresh",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600",
        description: "Crisp French baguette baked with roasted garlic butter, mozzarella, and fresh parsley."
    }
];

/* ==================== 2. APPLICATION STATE ==================== */
let currentCategory = "All";
let searchQuery = "";
let currentPage = 1;
const itemsPerPage = 8;

let cart = JSON.parse(localStorage.getItem("skmods_bakery_cart")) || [];
let appliedPromo = localStorage.getItem("skmods_bakery_promo") || "";
let userProfile = JSON.parse(localStorage.getItem("skmods_bakery_user")) || null;

/* ==================== 3. INITIALIZATION ==================== */
document.addEventListener("DOMContentLoaded", () => {
    injectDynamicModalsAndBars();
    duplicateMarqueeItems();
    renderFeaturedProducts();
    renderMenuProducts();
    updateCartUI();
    updateAccountUI();
    initNavbarAndScrollSpy();
    initScrollReveal();

    // Search Input Listener
    const searchInput = document.getElementById("menu-search-input");
    const clearBtn = document.getElementById("clear-search-btn");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.trim();
            currentPage = 1;
            if (clearBtn) {
                clearBtn.classList.toggle("hidden", searchQuery.length === 0);
                clearBtn.classList.toggle("flex", searchQuery.length > 0);
            }
            renderMenuProducts();
        });
    }

    // Set default reservation date to today
    const dateInput = document.getElementById("res-date");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
        dateInput.value = today;
    }
});

/* ==================== 4. NAVBAR & SCROLL REVEAL ==================== */
function initNavbarAndScrollSpy() {
    const navbar = document.getElementById("navbar");
    const logoText = document.getElementById("nav-logo-text");
    const navLinks = document.querySelectorAll(".nav-link");
    const navActionBtns = document.querySelectorAll(".nav-action-btn");
    const mobileTopBtns = document.querySelectorAll(".mobile-top-btn");

    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY > 60;

        if (scrolled) {
            navbar.classList.remove("bg-transparent", "py-4");
            navbar.classList.add("bg-white/95", "backdrop-blur-md", "shadow-md", "py-2");
            if (logoText) {
                logoText.classList.remove("from-white", "to-rose-200");
                logoText.classList.add("from-brand-red", "to-rose-600");
            }
            navLinks.forEach(link => {
                link.classList.remove("text-white", "text-gray-200", "hover:text-white");
                link.classList.add("text-gray-700", "hover:text-brand-red");
            });
            navActionBtns.forEach((btn, idx) => {
                if (idx < 2) {
                    btn.classList.remove("text-gray-100", "hover:text-white", "hover:bg-white/10");
                    btn.classList.add("text-gray-700", "hover:text-brand-red", "hover:bg-rose-50");
                }
            });
            mobileTopBtns.forEach(btn => {
                btn.classList.remove("text-white", "bg-white/10", "border-white/20");
                btn.classList.add("text-gray-800", "bg-gray-100", "border-gray-200");
            });
        } else {
            navbar.classList.add("bg-transparent", "py-4");
            navbar.classList.remove("bg-white/95", "backdrop-blur-md", "shadow-md", "py-2");
            if (logoText) {
                logoText.classList.add("from-white", "to-rose-200");
                logoText.classList.remove("from-brand-red", "to-rose-600");
            }
            navLinks.forEach(link => {
                link.classList.add("text-gray-200", "hover:text-white");
                link.classList.remove("text-gray-700", "hover:text-brand-red");
            });
            navActionBtns.forEach((btn, idx) => {
                if (idx < 2) {
                    btn.classList.add("text-gray-100", "hover:text-white", "hover:bg-white/10");
                    btn.classList.remove("text-gray-700", "hover:text-brand-red", "hover:bg-rose-50");
                }
            });
            mobileTopBtns.forEach(btn => {
                btn.classList.add("text-white", "bg-white/10", "border-white/20");
                btn.classList.remove("text-gray-800", "bg-gray-100", "border-gray-200");
            });
        }
    });
}

function initScrollReveal() {
    const elements = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
            }
        });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
}

function duplicateMarqueeItems() {
    const marquee = document.getElementById("signature-marquee");
    if (marquee) {
        marquee.innerHTML += marquee.innerHTML;
    }
}

/* ==================== 5. RENDER FEATURED & MENU GRIDS ==================== */
function renderFeaturedProducts() {
    const grid = document.getElementById("featured-products-grid");
    if (!grid) return;

    const featuredItems = PRODUCTS.filter(p => p.featured);
    grid.innerHTML = featuredItems.map(item => `
        <div class="bg-white rounded-3xl p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(225,29,72,0.12)] transition-all duration-500 group flex flex-col justify-between border border-rose-100/60">
            <div>
                <div onclick="openProductModal(${item.id})" class="relative h-44 sm:h-60 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50/40 overflow-hidden mb-5 flex items-center justify-center cursor-pointer">
                    <span class="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm text-brand-red text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">${item.badge}</span>
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                </div>
                <div class="flex items-center justify-between text-xs text-gray-400 font-semibold mb-1">
                    <span class="uppercase tracking-wider text-brand-red">${item.category}</span>
                    <span class="text-yellow-500 font-bold">★ ${item.rating} (${item.reviews})</span>
                </div>
                <h3 onclick="openProductModal(${item.id})" class="font-serif font-bold text-lg sm:text-2xl text-gray-900 group-hover:text-brand-red transition-colors cursor-pointer line-clamp-1 mb-2">${item.name}</h3>
                <p class="text-gray-500 text-xs sm:text-sm line-clamp-2 mb-5">${item.description}</p>
            </div>
            <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                <span class="text-xl sm:text-2xl font-black text-gray-900">$${item.price.toFixed(2)}</span>
                <button onclick="addToCart(${item.id}, 1)" class="bg-gray-900 hover:bg-brand-red text-white px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all active:scale-95 shadow-sm cursor-pointer">
                    + Add to Cart
                </button>
            </div>
        </div>
    `).join("");
}

function getFilteredProducts() {
    return PRODUCTS.filter(item => {
        const matchesCategory = currentCategory === "All" || item.category.toLowerCase() === currentCategory.toLowerCase();
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

function renderMenuProducts() {
    const grid = document.getElementById("menu-products-grid");
    const pageIndicator = document.getElementById("page-indicator");
    const prevBtn = document.getElementById("prev-page-btn");
    const nextBtn = document.getElementById("next-page-btn");
    if (!grid) return;

    const filtered = getFilteredProducts();
    const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    if (paginated.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-16 text-center bg-white/80 rounded-3xl border border-rose-100">
                <p class="text-2xl font-serif font-bold text-gray-800 mb-2">No treats found matching "${searchQuery}"</p>
                <p class="text-gray-500 mb-6">Try clearing your search filter or switching categories.</p>
                <button onclick="setMenuCategory('All'); clearMenuSearch();" class="bg-brand-red text-white px-6 py-2.5 rounded-full font-bold text-sm">Reset Filters</button>
            </div>
        `;
    } else {
        grid.innerHTML = paginated.map(item => `
            <div class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-100 group">
                <div>
                    <div onclick="openProductModal(${item.id})" class="relative h-40 sm:h-48 rounded-2xl bg-rose-50/50 overflow-hidden mb-4 cursor-pointer">
                        <span class="absolute top-2.5 left-2.5 z-10 bg-white/90 text-brand-red text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">${item.category}</span>
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <h4 onclick="openProductModal(${item.id})" class="font-serif font-bold text-gray-900 text-base sm:text-lg group-hover:text-brand-red transition-colors cursor-pointer line-clamp-1">${item.name}</h4>
                    <p class="text-xs text-gray-500 line-clamp-2 mt-1 mb-4">${item.description}</p>
                </div>
                <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span class="font-black text-lg text-gray-900">$${item.price.toFixed(2)}</span>
                    <button onclick="addToCart(${item.id}, 1)" class="bg-rose-50 hover:bg-brand-red text-brand-red hover:text-white font-bold text-xs px-3.5 py-2 rounded-full transition-colors cursor-pointer">
                        + Add
                    </button>
                </div>
            </div>
        `).join("");
    }

    if (pageIndicator) pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
    if (prevBtn) prevBtn.disabled = currentPage <= 1;
    if (nextBtn) nextBtn.disabled = currentPage >= totalPages;
}

/* ==================== 6. MENU FILTER & SEARCH CONTROLS ==================== */
function setMenuCategory(category) {
    currentCategory = category;
    currentPage = 1;

    const pills = document.querySelectorAll(".category-pill");
    pills.forEach(pill => {
        if (pill.dataset.category === category) {
            pill.classList.add("bg-brand-red", "text-white", "border-brand-red");
            pill.classList.remove("bg-white", "text-gray-600", "border-gray-200");
        } else {
            pill.classList.remove("bg-brand-red", "text-white", "border-brand-red");
            pill.classList.add("bg-white", "text-gray-600", "border-gray-200");
        }
    });

    renderMenuProducts();
}

function filterMenuFromCategory(category) {
    setMenuCategory(category);
    const menuSection = document.getElementById("menu");
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
    }
}

function changeMenuPage(delta) {
    currentPage += delta;
    renderMenuProducts();
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

function focusMenuSearch() {
    const menuSection = document.getElementById("menu");
    const searchInput = document.getElementById("menu-search-input");
    if (menuSection) menuSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        if (searchInput) searchInput.focus();
    }, 500);
}

function clearMenuSearch() {
    const searchInput = document.getElementById("menu-search-input");
    const clearBtn = document.getElementById("clear-search-btn");
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    if (clearBtn) {
        clearBtn.classList.add("hidden");
        clearBtn.classList.remove("flex");
    }
    currentPage = 1;
    renderMenuProducts();
}

/* ==================== 7. CART & PROMO ENGINE ==================== */
function saveCart() {
    localStorage.setItem("skmods_bakery_cart", JSON.stringify(cart));
    localStorage.setItem("skmods_bakery_promo", appliedPromo);
}

function addToCart(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: qty
        });
    }

    saveCart();
    updateCartUI();
    showToast(`Added ${qty}x "${product.name}" to your cart!`);
}

function changeCartQty(productId, delta) {
    const index = cart.findIndex(item => item.id === productId);
    if (index === -1) return;

    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const badges = [
        document.getElementById("desktop-cart-badge"),
        document.getElementById("mobile-top-cart-badge"),
        document.getElementById("mobile-bottom-cart-badge")
    ];
    badges.forEach(b => {
        if (b) b.textContent = totalCount;
    });

    const cartItemsContainer = document.getElementById("cart-items-list");
    const subtotalEl = document.getElementById("cart-subtotal");
    const discountRow = document.getElementById("cart-discount-row");
    const discountEl = document.getElementById("cart-discount");
    const totalEl = document.getElementById("cart-total");

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="py-16 text-center text-gray-400">
                <p class="text-4xl mb-3">🥐</p>
                <p class="font-serif font-bold text-gray-700 text-lg">Your bakery basket is empty</p>
                <p class="text-xs mt-1">Add fresh cakes, cookies, or coffee to get started!</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="flex items-center gap-4 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover bg-white shrink-0">
                <div class="flex-1 min-w-0">
                    <h4 class="font-bold text-gray-900 text-sm truncate">${item.name}</h4>
                    <p class="text-xs text-brand-red font-bold">$${(item.price * item.qty).toFixed(2)}</p>
                    <div class="flex items-center gap-2 mt-2">
                        <button onclick="changeCartQty(${item.id}, -1)" class="w-6 h-6 rounded-full bg-white border border-gray-200 text-xs font-bold hover:bg-rose-50">-</button>
                        <span class="text-xs font-bold w-5 text-center">${item.qty}</span>
                        <button onclick="changeCartQty(${item.id}, 1)" class="w-6 h-6 rounded-full bg-white border border-gray-200 text-xs font-bold hover:bg-rose-50">+</button>
                    </div>
                </div>
            </div>
        `).join("");
    }

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discount = appliedPromo === "OREO50" ? subtotal * 0.25 : 0;
    const finalTotal = Math.max(0, subtotal - discount);

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (discountRow && discountEl) {
        discountRow.classList.toggle("hidden", discount === 0);
        discountEl.textContent = `-$${discount.toFixed(2)}`;
    }
    if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)}`;
}

function applyPromoCodeInput() {
    const input = document.getElementById("promo-code-input");
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    if (code === "OREO50") {
        appliedPromo = "OREO50";
        saveCart();
        updateCartUI();
        showToast("Promo OREO50 applied! 25% discount activated.");
    } else {
        showToast("Invalid promo code. Try OREO50!", true);
    }
}

function copyPromoCode(code) {
    navigator.clipboard.writeText(code).catch(() => {});
    appliedPromo = code;
    saveCart();
    updateCartUI();
    showToast(`Copied & applied code "${code}" (25% OFF)!`);
}

function claimOreoOffer() {
    appliedPromo = "OREO50";
    addToCart(111, 1);
    toggleCartDrawer(true);
}

function addBestSellerToCart() {
    addToCart(101, 1);
    toggleCartDrawer(true);
}

function checkoutViaWhatsApp() {
    if (cart.length === 0) {
        showToast("Your cart is empty!", true);
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discount = appliedPromo === "OREO50" ? subtotal * 0.25 : 0;
    const total = Math.max(0, subtotal - discount);

    let message = `*New Order — SK MODS Bakery & Mart*%0A`;
    if (userProfile && userProfile.name) {
        message += `*Customer:* ${encodeURIComponent(userProfile.name)} (${encodeURIComponent(userProfile.phone)})%0A`;
    }
    message += `---------------------------%0A`;
    cart.forEach(item => {
        message += `• ${item.qty}x ${encodeURIComponent(item.name)} — $${(item.price * item.qty).toFixed(2)}%0A`;
    });
    message += `---------------------------%0A`;
    if (discount > 0) {
        message += `*Promo (${appliedPromo}):* -$${discount.toFixed(2)}%0A`;
    }
    message += `*Total Payable:* $${total.toFixed(2)}%0A%0APlease confirm my delivery time!`;

    window.open(`https://wa.me/923254038592?text=${message}`, "_blank");
}

/* ==================== 8. MODALS, DRAWERS & FAQ ==================== */
function toggleMobileMenu() {
    const drawer = document.getElementById("mobile-menu-drawer");
    if (drawer) drawer.classList.toggle("hidden");
}

function toggleCartDrawer(forceOpen = null) {
    const drawer = document.getElementById("cart-drawer-modal");
    if (!drawer) return;
    if (forceOpen === true) {
        drawer.classList.remove("hidden");
    } else if (forceOpen === false) {
        drawer.classList.add("hidden");
    } else {
        drawer.classList.toggle("hidden");
    }
}

function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    const modal = document.getElementById("product-quick-modal");
    const content = document.getElementById("product-modal-body");
    if (!product || !modal || !content) return;

    content.innerHTML = `
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="h-64 sm:h-80 rounded-2xl bg-rose-50 overflow-hidden flex items-center justify-center">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
            </div>
            <div>
                <span class="inline-block px-3 py-1 rounded-full bg-rose-100 text-brand-red text-xs font-bold uppercase mb-2">${product.category}</span>
                <h3 class="text-2xl sm:text-3xl font-serif font-black text-gray-900 mb-2">${product.name}</h3>
                <p class="text-yellow-500 font-bold text-sm mb-4">★★★★★ (${product.reviews} Customer Reviews)</p>
                <p class="text-gray-600 text-sm leading-relaxed mb-6">${product.description}</p>
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span class="text-3xl font-black text-gray-900">$${product.price.toFixed(2)}</span>
                    <button onclick="addToCart(${product.id}, 1); closeProductModal();" class="bg-brand-red hover:bg-rose-700 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-brand-red/30 cursor-pointer">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    modal.classList.remove("hidden");
}

function closeProductModal() {
    const modal = document.getElementById("product-quick-modal");
    if (modal) modal.classList.add("hidden");
}

function toggleAccountModal() {
    const modal = document.getElementById("account-modal");
    if (modal) modal.classList.toggle("hidden");
}

function saveUserAccount(e) {
    e.preventDefault();
    const name = document.getElementById("acc-name").value.trim();
    const phone = document.getElementById("acc-phone").value.trim();
    if (!name) return;

    userProfile = { name, phone };
    localStorage.setItem("skmods_bakery_user", JSON.stringify(userProfile));
    updateAccountUI();
    toggleAccountModal();
    showToast(`Welcome back, ${name}!`);
}

function updateAccountUI() {
    const btnText = document.getElementById("account-btn-text");
    if (btnText && userProfile && userProfile.name) {
        btnText.textContent = userProfile.name.split(" ")[0];
    }
}

function toggleFaq(index) {
    const faqItems = document.querySelectorAll("#faq-accordion .faq-item");
    faqItems.forEach((item, i) => {
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-icon");
        if (i === index) {
            const isHidden = answer.classList.contains("hidden");
            answer.classList.toggle("hidden", !isHidden);
            icon.classList.toggle("rotate-180", isHidden);
        } else {
            answer.classList.add("hidden");
            icon.classList.remove("rotate-180");
        }
    });
}

/* ==================== 9. FORM SUBMISSIONS ==================== */
function handleReservationSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("res-name").value.trim();
    const phone = document.getElementById("res-phone").value.trim();
    const type = document.getElementById("res-type").value;
    const date = document.getElementById("res-date").value;
    const time = document.getElementById("res-time").value;
    const guests = document.getElementById("res-guests").value;
    const notes = document.getElementById("res-notes").value.trim();

    showToast(`Booking confirmed for ${name}! Redirecting to WhatsApp...`);

    const msg = `*Table / Cake Booking — SK MODS Bakery*%0A` +
                `*Name:* ${encodeURIComponent(name)}%0A` +
                `*Phone:* ${encodeURIComponent(phone)}%0A` +
                `*Type:* ${encodeURIComponent(type)}%0A` +
                `*Date & Time:* ${encodeURIComponent(date)} at ${encodeURIComponent(time)}%0A` +
                `*Guests:* ${encodeURIComponent(guests)}%0A` +
                (notes ? `*Notes:* ${encodeURIComponent(notes)}` : "");

    setTimeout(() => {
        window.open(`https://wa.me/923254038592?text=${msg}`, "_blank");
        e.target.reset();
    }, 900);
}

function handleContactSubmit(e) {
    e.preventDefault();
    const fname = document.getElementById("contact-fname").value.trim();
    showToast(`Thank you ${fname}! Your message has been sent.`);
    e.target.reset();
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    showToast("Subscribed! Welcome to the SK MODS Bakery club.");
    e.target.reset();
}

/* ==================== 10. DYNAMIC OVERLAYS & TOAST INJECTION ==================== */
function showToast(message, isError = false) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `${isError ? "bg-red-600" : "bg-gray-900"} text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 text-sm font-semibold transform transition-all duration-300 border border-white/10`;
    toast.innerHTML = `
        <span class="w-2.5 h-2.5 rounded-full ${isError ? "bg-white" : "bg-brand-red"}"></span>
        <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("opacity-0", "translate-y-2");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function injectDynamicModalsAndBars() {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
        <!-- Toast Notification Stack -->
        <div id="toast-container" class="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col gap-2 max-w-xs w-full pointer-events-none"></div>

        <!-- Slide-Over Cart Drawer -->
        <div id="cart-drawer-modal" class="fixed inset-0 z-50 hidden">
            <div onclick="toggleCartDrawer(false)" class="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div class="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-10 shadow-2xl flex flex-col justify-between p-6">
                <div class="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div>
                        <h3 class="font-serif text-2xl font-black text-gray-900">Your Basket</h3>
                        <p class="text-xs text-gray-400">Freshly prepared upon checkout</p>
                    </div>
                    <button onclick="toggleCartDrawer(false)" class="p-2 rounded-full bg-gray-100 hover:bg-rose-50 hover:text-brand-red">✕</button>
                </div>

                <div id="cart-items-list" class="flex-1 overflow-y-auto py-4 space-y-3"></div>

                <div class="border-t border-gray-100 pt-4 space-y-4">
                    <div class="flex gap-2">
                        <input id="promo-code-input" type="text" placeholder="Promo code (e.g. OREO50)" class="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-red uppercase">
                        <button onclick="applyPromoCodeInput()" class="px-4 py-2.5 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-brand-red transition-colors cursor-pointer">Apply</button>
                    </div>
                    <div class="space-y-1 text-sm">
                        <div class="flex justify-between text-gray-500">
                            <span>Subtotal</span>
                            <span id="cart-subtotal" class="font-bold text-gray-800">$0.00</span>
                        </div>
                        <div id="cart-discount-row" class="hidden flex justify-between text-emerald-600 font-bold">
                            <span>Promo Discount (25%)</span>
                            <span id="cart-discount">-$0.00</span>
                        </div>
                        <div class="flex justify-between text-lg font-black text-gray-900 pt-2 border-t border-gray-100">
                            <span>Total</span>
                            <span id="cart-total" class="text-brand-red">$0.00</span>
                        </div>
                    </div>
                    <button onclick="checkoutViaWhatsApp()" class="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                        <span>Checkout via WhatsApp</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Product Quick-View Modal -->
        <div id="product-quick-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4">
            <div onclick="closeProductModal()" class="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div class="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10">
                <button onclick="closeProductModal()" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-rose-50 hover:text-brand-red font-bold">✕</button>
                <div id="product-modal-body"></div>
            </div>
        </div>

        <!-- Account Modal -->
        <div id="account-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4">
            <div onclick="toggleAccountModal()" class="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div class="relative bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl z-10">
                <button onclick="toggleAccountModal()" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-rose-50 hover:text-brand-red font-bold">✕</button>
                <span class="inline-block px-3 py-1 rounded-full bg-rose-50 text-brand-red text-xs font-bold uppercase mb-2">Member Profile</span>
                <h3 class="text-2xl font-serif font-black text-gray-900 mb-2">My Bakery Account</h3>
                <p class="text-xs text-gray-500 mb-6">Save your details for 1-click WhatsApp checkout and table reservations.</p>
                <form onsubmit="saveUserAccount(event)" class="space-y-4">
                    <div>
                        <label class="block text-xs font-bold uppercase text-gray-600 mb-1">Full Name *</label>
                        <input id="acc-name" type="text" required placeholder="Syed Kashif" value="${userProfile?.name || ""}" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red">
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase text-gray-600 mb-1">WhatsApp Number *</label>
                        <input id="acc-phone" type="tel" required placeholder="0325-4038592" value="${userProfile?.phone || ""}" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red">
                    </div>
                    <button type="submit" class="w-full py-3.5 rounded-full bg-brand-red text-white font-bold shadow-md hover:bg-rose-700 cursor-pointer">Save Details</button>
                </form>
            </div>
        </div>

        <!-- Mobile Bottom Navigation Bar -->
        <div class="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-40 px-6 py-2.5 flex justify-between items-center shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
            <a href="#home" class="flex flex-col items-center text-xs font-bold text-gray-600 hover:text-brand-red">
                <span>🏠</span>
                <span class="text-[10px] mt-0.5">Home</span>
            </a>
            <a href="#menu" class="flex flex-col items-center text-xs font-bold text-gray-600 hover:text-brand-red">
                <span>🍰</span>
                <span class="text-[10px] mt-0.5">Menu</span>
            </a>
            <button onclick="toggleCartDrawer()" class="relative flex flex-col items-center text-xs font-bold text-brand-red">
                <span>🛍️</span>
                <span class="text-[10px] mt-0.5">Basket</span>
                <span id="mobile-bottom-cart-badge" class="absolute -top-1 -right-2 bg-brand-red text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <a href="#reservation" class="flex flex-col items-center text-xs font-bold text-gray-600 hover:text-brand-red">
                <span>📅</span>
                <span class="text-[10px] mt-0.5">Book</span>
            </a>
            <button onclick="toggleAccountModal()" class="flex flex-col items-center text-xs font-bold text-gray-600 hover:text-brand-red">
                <span>👤</span>
                <span class="text-[10px] mt-0.5">Profile</span>
            </button>
        </div>
    `;
    document.body.appendChild(wrapper);
}
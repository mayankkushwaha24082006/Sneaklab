'use strict';

// ========================
// PRODUCT DATA
// ========================
const products = [
  { id:1,  title:"Air Jordan 4",                          brand:"Jordan",      cat:"high-tops",  price:6253,  img:"https://images.unsplash.com/photo-1656335362192-2bc9051b1824?w=600&q=80" },
  { id:2,  title:"Nike FuelCell Pro",                     brand:"Nike",        cat:"collab",     price:6329,  img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
  { id:3,  title:"Air Jordan 1 Mid",                      brand:"Jordan",      cat:"collab",     price:11495, img:"https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80" },
  { id:4,  title:"New Balance 350",                       brand:"New Balance", cat:"high-tops",  price:19642, img:"https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80" },
  { id:5,  title:"Reebok Yeezy Boost High",               brand:"Reebok",      cat:"high-tops",  price:10675, img:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80" },
  { id:6,  title:"New Balance FuelCell SuperComp",        brand:"New Balance", cat:"low-tops",   price:15202, img:"https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=600&q=80" },
  { id:7,  title:"Nike Dunk Low Retro",                   brand:"Nike",        cat:"low-tops",   price:14885, img:"https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=600&q=80" },
  { id:8,  title:"Puma RS-X3 Olympic",                    brand:"Puma",        cat:"collab",     price:11351, img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80" },
  { id:9,  title:"Converse All Star Runner",              brand:"Converse",    cat:"collab",     price:10845, img:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80" },
  { id:10, title:"Jordan 4 Retro Pine Green",             brand:"Jordan",      cat:"collab",     price:14097, img:"https://images.unsplash.com/photo-1584735175315-9d5df23be620?w=600&q=80" },
  { id:11, title:"Reebok Nano 9",                         brand:"Reebok",      cat:"low-tops",   price:19674, img:"https://images.unsplash.com/photo-1571736772567-b9a8cf2a0628?w=600&q=80" },
  { id:12, title:"New Balance Propel v5",                 brand:"New Balance", cat:"collab",     price:7891,  img:"https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&q=80" },
  { id:13, title:"Reebok Elitestride Casual",             brand:"Reebok",      cat:"low-tops",   price:1982,  img:"https://images.unsplash.com/photo-1520256862855-398228c41684?w=600&q=80" },
  { id:14, title:"Vans Premium Old Skool",                brand:"Vans",        cat:"collab",     price:10252, img:"https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&q=80" },
  { id:15, title:"New Balance Men's BB550",               brand:"New Balance", cat:"low-tops",   price:8699,  img:"https://images.unsplash.com/photo-1523395243481-163f8f6155ab?w=600&q=80" },
  { id:16, title:"Puma Palermo Lth",                      brand:"Puma",        cat:"collab",     price:6999,  img:"https://images.unsplash.com/photo-1559181567-c3190e4c5b69?w=600&q=80" },
  { id:17, title:"Adidas Forum Low CL",                   brand:"Adidas",      cat:"low-tops",   price:6489,  img:"https://images.unsplash.com/photo-1476234251651-f353703a034d?w=600&q=80" },
  { id:18, title:"Drop Step Low 2.0",                     brand:"Adidas",      cat:"collab",     price:11295, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&sat=-50" },
  { id:19, title:"New Balance CT300 Unisex",              brand:"New Balance", cat:"low-tops",   price:5091,  img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80" },
  { id:20, title:"Adidas Originals Superstar II",         brand:"Adidas",      cat:"collab",     price:9999,  img:"https://images.unsplash.com/photo-1597248881519-db089d3744a5?w=600&q=80" },
  { id:21, title:"Reebok Courtswift Effort",              brand:"Reebok",      cat:"low-tops",   price:2399,  img:"https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=600&q=80" },
  { id:22, title:"Men's Jordan Air 1 Mid",                brand:"Jordan",      cat:"high-tops",  price:11660, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&hue=180" },
  { id:23, title:"Puma Speedcat Elevated",                brand:"Puma",        cat:"low-tops",   price:8186,  img:"https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?w=600&q=80" },
  { id:24, title:"Vans Authentic Platform",               brand:"Vans",        cat:"low-tops",   price:12388, img:"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80" },
  { id:25, title:"New Balance 880 V15 FuelCell",          brand:"New Balance", cat:"collab",     price:7409,  img:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80" },
  { id:26, title:"Converse Pro Blaze V2 Mid",             brand:"Converse",    cat:"high-tops",  price:4500,  img:"https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=600&q=80" },
  { id:27, title:"New Balance 2002RX",                    brand:"New Balance", cat:"collab",     price:18228, img:"https://images.unsplash.com/photo-1556906781-9a412961a28c?w=600&q=80" },
  { id:28, title:"Yeezy Boost 350 V2 Beluga",             brand:"Adidas",      cat:"low-tops",   price:17986, img:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80" },
  { id:29, title:"Converse All Stars Ox Black",           brand:"Converse",    cat:"low-tops",   price:13583, img:"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=80" },
  { id:30, title:"Puma RS-X Efekt Premium",               brand:"Puma",        cat:"collab",     price:4328,  img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&bri=10" },
];

// ========================
// STATE
// ========================
let cart = JSON.parse(localStorage.getItem('sneaklab_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('sneaklab_wishlist') || '[]');
let currentFilters = { cat: 'all', price: 'all', brand: 'all', sort: 'default', search: '' };

// ========================
// DOM ELEMENTS
// ========================
const productGrid    = document.getElementById('productGrid');
const searchInput    = document.getElementById('searchInput');
const priceFilter    = document.getElementById('priceFilter');
const brandFilter    = document.getElementById('brandFilter');
const sortFilter     = document.getElementById('sortFilter');
const catPills       = document.querySelectorAll('.pill[data-cat]');
const brandCards     = document.querySelectorAll('.brand-card');
const resultsCount   = document.getElementById('resultsCount');
const noResults      = document.getElementById('noResults');

const cartBtn        = document.getElementById('cartBtn');
const cartBadge      = document.getElementById('cartBadge');
const cartPanel      = document.getElementById('cartPanel');
const cartItems      = document.getElementById('cartItems');
const cartTotal      = document.getElementById('cartTotal');
const cartGrand      = document.getElementById('cartGrand');
const cartCount2     = document.getElementById('cartCount2');
const cartOverlay    = document.getElementById('cartOverlay');
const cartEmpty      = document.getElementById('cartEmpty');
const closeCart      = document.getElementById('closeCart');
const checkoutBtn    = document.getElementById('checkoutBtn');
const continueShop   = document.getElementById('continueShopping');

const wishlistBtn    = document.getElementById('wishlistBtn');
const wishlistBadge  = document.getElementById('wishlistBadge');
const wishlistPanel  = document.getElementById('wishlistPanel');
const wishlistItems  = document.getElementById('wishlistItems');
const wishlistCount2 = document.getElementById('wishlistCount2');
const wishlistEmpty  = document.getElementById('wishlistEmpty');
const closeWishlist  = document.getElementById('closeWishlist');

const modal          = document.getElementById('modal');
const modalContent   = document.getElementById('modalContent');
const closeModal     = document.getElementById('closeModal');
const modalOverlay   = document.getElementById('modalOverlay');

const shopNow        = document.getElementById('shopNow');
const viewDrops      = document.getElementById('viewDrops');
const clearFilters   = document.getElementById('clearFilters');
const hamburger      = document.getElementById('hamburger');
const mobileMenu     = document.getElementById('mobileMenu');
const navbar         = document.getElementById('navbar');
const toastContainer = document.getElementById('toastContainer');

// ========================
// UTILS
// ========================
function fmt(n) { return n.toLocaleString('en-IN'); }

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  toast.innerHTML = `<span class="toast-icon">${icons[type] || '✓'}</span>${message}`;
  toastContainer.appendChild(toast);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('visible'));
  });
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 350);
  }, 2800);
}

function saveState() {
  localStorage.setItem('sneaklab_cart', JSON.stringify(cart));
  localStorage.setItem('sneaklab_wishlist', JSON.stringify(wishlist));
}

// ========================
// RENDER PRODUCTS
// ========================
function applyFilters() {
  let list = [...products];
  const { cat, price, brand, sort, search } = currentFilters;

  if (search) list = list.filter(p => p.title.toLowerCase().includes(search) || p.brand.toLowerCase().includes(search));
  if (cat !== 'all') list = list.filter(p => p.cat === cat);
  if (price === 'under-10000') list = list.filter(p => p.price < 10000);
  if (price === '10000-20000') list = list.filter(p => p.price >= 10000 && p.price <= 20000);
  if (brand !== 'all') list = list.filter(p => p.brand === brand);

  if (sort === 'price-asc')  list.sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (sort === 'name-asc')   list.sort((a,b) => a.title.localeCompare(b.title));

  renderProducts(list);
}

function renderProducts(list) {
  productGrid.innerHTML = '';
  resultsCount.textContent = `${list.length} product${list.length !== 1 ? 's' : ''}`;
  noResults.classList.toggle('hidden', list.length > 0);

  list.forEach((p, i) => {
    const isWished = wishlist.includes(p.id);
    const catLabel = { 'high-tops': 'High Top', 'low-tops': 'Low Top', 'collab': 'Collab' }[p.cat] || p.cat;

    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = p.id;
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
        <span class="card-cat-tag">${catLabel}</span>
        <button class="card-wish-btn ${isWished ? 'wished' : ''}" data-action="wish" data-id="${p.id}" aria-label="Add to wishlist">
          <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="card-body">
        <div class="card-brand">${p.brand}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-bottom">
          <div class="card-price">₹${fmt(p.price)}</div>
          <div class="card-actions">
            <button class="btn-view" data-action="view" data-id="${p.id}">View</button>
            <button class="btn-add" data-action="add" data-id="${p.id}">Add</button>
          </div>
        </div>
      </div>
    `;
    productGrid.appendChild(card);

    setTimeout(() => card.classList.add('visible'), i * 40 + 30);
  });
}

// ========================
// CART
// ========================
function updateCartUI() {
  cartItems.innerHTML = '';
  cartCount2.textContent = cart.length;

  // badge
  if (cart.length > 0) {
    cartBadge.textContent = cart.length > 9 ? '9+' : cart.length;
    cartBadge.classList.add('visible');
  } else {
    cartBadge.classList.remove('visible');
  }

  if (cart.length === 0) {
    cartEmpty.classList.add('show');
    document.querySelector('.cart-footer').style.display = 'none';
    return;
  }

  cartEmpty.classList.remove('show');
  document.querySelector('.cart-footer').style.display = '';

  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}" loading="lazy"/>
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">₹${fmt(item.price)}</div>
      </div>
      <button class="cart-item-remove" data-action="remove" data-id="${item.cartUID}" aria-label="Remove">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;
    cartItems.appendChild(div);
  });

  const delivery = subtotal >= 2000 ? 0 : 99;
  cartTotal.textContent = fmt(subtotal);
  cartGrand.textContent = fmt(subtotal + delivery);
  document.getElementById('deliveryNote').textContent = delivery === 0 ? 'FREE ✓' : `₹${delivery}`;
  saveState();
}

function openCart() {
  cartPanel.classList.add('open');
  cartOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  // close wishlist if open
  wishlistPanel.classList.remove('open');
}

function closeCartPanel() {
  cartPanel.classList.remove('open');
  cartOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

// ========================
// WISHLIST
// ========================
function updateWishlistUI() {
  wishlistItems.innerHTML = '';
  wishlistCount2.textContent = wishlist.length;

  if (wishlist.length > 0) {
    wishlistBadge.textContent = wishlist.length;
    wishlistBadge.classList.add('visible');
  } else {
    wishlistBadge.classList.remove('visible');
  }

  if (wishlist.length === 0) {
    wishlistEmpty.classList.add('show');
    return;
  }
  wishlistEmpty.classList.remove('show');

  wishlist.forEach(id => {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title}" loading="lazy"/>
      <div class="cart-item-info">
        <div class="cart-item-brand">${p.brand}</div>
        <div class="cart-item-title">${p.title}</div>
        <div class="cart-item-price">₹${fmt(p.price)}</div>
      </div>
      <button class="cart-item-remove" data-action="unwish" data-id="${p.id}" aria-label="Remove from wishlist">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;
    wishlistItems.appendChild(div);
  });

  // update wish buttons in product grid
  document.querySelectorAll('.card-wish-btn').forEach(btn => {
    const id = +btn.dataset.id;
    btn.classList.toggle('wished', wishlist.includes(id));
  });

  saveState();
}

function openWishlist() {
  wishlistPanel.classList.add('open');
  cartOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  cartPanel.classList.remove('open');
}

function closeWishlistPanel() {
  wishlistPanel.classList.remove('open');
  if (!cartPanel.classList.contains('open')) {
    cartOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// ========================
// MODAL
// ========================
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const catLabel = { 'high-tops': 'High Top', 'low-tops': 'Low Top', 'collab': 'Collab' }[p.cat] || p.cat;
  const isWished = wishlist.includes(p.id);

  modalContent.innerHTML = `
    <div class="modal-product">
      <div class="modal-img">
        <img src="${p.img}" alt="${p.title}" />
      </div>
      <div class="modal-info">
        <div class="card-brand">${p.brand}</div>
        <h2>${p.title}</h2>
        <div class="modal-price">₹${fmt(p.price)}</div>
        <div class="modal-meta">
          <span><strong>Category:</strong> ${catLabel}</span>
          <span><strong>Availability:</strong> In Stock</span>
          <span><strong>Ships in:</strong> 2–5 business days</span>
          <span><strong>Authenticity:</strong> 100% Verified</span>
        </div>
        <div class="modal-actions">
          <button class="btn-primary" data-action="add" data-id="${p.id}">Add to Cart</button>
          <button class="btn-ghost" data-action="wish" data-id="${p.id}">${isWished ? '❤️ Remove from Wishlist' : '♡ Add to Wishlist'}</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModalFn() {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// ========================
// EVENT DELEGATION (main)
// ========================
document.addEventListener('click', e => {
  const action = e.target.closest('[data-action]')?.dataset.action;
  const idEl   = e.target.closest('[data-id]');
  const id     = idEl ? +idEl.dataset.id : null;

  if (action === 'add' && id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const item = { ...p, cartUID: Date.now() + Math.random() };
    cart.push(item);
    updateCartUI();
    showToast(`${p.title} added to cart 🛒`);
    e.target.textContent = '✓ Added';
    e.target.style.background = '#22c55e';
    setTimeout(() => {
      e.target.textContent = 'Add';
      e.target.style.background = '';
    }, 1500);
  }

  if (action === 'view' && id) {
    openModal(id);
  }

  if (action === 'wish' && id) {
    if (wishlist.includes(id)) {
      wishlist = wishlist.filter(x => x !== id);
      showToast('Removed from wishlist', 'info');
    } else {
      wishlist.push(id);
      showToast('Added to wishlist ❤️');
    }
    updateWishlistUI();
  }

  if (action === 'remove') {
    const uid = parseFloat(idEl.dataset.id);
    cart = cart.filter(i => i.cartUID !== uid);
    updateCartUI();
  }

  if (action === 'unwish') {
    wishlist = wishlist.filter(x => x !== id);
    updateWishlistUI();
    showToast('Removed from wishlist', 'info');
  }
});

// ========================
// FILTER EVENTS
// ========================
searchInput.addEventListener('input', () => {
  currentFilters.search = searchInput.value.trim().toLowerCase();
  applyFilters();
});

priceFilter.addEventListener('change', () => {
  currentFilters.price = priceFilter.value;
  applyFilters();
});

brandFilter.addEventListener('change', () => {
  currentFilters.brand = brandFilter.value;
  applyFilters();
  // sync brand cards
  brandCards.forEach(bc => bc.classList.toggle('active', bc.dataset.brand === brandFilter.value));
});

sortFilter.addEventListener('change', () => {
  currentFilters.sort = sortFilter.value;
  applyFilters();
});

catPills.forEach(pill => {
  pill.addEventListener('click', () => {
    catPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentFilters.cat = pill.dataset.cat;
    applyFilters();
  });
});

brandCards.forEach(bc => {
  bc.addEventListener('click', () => {
    const b = bc.dataset.brand;
    if (brandCards.some(x => x.classList.contains('active') && x.dataset.brand === b)) {
      brandCards.forEach(x => x.classList.remove('active'));
      currentFilters.brand = 'all';
      brandFilter.value = 'all';
    } else {
      brandCards.forEach(x => x.classList.remove('active'));
      bc.classList.add('active');
      currentFilters.brand = b;
      brandFilter.value = b;
    }
    applyFilters();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  });
});

clearFilters?.addEventListener('click', () => {
  currentFilters = { cat: 'all', price: 'all', brand: 'all', sort: 'default', search: '' };
  searchInput.value = '';
  priceFilter.value = 'all';
  brandFilter.value = 'all';
  sortFilter.value = 'default';
  catPills.forEach(p => p.classList.toggle('active', p.dataset.cat === 'all'));
  brandCards.forEach(bc => bc.classList.remove('active'));
  applyFilters();
});

// ========================
// CART / WISHLIST EVENTS
// ========================
cartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartPanel);
cartOverlay.addEventListener('click', () => { closeCartPanel(); closeWishlistPanel(); });
continueShop?.addEventListener('click', closeCartPanel);

wishlistBtn.addEventListener('click', openWishlist);
closeWishlist.addEventListener('click', closeWishlistPanel);

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) { showToast('Your cart is empty!', 'error'); return; }
  closeCartPanel();
  window.location.href = 'payment.html';
});

// ========================
// MODAL EVENTS
// ========================
closeModal.addEventListener('click', closeModalFn);
modalOverlay.addEventListener('click', closeModalFn);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModalFn(); closeCartPanel(); closeWishlistPanel(); }
});

// ========================
// NAV EVENTS
// ========================
shopNow.addEventListener('click', () => {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});
viewDrops?.addEventListener('click', () => {
  currentFilters.cat = 'collab';
  catPills.forEach(p => p.classList.toggle('active', p.dataset.cat === 'collab'));
  applyFilters();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// close mobile menu on nav link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// sticky nav style
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Smooth scroll for all nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ========================
// INIT
// ========================
applyFilters();
updateCartUI();
updateWishlistUI();
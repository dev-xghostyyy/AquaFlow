/* ── Product Data ──────────────────────────────────────────────────────── */
const PRODUCTS = [
  /* Рыбки */
  { id:1,  name:'Неон тетра',                cat:'Рыбки',         price:120,  old:150,  img:'https://picsum.photos/seed/neon-tetra/400/400',   desc:'Популярная стайная тропическая рыбка с ярким флуоресцентным окрасом. Неприхотлива, идеально для начинающих. Держится стаями от 6 особей.', rating:4.8, cnt:234, badge:'Хит' },
  { id:2,  name:'Золотая рыбка вуалехвост',  cat:'Рыбки',         price:380,  old:null, img:'https://picsum.photos/seed/goldfish-veil/400/400', desc:'Классическая золотая рыбка с пышным вуалевым хвостом. Хорошо уживается в аквариумах от 80 литров.', rating:4.6, cnt:189, badge:null },
  { id:3,  name:'Дискус Royal Blue',          cat:'Рыбки',         price:2800, old:3200, img:'https://picsum.photos/seed/discus-blue/400/400',  desc:'«Король аквариума» с насыщенным синим окрасом. Требует мягкой воды и опыта содержания. Живёт до 12 лет.', rating:4.9, cnt:76,  badge:'Редкий' },
  { id:4,  name:'Гуппи Москва микс',          cat:'Рыбки',         price:90,   old:null, img:'https://picsum.photos/seed/guppy-moscow/400/400', desc:'Одна из популярнейших аквариумных рыб. Яркий хвост, живородящие, неприхотливы.', rating:4.7, cnt:412, badge:null },
  { id:5,  name:'Скалярия ангел',             cat:'Рыбки',         price:320,  old:400,  img:'https://picsum.photos/seed/angelfish/400/400',    desc:'Элегантная цихлида треугольной формы. Миролюбива к рыбам схожего размера, живёт до 10 лет.', rating:4.8, cnt:156, badge:null },
  { id:6,  name:'Данио рерио',                cat:'Рыбки',         price:65,   old:null, img:'https://picsum.photos/seed/danio-rerio/400/400',  desc:'Активная стайная рыбка с горизонтальными полосами. Идеальна для новичков, держится у поверхности.', rating:4.5, cnt:298, badge:null },
  /* Аквариумы */
  { id:7,  name:'AquaFlow Slim 50л',          cat:'Аквариумы',     price:4200, old:5000, img:'https://picsum.photos/seed/aquarium-slim50/400/400', desc:'Стильный панорамный аквариум в ультратонкой раме. Комплект: LED-освещение, тихий фильтр, крышка. 60×30×35 см.', rating:4.7, cnt:89,  badge:'Хит' },
  { id:8,  name:'AquaFlow Panorama 100л',     cat:'Аквариумы',     price:7800, old:null, img:'https://picsum.photos/seed/aquarium-panorama/400/400', desc:'Панорамный аквариум из закалённого стекла 6 мм. В комплекте: LED, внешний фильтр Eheim, коврик.', rating:4.9, cnt:43,  badge:'Новинка' },
  { id:9,  name:'Dennerle Nano-Cube 30л',     cat:'Аквариумы',     price:5600, old:6000, img:'https://picsum.photos/seed/nanocube-30/400/400', desc:'Компактный нано-куб со встроенной фильтрацией. Идеален для рабочего стола. Полный комплект.', rating:4.8, cnt:127, badge:null },
  /* Фильтры */
  { id:10, name:'Eheim Classic 150',           cat:'Фильтры',       price:3200, old:3800, img:'https://picsum.photos/seed/eheim-classic/400/400',  desc:'Легендарный немецкий внешний фильтр. Бесшумный, производительность 220 л/ч. Для аквариумов до 150 л.', rating:4.9, cnt:312, badge:'Хит' },
  { id:11, name:'JBL CristalProfi e702',       cat:'Фильтры',       price:4500, old:null, img:'https://picsum.photos/seed/jbl-crystalprofi/400/400', desc:'Мощный внешний фильтр 900 л/ч со встроенным нагревателем. Три ступени очистки воды.', rating:4.7, cnt:145, badge:null },
  { id:12, name:'Aquael Fan Micro Plus',        cat:'Фильтры',       price:850,  old:1000, img:'https://picsum.photos/seed/aquael-fan/400/400',      desc:'Внутренний угловой фильтр для нано-аквариумов до 30 л. Компактный, тихий, экономичный.', rating:4.5, cnt:267, badge:null },
  /* Освещение */
  { id:13, name:'Chihiros WRGB II 45',         cat:'Освещение',     price:5800, old:6500, img:'https://picsum.photos/seed/chihiros-wrgb/400/400',  desc:'Профессиональный LED для растительных аквариумов. Управление через приложение, рассвет/закат.', rating:4.9, cnt:98,  badge:'Проф.' },
  { id:14, name:'Sera Plantcolor Sunrise 30',  cat:'Освещение',     price:2100, old:null, img:'https://picsum.photos/seed/sera-plantcolor/400/400', desc:'LED-планка с оптимальным спектром для роста растений. Крепление на борта, 12 Вт.', rating:4.6, cnt:183, badge:null },
  /* Корма */
  { id:15, name:'Tetra Min хлопья 100 г',      cat:'Корма',         price:380,  old:420,  img:'https://picsum.photos/seed/tetramin-100/400/400',  desc:'Основной корм для всех тропических рыб в форме хлопьев. Улучшает окраску, сбалансированный состав.', rating:4.8, cnt:567, badge:'Хит' },
  { id:16, name:'JBL NovoBel 250 мл',          cat:'Корма',         price:490,  old:null, img:'https://picsum.photos/seed/jbl-novobel/400/400',    desc:'Высококачественные хлопья с натуральными усилителями цвета, витаминами А, Д, Е.', rating:4.7, cnt:334, badge:null },
  { id:17, name:'Hikari Cichlid Gold Mini',     cat:'Корма',         price:620,  old:700,  img:'https://picsum.photos/seed/hikari-cichlid/400/400', desc:'Специальный корм для цихлид в мини-гранулах. Усиливает жёлтый и оранжевый окрас.', rating:4.6, cnt:129, badge:null },
  /* Декор */
  { id:18, name:'Коряга мопани',               cat:'Декор',         price:950,  old:null, img:'https://picsum.photos/seed/mopani-wood/400/400',   desc:'Натуральная коряга дерева мопани. Слабо подкисляет воду, не гниёт. Отмочена, готова к применению.', rating:4.7, cnt:212, badge:null },
  { id:19, name:'Грунт кварцевый белый 5 кг',  cat:'Декор',         price:580,  old:650,  img:'https://picsum.photos/seed/quartz-gravel/400/400', desc:'Натуральный кварц фракции 2–3 мм. Не меняет химию воды. 5 кг хватает на 50 л аквариума.', rating:4.5, cnt:389, badge:null },
  { id:20, name:'Лавовые камни 500 г',          cat:'Декор',         price:420,  old:null, img:'https://picsum.photos/seed/lava-rocks/400/400',   desc:'Вулканический лавовый камень. Отличная колонизация полезных бактерий, натуральный вид.', rating:4.8, cnt:156, badge:null },
  /* Растения */
  { id:21, name:'Анубиас нана',                cat:'Растения',      price:280,  old:350,  img:'https://picsum.photos/seed/anubias-nana/400/400', desc:'Неприхотливое теневыносливое растение для новичков. Крепится на коряги и камни, не нужна подложка.', rating:4.9, cnt:445, badge:'Хит' },
  { id:22, name:'Яванский мох',                cat:'Растения',      price:190,  old:null, img:'https://picsum.photos/seed/java-moss/400/400',    desc:'Классика аквариума. Крепится к любым поверхностям, создаёт укрытия для мальков.', rating:4.8, cnt:523, badge:null },
  /* Оборудование */
  { id:23, name:'Aquael Ultra Heater 150W',    cat:'Оборудование',  price:1200, old:1400, img:'https://picsum.photos/seed/aquael-heater/400/400', desc:'Точный нагреватель с термостатом и погрешностью ±0.5°C. Двойная защита от перегрева.', rating:4.8, cnt:234, badge:null },
  { id:24, name:'Термометр JBL цифровой',       cat:'Оборудование',  price:450,  old:520,  img:'https://picsum.photos/seed/jbl-therm/400/400',    desc:'Цифровой термометр с подсветкой на присоске. Диапазон 0–50°С, батарейка в комплекте.', rating:4.6, cnt:178, badge:null },
];

const CATEGORIES = ['Рыбки','Аквариумы','Фильтры','Освещение','Корма','Декор','Растения','Оборудование'];
const CAT_EMOJI  = { 'Рыбки':'🐟','Аквариумы':'🪸','Фильтры':'💧','Освещение':'💡','Корма':'🌿','Декор':'🪨','Растения':'🌱','Оборудование':'🔧' };

/* ── Cart (localStorage) ───────────────────────────────────────────────── */
const Cart = {
  KEY: 'aqf_v1_cart',
  get() { try { return JSON.parse(localStorage.getItem(this.KEY)) || []; } catch { return []; } },
  save(items) { localStorage.setItem(this.KEY, JSON.stringify(items)); },
  add(id, qty = 1) {
    const cart = this.get();
    const idx = cart.findIndex(i => i.id === id);
    if (idx >= 0) cart[idx].qty += qty;
    else cart.push({ id, qty });
    this.save(cart); this.updateBadge();
  },
  remove(id) { this.save(this.get().filter(i => i.id !== id)); this.updateBadge(); },
  setQty(id, qty) {
    qty = Math.max(1, qty);
    const cart = this.get();
    const idx = cart.findIndex(i => i.id === id);
    if (idx >= 0) { cart[idx].qty = qty; this.save(cart); }
    this.updateBadge();
  },
  total()    { return this.get().reduce((s, i) => s + i.qty, 0); },
  subtotal() { return this.get().reduce((s, i) => { const p = PRODUCTS.find(x => x.id === i.id); return s + (p ? p.price * i.qty : 0); }, 0); },
  updateBadge() {
    const n = this.total();
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = n; el.classList.toggle('visible', n > 0);
    });
  },
  clear() { this.save([]); this.updateBadge(); },
};

/* ── Toast ─────────────────────────────────────────────────────────────── */
function toast(msg, icon = 'check') {
  const t = document.createElement('div');
  t.className = 'toast toast-success';
  const svgCheck = `<svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
  t.innerHTML = svgCheck + msg;
  document.body.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 240); }, 2800);
}

/* ── Stars renderer ────────────────────────────────────────────────────── */
function stars(r) {
  const full = Math.floor(r);
  return '★'.repeat(full) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - full - (r % 1 >= 0.5 ? 1 : 0));
}

/* ── Badge class map ───────────────────────────────────────────────────── */
function badgeClass(b) {
  return { 'Хит':'b-hit','Новинка':'b-new','Редкий':'b-rare','Проф.':'b-pro' }[b] || 'b-hit';
}

/* ── Product card HTML ─────────────────────────────────────────────────── */
function productCardHTML(p) {
  const badgeHTML = p.badge ? `<span class="product-badge ${badgeClass(p.badge)}">${p.badge}</span>` : '';
  const oldHTML   = p.old   ? `<span class="price-old">${p.old.toLocaleString('ru-RU')} ₽</span>` : '';
  const cartSVG   = `<svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`;
  const eyeSVG    = `<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  const heartSVG  = `<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
  return `
  <div class="product-card reveal" data-product-id="${p.id}">
    <div class="product-card-image">
      <img src="${p.img}" alt="${p.name}" loading="lazy" width="400" height="400">
      ${badgeHTML}
      <button class="product-wishlist" aria-label="В избранное">${heartSVG}</button>
    </div>
    <div class="product-card-body">
      <div class="product-cat-label">${p.cat}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-rating">
        <span class="stars" aria-label="${p.rating} из 5">${stars(p.rating)}</span>
        <span class="rating-val">${p.rating}</span>
        <span class="rating-ct">(${p.cnt})</span>
      </div>
      <div class="product-footer">
        <div class="price-wrap">
          <span class="price-current">${p.price.toLocaleString('ru-RU')} ₽</span>
          ${oldHTML}
        </div>
        <div class="product-actions-row">
          <a href="product.html?id=${p.id}" class="btn-view" aria-label="Подробнее">${eyeSVG}</a>
          <button class="btn-cart" data-id="${p.id}" aria-label="Добавить в корзину">${cartSVG}В корзину</button>
        </div>
      </div>
    </div>
  </div>`;
}

/* ── Render reveal (IntersectionObserver) ──────────────────────────────── */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i * 55); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ── Add-to-cart delegation ────────────────────────────────────────────── */
function initCart() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-cart');
    if (!btn) return;
    const id = parseInt(btn.dataset.id);
    if (!id) return;
    Cart.add(id);
    const orig = btn.innerHTML;
    const checkSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    btn.innerHTML = checkSVG + 'Добавлено';
    btn.classList.add('added');
    toast('Товар добавлен в корзину');
    setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('added'); }, 2200);
  });
}

/* ── Navbar ────────────────────────────────────────────────────────────── */
function initNavbar() {
  const nav    = document.getElementById('navbar');
  const burger = document.getElementById('burger');
  const mobile = document.getElementById('mobile-menu');
  const isHero = nav?.classList.contains('on-hero');

  function onScroll() {
    if (!nav) return;
    const scrolled = window.scrollY > 30;
    nav.classList.toggle('scrolled', scrolled || !isHero);
    if (isHero) {
      nav.classList.toggle('on-hero', !scrolled);
      burger?.classList.toggle('hero-mode', !scrolled);
      nav.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('on-hero', !scrolled));
      nav.querySelectorAll('.nav-cart-btn').forEach(l => l.classList.toggle('on-hero', !scrolled));
      nav.querySelectorAll('.nav-login-btn').forEach(l => l.classList.toggle('on-hero', !scrolled));
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger?.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  mobile?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobile.classList.remove('open');
    burger?.classList.remove('open');
  }));

  Cart.updateBadge();

  /* Active link highlight */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.getAttribute('href') === page) l.classList.add('active');
  });
}

/* ── Year ──────────────────────────────────────────────────────────────── */
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCart();
  initReveal();
});

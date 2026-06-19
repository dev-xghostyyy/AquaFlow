/* ── Product Data ──────────────────────────────────────────────────────── */
const PRODUCTS = [
  /* Рыбки */
  { id:1,  name:'Неон тетра',                cat:'Рыбки',         price:120,  old:150,  img:'https://avatars.mds.yandex.net/i?id=56627c0a948902a137be4ff2f4960c68_l-12569474-images-thumbs&n=13',   desc:'Популярная стайная тропическая рыбка с ярким флуоресцентным окрасом. Неприхотлива, идеально для начинающих. Держится стаями от 6 особей.', rating:4.8, cnt:234, badge:'Хит' },
  { id:2,  name:'Золотая рыбка вуалехвост',  cat:'Рыбки',         price:380,  old:null, img:'https://yandex-images.clstorage.net/AL100G368/fe1cdfrg/qCkvaILqFsKpRIm6IXHmG2jQlUyKlq_zXwus4XBT0DgZEQUsKfVmj0VwNZYx-hnqAVMIsBn6_CdsARpSzVbawQ0deixHrmMm2UTY_pHVJ7up0cGNXqf70s9L2XG1MAZfHoYG67qX4X2yFPADlJpt_tX3btPdyMtgC3Zuor3GviRJqS-ZEbmHtLrWOl1goLe5y_AwnspWuXGoqE224BMXTExW5ErYtRGOoJfw4kf4b9jHhr9y2dkr8QsGLNH_xOyk6AnP2NGrhNard1mfoAL0K3rjYAzbl4hTGVse1MNTVx8-dqQIOyZiDnDlkvJke68KB_bcIhnYGvO4dD0yHoVtJ8oKHApiiXWmygVo3ODAZtlq8YOcepS5wYqrDZUyk6a_jqQVqjmHA3wRV5GxlJkcKOeFr3LbCEmDi5ffAO7WrPV5aw550EtUlDinit5wwYYZqEJxPMlU2SMoWQ80g1LVLhxndetoldGtwObyomRKX2uV5w_wS9kY8im3bWCtxM12eprfmoAIFoV7V8mt0PJUKYjhMW8qlwgDuhoNxiMgtf0c1tYY20WyH4JU4tG3uvwYpuccsvnoWdJoNm7wXaWflPpq3wqAuDbkeYeovnIRxkkKYFN9aNRp02uoHoYBQyctfaRlqiv3ER3ChkCxJ_mcCAQEzeIJeEmC2fbvY_6VP5a7W39pANuXhCt2aJ_wcoTpufHQzFiXS8Jreb-W8OBlL7-UR3m7RfM8YqTzc0VJXts35T9jqtmZwjg37OK9hM01aQk9atCpVVRb90rvQ_NmmkiQET0aRaqhaDmt98Ay9N5dxjY76VRCThAmQTFmyW0LVBbeI4pb2PC79P2ST4RfFhkrTdkh64ckKye6PKCCxLi48kD8iiUqE6qZ3QfCkyWP_KcnuiukY_yht-Lhxlj_KrfFLZBoSCtTWXRdk7zFb5YLG957YWgFFLnEuZ6woIaLiwIwPHlnCbCYG060grCV0', desc:'Классическая золотая рыбка с пышным вуалевым хвостом. Хорошо уживается в аквариумах от 80 литров.', rating:4.6, cnt:189, badge:null },
  { id:3,  name:'Дискус Royal Blue',          cat:'Рыбки',         price:2800, old:3200, img:'https://i.pinimg.com/originals/c3/76/4f/c3764f6ea1cf8e5b8176d0fce223d58a.png',  desc:'«Король аквариума» с насыщенным синим окрасом. Требует мягкой воды и опыта содержания. Живёт до 12 лет.', rating:4.9, cnt:76,  badge:'Редкий' },
  { id:4,  name:'Гуппи Москва микс',          cat:'Рыбки',         price:90,   old:null, img:'https://avatars.mds.yandex.net/i?id=2d92dce0e81a5024701c585fa112d7ad_l-4290450-images-thumbs&n=13', desc:'Одна из популярнейших аквариумных рыб. Яркий хвост, живородящие, неприхотливы.', rating:4.7, cnt:412, badge:null },
  { id:5,  name:'Скалярия ангел',             cat:'Рыбки',         price:320,  old:400,  img:'https://akva-zoomarket.ru/upload/iblock/5ef/65bi2gjsojea7es91xz2cqlbzcmziprh.jpg',    desc:'Элегантная цихлида треугольной формы. Миролюбива к рыбам схожего размера, живёт до 10 лет.', rating:4.8, cnt:156, badge:null },
  { id:6,  name:'Данио рерио',                cat:'Рыбки',         price:65,   old:null, img:'https://avatars.mds.yandex.net/i?id=d045ee9955916c6a6c1710ae4adade83_l-6339443-images-thumbs&n=13',  desc:'Активная стайная рыбка с горизонтальными полосами. Идеальна для новичков, держится у поверхности.', rating:4.5, cnt:298, badge:null },
  /* Аквариумы */
  { id:7,  name:'AquaFlow Slim 50л',          cat:'Аквариумы',     price:4200, old:5000, img:'https://avatars.mds.yandex.net/i?id=e48c0e646055e120274c5afbb5698ec7_l-5014030-images-thumbs&n=13', desc:'Стильный панорамный аквариум в ультратонкой раме. Комплект: LED-освещение, тихий фильтр, крышка. 60×30×35 см.', rating:4.7, cnt:89,  badge:'Хит' },
  { id:8,  name:'AquaFlow Panorama 100л',     cat:'Аквариумы',     price:7800, old:null, img:'https://avatars.mds.yandex.net/i?id=1d8b17859cf14e939fe3d75d9a9378f8_l-5521800-images-thumbs&n=13', desc:'Панорамный аквариум из закалённого стекла 6 мм. В комплекте: LED, внешний фильтр Eheim, коврик.', rating:4.9, cnt:43,  badge:'Новинка' },
  { id:9,  name:'Dennerle Nano-Cube 30л',     cat:'Аквариумы',     price:5600, old:6000, img:'https://static.onlinetrade.ru/img/items/b/dennerle_nanocube_30l_30kh30kh35sm_815377_7.jpg', desc:'Компактный нано-куб со встроенной фильтрацией. Идеален для рабочего стола. Полный комплект.', rating:4.8, cnt:127, badge:null },
  /* Фильтры */
  { id:10, name:'Eheim Classic 150',           cat:'Фильтры',       price:3200, old:3800, img:'https://avatars.mds.yandex.net/get-mpic/6458782/img_id3029483839220661103.jpeg/orig',  desc:'Легендарный немецкий внешний фильтр. Бесшумный, производительность 220 л/ч. Для аквариумов до 150 л.', rating:4.9, cnt:312, badge:'Хит' },
  { id:11, name:'JBL CristalProfi e702',       cat:'Фильтры',       price:4500, old:null, img:'https://avatars.mds.yandex.net/get-mpic/1597983/img_id3789728178678190672.jpeg/orig', desc:'Мощный внешний фильтр 900 л/ч со встроенным нагревателем. Три ступени очистки воды.', rating:4.7, cnt:145, badge:null },
  { id:12, name:'Aquael Fan Micro Plus',        cat:'Фильтры',       price:850,  old:1000, img:'https://avatars.mds.yandex.net/i?id=fd183eadd72e2f817d9ee5d6b6f62d01_l-9086430-images-thumbs&n=13',      desc:'Внутренний угловой фильтр для нано-аквариумов до 30 л. Компактный, тихий, экономичный.', rating:4.5, cnt:267, badge:null },
  /* Освещение */
  { id:13, name:'Chihiros WRGB II 45',         cat:'Освещение',     price:5800, old:6500, img:'https://avatars.mds.yandex.net/i?id=e60066894b0e466a79697598fed5ae46_l-4599771-images-thumbs&n=13',  desc:'Профессиональный LED для растительных аквариумов. Управление через приложение, рассвет/закат.', rating:4.9, cnt:98,  badge:'Проф.' },
  { id:14, name:'Sera Plantcolor Sunrise 30',  cat:'Освещение',     price:2100, old:null, img:'https://www.zooprice.it/2798-large_default/sera-led-marine-blue-sunrise-660.jpg', desc:'LED-планка с оптимальным спектром для роста растений. Крепление на борта, 12 Вт.', rating:4.6, cnt:183, badge:null },
  /* Корма */
  { id:15, name:'Tetra Min хлопья 100 г',      cat:'Корма',         price:380,  old:420,  img:'https://static.tildacdn.com/tild3837-6332-4330-a163-613331356431/_.jpg',  desc:'Основной корм для всех тропических рыб в форме хлопьев. Улучшает окраску, сбалансированный состав.', rating:4.8, cnt:567, badge:'Хит' },
  { id:16, name:'JBL NovoBel 250 мл',          cat:'Корма',         price:490,  old:null, img:'https://zootown.ru/_sh/15/1556_1.jpg',    desc:'Высококачественные хлопья с натуральными усилителями цвета, витаминами А, Д, Е.', rating:4.7, cnt:334, badge:null },
  { id:17, name:'Hikari Cichlid Gold Mini',     cat:'Корма',         price:620,  old:700,  img:'https://coralhouse.pl/23717-large_default/hikari-cichlid-gold-mini-250gr.jpg', desc:'Специальный корм для цихлид в мини-гранулах. Усиливает жёлтый и оранжевый окрас.', rating:4.6, cnt:129, badge:null },
  /* Декор */
  { id:18, name:'Коряга мопани',               cat:'Декор',         price:950,  old:null, img:'https://avatars.mds.yandex.net/i?id=51b42204510a7dda330b7befe3b598ddeec2deff-4314155-images-thumbs&n=13',   desc:'Натуральная коряга дерева мопани. Слабо подкисляет воду, не гниёт. Отмочена, готова к применению.', rating:4.7, cnt:212, badge:null },
  { id:19, name:'Грунт кварцевый белый 5 кг',  cat:'Декор',         price:580,  old:650,  img:'https://spinningline.ru/images/products_photo_providers/00438000/00438729/00438729_298078_LARGE.jpg', desc:'Натуральный кварц фракции 2–3 мм. Не меняет химию воды. 5 кг хватает на 50 л аквариума.', rating:4.5, cnt:389, badge:null },
  { id:20, name:'Лавовые камни 500 г',          cat:'Декор',         price:420,  old:null, img:'https://yandex-images.clstorage.net/AL100G368/fe1cdf6V/GXlOTGYPx-cphYif4dUWK2m18Dx6J6tSThvc9eTzhfxIRPQZ2YGGGlWwZUbxjxiPFMM4JSzPvLeJNAqH-6OOcd1YD1n3iwKDaYG9m-V0s2tt5FGYmjbLk7kIzrayIAdeLgZXi6glY-9gpOTyVYnPjjak_zJL68mRebR_wx_G_scaiA2KgAnkVgjVim2xwMRbudNjzjm2-UPaGd3kYsKmPAz2pJkrJYI8AqbC4CRYboonRG4yO6m603vm_2K_Jr8HCItvmyFqJpaqlhjcopBWSnjiQX_K5ZtgmlmOlkKC5N-fhSRJWUeSH4FmECBUOz5KJnVsgUm4WTI6Z3xAvPVttCp6H_pTW2XWaATqzLBzxut709PsOvbakVqoLiaQM0bdPuRWKOtE0e9j1TLAJ0huiPYmHLKqWmvCaaau893nHgboWy0I8blnRmnkKg4DgWZYu7MxTsj0eyCb27-0U1MHjCw2h_laJ8IfsJZxskXo7Bgnd20QiugLgXvHLfAsNv1Wqxk8SwH6FOZaNhouoME1u3hiEdyL9omA6btstOLw9D_8VTW76DexzEA1AoFF-66qFjZNUQvrm3Ealc9w3DZtVhs5XUnRmwdEuaR6rCGjJ_k7A8ENOeXJooopvNWQQ0bPTvY3-zqV0VwDVRIjpir-WoYmHeDLagjSKjXNMe2WDtZ4mD0bIFsmxtrm2h-wIJbJeCHQDehE2VMpa74XoGGVX_wUFlsYJhM-s5fBEEfYf_kn9l0BCmmJkTvHbuO_1A0GClrta6F5VnVbBKnu0eFni6rAsw6oVrhj-_pP9fIQ1w3tpWQpmpRRHTOkEXO0OT_Zpbdvgsl4-WM7VU2TnaS-90iInRtxiYWWKqaLHrOwphvKQAHMCCZIYVorHlSTAVbPHYTWmAs3gb2iNjCQZ8qMO7ZEzGBJ2PiQemXNga03HLfLCq2JkoonhgjkuC1DwGboiGOi_oq1-yF5m0z2UHFng',   desc:'Вулканический лавовый камень. Отличная колонизация полезных бактерий, натуральный вид.', rating:4.8, cnt:156, badge:null },
  /* Растения */
  { id:21, name:'Анубиас нана',                cat:'Растения',      price:280,  old:350,  img:'https://avatars.mds.yandex.net/get-mpic/16479329/2a00000198f8dd4e92748a242186e1343a99/orig', desc:'Неприхотливое теневыносливое растение для новичков. Крепится на коряги и камни, не нужна подложка.', rating:4.9, cnt:445, badge:'Хит' },
  { id:22, name:'Яванский мох',                cat:'Растения',      price:190,  old:null, img:'https://avatars.mds.yandex.net/get-mpic/7979706/img_id3502747747554349607.jpeg/900x1200',    desc:'Классика аквариума. Крепится к любым поверхностям, создаёт укрытия для мальков.', rating:4.8, cnt:523, badge:null },
  /* Оборудование */
  { id:23, name:'Aquael Ultra Heater 150W',    cat:'Оборудование',  price:1200, old:1400, img:'https://www.markvet.ru/upload/iblock/dab/yjxjcfzd5wdrm6s65hwoeggoml545snr.jpg', desc:'Точный нагреватель с термостатом и погрешностью ±0.5°C. Двойная защита от перегрева.', rating:4.8, cnt:234, badge:null },
  { id:24, name:'Термометр JBL цифровой',       cat:'Оборудование',  price:450,  old:520,  img:'https://img-edg.joomcdn.net/b2b9303b24e61e090a4bc5fd08767ecaf42d9594_original.jpeg',    desc:'Цифровой термометр с подсветкой на присоске. Диапазон 0–50°С, батарейка в комплекте.', rating:4.6, cnt:178, badge:null },
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

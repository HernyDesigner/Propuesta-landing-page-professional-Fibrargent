/**
 * 1. DATOS EDITABLES CENTRALIZADOS
 */
const CONFIG_WHATSAPP = {
  telefono: "", // TODO: Agregar número (ej: 5491123456789)
  mensaje: "Hola, quisiera consultar por las almohadas y los protectores de colchón de Fibrargent."
};

const TEXTOS_COMUNES = {
  almohadas: "Conocé este modelo y consultanos por sus características y disponibilidad.",
  protector: "Conocé esta opción para complementar el cuidado de tu colchón. Consultanos por medidas y disponibilidad.",
  muestra: "Espacio de muestra para incorporar un producto del catálogo."
};

const PROD_IMG_FALLBACK = "https://images.unsplash.com/photo-1629949009762-c0e66bbd08c8?q=80&w=800&auto=format&fit=crop";

const PRODUCTOS = [
  { nombre: "Suamir Esencia", categoria: "Almohadas", desc: TEXTOS_COMUNES.almohadas, img: PROD_IMG_FALLBACK },
  { nombre: "Suamir Massage", categoria: "Almohadas", desc: TEXTOS_COMUNES.almohadas, img: PROD_IMG_FALLBACK },
  { nombre: "Suamir Hipersoft", categoria: "Almohadas", desc: TEXTOS_COMUNES.almohadas, img: PROD_IMG_FALLBACK },
  { nombre: "Dubella Soft", categoria: "Almohadas", desc: TEXTOS_COMUNES.almohadas, img: PROD_IMG_FALLBACK },
  { nombre: "Dubella Hipersoft", categoria: "Almohadas", desc: TEXTOS_COMUNES.almohadas, img: PROD_IMG_FALLBACK },
  { nombre: "Dubella Matelasse", categoria: "Almohadas", desc: TEXTOS_COMUNES.almohadas, img: PROD_IMG_FALLBACK },
  { nombre: "Cherie Eternelle", categoria: "Almohadas", desc: TEXTOS_COMUNES.almohadas, img: PROD_IMG_FALLBACK },
  { nombre: "Cherie Naturelle", categoria: "Almohadas", desc: TEXTOS_COMUNES.almohadas, img: PROD_IMG_FALLBACK },
  { nombre: "Cherie Capullos", categoria: "Almohadas", desc: TEXTOS_COMUNES.almohadas, img: PROD_IMG_FALLBACK },
  { nombre: "Duvetina", categoria: "Almohadas", desc: TEXTOS_COMUNES.almohadas, img: PROD_IMG_FALLBACK },
  { nombre: "Protector Suamir", categoria: "Protectores", desc: TEXTOS_COMUNES.protector, img: PROD_IMG_FALLBACK },
  { nombre: "Almohada · Muestra 01", categoria: "Muestra", desc: TEXTOS_COMUNES.muestra, img: PROD_IMG_FALLBACK, isMuestra: true },
  { nombre: "Almohada · Muestra 02", categoria: "Muestra", desc: TEXTOS_COMUNES.muestra, img: PROD_IMG_FALLBACK, isMuestra: true },
  { nombre: "Almohada · Muestra 03", categoria: "Muestra", desc: TEXTOS_COMUNES.muestra, img: PROD_IMG_FALLBACK, isMuestra: true },
  { nombre: "Protector · Muestra 01", categoria: "Muestra", desc: TEXTOS_COMUNES.muestra, img: PROD_IMG_FALLBACK, isMuestra: true },
  { nombre: "Protector · Muestra 02", categoria: "Muestra", desc: TEXTOS_COMUNES.muestra, img: PROD_IMG_FALLBACK, isMuestra: true },
];

const SUCURSALES = [
  { nombre: "Sucursal 01", direccion: "Dirección a confirmar", url: "" },
  { nombre: "Sucursal 02", direccion: "Dirección a confirmar", url: "" },
  { nombre: "Sucursal 03", direccion: "Dirección a confirmar", url: "" },
  { nombre: "Sucursal 04", direccion: "Dirección a confirmar", url: "" },
];

const HERO_IMAGES = [
  { src: "https://images.unsplash.com/photo-1584824486516-0555a07fc511?q=80&w=1200&auto=format&fit=crop", alt: "Almohada en cama luminosa" },
  { src: "https://images.unsplash.com/photo-1542728928-1413d1894ed1?q=80&w=1200&auto=format&fit=crop", alt: "Detalle de textiles y almohadas" },
  { src: "https://images.unsplash.com/photo-1629949009762-c0e66bbd08c8?q=80&w=1200&auto=format&fit=crop", alt: "Composición de almohadas en dormitorio" }
];


/**
 * 2. FUNCIONES DE RENDERIZADO
 */
const renderProducts = () => {
  const container = document.getElementById('productos-grid');
  PRODUCTOS.forEach((prod, i) => {
    const isMuestra = prod.isMuestra ? `<span class="absolute top-4 right-4 bg-brand-light text-stone-500 text-xs px-2 py-1 rounded-sm shadow-sm z-20">Muestra</span>` : '';
    // Retraso escalonado (stagger) de forma manual
    const delay = (i % 4) * 100;

    container.innerHTML += `
      <article class="group relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-sm bg-stone-200 cursor-pointer reveal" style="transition-delay: ${delay}ms" tabindex="0">
        ${isMuestra}
        <img src="${prod.img}" alt="${prod.nombre}" loading="${i < 4 ? 'eager' : 'lazy'}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus:scale-105">
        
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none"></div>
        
        <div class="absolute inset-0 bg-black/80 z-10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <p class="text-stone-200 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300">${prod.desc}</p>
        </div>

        <div class="absolute bottom-6 left-6 right-6 z-20">
          <span class="text-stone-300 text-xs tracking-wider uppercase mb-1 block drop-shadow-md">${prod.categoria}</span>
          <h3 class="text-white text-xl font-serif drop-shadow-md">${prod.nombre}</h3>
        </div>
      </article>
    `;
  });
};

const renderSucursales = () => {
  const container = document.getElementById('sucursales-list');
  SUCURSALES.forEach((suc) => {
    const isLink = suc.url !== "";
    const Tag = isLink ? 'a' : 'div';
    const attrs = isLink ? `href="${suc.url}" target="_blank" rel="noopener noreferrer"` : `aria-disabled="true" title="Destino pendiente"`;
    
    container.innerHTML += `
      <${Tag} ${attrs} class="group border-b border-stone-200 py-6 flex items-center justify-between hover:bg-stone-50 focus:bg-stone-50 transition-colors px-4 cursor-${isLink ? 'pointer' : 'default'} outline-none focus:ring-2 focus:ring-inset focus:ring-stone-400">
        <div>
          <h3 class="text-xl font-serif text-brand-dark mb-1">${suc.nombre}</h3>
          <p class="text-stone-500">${suc.direccion}</p>
        </div>
        <div class="text-stone-400 group-hover:text-brand-dark transition-colors transform group-hover:translate-x-2 duration-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
      </${Tag}>
    `;
  });
};

const setupWhatsApp = () => {
  const btnFloat = document.getElementById('floating-whatsapp');
  const btnFooter = document.getElementById('footer-whatsapp');
  
  if (CONFIG_WHATSAPP.telefono) {
    const url = `https://wa.me/${CONFIG_WHATSAPP.telefono}?text=${encodeURIComponent(CONFIG_WHATSAPP.mensaje)}`;
    btnFloat.href = url;
    btnFooter.href = url;
  } else {
    const disableStyles = "opacity-50 grayscale cursor-not-allowed pointer-events-none";
    btnFloat.className += ` ${disableStyles}`;
    btnFloat.title = "WhatsApp pendiente de configurar";
    btnFooter.className += ` ${disableStyles}`;
    btnFooter.innerText = "WhatsApp pendiente";
  }
};


/**
 * 3. INTERACCIONES NATIVAS
 */
const initHeroSlider = () => {
  const container = document.getElementById('hero-slider');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let currentIndex = 0;
  let timer;
  let isPlaying = !prefersReducedMotion;

  HERO_IMAGES.forEach((img, index) => {
    const activeClass = index === 0 ? 'opacity-100' : 'opacity-0';
    container.innerHTML += `<img src="${img.src}" alt="${img.alt}" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 slide-img ${activeClass}">`;
  });

  const slides = document.querySelectorAll('.slide-img');
  
  const goToSlide = (index) => {
    slides[currentIndex].classList.remove('opacity-100');
    slides[currentIndex].classList.add('opacity-0');
    currentIndex = index;
    slides[currentIndex].classList.remove('opacity-0');
    slides[currentIndex].classList.add('opacity-100');
  };

  const nextSlide = () => goToSlide((currentIndex + 1) % slides.length);

  const startPlay = () => { if(isPlaying) timer = setInterval(nextSlide, 5000); };
  const stopPlay = () => clearInterval(timer);

  const btnPause = document.getElementById('slider-pause');
  
  const togglePlay = () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      startPlay();
      btnPause.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6"></path></svg>`;
    } else {
      stopPlay();
      btnPause.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg>`;
    }
  };

  btnPause.addEventListener('click', togglePlay);
  container.parentElement.addEventListener('mouseenter', stopPlay);
  container.parentElement.addEventListener('mouseleave', () => { if(isPlaying) startPlay(); });
  
  if(!isPlaying) togglePlay(); else startPlay();
};

const setupMenu = () => {
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  
  const toggleMenu = () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
  };

  btn.addEventListener('click', toggleMenu);

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) toggleMenu();
  });
};

// Reemplazo de ScrollTrigger con IntersectionObserver nativo
const initAnimations = () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};


// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('current-year').textContent = new Date().getFullYear();
  renderProducts();
  renderSucursales();
  setupWhatsApp();
  setupMenu();
  initHeroSlider();
  initAnimations();
});
/* ============ Config ============ */
const EMAIL = 'pavetran22@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/pavetran-m-ravi-80317a249';

/* ============ Content ============ */
const PROJECTS = [
  {
    slug: 'smartpark-apu', cat: 'real', badge: 'Final Year Project',
    title: 'SmartPark APU', headline: 'SmartPark APU - AI Smart Parking System',
    img: 'assets/covers/smartpark.svg',
    github: 'https://github.com/pavetran22/SmarkParkAPU', live: 'https://smark-park-apu.vercel.app',
    pills: ['Final Year Project', 'Computer Vision'],
    tags: ['Final Year Project', 'Computer Vision', 'Full-Stack'],
    service: 'Computer Vision, Full-Stack', timeline: 'Aug 2026',
    tools: ['Python', 'YOLOv8', 'Angular', 'Ionic', 'Firebase', 'Vercel'],
    lead: "A smart parking system for APU's campus that spots vehicles and number plates with YOLOv8, tracks live slot occupancy, and guides drivers through a mobile app.",
    overview: 'SmartPark APU is my Final Year Project. Python detection services run YOLOv8 models on parking-lot images to find cars and read number plates, an analytics backend turns those detections into live occupancy data, and two front ends put it to work: an Angular dashboard for administrators and an Ionic mobile app for drivers, with push notifications through Firebase.',
    features: [
      { t: 'Vehicle & plate detection', d: 'YOLOv8 models detect cars and read number plates from camera images.' },
      { t: 'Live occupancy analytics', d: 'Slot-overlap logic and an analytics API calculate free and taken bays in real time.' },
      { t: 'Find My Car', d: 'Drivers can locate where they parked through a dedicated find-my-car service.' },
      { t: 'Dashboard & mobile app', d: 'An Angular admin dashboard and an Ionic mobile app, with push notifications.' }
    ]
  },
  {
    slug: 'fraudshield', cat: 'real', badge: 'Real Project',
    title: 'FraudShield', headline: 'FraudShield - Transaction Fraud Detection',
    img: 'assets/covers/fraudshield.svg',
    github: 'https://github.com/pavetran22/FraudShield',
    pills: ['Machine Learning', 'Python'],
    tags: ['Machine Learning', 'Full-Stack'],
    service: 'Machine Learning, Web App', timeline: 'Sep 2026',
    tools: ['Python', 'Next.js', 'TypeScript', 'Machine Learning'],
    lead: 'A fraud detection system that classifies transactions as legitimate or illegitimate through a Next.js interface and a Python ML API.',
    overview: 'FraudShield pairs a Next.js (TypeScript) front end with a Python fraud-detection API. The API loads a trained model together with its scaler and encoders, then classifies each incoming transaction as legitimate or illegitimate.',
    features: [
      { t: 'Transaction classification', d: 'Every transaction is scored and labelled as legitimate or illegitimate.' },
      { t: 'Trained ML model', d: 'A saved model with its scaler and encoders keeps predictions consistent with training.' },
      { t: 'Python API', d: 'A dedicated fraud API serves predictions to the front end.' },
      { t: 'Next.js interface', d: 'A TypeScript web interface for submitting and reviewing transactions.' }
    ]
  },
  {
    slug: 'health-risk-predictor', cat: 'real', badge: 'Real Project',
    title: 'Health Risk Predictor', headline: 'AI-Powered Health Risk Predictor - Full-Stack ML App',
    img: 'assets/covers/health.svg',
    github: 'https://github.com/pavetran22/health_predictor',
    pills: ['Flask', 'Random Forest'],
    tags: ['Machine Learning', 'Full-Stack'],
    service: 'Machine Learning, Full-Stack', timeline: 'Sep 2026',
    tools: ['Python', 'Flask', 'Random Forest', 'HTML/CSS/JS'],
    lead: 'A full-stack app that predicts health risk from lifestyle inputs using a Random Forest model behind a Flask API.',
    overview: 'A JavaScript front end collects lifestyle details such as age, BMI, daily steps, sleep, water intake, calories, smoking and alcohol use, then sends them to a Flask API. A 100-tree Random Forest classifier, trained on a synthetic health dataset, returns a risk level and a confidence score.',
    features: [
      { t: 'Lifestyle input form', d: 'Age, BMI, steps, sleep, water, calories, smoking and alcohol feed the model.' },
      { t: 'Flask prediction API', d: 'A /predict endpoint turns the form data into a model-ready input.' },
      { t: 'Random Forest classifier', d: 'A 100-tree model trained on a synthetic health dataset.' },
      { t: 'Risk level & score', d: 'Returns a low or high risk label together with its prediction score.' }
    ]
  },
  {
    slug: 'stock-market-prediction-ai', cat: 'exploration', badge: 'Exploration',
    title: 'Stock Market Prediction AI', headline: 'Stock Market Prediction AI - 7-Day Trend Forecasting',
    img: 'assets/covers/stock.svg',
    github: 'https://github.com/pavetran22/stock-prediction-AI-system',
    pills: ['Python', 'TensorFlow'],
    tags: ['Machine Learning', 'Finance'],
    service: 'Machine Learning, Data', timeline: 'Jun 2025',
    tools: ['Python', 'TensorFlow', 'LSTM', 'yfinance', 'NLTK', 'NewsAPI'],
    lead: 'An LSTM-powered system that blends live Apple stock data with news sentiment to forecast the next seven days.',
    overview: "Built in a Colab notebook, the system pulls live market data with yfinance, scores the latest headlines through NewsAPI using NLTK's VADER sentiment analyser, and feeds both into a TensorFlow LSTM network that predicts the next 7 days. The chart refreshes every 30 seconds so fresh headlines can change the forecast.",
    features: [
      { t: 'Live market data', d: 'Apple stock prices downloaded on demand with yfinance.' },
      { t: 'News sentiment', d: 'Headlines from NewsAPI scored with the VADER sentiment analyser.' },
      { t: 'LSTM forecasting', d: 'A Keras LSTM network predicts the next seven days of prices.' },
      { t: 'Auto-refreshing chart', d: 'The chart and prediction update every 30 seconds.' }
    ]
  },
  {
    slug: 'smart-traffic-assistant', cat: 'exploration', badge: 'Exploration',
    title: 'Smart Traffic Assistant', headline: 'Smart Traffic Assistant - Congestion Prediction System',
    img: 'assets/covers/traffic.svg',
    github: 'https://github.com/pavetran22/Smart-Traffic_System',
    pills: ['Deep Learning', 'PyTorch'],
    tags: ['Deep Learning', 'Maps'],
    service: 'Data, Machine Learning', timeline: 'Jun 2025',
    tools: ['Python', 'PyTorch', 'Google Maps API', 'Folium', 'Seaborn'],
    lead: "A traffic assistant that takes where you are and where you're going, maps the route, and predicts congestion along the way.",
    overview: 'Built in a Colab notebook with the Google Maps client and Folium, the system asks for your current and desired location, plots the journey on an interactive map, and analyses simulated traffic volumes at key Rawang intersections to estimate peak hours and traffic flow.',
    features: [
      { t: 'Origin & destination input', d: 'Enter where you are and where you want to go.' },
      { t: 'Interactive route map', d: 'Journeys are drawn on a Folium map built on Google Maps data.' },
      { t: 'Simulated Rawang traffic', d: 'Traffic volumes are simulated at real intersections around Rawang.' },
      { t: 'Hourly flow analysis', d: 'Average volume by hour of day highlights the peak congestion windows.' }
    ]
  },
  {
    slug: 'milky-way-intelligence', cat: 'exploration', badge: 'Exploration',
    title: 'Milky Way Intelligence', headline: 'Milky Way Intelligence - Solar System Movement Predictor',
    img: 'assets/covers/milkyway.svg',
    github: 'https://github.com/pavetran22/milky-way-ai-system',
    pills: ['IoT', 'Data Analytics'],
    tags: ['IoT', 'Data Analytics', 'Cloud'],
    service: 'Data, IoT, Cloud', timeline: 'Jun 2025',
    tools: ['IoT', 'Data Analytics', 'Cloud'],
    lead: 'A system that predicts the movements of planets, asteroids and moons across our solar system.',
    overview: 'Milky Way Intelligence applies IoT, data analytics and cloud services to forecast how planets, asteroids and moons move through the solar system, exploring how sensor-style data pipelines and prediction models can come together in an astronomy setting.',
    features: [
      { t: 'Planetary movement', d: 'Predicts where the planets will be along their orbits.' },
      { t: 'Asteroids & moons', d: 'Extends the same prediction approach to asteroids and moons.' },
      { t: 'IoT data pipeline', d: 'Treats observations like sensor streams flowing into the system.' },
      { t: 'Cloud analytics', d: 'Cloud services handle storage and analysis of the data.' }
    ]
  }
];

const SKILL_GROUPS = [
  {
    title: 'AI & Machine Learning', img: 'assets/covers/stock.svg',
    chips: ['Machine Learning', 'Deep Learning', 'LSTM Networks', 'Random Forest', 'Computer Vision', 'NLP & Sentiment Analysis', 'Time-Series Forecasting', 'Fraud Detection', 'Predictive Modelling'],
    used: ['smartpark-apu', 'stock-market-prediction-ai', 'fraudshield', 'health-risk-predictor', 'smart-traffic-assistant']
  },
  {
    title: 'AI Frameworks & Libraries', img: 'assets/covers/milkyway.svg',
    chips: ['TensorFlow', 'Keras', 'PyTorch', 'scikit-learn', 'YOLOv8', 'NLTK (VADER)', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Folium'],
    used: ['stock-market-prediction-ai', 'smartpark-apu', 'health-risk-predictor', 'smart-traffic-assistant']
  },
  {
    title: 'Languages & Data', img: 'assets/covers/health.svg',
    chips: ['Python', 'Java', 'TypeScript', 'JavaScript', 'HTML / CSS', 'SQL', 'R', 'Data Analysis'],
    used: ['stock-market-prediction-ai', 'smart-traffic-assistant', 'health-risk-predictor', 'fraudshield']
  },
  {
    title: 'Full-Stack & APIs', img: 'assets/covers/smartpark.svg',
    chips: ['Flask', 'Next.js', 'Angular', 'Ionic', 'Java EE / JPA', 'REST APIs', 'Firebase', 'Google Maps API', 'NewsAPI'],
    used: ['smartpark-apu', 'health-risk-predictor', 'fraudshield']
  },
  {
    title: 'DevOps & Tools', img: 'assets/covers/devops.svg',
    chips: ['Git & GitHub', 'Linux & Shell Scripting', 'Jupyter / Google Colab', 'Vercel', 'UAT & Test Automation', 'MS Office'],
    used: ['smartpark-apu', 'stock-market-prediction-ai'],
    note: 'Applied day to day during the Maybank and Public Bank internships.'
  }
];

const SOFT_SKILLS = [
  ['s-chat', 'Communication'], ['s-clock', 'Time Management'], ['s-team', 'Teamwork'], ['s-bulb', 'Problem Solving'],
  ['s-flag', 'Leadership'], ['s-adapt', 'Adaptability'], ['s-bolt', 'Fast Learner'], ['s-target', 'Discipline & Punctuality']
];

const TICKER_A = ['Python', 'TensorFlow', 'Keras', 'PyTorch', 'scikit-learn', 'LSTM', 'Random Forest', 'YOLOv8', 'NLP', 'NLTK', 'Computer Vision', 'Deep Learning', 'Machine Learning', 'Sentiment Analysis', 'Time-Series Forecasting', 'Fraud Detection', 'Data Analysis'];
const TICKER_B = ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Google Colab', 'Flask', 'Next.js', 'Angular', 'Ionic', 'TypeScript', 'Java EE', 'SQL', 'R', 'Git & GitHub', 'Linux', 'Shell Scripting', 'Firebase', 'Vercel', 'Folium', 'Google Maps API', 'REST APIs', 'UAT Testing'];

const EXPERIENCE = [
  {
    org: 'Maybank HQ Tower, Kuala Lumpur', role: 'Linux & DevOps Intern', dept: 'IT Department (Treasury)', tag: 'Diploma in Software Engineering internship',
    date: 'Jul 2024 - Sep 2024', img: 'assets/covers/devops.svg',
    bullets: [
      'Developed and maintained Linux shell scripts to automate system tasks, improving operational efficiency.',
      'Created and updated change management documentation to ensure compliance with IT governance.',
      'Managed GitHub repositories, including version control, code reviews, and repository structuring.',
      'Collaborated with cross-functional teams to support system maintenance and deployment processes.'
    ],
    chips: ['Linux', 'Shell Scripting', 'GitHub', 'Change Management']
  },
  {
    org: 'Public Bank, Bangi', role: 'AI Intern, UAT Testing', dept: 'Banking applications & web platforms', tag: 'B.Sc. Artificial Intelligence internship',
    date: 'Sep 2025 - Jan 2026', img: 'assets/covers/uat.svg',
    bullets: [
      'Part of the development team building UAT testing automation tooling.',
      'Performed UAT testing on Public Bank applications and web platforms, validating new feature updates and releases.',
      'Documented and tracked test cases and results to support QA sign-off ahead of production deployment.'
    ],
    chips: ['UAT Testing', 'Test Automation', 'QA Sign-off', 'Documentation']
  }
];

/* ============ Helpers ============ */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const icon = (id, cls = 'ar') => `<svg class="${cls}"><use href="#${id}"/></svg>`;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

$('#year').textContent = new Date().getFullYear();

/* LinkedIn buttons only show once a URL is configured */
$$('[data-social="linkedin"]').forEach(a => {
  if (LINKEDIN_URL) a.href = LINKEDIN_URL; else a.hidden = true;
});

/* ============ Scroll reveal ============ */
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
const watchReveal = () => $$('.reveal:not(.in)').forEach(el => revealIO.observe(el));

/* ============ Work grid ============ */
const grid = $('#workGrid');
grid.innerHTML = PROJECTS.map((p, i) => `
  <article class="card" data-cat="${p.cat}" style="--i:${i % 2}">
    <a class="card__link" href="#/work/${p.slug}" data-slug="${p.slug}" aria-label="${p.headline}">
      <div class="card__media">
        <span class="tagchip">${p.cat === 'real' ? 'Real Project' : 'Exploration'}</span>
        <img src="${p.img}" alt="${p.title} cover art" width="800" height="500" loading="lazy">
        <span class="card__go">${icon('i-ur', '')}</span>
      </div>
      <div class="card__body">
        <h3>${p.headline}</h3>
        <div class="tags">${p.pills.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </a>
  </article>`).join('');

const cardIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); cardIO.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
$$('.card').forEach(c => cardIO.observe(c));

$$('.filter').forEach(btn => btn.addEventListener('click', () => {
  $$('.filter').forEach(b => {
    b.classList.toggle('is-active', b === btn);
    b.setAttribute('aria-selected', String(b === btn));
  });
  const f = btn.dataset.filter;
  let n = 0;
  $$('.card').forEach(c => {
    const show = f === 'all' || c.dataset.cat === f;
    c.hidden = !show;
    if (show) {
      c.style.setProperty('--i', n++ % 3);
      c.classList.remove('is-in'); void c.offsetWidth; c.classList.add('is-in');
    }
  });
}));

/* ============ Skills ============ */
const nameOf = slug => (PROJECTS.find(p => p.slug === slug) || {}).title || slug;

const accList = $('#accList');
accList.insertAdjacentHTML('afterbegin', SKILL_GROUPS.map((s, i) => `
  <div class="acc" data-i="${i}">
    <button class="acc__row" id="acc-b${i}" aria-expanded="false" aria-controls="acc-p${i}">
      <span class="acc__title">${s.title}</span>
      <span class="acc__icons">${icon('i-ur', 'i-ur')}${icon('i-x', 'i-x')}</span>
    </button>
    <div class="acc__panel" id="acc-p${i}" role="region" aria-labelledby="acc-b${i}"><div><div class="acc__in">
      <div class="acc__chips">${s.chips.map(c => `<span>${c}</span>`).join('')}</div>
      <p class="acc__used">${s.note ? s.note + ' ' : ''}${s.used.length ? 'Used in ' + s.used.map(u => `<a href="#/work/${u}" data-slug="${u}">${nameOf(u)}</a>`).join(', ') + '.' : ''}</p>
    </div></div></div>
    <div class="acc__img" aria-hidden="true"><img src="${s.img}" alt="" loading="lazy"></div>
  </div>`).join(''));

const accs = $$('.acc');
let accActive = -1, accTouched = false;
function setAcc(i) {
  accActive = i;
  accs.forEach((el, k) => {
    const on = k === i;
    el.classList.toggle('is-active', on);
    $('.acc__row', el).setAttribute('aria-expanded', String(on));
  });
}
accs.forEach((el, i) => $('.acc__row', el).addEventListener('click', () => {
  accTouched = true;
  setAcc(accActive === i ? -1 : i);
}));
$('#accPrev').addEventListener('click', () => { accTouched = true; setAcc((accActive <= 0 ? accs.length : accActive) - 1); });
$('#accNext').addEventListener('click', () => { accTouched = true; setAcc((accActive + 1) % accs.length); });

new IntersectionObserver((entries, io) => {
  if (entries[0].isIntersecting) {
    io.disconnect();
    setTimeout(() => { if (!accTouched) setAcc(0); }, reduced ? 0 : 700);
  }
}, { threshold: 0.3 }).observe(accList);

const tick = items => { const row = items.map(t => `<span>${t}</span>`).join(''); return row + row; };
$('#tickerA').innerHTML = tick(TICKER_A);
$('#tickerB').innerHTML = tick(TICKER_B);

$('#softGrid').innerHTML = SOFT_SKILLS.map(([ic, name], i) => `
  <div class="soft__tile reveal" style="--i:${i % 4}">
    <span class="soft__ic">${icon(ic, 'ic')}</span><b>${name}</b>
  </div>`).join('');

/* ============ About: count-up stats ============ */
const countIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    countIO.unobserve(e.target);
    const el = e.target, to = parseFloat(el.dataset.to), dec = +(el.dataset.dec || 0), suf = el.dataset.suffix || '';
    if (reduced) { el.textContent = to.toFixed(dec) + suf; return; }
    const t0 = performance.now(), dur = 1400;
    const step = now => {
      const p = Math.min(1, (now - t0) / dur), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (to * eased).toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}, { threshold: 0.6 });
$$('.num').forEach(n => countIO.observe(n));

/* ============ Experience + hover preview ============ */
const expList = $('#expList');
expList.innerHTML = EXPERIENCE.map((x, i) => `
  <article class="exp-row reveal" style="--i:${i}" data-img="${x.img}">
    <div class="exp-main">
      <h3>${x.org}</h3>
      <p>${x.role}</p>
      <small>${x.dept}</small>
      <span class="exp-tag">${x.tag}</span>
    </div>
    <div class="exp-body">
      <ul>${x.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      <div class="exp-chips">${x.chips.map(c => `<span>${c}</span>`).join('')}</div>
    </div>
    <time>${x.date}</time>
  </article>`).join('');

const preview = $('#expPreview'), previewImg = $('img', preview);
if (matchMedia('(hover: hover) and (pointer: fine)').matches && !reduced) {
  let tx = 0, ty = 0, x = 0, y = 0, running = false, shown = false;
  const loop = () => {
    x += (tx - x) * 0.16; y += (ty - y) * 0.16;
    const tilt = -5 + Math.max(-8, Math.min(8, (tx - x) * 0.05));
    preview.style.transform = `translate3d(${x}px,${y}px,0) rotate(${tilt}deg) scale(${shown ? 1 : 0.85})`;
    if (running) requestAnimationFrame(loop);
  };
  expList.addEventListener('mousemove', e => { tx = e.clientX + 26; ty = e.clientY - 96; });
  $$('.exp-row', expList).forEach(row => {
    row.addEventListener('mouseenter', e => {
      previewImg.src = row.dataset.img;
      tx = e.clientX + 26; ty = e.clientY - 96;
      if (!shown) { x = tx; y = ty; }
      shown = true; preview.classList.add('is-on');
      if (!running) { running = true; requestAnimationFrame(loop); }
    });
    row.addEventListener('mouseleave', () => {
      shown = false; preview.classList.remove('is-on');
      setTimeout(() => { if (!shown) running = false; }, 400);
    });
  });
}

watchReveal();

/* ============ Nav ============ */
const nav = $('#nav'), toggle = $('#navToggle'), mnav = $('#mnav');
let lastY = scrollY, menuOpen = false;
addEventListener('scroll', () => {
  const y = scrollY;
  nav.classList.toggle('is-solid', y > 40);
  if (!menuOpen) {
    if (y > 240 && y > lastY + 4) nav.classList.add('is-hidden');
    else if (y < lastY - 4 || y <= 240) nav.classList.remove('is-hidden');
  }
  lastY = y;
}, { passive: true });

function setMenu(open) {
  menuOpen = open;
  if (open) nav.classList.remove('is-hidden');
  mnav.classList.toggle('is-open', open);
  mnav.setAttribute('aria-hidden', String(!open));
  toggle.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.documentElement.classList.toggle('pv-lock', open);
}
toggle.addEventListener('click', () => setMenu(!menuOpen));
$$('a', mnav).forEach(a => a.addEventListener('click', () => setMenu(false)));

const navLinks = $$('[data-nav]');
const sectionIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => sectionIO.observe(s));

/* ============ Project detail view ============ */
const pv = $('#pv'), pvScroll = $('#pvScroll'), pvBack = $('#pvBack');
const pageTitle = document.title;
let pvOpen = false, lastFocus = null, closeTimer = 0;

function renderProject(p) {
  const next = PROJECTS[(PROJECTS.indexOf(p) + 1) % PROJECTS.length];
  pvScroll.innerHTML = `
    <div class="wrap">
      <div class="pv-hero">
        <div>
          <div class="pv-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
          <h2 class="pv-title">${p.title}<small>/${p.cat === 'real' ? 'Real Project' : 'Exploration'}</small></h2>
          <p class="pv-lead">${p.lead}</p>
          <div class="pv-cta">
            <a class="btn btn--dark" href="${p.github}" target="_blank" rel="noopener">View on GitHub ${icon('i-ur')}</a>
            ${p.live ? `<a class="btn btn--dark" href="${p.live}" target="_blank" rel="noopener">Live Preview ${icon('i-ur')}</a>` : ''}
            <a class="btn btn--light" href="mailto:${EMAIL}">Contact Me</a>
          </div>
        </div>
        <dl class="pv-meta">
          <div><dt>Focus</dt><dd>${p.service}</dd></div>
          <div><dt>Timeline</dt><dd>${p.timeline}</dd></div>
          <div><dt>Tools</dt><dd class="pv-tools">${p.tools.map(t => `<span>${t}</span>`).join('')}</dd></div>
        </dl>
      </div>
      <figure class="pv-frame"><img src="${p.img}" alt="${p.title} cover art" width="800" height="500"></figure>
      <p class="pv-note">${p.overview}</p>
      <div class="pv-feat">${p.features.map((f, i) => `<div><b>0${i + 1}</b><h4>${f.t}</h4><p>${f.d}</p></div>`).join('')}</div>
      <a class="pv-next" href="#/work/${next.slug}" data-slug="${next.slug}">
        <div><span>Next project</span><strong>${next.title}</strong></div>${icon('i-ur', '')}
      </a>
    </div>
    <p class="pv-foot">Interested in working together? <a href="mailto:${EMAIL}">${EMAIL}</a></p>`;
  pvScroll.scrollTop = 0;
}

function openProject(slug, push) {
  const p = PROJECTS.find(x => x.slug === slug);
  if (!p) return;
  clearTimeout(closeTimer);
  renderProject(p);
  if (push) history.pushState({ pv: slug }, '', '#/work/' + slug);
  document.title = `${p.title} — Pavetran M Ravi`;
  if (!pvOpen) {
    pvOpen = true; lastFocus = document.activeElement;
    pv.hidden = false; pv.removeAttribute('aria-hidden');
    document.documentElement.classList.add('pv-lock');
    requestAnimationFrame(() => requestAnimationFrame(() => pv.classList.add('is-open')));
    pvBack.focus({ preventScroll: true });
  }
}

function closeProject() {
  if (!pvOpen) return;
  pvOpen = false;
  pv.classList.remove('is-open');
  pv.setAttribute('aria-hidden', 'true');
  document.title = pageTitle;
  closeTimer = setTimeout(() => {
    pv.hidden = true;
    document.documentElement.classList.remove('pv-lock');
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }, reduced ? 0 : 800);
}

function goBack() {
  if (history.state && history.state.pv) history.back();
  else { closeProject(); history.replaceState(null, '', '#work'); }
}

document.addEventListener('click', e => {
  const a = e.target.closest('a[data-slug]');
  if (a) { e.preventDefault(); openProject(a.dataset.slug, true); }
});
pvBack.addEventListener('click', goBack);
addEventListener('keydown', e => {
  if (e.key === 'Escape') { if (pvOpen) goBack(); else if (menuOpen) setMenu(false); }
});
addEventListener('popstate', () => {
  const m = location.hash.match(/^#\/work\/([\w-]+)/);
  if (m) openProject(m[1], false); else closeProject();
});
{
  const m = location.hash.match(/^#\/work\/([\w-]+)/);
  if (m) openProject(m[1], false);
}

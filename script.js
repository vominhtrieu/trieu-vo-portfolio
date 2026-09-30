const appMeta = {
  about: { name: 'About Me', subtitle: 'Profile & introduction', icon: 'TV', iconClass: 'icon-about' },
  experience: { name: 'Experience', subtitle: 'Career timeline', icon: '⌁', iconClass: 'icon-experience' },
  projects: { name: 'Projects', subtitle: 'Selected systems & impact', icon: '◫', iconClass: 'icon-projects' },
  skills: { name: 'Skills', subtitle: 'Technologies & tools', icon: '</>', iconClass: 'icon-skills' },
  education: { name: 'Education', subtitle: 'University, honors & certificates', icon: '◎', iconClass: 'icon-education' },
  terminal: { name: 'Terminal', subtitle: 'Command-line portfolio', icon: '>_', iconClass: 'icon-terminal' },
  contact: { name: 'Contact', subtitle: 'Email, phone & social links', icon: '@', iconClass: 'icon-contact' },
  resume: { name: 'Resume PDF', subtitle: 'Open the original CV', icon: 'CV', iconClass: 'icon-resume', href: 'assets/TrieuVoCV.pdf' }
};

const desktop = document.querySelector('#desktop');
const windows = [...document.querySelectorAll('.window')];
const activeName = document.querySelector('#active-app-name');
const toast = document.querySelector('#toast');
let zIndex = 30;

const updateTime = () => {
  const now = new Date();
  document.querySelector('#menu-time').textContent = new Intl.DateTimeFormat('en-US', {
    weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'
  }).format(now);
};
updateTime();
setInterval(updateTime, 30000);
document.querySelector('#term-date').textContent = new Date().toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

function showToast(title, detail) {
  toast.querySelector('b').textContent = title;
  toast.querySelector('small').textContent = detail;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 3800);
}

function focusWindow(win) {
  windows.forEach(item => item.classList.remove('focused'));
  win.classList.add('focused');
  win.style.zIndex = ++zIndex;
  const key = win.dataset.window;
  activeName.textContent = appMeta[key]?.name || 'Finder';
}

function updateRunning() {
  document.querySelectorAll('.dock-item[data-app]').forEach(item => {
    const win = document.querySelector(`#window-${item.dataset.app}`);
    item.classList.toggle('running', Boolean(win && !win.classList.contains('hidden')));
  });
}

function openApp(key) {
  const meta = appMeta[key];
  if (!meta) return;
  if (meta.href) {
    window.open(meta.href, '_blank', 'noopener');
    return;
  }
  const win = document.querySelector(`#window-${key}`);
  if (!win) return;
  win.classList.remove('hidden', 'closing', 'minimizing');
  win.style.animation = 'none';
  void win.offsetHeight;
  win.style.animation = '';
  focusWindow(win);
  updateRunning();
  if (key === 'terminal') setTimeout(() => document.querySelector('#terminal-input').focus(), 180);
}

function hideWindow(win, mode) {
  win.classList.add(mode);
  setTimeout(() => {
    win.classList.add('hidden');
    win.classList.remove(mode, 'focused');
    updateRunning();
    const visible = windows.filter(item => !item.classList.contains('hidden')).sort((a, b) => (Number(b.style.zIndex) || 0) - (Number(a.style.zIndex) || 0));
    if (visible[0]) focusWindow(visible[0]); else activeName.textContent = 'Finder';
  }, mode === 'closing' ? 230 : 320);
}

document.querySelectorAll('[data-app]').forEach(control => {
  if (control.matches('a')) return;
  control.addEventListener('click', event => {
    event.stopPropagation();
    document.querySelectorAll('.desktop-icon').forEach(icon => icon.classList.toggle('selected', icon === control));
    openApp(control.dataset.app);
  });
});

windows.forEach(win => {
  win.addEventListener('pointerdown', () => focusWindow(win));
  win.querySelector('.close').addEventListener('click', event => { event.stopPropagation(); hideWindow(win, 'closing'); });
  win.querySelector('.minimize').addEventListener('click', event => { event.stopPropagation(); hideWindow(win, 'minimizing'); });
  win.querySelector('.maximize').addEventListener('click', event => {
    event.stopPropagation();
    win.classList.toggle('maximized');
    focusWindow(win);
  });

  const bar = win.querySelector('.window-bar');
  bar.addEventListener('pointerdown', event => {
    if (event.target.closest('.traffic-lights') || win.classList.contains('maximized') || window.innerWidth <= 760) return;
    const rect = win.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    // Freeze the rendered position before disabling the centered opening
    // animation. Otherwise its fill state keeps overriding the drag transform
    // and makes the window jump so the pointer appears at its center.
    win.style.animation = 'none';
    win.style.left = `${rect.left}px`;
    win.style.top = `${rect.top}px`;
    win.style.width = `${rect.width}px`;
    win.style.height = `${rect.height}px`;
    win.style.transform = 'none';
    bar.setPointerCapture(event.pointerId);
    const move = moveEvent => {
      const width = win.offsetWidth;
      const height = win.offsetHeight;
      const left = Math.min(window.innerWidth - 70, Math.max(0, moveEvent.clientX - offsetX));
      const top = Math.min(window.innerHeight - 80, Math.max(34, moveEvent.clientY - offsetY));
      win.style.left = `${left}px`;
      win.style.top = `${top}px`;
      win.style.transform = 'none';
      win.style.width = `${width}px`;
      win.style.height = `${height}px`;
    };
    const up = () => {
      bar.removeEventListener('pointermove', move);
      bar.removeEventListener('pointerup', up);
      bar.removeEventListener('pointercancel', up);
    };
    bar.addEventListener('pointermove', move);
    bar.addEventListener('pointerup', up);
    bar.addEventListener('pointercancel', up);
  });
});

document.querySelectorAll('.sidebar-item').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.sidebar-item').forEach(item => item.classList.toggle('active', item === button));
  document.querySelectorAll('.role-card').forEach(card => card.classList.toggle('filtered', button.dataset.role !== 'all' && card.dataset.company !== button.dataset.role));
}));

const dock = document.querySelector('#dock');
dock.addEventListener('mousemove', event => {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  [...dock.querySelectorAll('.dock-item')].forEach(item => {
    const box = item.getBoundingClientRect();
    const distance = Math.abs(event.clientX - (box.left + box.width / 2));
    const scale = Math.max(1, 1.45 - distance / 160);
    item.style.transform = `translateY(${-(scale - 1) * 20}px) scale(${scale})`;
    item.style.margin = `0 ${(scale - 1) * 9}px`;
  });
});
dock.addEventListener('mouseleave', () => dock.querySelectorAll('.dock-item').forEach(item => { item.style.transform = ''; item.style.margin = ''; }));

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  desktop.addEventListener('pointermove', event => {
    if (event.target.closest('.window, .dock, .menu-bar')) return;
    const x = (event.clientX / window.innerWidth - .5) * 8;
    const y = (event.clientY / window.innerHeight - .5) * 6;
    desktop.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
  });
}

const spotlight = document.querySelector('#spotlight');
const spotlightInput = document.querySelector('#spotlight-input');
const spotlightResults = document.querySelector('#spotlight-results');
let spotlightIndex = 0;

function resultSet() {
  const query = spotlightInput.value.trim().toLowerCase();
  return Object.entries(appMeta).filter(([, meta]) => `${meta.name} ${meta.subtitle}`.toLowerCase().includes(query));
}

function renderSpotlight() {
  const results = resultSet();
  spotlightIndex = Math.max(0, Math.min(spotlightIndex, results.length - 1));
  spotlightResults.replaceChildren();
  results.forEach(([key, meta], index) => {
    const button = document.createElement('button');
    button.className = `spotlight-result${index === spotlightIndex ? ' selected' : ''}`;
    button.dataset.key = key;
    button.innerHTML = `<span class="dock-icon ${meta.iconClass}">${meta.icon.replace('<', '&lt;')}</span><span><b>${meta.name}</b><br><small>${meta.subtitle}</small></span><small>Open</small>`;
    button.addEventListener('click', () => { closeSpotlight(); openApp(key); });
    button.addEventListener('mouseenter', () => { spotlightIndex = index; renderSpotlight(); });
    spotlightResults.append(button);
  });
  if (!results.length) {
    const empty = document.createElement('p'); empty.className = 'terminal-response'; empty.textContent = 'No applications found.'; spotlightResults.append(empty);
  }
}

function openSpotlight() {
  spotlight.classList.remove('hidden');
  spotlight.setAttribute('aria-hidden', 'false');
  spotlightInput.value = '';
  spotlightIndex = 0;
  renderSpotlight();
  setTimeout(() => spotlightInput.focus(), 20);
}

function closeSpotlight() {
  spotlight.classList.add('hidden');
  spotlight.setAttribute('aria-hidden', 'true');
}

document.querySelector('#spotlight-trigger').addEventListener('click', openSpotlight);
spotlight.addEventListener('pointerdown', event => { if (event.target === spotlight) closeSpotlight(); });
spotlightInput.addEventListener('input', () => { spotlightIndex = 0; renderSpotlight(); });
spotlightInput.addEventListener('keydown', event => {
  const results = resultSet();
  if (event.key === 'ArrowDown') { event.preventDefault(); spotlightIndex = Math.min(results.length - 1, spotlightIndex + 1); renderSpotlight(); }
  if (event.key === 'ArrowUp') { event.preventDefault(); spotlightIndex = Math.max(0, spotlightIndex - 1); renderSpotlight(); }
  if (event.key === 'Enter' && results[spotlightIndex]) { event.preventDefault(); closeSpotlight(); openApp(results[spotlightIndex][0]); }
});
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); spotlight.classList.contains('hidden') ? openSpotlight() : closeSpotlight(); }
  if (event.key === 'Escape') closeSpotlight();
});

const terminalForm = document.querySelector('#terminal-form');
const terminalInput = document.querySelector('#terminal-input');
const terminalHistory = document.querySelector('#terminal-history');
const terminalOutput = document.querySelector('#terminal-output');
const terminalResponses = {
  help: 'Available commands: about, experience, projects, skills, education, contact, resume, whoami, clear',
  whoami: 'Trieu Vo — Software Engineer in Ho Chi Minh City, Vietnam.',
  about: 'Dedicated software engineer with 4 years of web-development experience.',
  experience: 'Employment Hero · Kite Metric · Phenikaa MaaS',
  projects: 'Hero Clear · Superfund Service · Payment Gateway · MaaS Platforms',
  skills: 'JavaScript, Python, Ruby, Go, Rails, Django, React, Next.js, PostgreSQL, AWS, Docker',
  education: 'B.Sc. Software Engineering — Ho Chi Minh University of Science — GPA 8.33/10',
  contact: 'minhtrieuvo600@gmail.com · (+84) 396-210-035 · github.com/vominhtrieu'
};

function appendTerminal(text, className) {
  const line = document.createElement('p');
  line.className = className;
  line.textContent = text;
  terminalHistory.append(line);
}

terminalForm.addEventListener('submit', event => {
  event.preventDefault();
  const command = terminalInput.value.trim().toLowerCase();
  if (!command) return;
  appendTerminal(`trieu@portfolio ~ % ${command}`, 'terminal-line terminal-command');
  terminalInput.value = '';
  if (command === 'clear') terminalHistory.replaceChildren();
  else if (command === 'resume') { appendTerminal('Opening TrieuVoCV.pdf…', 'terminal-response'); openApp('resume'); }
  else if (terminalResponses[command]) {
    appendTerminal(terminalResponses[command], 'terminal-response');
    if (['about', 'experience', 'projects', 'skills', 'education', 'contact'].includes(command)) setTimeout(() => openApp(command), 250);
  } else appendTerminal(`zsh: command not found: ${command}`, 'terminal-line terminal-error');
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
});

desktop.addEventListener('click', event => {
  if (!event.target.closest('.desktop-icon, .window, .dock, .menu-bar, .spotlight-backdrop')) {
    document.querySelectorAll('.desktop-icon').forEach(icon => icon.classList.remove('selected'));
  }
});

function finishBoot() {
  document.querySelector('#boot-screen').classList.add('done');
  setTimeout(() => showToast('Welcome to Trieu Vo OS', 'Open an app from the dock to explore.'), 450);
}

const bootDelay = sessionStorage.getItem('trieu-os-booted') ? 250 : 1750;
sessionStorage.setItem('trieu-os-booted', 'true');
setTimeout(finishBoot, bootDelay);
document.querySelector('#boot-screen').addEventListener('click', finishBoot, { once: true });
focusWindow(document.querySelector('#window-about'));
updateRunning();

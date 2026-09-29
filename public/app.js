
function getRealisticTaskUrl(platform, index) {
  const p = (platform || 'TikTok').toLowerCase();
  const idx = typeof index === 'number' ? index : 0;
  if (p.includes('tiktok')) {
    const urls = [
      'https://vt.tiktok.com/ZSb666bLY/',
      'https://www.tiktok.com/@tiktok/video/7391823901234',
      'https://www.tiktok.com/@creative_hub/video/7281902837465',
      'https://vt.tiktok.com/ZSj891LmP/',
      'https://www.tiktok.com/@bangla_short/video/7391827364510'
    ];
    return urls[idx % urls.length];
  } else if (p.includes('youtube')) {
    const urls = [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
      'https://youtu.be/kJQP7kiw5Fk',
      'https://www.youtube.com/watch?v=9bZkp7q19f0',
      'https://www.youtube.com/watch?v=fJ9rUzIMcZQ'
    ];
    return urls[idx % urls.length];
  } else {
    const urls = [
      'https://www.facebook.com/watch/?v=10158319283726192',
      'https://www.facebook.com/reel/782910394829102',
      'https://www.facebook.com/watch/?v=9812739481920',
      'https://www.facebook.com/reel/19283746501928'
    ];
    return urls[idx % urls.length];
  }
}


function getPlatformSvg(platform, sizeClass) {
  const cls = sizeClass || 'h-6 w-6';
  if (platform === 'YouTube') {
    return `<svg viewBox="0 0 24 24" class="${cls}" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000"/>
      <polygon points="9.6,15.5 15.8,12 9.6,8.5" fill="#FFFFFF"/>
    </svg>`;
  }
  if (platform === 'FaceBook') {
    return `<svg viewBox="0 0 24 24" class="${cls}" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2"/>
      <path fill="#FFFFFF" d="M15.12 12.35l.5-3.25h-3.12v-2.1c0-.9.25-1.52 1.55-1.52h1.66V2.57C15.42 2.53 14.43 2.45 13.3 2.45c-2.36 0-3.97 1.44-3.97 4.08v2.57H6.5v3.25h2.83V21.5a12.06 12.06 0 003.97 0V12.35h1.82z"/>
    </svg>`;
  }
  // Default: TikTok authentic multi-color SVG
  return `<svg viewBox="0 0 24 24" class="${cls}" aria-hidden="true" fill="none">
    <path fill="#FE2C55" d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.89 2.89 2.896 2.896 0 0 1-2.89-2.89 2.896 2.896 0 0 1 2.89-2.89c.304 0 .595.046.868.13V9.404a6.336 6.336 0 0 0-.868-.06A6.335 6.335 0 0 0 3 15.672a6.335 6.335 0 0 0 6.342 6.328 6.335 6.335 0 0 0 6.342-6.328V9.818a8.205 8.205 0 0 0 4.816 1.542V7.908a4.846 4.846 0 0 1-.911-.222Z"/>
    <path fill="#25F4EE" d="M18.889 5.986a4.793 4.793 0 0 1-3.77-4.245V1.3h-3.445v13.672a2.896 2.896 0 0 1-2.89 2.89 2.896 2.896 0 0 1-2.89-2.89 2.896 2.896 0 0 1 2.89-2.89c.304 0 .595.046.868.13V8.704a6.336 6.336 0 0 0-.868-.06A6.335 6.335 0 0 0 2.3 14.972a6.335 6.335 0 0 0 6.342 6.328 6.335 6.335 0 0 0 6.342-6.328V9.118a8.205 8.205 0 0 0 4.816 1.542V7.208a4.846 4.846 0 0 1-.911-.222Z"/>
    <path fill="#FFFFFF" d="M19.239 6.336a4.793 4.793 0 0 1-3.77-4.245V1.65h-3.445v13.672a2.896 2.896 0 0 1-2.89 2.89 2.896 2.896 0 0 1-2.89-2.89 2.896 2.896 0 0 1 2.89-2.89c.304 0 .595.046.868.13V9.054a6.336 6.336 0 0 0-.868-.06A6.335 6.335 0 0 0 2.65 15.322a6.335 6.335 0 0 0 6.342 6.328 6.335 6.335 0 0 0 6.342-6.328V9.468a8.205 8.205 0 0 0 4.816 1.542V7.558a4.846 4.846 0 0 1-.911-.222Z"/>
  </svg>`;
}

// Alo App Core Script
const viewIds = ['home', 'login', 'register', 'dashboard'];
const dashboardTitles = {
  home: 'প্রথম পাতা',
  vip: 'হল',
  records: 'সদস্য',
  tasks: 'টাস্ক',
  profile: 'আমার',
  personal: 'ব্যক্তিগত তথ্য',
  'my-pass': 'আমার পাস',
  invite: 'বন্ধুদের আমন্ত্রণ করুন',
  'platform-tasks': 'মিশন',
  'mission-submit': 'মিশন জমা'
};

const viewOrder = { home: 0, login: 1, register: 2, dashboard: 3 };
let viewTransitionTimer = null;
let viewsReady = false;

function showView(viewName, style) {
  const nextView = viewIds.includes(viewName) ? viewName : 'home';
  const nextEl = document.getElementById(nextView + '-view');
  const allViews = Array.from(document.querySelectorAll('.page-view'));
  const currentEl = allViews.find(function(view) { return !view.hidden; });
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const applyHidden = function() {
    allViews.forEach(function(view) { view.hidden = view.id !== nextView + '-view'; });
  };

  window.clearTimeout(viewTransitionTimer);
  allViews.forEach(function(view) {
    view.classList.remove('view-leave', 'view-enter-forward', 'view-enter-back', 'view-enter-zoom');
  });
  document.documentElement.classList.remove('is-view-transitioning');

  if (!viewsReady || !currentEl || currentEl === nextEl || reduceMotion) {
    viewsReady = true;
    applyHidden();
    window.scrollTo({ top: 0, behavior: 'auto' });
    return;
  }

  const currentName = currentEl.id.replace('-view', '');
  const enterClass = style === 'zoom'
    ? 'view-enter-zoom'
    : ((viewOrder[nextView] || 0) >= (viewOrder[currentName] || 0) ? 'view-enter-forward' : 'view-enter-back');

  document.documentElement.classList.add('is-view-transitioning');
  currentEl.classList.add('view-leave');
  viewTransitionTimer = window.setTimeout(function() {
    currentEl.classList.remove('view-leave');
    applyHidden();
    window.scrollTo({ top: 0, behavior: 'auto' });
    nextEl.classList.add(enterClass);
    viewTransitionTimer = window.setTimeout(function() {
      nextEl.classList.remove(enterClass);
      document.documentElement.classList.remove('is-view-transitioning');
    }, style === 'zoom' ? 1500 : 560);
  }, 230);
}

function playLoginSuccess(name, onDone) {
  const overlay = document.createElement('div');
  overlay.className = 'login-success-overlay';
  overlay.setAttribute('role', 'status');
  overlay.setAttribute('aria-live', 'polite');
  overlay.innerHTML =
    '<div class="login-success-box">' +
      '<svg class="login-success-ring" viewBox="0 0 110 110" aria-hidden="true">' +
        '<circle cx="55" cy="55" r="48"></circle>' +
        '<path d="M34 57 L49 72 L77 40"></path>' +
      '</svg>' +
      '<h2>লগইন সফল!</h2>' +
      '<p>স্বর্ণের খনিতে স্বাগতম</p>' +
      '<div class="login-success-bar"><i></i></div>' +
    '</div>';
  document.body.appendChild(overlay);
  requestAnimationFrame(function() { overlay.classList.add('is-visible'); });

  window.setTimeout(function() {
    onDone();
    overlay.classList.add('is-leaving');
    window.setTimeout(function() { overlay.remove(); }, 460);
  }, 1900);
}

document.addEventListener('click', function(event) {
  const target = event.target.closest('.auth-button, button[type="submit"], .phone-register-submit');
  if (!target || target.disabled) return;
  if (getComputedStyle(target).position === 'static') target.style.position = 'relative';
  target.style.overflow = 'hidden';
  const rect = target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2;
  const dot = document.createElement('span');
  dot.className = 'btn-ripple-dot';
  dot.style.width = dot.style.height = size + 'px';
  dot.style.left = (event.clientX - rect.left - size / 2) + 'px';
  dot.style.top = (event.clientY - rect.top - size / 2) + 'px';
  target.appendChild(dot);
  window.setTimeout(function() { dot.remove(); }, 660);
});

function renderInvitePage() {
  const qrContainer = document.getElementById('invite-page-qr');
  const linkElement = document.getElementById('invite-page-link');
  const codeElement = document.getElementById('invite-page-code');
  if (!qrContainer || !linkElement || !codeElement) return;

  let user = null;
  try {
    user = JSON.parse(localStorage.getItem('aloSignedInUser') || 'null');
  } catch (error) {
    user = null;
  }

  const inviteCode = user && user.inviteCode ? user.inviteCode : '';
  const relativeLink = '/?invite=' + encodeURIComponent(inviteCode);
  let inviteLink = relativeLink;

  if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
    try {
      const inviteUrl = new URL(window.location.href);
      inviteUrl.searchParams.set('invite', inviteCode);
      inviteLink = inviteUrl.href;
    } catch (error) {
      inviteLink = relativeLink;
    }
  }

  codeElement.textContent = inviteCode || '—';
  linkElement.href = inviteLink;
  linkElement.textContent = inviteLink;
  qrContainer.replaceChildren();

  if (window.QRCode && inviteCode) {
    new QRCode(qrContainer, {
      text: inviteLink,
      width: 208,
      height: 208,
      colorDark: getComputedStyle(document.documentElement).getPropertyValue('--color-profile-bg').trim(),
      colorLight: getComputedStyle(document.documentElement).getPropertyValue('--color-primary-contrast').trim(),
      correctLevel: QRCode.CorrectLevel.H
    });
  } else {
    qrContainer.textContent = inviteCode ? 'QR কোড তৈরি করা যায়নি।' : 'আমন্ত্রণ কোড পেতে আগে লগইন করুন।';
  }
}

function openDashboardPanel(panelName) {
  const nextPanel = dashboardTitles[panelName] ? panelName : 'profile';
  document.querySelectorAll('.dashboard-panel').forEach(function(panel) {
    panel.hidden = panel.id !== nextPanel + '-panel';
  });
  const navItemMap = {
    home: 'home',
    vip: 'vip',
    'platform-tasks': 'vip',
    records: 'records',
    tasks: 'tasks',
    'mission-submit': 'tasks',
    profile: 'profile',
    personal: 'profile',
    'my-pass': 'profile',
    invite: 'profile'
  };
  const activeNavKey = navItemMap[nextPanel] || nextPanel;
  document.querySelectorAll('.dashboard-nav-item').forEach(function(button) {
    button.removeAttribute('aria-current');
    if (button.dataset.panel === activeNavKey) {
      button.setAttribute('aria-current', 'page');
    }
  });
  const titleEl = document.getElementById('dashboard-title');
  if (titleEl) titleEl.textContent = dashboardTitles[nextPanel];
  if (nextPanel === 'invite') {
    renderInvitePage();
  }
  if (nextPanel === 'profile') {
    updateProfileMetrics();
  }
  if (nextPanel === 'tasks') {
    renderMissionRecords(activeMissionFilter);
  }
  if (nextPanel === 'mission-submit') {
    renderMissionSubmission();
  }
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function updateUserDetails(user) {
  if (!user) return;
  const memberId = document.getElementById('profile-member-id');
  if (memberId) memberId.textContent = user.memberId || '1105';

  const inviteCode = document.getElementById('profile-invite-code');
  if (inviteCode) inviteCode.textContent = user.inviteCode || '728207';

  const accountNum = document.getElementById('profile-account-number');
  if (accountNum) accountNum.textContent = user.phone || user.accountNumber || '1735235999';

  const packageLevel = document.getElementById('profile-package-level');
  if (packageLevel) packageLevel.textContent = user.packageLevel || 'LV1';

  const superiorId = document.getElementById('profile-superior-id');
  if (superiorId) superiorId.textContent = user.superiorId || '11';

  const userName = document.getElementById('dashboard-user-name');
  if (userName) userName.textContent = user.name || 'সদস্য';
}

async function hashPassword(password) {
  if (window.crypto && window.crypto.subtle && window.TextEncoder) {
    const bytes = new TextEncoder().encode(password);
    const digest = await window.crypto.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(digest)).map(function(byte) {
      return byte.toString(16).padStart(2, '0');
    }).join('');
  }

  let hash = 2166136261;
  for (let index = 0; index < password.length; index += 1) {
    hash ^= password.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return 'demo-' + (hash >>> 0).toString(16).padStart(8, '0');
}

document.querySelectorAll('[data-view]').forEach(function(button) {
  button.addEventListener('click', function() {
    showView(button.dataset.view);
  });
});

document.querySelectorAll('[data-toggle-password]').forEach(function(button) {
  button.addEventListener('click', function() {
    const field = document.getElementById(button.dataset.togglePassword);
    if (!field) return;
    const showing = field.type === 'password';
    field.type = showing ? 'text' : 'password';
    button.setAttribute('aria-label', showing ? 'পাসওয়ার্ড লুকান' : 'পাসওয়ার্ড দেখান');
    button.toggleAttribute('data-password-visible', showing);
  });
});

document.querySelectorAll('[data-message]').forEach(function(button) {
  button.addEventListener('click', function() {
    const msg = document.getElementById('register-message');
    if (msg) msg.textContent = button.dataset.message;
  });
});

const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const message = document.getElementById('login-message');
    const phoneInput = document.getElementById('login-email').value.trim();
    const phoneDigits = phoneInput.replace(/\D/g, '');
    const loginPhone = phoneDigits.startsWith('880')
      ? '+' + phoneDigits
      : (phoneDigits.length === 10 ? '+880' + phoneDigits : '+' + phoneDigits);
    const password = document.getElementById('login-password').value;
    if (message) message.textContent = 'তথ্য যাচাই করা হচ্ছে…';

    try {
      const accounts = JSON.parse(localStorage.getItem('aloAccounts') || '[]');
      const account = accounts.find(function(item) {
        const savedPhone = String(item.phone || item.email || '').replace(/\D/g, '');
        return savedPhone === phoneDigits || savedPhone === loginPhone.replace(/\D/g, '');
      });
      const passwordHash = await hashPassword(password);
      if (!account || account.passwordHash !== passwordHash) {
        if (message) message.textContent = 'ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।';
        return;
      }

      if (!account.memberId) account.memberId = 'AL' + Date.now().toString().slice(-8);
      if (!account.inviteCode) account.inviteCode = 'AL' + Math.random().toString(36).slice(2, 7).toUpperCase();
      localStorage.setItem('aloAccounts', JSON.stringify(accounts));
      const signedInUser = {
        name: account.name,
        email: account.email,
        memberId: account.memberId,
        inviteCode: account.inviteCode,
        profileData: account.profileData || {}
      };
      localStorage.setItem('aloSignedInUser', JSON.stringify(signedInUser));
      if (message) message.textContent = '';
      updateUserDetails(signedInUser);
      playLoginSuccess(signedInUser.name, function() {
        openDashboardPanel('profile');
        showView('dashboard', 'zoom');
      });
    } catch (error) {
      if (message) message.textContent = 'লগইন করা যায়নি। আবার চেষ্টা করুন।';
    }
  });
}

function showRegistrationSuccess(phone) {
  const overlay = document.createElement('div');
  overlay.className = 'login-success-overlay is-visible';
  overlay.innerHTML = `
    <div class="login-success-box">
      <svg class="login-success-ring" viewBox="0 0 110 110" aria-hidden="true">
        <circle cx="55" cy="55" r="48"></circle>
        <path d="M34 57 L49 72 L77 40"></path>
      </svg>
      <h2>নিবন্ধন সফল!</h2>
      <p>আপনার অ্যাকাউন্ট তৈরি হয়েছে। এখন লগইন করুন।</p>
    </div>
  `;
  document.body.appendChild(overlay);

  window.setTimeout(function() {
    const loginEmail = document.getElementById('login-email');
    if (loginEmail) loginEmail.value = phone;
    showView('login');
    const loginMsg = document.getElementById('login-message');
    if (loginMsg) loginMsg.textContent = 'নিবন্ধন সফল। আপনার ফোন নম্বর ও পাসওয়ার্ড দিয়ে লগইন করুন।';
    overlay.remove();
  }, 1800);
}

let demoSmsCode = '';

const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const message = document.getElementById('register-message');
    const phone = document.getElementById('register-phone').value.trim();
    const fullPhone = '+880' + phone;
    const smsCode = document.getElementById('register-sms-code').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmation = document.getElementById('confirm-password');

    if (password !== confirmation.value) {
      confirmation.setCustomValidity('দুটি পাসওয়ার্ড মিলছে না।');
      confirmation.reportValidity();
      return;
    }
    confirmation.setCustomValidity('');

    if (!/^1[3-9]\d{8}$/.test(phone)) {
      if (message) message.textContent = 'সঠিক ১০ সংখ্যার বাংলাদেশি ফোন নম্বর লিখুন।';
      return;
    }
    if (!smsCode) {
      if (message) message.textContent = 'আগে যাচাইকরণ কোড নিন এবং লিখুন।';
      return;
    }
    if (!demoSmsCode || smsCode !== demoSmsCode) {
      if (message) message.textContent = 'ডেমো যাচাইকরণ কোডটি সঠিক নয়। আবার চেষ্টা করুন।';
      return;
    }

    try {
      const accounts = JSON.parse(localStorage.getItem('aloAccounts') || '[]');
      const existingAccount = accounts.find(function(account) {
        return String(account.phone || '').replace(/\D/g, '') === fullPhone.replace(/\D/g, '');
      });
      if (existingAccount) {
        if (message) message.textContent = 'এই নম্বরে আগে থেকেই অ্যাকাউন্ট আছে। লগইন পেজে যান।';
        const loginEmail = document.getElementById('login-email');
        if (loginEmail) loginEmail.value = fullPhone;
        showView('login');
        return;
      }

      const passwordHash = await hashPassword(password);
      const inviteCodeInput = document.getElementById('register-invite-code');
      const account = {
        name: 'সদস্য',
        phone: fullPhone,
        email: fullPhone,
        passwordHash: passwordHash,
        memberId: 'AL' + Date.now().toString().slice(-8),
        inviteCode: (inviteCodeInput ? inviteCodeInput.value.trim() : '') || 'AL' + Math.random().toString(36).slice(2, 7).toUpperCase(),
        profileData: {}
      };
      accounts.push(account);
      localStorage.setItem('aloAccounts', JSON.stringify(accounts));
      showRegistrationSuccess(fullPhone);
    } catch (error) {
      if (message) message.textContent = 'অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন।';
    }
  });
}

const sendSmsBtn = document.getElementById('send-sms-code');
if (sendSmsBtn) {
  sendSmsBtn.addEventListener('click', function() {
    const phoneInput = document.getElementById('register-phone');
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const message = document.getElementById('register-message');

    if (!/^1[3-9]\d{8}$/.test(phone)) {
      if (message) message.textContent = 'ডেমো কোড পেতে সঠিক ১০ সংখ্যার বাংলাদেশি ফোন নম্বর লিখুন।';
      if (phoneInput) phoneInput.focus();
      return;
    }

    demoSmsCode = String(Math.floor(100000 + Math.random() * 900000));
    const smsInput = document.getElementById('register-sms-code');
    if (smsInput) smsInput.value = demoSmsCode;
    if (message) message.textContent = 'ডেমো OTP: ' + demoSmsCode + ' — এটি আসল SMS নয়।';
  });
}

const packageTaskSettings = {
  LV0: { count: 5, reward: 20 },
  LV1: { count: 6, reward: 30 },
  LV2: { count: 12, reward: 40 },
  LV3: { count: 15, reward: 50 },
  LV4: { count: 25, reward: 60 },
  LV5: { count: 35, reward: 70 },
  LV6: { count: 25, reward: 80 }
};

const platformTaskDescriptions = {
  TikTok: [
    'TikTok ভিডিও লাইক করুন ও সুন্দর মন্তব্য করুন',
    'নতুন ট্রেন্ডিং ভিডিও সম্পূর্ণ দেখে লাইক দিন',
    'অফিশিয়াল ক্রিয়েটর অ্যাকাউন্ট ফলো করুন',
    'ক্রিয়েটরের প্রোফাইল ভিজিট করে ৩টি ভিডিওতে লাইক দিন',
    'ভিডিওটি বন্ধুদের সাথে শেয়ার করুন এবং বুকমার্ক করুন',
    'সাউন্ডট্র্যাক ব্যবহার করে ফেভারিটে যুক্ত করুন',
    'লাইভ স্ট্রিম ১৫ সেকেন্ড দেখুন ও লাইক দিন',
    'শিক্ষামূলক শর্ট ভিডিওতে লাইক ও কমেন্ট দিন',
    'ব্র্যান্ড চ্যানেলে ফলো দিন ও ভিডিও দেখুন',
    'ভাইরাল ক্লিপে লাভ রিয়্যাক্ট দিন',
    'হ্যাশট্যাগ চ্যালেঞ্জ ভিডিও দেখুন ও লাইক দিন',
    'টেক রিভিউ ভিডিওতে লাইক ও শেয়ার দিন',
    'রন্ধনশিল্প ও কুকিং ভিডিওতে লাইক দিন',
    'ট্রাভেল ভ্লগ ভিডিও দেখুন ও কমেন্ট করুন',
    'ফিটনেস ও স্বাস্থ্য টিপস ভিডিও সেভ করুন',
    'সঙ্গীত ভিডিও সম্পূর্ণ শুনে লাইক দিন',
    'ফ্যাশন ট্রেন্ড শর্টসে লাভ রিয়্যাক্ট দিন',
    'কমেডি ক্লিপ সম্পূর্ণ দেখে লাইক দিন',
    'মোটিভেশনাল ভিডিওতে লাইক ও শেয়ার দিন',
    'লাইফস্টাইল ভ্লগ অ্যাকাউন্ট ফলো করুন',
    'অ্যানিমেশন ক্লিপে লাভ রিয়্যাক্ট দিন',
    'স্পোর্টস হাইলাইটস ভিডিও দেখুন ও লাইক দিন',
    'গেমিং শর্টসে লাইক ও মন্তব্য দিন',
    'ডিআইওয়াই ও ক্রাফট ভিডিও সেভ করুন',
    'নতুন ক্রিয়েটরকে ফলো ও ভিডিওতে লাইক দিন',
    'ইনফরমেটিভ ফ্যাক্টস ভিডিও লাইক দিন',
    'ফটোগ্রাফি ট্রিকস ভিডিওতে লাইক দিন',
    'প্রোডাক্ট রিভিউ ও আনবক্সিং ভিডিও দেখুন',
    'আর্ট ও ড্রয়িং ভিডিওতে লাভ রিয়্যাক্ট দিন',
    'ডেইলি মোটিভেশন ভিডিওতে লাইক ও শেয়ার দিন'
  ],
  YouTube: [
    'YouTube চ্যানেলটি সাবস্ক্রাইব করুন ও বেল আইকন চাপুন',
    'ভিডিওটি সম্পূর্ণ দেখে লাইক দিন',
    'ভিডিওতে ইতিবাচক ও গঠনমূলক মন্তব্য করুন',
    'প্লেলিস্টের একটি ভিডিও লাইক ও সেভ করুন',
    'শর্টস ভিডিওতে লাইক দিয়ে চ্যানেল সাবস্ক্রাইব করুন',
    'টেক রিভিউ ভিডিও সম্পূর্ণ দেখুন ও লাইক দিন',
    'শিক্ষামূলক টিউটোরিয়াল ভিডিওতে লাইক দিন',
    'অফিসিয়াল মিউজিক ভিডিও দেখুন ও কমেন্ট করুন',
    'ট্রাভেল ডকুমেন্টারি ভিডিওতে লাইক দিন',
    'কুকিং রেসিপি ভিডিওটি পরে দেখার তালিকায় রাখুন',
    'ফিটনেস ওয়ার্কআউট ভিডিওতে লাইক দিন',
    'নিউজ ও কারেন্ট অ্যাফেয়ার্স ভিডিও দেখুন',
    'মোটিভেশনাল স্পিচ ভিডিওতে লাইক ও শেয়ার দিন',
    'পডকাস্টের একটি পর্বে লাইক ও কমেন্ট করুন',
    'গেমিং লাইভস্ট্রিম ভিডিও ৫ মিনিট দেখুন',
    'বিজ্ঞান ও প্রযুক্তির ভিডিওতে লাইক দিন',
    'নতুন সিনেমার ট্রেলার সম্পূর্ণ দেখুন',
    'বুক সামারি ভিডিওতে সুন্দর কমেন্ট করুন',
    'ক্যারিয়ার গাইডলাইন ভিডিও লাইক দিন',
    'ভাষা শিক্ষা টিউটোরিয়াল ভিডিও সেভ করুন',
    'ড্রয়িং ও স্কেচ টিউটোরিয়াল ভিডিও দেখুন',
    'অটোমোবাইল ও বাইক রিভিউ ভিডিওতে লাইক দিন',
    'ইতিহাস ও ঐতিহ্য বিষয়ক ভিডিও সম্পূর্ণ দেখুন',
    'লাইফ হ্যাকস ভিডিওতে লাইক ও শেয়ার দিন',
    'ইসলামিক আলোচনা ও মোনাজাত ভিডিও লাইক দিন',
    'ফিন্যান্স ও ইনভেস্টমেন্ট ভিডিও সম্পূর্ণ দেখুন',
    'স্মার্টফোন রিভিউ ভিডিওতে মন্তব্য করুন',
    'ফটোগ্রাফি মাস্টারক্লাস ভিডিও সেভ করুন',
    'নাটক ও কমেডি ভিডিওতে লাইক দিন',
    'আর্কিটেকচার ও হোম ডিজাইন ভিডিও দেখুন'
  ],
  FaceBook: [
    'FaceBook অফিসিয়াল পেজে লাইক ও ফলো করুন',
    'সাম্প্রতিক পোস্টে লাইক ও শেয়ার করুন',
    'অফিসিয়াল গ্রুপে যুক্ত হন ও পোস্ট দেখুন',
    'ফেসবুক রিলস ভিডিওতে লাভ রিয়্যাক্ট দিন',
    'ব্যবসায়িক পেজে ইতিবাচক রিভিউ দিন',
    'শিক্ষামূলক পোস্টে লাইক ও মন্তব্য দিন',
    'লাইভ সেশনে যুক্ত হয়ে লাভ রিয়্যাক্ট দিন',
    'পণ্য প্রচারের পোস্টে লাইক ও শেয়ার দিন',
    'মোটিভেশনাল পোস্টে লাইক দিন',
    'সাম্প্রতিক ফটো অ্যালবামে লাইক ও কমেন্ট করুন',
    'কমিউনিটি পেজে ফ্রেন্ডদের ইনভাইট করুন',
    'টেকনোলজি পোস্টে লাইক ও কমেন্ট দিন',
    'স্বাস্থ্য টিপস পোস্টটি শেয়ার করুন',
    'খবরের লিংকে ক্লিক করে পোস্ট লাইক দিন',
    'রেসিপি পোস্টে লাভ রিয়্যাক্ট দিন',
    'ট্রাভেল পেজের ফটোতে লাইক দিন',
    'স্পোর্টস আপডেট পোস্টে লাইক দিন',
    'বিজ্ঞান বিষয়ক আর্টিকেলে লাইক দিন',
    'রিলস ভিডিও সম্পূর্ণ দেখে শেয়ার দিন',
    'গ্রুপ আলোচনায় ইতিবাচক কমেন্ট দিন',
    'লাইফস্টাইল পেজে ফলো করুন',
    'ক্যারিয়ার টিপস পোস্টে লাইক দিন',
    'ডিজিটাল আর্ট পোস্টে লাভ রিয়্যাক্ট দিন',
    'বই রিভিউ পোস্টে কমেন্ট করুন',
    'ভিডিও কন্টেন্টে ৩ মিনিট ওয়াচটাইম দিন',
    'পডকাস্ট লাইভ স্ট্রিমে লাইক দিন',
    'অফার ও ডিসকাউন্ট পোস্টে লাইক দিন',
    'মোবাইল টিপস পোস্টে লাইক দিন',
    'কমেডি স্কিটে হাসির রিয়্যাক্ট দিন',
    'নতুন উদ্যোগের পেজে শুভেচ্ছা কমেন্ট করুন'
  ]
};

let acceptedPlatformTasks = 0;
let activePackageLevel = 'LV0';
let activePlatform = 'TikTok';
let activeMissionFilter = 'active';
let activeSubmissionId = '';
let activeSubmissionImage = '';

function readAcceptedMissions() {
  try {
    const missions = JSON.parse(localStorage.getItem('aloAcceptedMissions') || '[]');
    return Array.isArray(missions) ? missions : [];
  } catch (error) {
    return [];
  }
}

function updateProfileMetrics() {
  const missions = readAcceptedMissions();
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfYesterday = new Date(startOfToday);
  startOfYesterday.setDate(startOfYesterday.getDate() - 1);
  const startOfWeek = new Date(startOfToday);
  const weekday = (startOfWeek.getDay() + 6) % 7;
  startOfWeek.setDate(startOfWeek.getDate() - weekday);
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const completedMissions = missions.filter(function(mission) {
    return mission.status === 'complete';
  });

  const getCompletedAt = function(mission) {
    const date = new Date(mission.completedAt || mission.acceptedAt || '');
    return Number.isNaN(date.getTime()) ? null : date;
  };

  const sumRewards = function(predicate) {
    return completedMissions.reduce(function(total, mission) {
      const completedAt = getCompletedAt(mission);
      return completedAt && predicate(completedAt)
        ? total + (Number(mission.reward) || 0)
        : total;
    }, 0);
  };

  const setText = function(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };

  const dynamicToday = sumRewards(function(date) {
    return date >= startOfToday && date < new Date(startOfToday.getTime() + 86400000);
  });
  const dynamicYesterday = sumRewards(function(date) {
    return date >= startOfYesterday && date < startOfToday;
  });
  const dynamicWeekly = sumRewards(function(date) {
    return date >= startOfWeek && date <= now;
  });
  const dynamicMonthly = sumRewards(function(date) {
    return date >= startOfMonth && date <= now;
  });

  // Calculation initialized to 0.00 as requested: "ক্যালকুলেশন ০০ করো"
  let currentUser = null;
  try {
    currentUser = JSON.parse(localStorage.getItem('aloSignedInUser') || 'null');
  } catch (e) {}

  const currentBal = currentUser && typeof currentUser.balance === 'number'
    ? currentUser.balance
    : 0;

  const todayVal = dynamicToday.toFixed(2);
  const yesterdayVal = dynamicYesterday.toFixed(2);
  const weeklyVal = dynamicWeekly.toFixed(2);
  const monthlyVal = dynamicMonthly.toFixed(2);
  const lastMonthVal = '0.00';
  const totalRevenueVal = (Number(currentBal) + dynamicToday).toFixed(2);
  const personalBalanceVal = (Number(currentBal) + dynamicToday).toFixed(2);
  const balanceText = (Number(currentBal) + dynamicToday).toFixed(1);

  setText('today-earnings-value', todayVal);
  setText('yesterday-earnings-value', yesterdayVal);
  setText('weekly-earnings-value', weeklyVal);
  setText('monthly-earnings-value', monthlyVal);
  setText('last-month-earnings-value', lastMonthVal);
  setText('total-revenue-value', totalRevenueVal);
  setText('personal-earnings-value', personalBalanceVal);

  setText('profile-balance-value', balanceText);
  setText('profile-usdt-value', '0.000');
  setText('total-balance-value', balanceText);
  setText('my-pass-balance-value', balanceText);
  setText('my-pass-available-value', balanceText);

  // Completed missions count & remaining
  const completedTodayCount = completedMissions.filter(function(m) {
    const d = getCompletedAt(m);
    return d && d >= startOfToday;
  }).length;

  const remainingCount = missions.filter(function(m) {
    return m.status === 'active' || m.status === 'review';
  }).length;

  setText('completed-tasks-value', String(completedTodayCount));
  setText('remaining-tasks-value', String(remainingCount));
}

function saveAcceptedMission(serverMission) {
  const missions = readAcceptedMissions();
  missions.unshift({
    id: serverMission.id,
    platform: serverMission.platform,
    title: serverMission.title,
    description: serverMission.description,
    level: serverMission.level,
    reward: serverMission.reward,
    status: serverMission.status,
    acceptedAt: serverMission.acceptedAt,
    evidenceName: '',
    taskLink: serverMission.platform === 'TikTok' ? 'https://vt.tiktok.com/ZSb666bLY/' : ''
  });
  localStorage.setItem('aloAcceptedMissions', JSON.stringify(missions));
  renderMissionRecords(activeMissionFilter);
}

function refreshDailyMissionLimit(level) {
  const message = document.getElementById('platform-task-message');
  const platformTaskList = document.getElementById('platform-task-list');
  const title = document.getElementById('platform-task-level-title');
  const note = document.getElementById('platform-task-level-note');
  
  const today = new Date().toDateString();
  const missions = readAcceptedMissions();
  const acceptedToday = missions.filter(function(m) {
    return m.level === level && new Date(m.acceptedAt).toDateString() === today;
  });
  
  const quotaLimit = packageTaskSettings[level]?.count || 5;
  const currentCount = acceptedToday.length;
  const reached = currentCount >= quotaLimit;

  if (title) {
    title.innerHTML = `${activePlatform} · <strong style="color: var(--color-primary-contrast);">${level}</strong> (দৈনিক কোটা: ${quotaLimit}টি)`;
  }
  if (note) {
    const remaining = Math.max(0, quotaLimit - currentCount);
    note.innerHTML = `
      <div class="flex items-center justify-between text-xs mt-1" style="color: var(--color-profile-text);">
        <span>দৈনিক কাজের কোটা: <strong>${quotaLimit}টি</strong></span>
        <span class="font-bold" style="color: ${reached ? 'var(--color-warning)' : 'var(--color-profile-cyan)'};">
          গৃহীত: ${currentCount}/${quotaLimit} ${reached ? '(সীমা পূর্ণ)' : `(বাকি ${remaining}টি)`}
        </span>
      </div>
      <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.12); border-radius: 9999px; margin-top: 6px; overflow: hidden;">
        <div style="width: ${Math.min(100, (currentCount / quotaLimit) * 100)}%; height: 100%; background: ${reached ? 'var(--color-warning)' : 'var(--color-profile-cyan)'}; transition: width 300ms ease;"></div>
      </div>
      <p style="font-size: 11px; color: var(--color-muted); margin-top: 6px;">
        প্রতি কাজে ${packageTaskSettings[level]?.reward || 20}.০০ BDT · প্যাকেজে মোট ২৫টি উপলব্ধ কাজের তালিকা
      </p>
    `;
  }

  if (platformTaskList) {
    const rows = platformTaskList.querySelectorAll('.platform-task-row');
    rows.forEach(function(row) {
      const btn = row.querySelector('[data-platform-accept]');
      if (!btn) return;
      const taskIdx = parseInt(row.dataset.taskIndex || '-1', 10);
      const isTaskAccepted = missions.some(function(m) {
        return m.platform === activePlatform && m.level === level && m.taskIndex === taskIdx && new Date(m.acceptedAt).toDateString() === today;
      });

      if (isTaskAccepted) {
        btn.textContent = 'গৃহীত';
        btn.disabled = true;
        btn.dataset.accepted = 'true';
        btn.removeAttribute('data-limit-reached');
      } else if (reached) {
        btn.textContent = 'সীমা পূর্ণ';
        btn.disabled = true;
        btn.dataset.limitReached = 'true';
        btn.removeAttribute('data-accepted');
      } else {
        btn.textContent = 'গ্রহণ';
        btn.disabled = false;
        btn.removeAttribute('data-limit-reached');
        btn.removeAttribute('data-accepted');
      }
    });
  }

  if (message) {
    if (reached) {
      message.innerHTML = `<span style="color: var(--color-warning); font-weight: bold;">⚠️ আজকের ${level} প্যাকেজের ${quotaLimit}টি কাজের সীমা পূর্ণ হয়েছে!</span> <br><small style="color: var(--color-muted);">টাস্ক মেনুতে গিয়ে কাজ জমা দিন। আগামীকাল আবার নতুন কোটা চালু হবে।</small>`;
    } else {
      message.innerHTML = `আজকের বাকি কাজ: <strong style="color: var(--color-profile-cyan);">${quotaLimit - currentCount}টি</strong> (মোট কোটা ${quotaLimit}টি)`;
    }
  }
}

function renderMissionRecords(filter) {
  const list = document.getElementById('mission-record-list');
  if (!list) return;

  updateProfileMetrics();
  activeMissionFilter = filter || activeMissionFilter;
  const missions = readAcceptedMissions();
  const counts = {
    active: missions.filter(function(m) { return m.status === 'active'; }).length,
    review: missions.filter(function(m) { return m.status === 'review'; }).length,
    complete: missions.filter(function(m) { return m.status === 'complete'; }).length,
    failed: missions.filter(function(m) { return m.status === 'failed'; }).length
  };
  const activeCount = document.getElementById('mission-active-count');
  if (activeCount) activeCount.textContent = '(' + counts.active + ')';
  const reviewCount = document.getElementById('mission-review-count');
  if (reviewCount) reviewCount.textContent = '(' + counts.review + ')';
  const completeCount = document.getElementById('mission-complete-count');
  if (completeCount) completeCount.textContent = '(' + counts.complete + ')';
  const failedCount = document.getElementById('mission-failed-count');
  if (failedCount) failedCount.textContent = '(' + counts.failed + ')';

  document.querySelectorAll('.mission-record-tab').forEach(function(tab) {
    tab.setAttribute('aria-selected', String(tab.dataset.missionFilter === activeMissionFilter));
  });

  const visibleMissions = missions.filter(function(mission) {
    return mission.status === activeMissionFilter;
  });

  list.replaceChildren();

  if (visibleMissions.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'dashboard-card px-5 py-12 text-center';
    let emptyMsg = 'এই তালিকায় এখনো কোনো কাজ নেই।';
    let subMsg = 'মিশন হল থেকে কাজ গ্রহণ করলে এখানে দেখা যাবে।';
    if (activeMissionFilter === 'review') {
      emptyMsg = 'বর্তমানে কোনো কাজ পর্যালোচনাধীন নেই।';
      subMsg = 'চলমান কাজ জমা দিলে ৫-১০ মিনিট পর্যালোচনায় থাকবে।';
    } else if (activeMissionFilter === 'complete') {
      emptyMsg = 'এখনো কোনো কাজ সম্পূর্ণ হয়নি।';
      subMsg = 'পর্যালোচনা শেষ হলে কাজগুলো এখানে সম্পন্ন হিসেবে দেখা যাবে।';
    }
    empty.innerHTML = `<span class="text-3xl" aria-hidden="true">▤</span><p class="mt-3 text-sm font-semibold">${emptyMsg}</p><p class="mt-2 text-xs" style="color: var(--color-muted);">${subMsg}</p>`;
    list.appendChild(empty);
    return;
  }

  const now = Date.now();

  visibleMissions.forEach(function(mission) {
    const card = document.createElement('article');
    card.className = 'mission-record-card rounded-[var(--radius)] p-4 space-y-3';
    card.style.background = 'var(--color-profile-card)';
    card.style.border = '1px solid var(--color-profile-border)';

    const acceptedDate = new Date(mission.acceptedAt || Date.now());
    const dateText = Number.isNaN(acceptedDate.getTime())
      ? '—'
      : acceptedDate.getFullYear() + '-' + String(acceptedDate.getMonth() + 1).padStart(2, '0') + '-' + String(acceptedDate.getDate()).padStart(2, '0') + ' ' + String(acceptedDate.getHours()).padStart(2, '0') + ':' + String(acceptedDate.getMinutes()).padStart(2, '0');

    let actionsHtml = '';

    if (mission.status === 'active') {
      actionsHtml = `
        <div class="mission-record-actions flex items-center justify-between gap-2 pt-2 border-t" style="border-color: var(--color-profile-border);">
          <span class="text-xs px-2.5 py-1 rounded" style="background: rgba(37, 244, 238, 0.1); color: var(--color-profile-cyan);">চলমান</span>
          <div class="flex gap-2">
            <button type="button" class="mission-cancel-button px-3 py-1.5 rounded text-xs font-semibold" style="border: 1px solid var(--color-profile-border); color: var(--color-muted);" data-cancel-mission>বাতিল করুন</button>
            <button type="button" class="mission-submit-button px-4 py-1.5 rounded text-xs font-bold" style="background: var(--color-profile-cyan); color: #000;" data-open-submission>জমা দিন →</button>
          </div>
        </div>
      `;
    } else if (mission.status === 'review') {
      const endsAt = mission.reviewEndsAt || (new Date(mission.submittedAt || Date.now()).getTime() + 5 * 60 * 1000);
      const remainingSec = Math.max(0, Math.ceil((endsAt - now) / 1000));
      const mins = Math.floor(remainingSec / 60);
      const secs = remainingSec % 60;
      const timeStr = String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');

      actionsHtml = `
        <div class="mission-card-review-bar mt-2 pt-2.5 border-t flex flex-wrap items-center justify-between gap-2" style="border-color: var(--color-profile-border);">
          <div class="flex items-center gap-2 text-xs font-semibold" style="color: #fbbf24;">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span>পর্যালোচনাধীন: বাকি <span class="review-timer-text font-mono font-bold" data-review-ends="${endsAt}">${timeStr}</span> মিনিট</span>
          </div>
          <button type="button" class="fast-approve-btn text-[11px] font-bold px-2.5 py-1 rounded transition cursor-pointer hover:opacity-90 active:scale-95" data-fast-approve="${mission.id}" style="background: rgba(37, 244, 238, 0.15); color: var(--color-profile-cyan); border: 1px solid rgba(37, 244, 238, 0.35);" title="পরীক্ষার জন্য এখনই সম্পন্ন করুন">
            অনুমোদন সম্পন্ন করুন ⚡
          </button>
        </div>
      `;
    } else if (mission.status === 'complete') {
      const compDate = new Date(mission.completedAt || Date.now());
      const compDateText = compDate.getFullYear() + '-' + String(compDate.getMonth() + 1).padStart(2, '0') + '-' + String(compDate.getDate()).padStart(2, '0') + ' ' + String(compDate.getHours()).padStart(2, '0') + ':' + String(compDate.getMinutes()).padStart(2, '0');

      actionsHtml = `
        <div class="mission-card-complete-bar mt-2 pt-2.5 border-t flex items-center justify-between text-xs" style="border-color: var(--color-profile-border);">
          <span class="font-bold flex items-center gap-1.5" style="color: #34d399;">
            <span>✓</span> পর্যালোচনা সফল — পুরস্কার ব্যালেন্সে জমা হয়েছে
          </span>
          <span class="font-bold" style="color: var(--color-profile-cyan);">+${mission.reward}.০০ BDT</span>
        </div>
        <p class="text-[11px]" style="color: var(--color-muted);">সম্পন্নের সময়: ${compDateText}</p>
      `;
    }

    card.innerHTML = `
      <div class="mission-card-top flex items-center justify-between gap-3">
        <div class="flex min-w-0 items-center gap-2.5">
          <span class="mission-record-icon flex shrink-0 items-center justify-center">${getPlatformSvg(mission.platform, "h-6 w-6")}</span>
          <div>
            <h3 class="mission-platform-name truncate font-bold text-sm">${mission.platform}</h3>
            <span class="text-[11px] px-1.5 py-0.5 rounded font-semibold" style="background: rgba(255,255,255,0.08); color: var(--color-muted);">${mission.level || 'LV0'}</span>
          </div>
        </div>
        <div class="text-right">
          <p class="text-[11px]" style="color: var(--color-muted);">পুরস্কার</p>
          <p class="mission-reward font-bold text-base" style="color: var(--color-profile-cyan);">${mission.reward}.০০ BDT</p>
        </div>
      </div>
      <div class="mission-card-details text-xs leading-5" style="color: var(--color-profile-text);">
        <p>কাজ: <span class="font-medium">${mission.description}</span></p>
        <p>গ্রহণের সময়: <span style="color: var(--color-muted);">${dateText}</span></p>
        ${mission.screenshot ? `
        <div class="mt-1.5 flex items-center justify-between gap-2 pt-1 border-t" style="border-color: rgba(255,255,255,0.06);">
          <span class="text-[11px] text-slate-400">জমা দেওয়া প্রমাণ:</span>
          <button type="button" class="view-task-screenshot-btn flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e2a66] border border-[#1b3e85] text-xs font-bold text-[#38bdf8] hover:bg-[#133785] transition cursor-pointer active:scale-95" data-task-screenshot="${mission.id}">
            <span>🖼️</span> <span>প্রিভিউ দেখুন 🔍</span>
          </button>
        </div>` : ''}
      </div>
      ${actionsHtml}
    `;
    card.dataset.missionId = mission.id;
    list.appendChild(card);
  });
}

function renderPackageTasks(level) {
  const platformTaskList = document.getElementById('platform-task-list');
  if (!platformTaskList) return;

  activePackageLevel = packageTaskSettings[level] ? level : 'LV0';
  const settings = packageTaskSettings[activePackageLevel];
  const descriptions = platformTaskDescriptions[activePlatform] || platformTaskDescriptions.TikTok;

  const today = new Date().toDateString();
  const missions = readAcceptedMissions();
  const acceptedToday = missions.filter(function(m) {
    return m.level === activePackageLevel && new Date(m.acceptedAt).toDateString() === today;
  });
  const quotaLimit = settings.count;
  const isLimitReached = acceptedToday.length >= quotaLimit;

  const TOTAL_TASKS_TO_DISPLAY = 25; // 25-30 tasks per package according to function
  const rows = [];

  for (let i = 0; i < TOTAL_TASKS_TO_DISPLAY; i++) {
    const isThisAccepted = missions.some(function(m) {
      return m.platform === activePlatform && m.level === activePackageLevel && m.taskIndex === i && new Date(m.acceptedAt).toDateString() === today;
    });

    let btnText = 'গ্রহণ';
    let btnDisabled = false;
    let extraAttr = '';

    if (isThisAccepted) {
      btnText = 'গৃহীত';
      btnDisabled = true;
      extraAttr = 'data-accepted="true"';
    } else if (isLimitReached) {
      btnText = 'সীমা পূর্ণ';
      btnDisabled = true;
      extraAttr = 'data-limit-reached="true"';
    }

    const row = document.createElement('article');
    row.className = 'platform-task-row flex items-start gap-3 py-5';
    row.dataset.taskIndex = String(i);
    row.innerHTML = `
      <span class="platform-task-icon flex shrink-0 items-center justify-center pt-1" aria-hidden="true">
        ${getPlatformSvg(activePlatform, 'h-7 w-7')}
      </span>
      <div class="min-w-0 flex-1">
        <h3 class="font-bold text-sm">${activePlatform} · কাজ ${i + 1}</h3>
        <p class="mt-1 text-xs leading-5" style="color: var(--color-muted);">কাজের ধরন: ${descriptions[i % descriptions.length]}</p>
        <div class="mt-2 flex items-center gap-3 text-xs">
          <p>স্তর: <span class="platform-task-level">${activePackageLevel}</span></p>
          <p style="color: var(--color-muted);">অগ্রগতি: <span class="font-semibold" style="color: var(--color-profile-text);">১০০০০০ / ৯${1200 + (i * 37) % 800}</span></p>
        </div>
      </div>
      <div class="flex shrink-0 flex-col items-end gap-2.5">
        <div class="text-right">
          <p class="text-[10px]" style="color: var(--color-muted);">দৈনিক পুরস্কার</p>
          <p class="font-bold text-sm" style="color: var(--color-profile-blue-text);">${settings.reward}.০০ BDT</p>
        </div>
        <button type="button" class="platform-task-accept" data-platform-accept ${btnDisabled ? 'disabled' : ''} ${extraAttr}>${btnText}</button>
      </div>
    `;
    rows.push(row);
  }

  platformTaskList.replaceChildren(...rows);
  refreshDailyMissionLimit(activePackageLevel);
}

function compressMissionScreenshot(file) {
  return new Promise(function(resolve, reject) {
    const reader = new FileReader();
    reader.onerror = function() { reject(new Error('স্ক্রিনশটটি পড়া যায়নি।')); };
    reader.onload = function() {
      const image = new Image();
      image.onerror = function() { reject(new Error('স্ক্রিনশটটি খোলা যায়নি।')); };
      image.onload = function() {
        const maxSide = 900;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.72));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function renderMissionSubmission() {
  const missions = readAcceptedMissions();
  const mission = missions.find(function(item) { return item.id === activeSubmissionId; });
  if (!mission) {
    openDashboardPanel('tasks');
    return;
  }

  const platformEl = document.getElementById('mission-submit-platform');
  if (platformEl) platformEl.textContent = mission.platform || 'YouTube';

  const platformIconEl = document.getElementById('mission-submit-platform-icon');
  if (platformIconEl) {
    platformIconEl.innerHTML = getPlatformSvg(mission.platform, 'h-5 w-5');
  }

  const rewardEl = document.getElementById('mission-submit-reward');
  if (rewardEl) {
    const rew = Number(mission.reward || 30).toFixed(2);
    rewardEl.textContent = rew + 'BDT';
  }

  const descEl = document.getElementById('mission-submit-description');
  if (descEl) descEl.textContent = mission.description || 'পছন্দ লক্ষ্য করা';

  const defaultUrl = mission.taskLink || getRealisticTaskUrl(mission.platform, mission.taskIndex || 0);
  const linkEl = document.getElementById('mission-submit-link');
  if (linkEl) linkEl.value = defaultUrl;

  const linkDisplay = document.getElementById('mission-submit-link-display');
  if (linkDisplay) {
    linkDisplay.textContent = defaultUrl.length > 26 ? defaultUrl.slice(0, 24) + '...' : defaultUrl;
    linkDisplay.title = defaultUrl;
  }

  const createdEl = document.getElementById('mission-submit-created');
  if (createdEl) {
    const accDate = new Date(mission.acceptedAt || Date.now());
    if (Number.isNaN(accDate.getTime())) {
      createdEl.textContent = '2022-05-22 11:31:58';
    } else {
      const yr = accDate.getFullYear();
      const mo = String(accDate.getMonth() + 1).padStart(2, '0');
      const da = String(accDate.getDate()).padStart(2, '0');
      const hr = String(accDate.getHours()).padStart(2, '0');
      const mi = String(accDate.getMinutes()).padStart(2, '0');
      const se = String(accDate.getSeconds()).padStart(2, '0');
      createdEl.textContent = `${yr}-${mo}-${da} ${hr}:${mi}:${se}`;
    }
  }

  activeSubmissionImage = mission.screenshot || '';
  const previewEl = document.getElementById('mission-submit-preview');
  const removeImgBtn = document.getElementById('mission-submit-remove-img');
  const viewPreviewBtn = document.getElementById('btn-view-preview-modal');
  if (previewEl) {
    if (activeSubmissionImage) {
      previewEl.innerHTML = `<img src="${activeSubmissionImage}" alt="স্ক্রিনশট" class="h-full w-full object-cover rounded cursor-pointer" title="পূর্ণ স্ক্রিনশট প্রিভিউ দেখতে ক্লিক করুন">`;
      if (removeImgBtn) removeImgBtn.classList.remove('hidden');
      if (viewPreviewBtn) viewPreviewBtn.classList.remove('hidden');
    } else {
      previewEl.innerHTML = `<svg viewBox="0 0 24 24" class="h-8 w-8 text-white transition group-hover:scale-110" fill="currentColor"><path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>`;
      if (removeImgBtn) removeImgBtn.classList.add('hidden');
      if (viewPreviewBtn) viewPreviewBtn.classList.add('hidden');
    }
  }
  const fileStatus = document.getElementById('mission-submit-file-status');
  if (fileStatus) fileStatus.textContent = '';

  const commentEl = document.getElementById('mission-submit-comment');
  if (commentEl) commentEl.value = mission.userComment || '';
  const commentCount = document.getElementById('mission-submit-comment-count');
  if (commentCount) commentCount.textContent = commentEl ? commentEl.value.length : 0;

  const linkMsg = document.getElementById('mission-submit-link-message');
  if (linkMsg) linkMsg.innerHTML = '';
  const submitMsg = document.getElementById('mission-submit-message');
  if (submitMsg) submitMsg.innerHTML = '';

  updateMissionSubmitButton();
}

function updateMissionSubmitButton() {
  const button = document.getElementById('mission-submit-confirm');
  if (!button) return;
  const linkEl = document.getElementById('mission-submit-link');
  const link = linkEl ? linkEl.value.trim() : '';
  button.disabled = !link;
}

// Open task link handler with iframe fallbacks
function handleOpenTaskLink() {
  const linkEl = document.getElementById('mission-submit-link');
  let url = linkEl ? linkEl.value.trim() : '';
  if (!url) {
    url = 'https://vt.tiktok.com/ZSb666bLY/';
  }
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  const msg = document.getElementById('mission-submit-link-message');

  try {
    window.open(url, '_blank', 'noopener,noreferrer');
  } catch (e) {}

  try {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (e) {}

  if (msg) {
    msg.innerHTML = `✓ লিংক নতুন ট্যাবে খোলা হচ্ছে। ব্রাউজারে পপআপ ব্লক থাকলে <a href="${url}" target="_blank" rel="noopener noreferrer" style="color: var(--color-profile-cyan); text-decoration: underline; font-weight: bold;">সরাসরি এখানে ক্লিক করুন ↗</a>`;
  }
}

// Copy task link handler with dual clipboard & fallback
function handleCopyTaskLink() {
  const linkEl = document.getElementById('mission-submit-link');
  const copyBtn = document.getElementById('mission-submit-copy');
  const msg = document.getElementById('mission-submit-link-message');
  const url = linkEl ? linkEl.value.trim() : '';

  if (!url) {
    if (msg) msg.textContent = 'কপি করার জন্য কোনো লিংক পাওয়া যায়নি!';
    return;
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    ta.style.top = '-9999px';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, 99999);
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }

  function onCopied() {
    if (copyBtn) {
      const oldTxt = copyBtn.textContent;
      copyBtn.textContent = '✓ কপি সম্পন্ন!';
      copyBtn.style.background = 'var(--color-success)';
      setTimeout(function() {
        copyBtn.textContent = oldTxt;
        copyBtn.style.background = '';
      }, 2500);
    }
    if (msg) {
      msg.innerHTML = '<span style="color: #34d399; font-weight: bold;">✓ লিংক সফলভাবে অনুলিপি (কপি) করা হয়েছে!</span>';
    }
  }

  function onFail() {
    if (linkEl) {
      linkEl.focus();
      linkEl.select();
    }
    if (msg) {
      msg.innerHTML = '<span style="color: var(--color-warning);">লিংক সিলেক্ট করা হয়েছে, ম্যানুয়ালি কপি (Copy) করুন।</span>';
    }
  }

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(onCopied).catch(function() {
      if (fallbackCopy(url)) onCopied();
      else onFail();
    });
  } else {
    if (fallbackCopy(url)) onCopied();
    else onFail();
  }
}

// Check and process pending 5-10 minute reviews automatically
function checkPendingReviews() {
  const missions = readAcceptedMissions();
  let changed = false;
  let totalReward = 0;
  const now = Date.now();

  missions.forEach(function(m) {
    if (m.status === 'review') {
      if (!m.reviewEndsAt) {
        const subTime = m.submittedAt ? new Date(m.submittedAt).getTime() : now;
        m.reviewEndsAt = subTime + 5 * 60 * 1000;
      }
      if (now >= m.reviewEndsAt) {
        m.status = 'complete';
        m.completedAt = new Date().toISOString();
        if (!m.rewardCredited) {
          m.rewardCredited = true;
          totalReward += (Number(m.reward) || 30);
        }
        changed = true;
      }
    }
  });

  if (changed) {
    localStorage.setItem('aloAcceptedMissions', JSON.stringify(missions));
    if (totalReward > 0) {
      let user = null;
      try {
        user = JSON.parse(localStorage.getItem('aloSignedInUser') || 'null');
      } catch(e) {}
      if (user) {
        user.balance = (Number(user.balance) || 0) + totalReward;
        user.todayIncome = (Number(user.todayIncome) || 0) + totalReward;
        user.totalIncome = (Number(user.totalIncome) || 0) + totalReward;
        user.completedMissions = (Number(user.completedMissions) || 0) + 1;
        localStorage.setItem('aloSignedInUser', JSON.stringify(user));
        updateUserDetails(user);
        updateProfileMetrics();
      }
    }
    renderMissionRecords(activeMissionFilter);
  }
}

// Live timer tick every second
setInterval(function() {
  checkPendingReviews();
  document.querySelectorAll('[data-review-ends]').forEach(function(el) {
    const ends = parseInt(el.dataset.reviewEnds || '0', 10);
    const rem = Math.max(0, Math.ceil((ends - Date.now()) / 1000));
    const m = Math.floor(rem / 60);
    const s = rem % 60;
    el.textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  });
}, 1000);

// Global click event listeners
document.addEventListener('click', function(event) {
  // Navigation / Dashboard panel clicks
  const panelBtn = event.target.closest('[data-panel]');
  if (panelBtn) {
    openDashboardPanel(panelBtn.dataset.panel);
    return;
  }

  // Hall package level room click
  const levelRoom = event.target.closest('[data-open-level-tasks]');
  if (levelRoom) {
    const level = levelRoom.dataset.level || 'LV0';
    renderPackageTasks(level);
    openDashboardPanel('platform-tasks');
    return;
  }

  // Hall platform tabs
  const platformTab = event.target.closest('.hall-platform');
  if (platformTab) {
    document.querySelectorAll('.hall-platform').forEach(function(p) {
      p.setAttribute('aria-pressed', 'false');
      p.style.borderColor = 'transparent';
    });
    platformTab.setAttribute('aria-pressed', 'true');
    platformTab.style.borderColor = 'var(--color-profile-blue-text)';
    activePlatform = platformTab.textContent.trim();
    renderPackageTasks(activePackageLevel);
    openDashboardPanel('platform-tasks');
    return;
  }

  // Accept mission button
  const acceptBtn = event.target.closest('[data-platform-accept]');
  if (acceptBtn && !acceptBtn.disabled) {
    const row = acceptBtn.closest('.platform-task-row');
    const taskIndex = row ? parseInt(row.dataset.taskIndex || '0', 10) : 0;
    const quota = packageTaskSettings[activePackageLevel]?.count || 5;
    const today = new Date().toDateString();
    const acceptedToday = readAcceptedMissions().filter(function(m) {
      return m.level === activePackageLevel && new Date(m.acceptedAt).toDateString() === today;
    });

    if (acceptedToday.length >= quota) {
      const msg = document.getElementById('platform-task-message');
      if (msg) msg.innerHTML = `<span style="color: var(--color-warning);">আজকের ${activePackageLevel} স্তরের ${quota}টি কাজের সীমা পূর্ণ হয়েছে!</span>`;
      refreshDailyMissionLimit(activePackageLevel);
      return;
    }

    const title = row ? row.querySelector('h3').textContent : (activePlatform + ' · কাজ');
    const desc = row ? row.querySelector('p').textContent.replace('কাজের ধরন: ', '') : '';
    const reward = packageTaskSettings[activePackageLevel].reward;
    const taskLink = getRealisticTaskUrl(activePlatform, taskIndex);

    saveAcceptedMission({
      id: 'demo-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      taskIndex: taskIndex,
      platform: activePlatform,
      title: title,
      description: desc,
      level: activePackageLevel,
      reward: reward,
      status: 'active',
      taskLink: taskLink,
      acceptedAt: new Date().toISOString()
    });

    acceptBtn.textContent = 'গৃহীত';
    acceptBtn.disabled = true;
    acceptBtn.dataset.accepted = 'true';
    acceptBtn.removeAttribute('data-limit-reached');

    const newAcceptedCount = acceptedToday.length + 1;
    const msg = document.getElementById('platform-task-message');
    if (newAcceptedCount >= quota) {
      if (msg) msg.innerHTML = `<span style="color: var(--color-warning); font-weight: bold;">অভিনন্দন! আজকের ${activePackageLevel} স্তরের ${quota}টি কাজের সীমা পূর্ণ হয়েছে।</span><br><small style="color: var(--color-muted);">টাস্ক মেনুতে গিয়ে কাজ জমা দিন।</small>`;
    } else {
      if (msg) msg.innerHTML = `কাজ গৃহীত হয়েছে! (আজকের বাকি কাজ: <strong style="color: var(--color-profile-cyan);">${quota - newAcceptedCount}টি</strong>)`;
    }

    refreshDailyMissionLimit(activePackageLevel);
    return;
  }

  // Open submission form
  const openSubBtn = event.target.closest('[data-open-submission]');
  if (openSubBtn) {
    const card = openSubBtn.closest('[data-mission-id]');
    if (card) {
      activeSubmissionId = card.dataset.missionId;
      openDashboardPanel('mission-submit');
    }
    return;
  }

  // Fast approve button (instant approval for demo/speed)
  const fastBtn = event.target.closest('[data-fast-approve]');
  if (fastBtn) {
    const mId = fastBtn.dataset.fastApprove;
    const missions = readAcceptedMissions();
    const m = missions.find(function(item) { return item.id === mId; });
    if (m) {
      m.reviewEndsAt = Date.now() - 1000;
      localStorage.setItem('aloAcceptedMissions', JSON.stringify(missions));
      checkPendingReviews();
    }
    return;
  }

  // Mission filter tab click
  const filterTab = event.target.closest('[data-mission-filter]');
  if (filterTab) {
    activeMissionFilter = filterTab.dataset.missionFilter;
    renderMissionRecords(activeMissionFilter);
    return;
  }

  // Cancel mission
  const cancelBtn = event.target.closest('[data-cancel-mission]');
  if (cancelBtn) {
    const card = cancelBtn.closest('[data-mission-id]');
    if (card) {
      const missions = readAcceptedMissions().filter(function(m) { return m.id !== card.dataset.missionId; });
      localStorage.setItem('aloAcceptedMissions', JSON.stringify(missions));
      renderMissionRecords(activeMissionFilter);
    }
    return;
  }

  // Open task link button
  const openLinkBtn = event.target.closest('#mission-submit-open');
  if (openLinkBtn) {
    handleOpenTaskLink();
    return;
  }

  // Copy task link button
  const copyLinkBtn = event.target.closest('#mission-submit-copy');
  if (copyLinkBtn) {
    handleCopyTaskLink();
    return;
  }

  // View task screenshot in lightbox
  const taskScreenshotBtn = event.target.closest('[data-task-screenshot]');
  if (taskScreenshotBtn) {
    const mId = taskScreenshotBtn.dataset.taskScreenshot;
    const missions = readAcceptedMissions();
    const m = missions.find(function(item) { return item.id === mId; });
    if (m && m.screenshot) {
      openScreenshotLightbox(m.screenshot, `${m.platform || 'মিশন'} - জমা দেওয়া স্ক্রিনশট প্রিভিউ`);
    }
    return;
  }

  // Logout button
  const logoutBtn = event.target.closest('#logout-button');
  if (logoutBtn) {
    localStorage.removeItem('aloSignedInUser');
    showView('login');
    return;
  }
});

// Submission confirm click: Sets to 'review' for 5-10 minutes
const confirmSubmitBtn = document.getElementById('mission-submit-confirm');
if (confirmSubmitBtn) {
  confirmSubmitBtn.addEventListener('click', function() {
    const missions = readAcceptedMissions();
    const mission = missions.find(function(item) { return item.id === activeSubmissionId; });
    if (!mission) return;

    // Review for 5-10 minutes (300 to 600 seconds)
    const reviewMinutes = Math.floor(Math.random() * 6) + 5;
    const now = Date.now();
    const reviewEndsAt = now + reviewMinutes * 60 * 1000;

    mission.status = 'review';
    mission.submittedAt = new Date(now).toISOString();
    mission.reviewMinutes = reviewMinutes;
    mission.reviewEndsAt = reviewEndsAt;
    mission.rewardCredited = false;

    const commentEl = document.getElementById('mission-submit-comment');
    if (commentEl) {
      mission.userComment = commentEl.value.trim();
      commentEl.value = '';
    }
    if (activeSubmissionImage) {
      mission.screenshot = activeSubmissionImage;
      activeSubmissionImage = '';
    }

    const previewEl = document.getElementById('mission-submit-preview');
    if (previewEl) {
      previewEl.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h3l1.5-2h7L17 7h3a1.5 1.5 0 0 1 1.5 1.5v10A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5v-10A1.5 1.5 0 0 1 4 7Z"></path><circle cx="12" cy="13" r="3.5"></circle></svg>';
    }
    const fileStatus = document.getElementById('mission-submit-file-status');
    if (fileStatus) fileStatus.textContent = '';

    localStorage.setItem('aloAcceptedMissions', JSON.stringify(missions));

    activeMissionFilter = 'review';
    openDashboardPanel('tasks');
    renderMissionRecords('review');

    const taskMsg = document.getElementById('task-message');
    if (taskMsg) {
      taskMsg.innerHTML = `<div class="rounded-lg p-3 my-2 text-center" style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); color: #fbbf24;">
        <p class="font-bold text-sm">✓ কাজ পর্যালোচনায় জমা হয়েছে!</p>
        <p class="text-xs mt-1">এটি আগামী <strong>${reviewMinutes} মিনিট</strong> পর্যালোচনাধীন থাকবে। পর্যালোচনা শেষ হলে সম্পূর্ণ হয়ে <strong>${mission.reward}.০০ BDT</strong> স্বয়ংক্রিয়ভাবে যুক্ত হবে।</p>
      </div>`;
      setTimeout(function() {
        if (taskMsg) taskMsg.innerHTML = '';
      }, 8000);
    }
  });
}


// --- SCREENSHOT LIGHTBOX & PICKER MODAL CONTROLLERS ---
function openScreenshotLightbox(imageSrc, caption) {
  const modal = document.getElementById('screenshot-lightbox-modal');
  const img = document.getElementById('lightbox-image');
  const cap = document.getElementById('lightbox-caption');
  if (!modal || !img) return;
  img.src = imageSrc || '';
  if (cap) cap.textContent = caption || 'স্ক্রিনশট প্রিভিউ';
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeScreenshotLightbox() {
  const modal = document.getElementById('screenshot-lightbox-modal');
  if (modal) modal.hidden = true;
  document.body.style.overflow = '';
}

function openImagePickerSheet() {
  const sheet = document.getElementById('image-picker-sheet');
  if (sheet) sheet.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeImagePickerSheet() {
  const sheet = document.getElementById('image-picker-sheet');
  if (sheet) sheet.hidden = true;
  document.body.style.overflow = '';
}

async function handleScreenshotFile(file) {
  if (!file) return;
  const statusEl = document.getElementById('mission-submit-file-status');
  const previewEl = document.getElementById('mission-submit-preview');
  const removeBtn = document.getElementById('mission-submit-remove-img');
  const viewPreviewBtn = document.getElementById('btn-view-preview-modal');
  try {
    if (statusEl) statusEl.textContent = 'স্ক্রিনশট প্রসেসিং হচ্ছে...';
    const base64 = await compressMissionScreenshot(file);
    activeSubmissionImage = base64;
    if (previewEl) {
      previewEl.innerHTML = `<img src="${base64}" alt="স্ক্রিনশট" class="h-full w-full object-cover rounded cursor-pointer" title="পূর্ণ স্ক্রিনশট প্রিভিউ দেখতে ক্লিক করুন">`;
    }
    if (removeBtn) removeBtn.classList.remove('hidden');
    if (viewPreviewBtn) viewPreviewBtn.classList.remove('hidden');
    if (statusEl) statusEl.textContent = '✓ স্ক্রিনশট সফলভাবে লোড হয়েছে';
  } catch (err) {
    if (statusEl) statusEl.textContent = 'স্ক্রিনশট আপলোড ব্যর্থ হয়েছে। আবার চেষ্টা করুন।';
  }
}

function removeScreenshotImage() {
  activeSubmissionImage = '';
  const camInput = document.getElementById('mission-submit-camera-file');
  if (camInput) camInput.value = '';
  const galInput = document.getElementById('mission-submit-gallery-file');
  if (galInput) galInput.value = '';
  const legacyInput = document.getElementById('mission-submit-file');
  if (legacyInput) legacyInput.value = '';
  const previewEl = document.getElementById('mission-submit-preview');
  if (previewEl) {
    previewEl.innerHTML = `<svg viewBox="0 0 24 24" class="h-8 w-8 text-white transition group-hover:scale-110" fill="currentColor"><path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>`;
  }
  const removeBtn = document.getElementById('mission-submit-remove-img');
  if (removeBtn) removeBtn.classList.add('hidden');
  const viewPreviewBtn = document.getElementById('btn-view-preview-modal');
  if (viewPreviewBtn) viewPreviewBtn.classList.add('hidden');
  const statusEl = document.getElementById('mission-submit-file-status');
  if (statusEl) statusEl.textContent = 'স্ক্রিনশট মুছে ফেলা হয়েছে';
}

// Setup screenshot upload listeners for camera, gallery and actions
const camInput = document.getElementById('mission-submit-camera-file');
if (camInput) {
  camInput.addEventListener('change', function(e) {
    const file = e.target.files && e.target.files[0];
    handleScreenshotFile(file);
  });
}

const galInput = document.getElementById('mission-submit-gallery-file');
if (galInput) {
  galInput.addEventListener('change', function(e) {
    const file = e.target.files && e.target.files[0];
    handleScreenshotFile(file);
  });
}

const legacyFileInput = document.getElementById('mission-submit-file');
if (legacyFileInput) {
  legacyFileInput.addEventListener('change', function(e) {
    const file = e.target.files && e.target.files[0];
    handleScreenshotFile(file);
  });
}

// Upload box click: opens lightbox if image already loaded, else opens picker sheet
const uploadTriggerBtn = document.getElementById('mission-upload-trigger-btn');
if (uploadTriggerBtn) {
  uploadTriggerBtn.addEventListener('click', function() {
    if (activeSubmissionImage) {
      openScreenshotLightbox(activeSubmissionImage, 'আপলোডকৃত স্ক্রিনশট প্রিভিউ');
    } else {
      openImagePickerSheet();
    }
  });
}

// Direct button: Camera
const btnCamera = document.getElementById('btn-open-camera');
if (btnCamera) {
  btnCamera.addEventListener('click', function() {
    const cam = document.getElementById('mission-submit-camera-file');
    if (cam) cam.click();
  });
}

// Direct button: Gallery
const btnGallery = document.getElementById('btn-open-gallery');
if (btnGallery) {
  btnGallery.addEventListener('click', function() {
    const gal = document.getElementById('mission-submit-gallery-file');
    if (gal) gal.click();
  });
}

// Direct button: View Preview Modal
const btnPreviewModal = document.getElementById('btn-view-preview-modal');
if (btnPreviewModal) {
  btnPreviewModal.addEventListener('click', function() {
    if (activeSubmissionImage) {
      openScreenshotLightbox(activeSubmissionImage, 'আপলোডকৃত স্ক্রিনশট প্রিভিউ');
    }
  });
}

// Remove image button
const removeImgBtn = document.getElementById('mission-submit-remove-img');
if (removeImgBtn) {
  removeImgBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    removeScreenshotImage();
  });
}

// Sheet option: Camera
const sheetCamBtn = document.getElementById('sheet-choose-camera');
if (sheetCamBtn) {
  sheetCamBtn.addEventListener('click', function() {
    closeImagePickerSheet();
    const cam = document.getElementById('mission-submit-camera-file');
    if (cam) cam.click();
  });
}

// Sheet option: Gallery
const sheetGalBtn = document.getElementById('sheet-choose-gallery');
if (sheetGalBtn) {
  sheetGalBtn.addEventListener('click', function() {
    closeImagePickerSheet();
    const gal = document.getElementById('mission-submit-gallery-file');
    if (gal) gal.click();
  });
}

// Sheet cancel buttons
const sheetCancelBtn = document.getElementById('sheet-cancel');
if (sheetCancelBtn) sheetCancelBtn.addEventListener('click', closeImagePickerSheet);
const closeSheetBtn = document.getElementById('close-picker-sheet');
if (closeSheetBtn) closeSheetBtn.addEventListener('click', closeImagePickerSheet);

// Lightbox close buttons
const closeLightboxBtn = document.getElementById('close-lightbox-btn');
if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeScreenshotLightbox);
const closeLightboxAction = document.getElementById('close-lightbox-action');
if (closeLightboxAction) closeLightboxAction.addEventListener('click', closeScreenshotLightbox);

// Close lightbox on background click
const lightboxModal = document.getElementById('screenshot-lightbox-modal');
if (lightboxModal) {
  lightboxModal.addEventListener('click', function(e) {
    if (e.target === lightboxModal) {
      closeScreenshotLightbox();
    }
  });
}

// Close sheet on background click
const imagePickerSheet = document.getElementById('image-picker-sheet');
if (imagePickerSheet) {
  imagePickerSheet.addEventListener('click', function(e) {
    if (e.target === imagePickerSheet) {
      closeImagePickerSheet();
    }
  });
}


// Comment char counter
const commentInput = document.getElementById('mission-submit-comment');
if (commentInput) {
  commentInput.addEventListener('input', function() {
    const countEl = document.getElementById('mission-submit-comment-count');
    if (countEl) countEl.textContent = commentInput.value.length;
  });
}

const cancelSubmitBtn = document.getElementById('mission-submit-cancel');
if (cancelSubmitBtn) {
  cancelSubmitBtn.addEventListener('click', function() {
    openDashboardPanel('tasks');
  });
}

// Initial session check
window.addEventListener('DOMContentLoaded', function() {
  let savedUser = null;
  try {
    savedUser = JSON.parse(localStorage.getItem('aloSignedInUser') || 'null');
  } catch (error) {
    savedUser = null;
  }
  if (!savedUser) {
    savedUser = {
      name: 'সদস্য',
      phone: '1735235999',
      accountNumber: '1735235999',
      inviteCode: '728207',
      memberId: '1105',
      superiorId: '11',
      packageLevel: 'LV1',
      balance: 0.00
    };
    localStorage.setItem('aloSignedInUser', JSON.stringify(savedUser));
  } else {
    if (!savedUser.accountNumber && !savedUser.phone) savedUser.accountNumber = '1735235999';
    if (!savedUser.inviteCode) savedUser.inviteCode = '728207';
    if (!savedUser.memberId) savedUser.memberId = '1105';
    if (!savedUser.superiorId) savedUser.superiorId = '11';
    if (!savedUser.packageLevel) savedUser.packageLevel = 'LV1';
    if (typeof savedUser.balance !== 'number') savedUser.balance = 0.00;
    localStorage.setItem('aloSignedInUser', JSON.stringify(savedUser));
  }
  updateUserDetails(savedUser);
  updateProfileMetrics();
  openDashboardPanel('profile');
  showView('dashboard');
});

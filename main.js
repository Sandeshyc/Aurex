(() => {
  document.documentElement.classList.add('js');
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- owner settings ----------
     Fill these in before launch.
     formEndpoint: a URL that accepts a JSON POST (e.g. Formspree, Google Apps Script).
     whatsapp: club number with country code and no +, e.g. '919800000000'. */
  const CONFIG = {
    formEndpoint: '',
    whatsapp: '',
  };

  /* ---------- nav + sticky CTA ---------- */
  const nav = $('.nav');
  const sticky = $('.sticky-cta');
  const hero = $('.hero');
  const trial = $('#trial');
  let trialVisible = false;
  function onScroll() {
    nav.classList.toggle('solid', scrollY > 40);
    const pastHero = scrollY > hero.offsetHeight * 0.6;
    sticky.classList.toggle('away', !pastHero || trialVisible);
  }
  new IntersectionObserver(([e]) => { trialVisible = e.isIntersecting; onScroll(); }, { threshold: 0.15 }).observe(trial);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  const menuBtn = $('.menu-btn');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    $('.menu-label', menuBtn).textContent = open ? 'Close' : 'Menu';
  }
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  $$('#menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); menuBtn.focus(); } });
  matchMedia('(min-width: 861px)').addEventListener('change', (m) => { if (m.matches) setMenu(false); });

  /* ---------- reveals ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('seen'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
  $$('.reveal').forEach((el, i) => {
    if (el.matches('.tile, .plan')) el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    io.observe(el);
  });

  /* ---------- trial form ---------- */
  const form = $('#trial-form');
  const name = $('#f-name');
  const phone = $('#f-phone');
  const eName = $('#e-name');
  const ePhone = $('#e-phone');
  const submit = $('button[type=submit]', form);
  const planInput = $('#f-plan');
  const planNote = $('#plan-note');
  const done = $('#done');

  function validName() {
    const ok = name.value.trim().length >= 2;
    name.setAttribute('aria-invalid', String(!ok)); eName.hidden = ok; return ok;
  }
  function validPhone() {
    const ok = /^[6-9]\d{9}$/.test(phone.value);
    phone.setAttribute('aria-invalid', String(!ok)); ePhone.hidden = ok; return ok;
  }
  phone.addEventListener('input', () => {
    phone.value = phone.value.replace(/\D/g, '').slice(0, 10);
    if (phone.getAttribute('aria-invalid') === 'true') validPhone();
  });
  name.addEventListener('input', () => { if (name.getAttribute('aria-invalid') === 'true') validName(); });

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const a = validName(); const b = validPhone();
    if (!a) { name.focus(); return; }
    if (!b) { phone.focus(); return; }

    const slot = form.querySelector('input[name=slot]:checked').value;
    const data = { name: name.value.trim(), phone: `+91${phone.value}`, slot, plan: planInput.value };
    const first = data.name.split(' ')[0];
    submit.setAttribute('aria-busy', 'true');
    $('.btn-label', submit).textContent = 'Sending…';

    let result = 'offline';
    if (CONFIG.formEndpoint) {
      try {
        const r = await fetch(CONFIG.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        result = r.ok ? 'sent' : 'failed';
      } catch { result = 'failed'; }
    } else if (CONFIG.whatsapp) {
      const msg = `Hi Aurex Club, I'd like to book a free trial. Name: ${data.name}. Mobile: ${data.phone}. Preferred time: ${slot}${data.plan ? `. Interested in: ${data.plan} membership` : ''}.`;
      window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
      result = 'whatsapp';
    }

    submit.removeAttribute('aria-busy');
    $('.btn-label', submit).textContent = 'Book my free trial';
    const title = $('#done-title');
    const msg = $('#done-msg');
    if (result === 'sent') {
      title.textContent = `Thank you, ${first}.`;
      msg.textContent = `We'll call you on ${data.phone.replace('+91', '+91 ')} to confirm your ${slot.toLowerCase()} trial.`;
    } else if (result === 'whatsapp') {
      title.textContent = 'Almost there.';
      msg.textContent = 'Send the message we opened in WhatsApp and the club will confirm your trial.';
    } else if (result === 'failed') {
      title.textContent = 'That didn’t go through.';
      msg.textContent = 'Please check your connection and try again.';
    } else {
      title.textContent = 'Bookings open soon.';
      msg.textContent = `Thanks, ${first}. Online booking isn't live yet, so your details were not sent. Trial bookings will open when the club launches.`;
    }
    form.hidden = result !== 'failed';
    done.hidden = false;
    (result === 'failed' ? submit : $('#again')).focus();
  });

  $('#again').addEventListener('click', () => {
    form.reset();
    planInput.value = ''; planNote.hidden = true;
    form.hidden = false; done.hidden = true;
    name.focus();
  });

  /* ---------- membership enquire → prefill ---------- */
  $$('.enquire').forEach((btn) => btn.addEventListener('click', () => {
    planInput.value = btn.dataset.plan;
    planNote.textContent = `Interested in: ${btn.dataset.plan} membership`;
    planNote.hidden = false;
    form.hidden = false; done.hidden = true;
    trial.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    setTimeout(() => name.focus({ preventScroll: true }), 700);
  }));
})();

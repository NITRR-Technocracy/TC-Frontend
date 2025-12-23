import cursor2url from './assets/images/cursor-2.svg';

// Inline the actual cursor-2.svg (bundler-provided URL) and animate it.
(async function () {
  if (typeof window === 'undefined') return;

  // Create DOM elements
  const outer = document.createElement('div');
  outer.className = 'custom-cursor-el';
  const inner = document.createElement('div');
  inner.className = 'custom-cursor-inner';
  outer.appendChild(inner);
  document.body.appendChild(outer);

  // Try to fetch the SVG source (so we can inline and animate parts)
  try {
    const res = await fetch(cursor2url);
    if (res.ok) {
      const text = await res.text();
      inner.innerHTML = text;
      const svgEl = inner.querySelector('svg');
      if (svgEl) svgEl.classList.add('butterfly-svg');
    } else {
      // fallback to <img>
      const img = document.createElement('img');
      img.src = cursor2url;
      img.className = 'butterfly-img';
      inner.appendChild(img);
    }
  } catch (e) {
    const img = document.createElement('img');
    img.src = cursor2url;
    img.className = 'butterfly-img';
    inner.appendChild(img);
  }

  // Pointer follow + flying oscillation
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let pos = { x: mouse.x, y: mouse.y };
  let visible = true;
  let t = 0;

  function onMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if (!visible) {
      outer.style.display = 'block';
      visible = true;
    }
  }
  function onLeave() {
    outer.style.display = 'none';
    visible = false;
  }

  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseenter', onMove);
  window.addEventListener('mouseleave', onLeave);

  function animate() {
    // smooth follow (slower/softer)
    pos.x += (mouse.x - pos.x) * 0.12;
    pos.y += (mouse.y - pos.y) * 0.12;

    // slower, smaller flying oscillation (butterfly-like drift)
    t += 0.04; // slower time progression
    const ox = Math.sin(t * 2.0) * 4; // smaller horizontal sway
    const oy = Math.sin(t * 2.8) * 3; // smaller vertical bob

    outer.style.left = pos.x + ox + 'px';
    outer.style.top = pos.y + oy + 'px';

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // Hide on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.body.classList.add('touch');
  }
})();

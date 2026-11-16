const options = [
  {
    "id": "v2a",
    "label": "V2A",
    "title": "Focused work",
    "description": "A direct, no-nonsense approach. The subject is absorbed in her work, giving the page a clear sense of purpose.",
    "file": "homepage-v2a.png",
    "width": 1600,
    "height": 6800
  },
  {
    "id": "v2b",
    "label": "V2B",
    "title": "Warm and approachable",
    "description": "An open expression and relaxed posture make this feel personal and conversational. A warmer introduction to the brand.",
    "file": "homepage-v2b.png",
    "width": 1600,
    "height": 6800
  },
  {
    "id": "v2c",
    "label": "V2C",
    "title": "A personal connection",
    "description": "A candid smile and an off-camera conversation create an easy, welcoming tone. The emphasis is on the person across the table.",
    "file": "homepage-v2c.png",
    "width": 1600,
    "height": 6800
  },
  {
    "id": "v2d",
    "label": "V2D",
    "title": "Confident and optimistic",
    "description": "An upward gaze and warm surroundings create a sense of confidence and possibility. More aspirational than task-focused.",
    "file": "homepage-v2d.png",
    "width": 1600,
    "height": 6800
  },
  {
    "id": "v2e",
    "label": "V2E",
    "title": "Direct and composed",
    "description": "Eye contact gives this option a confident, deliberate presence. The striped shirt brings green into a restrained office setting.",
    "file": "homepage-v2e.png",
    "width": 1600,
    "height": 6800
  },
  {
    "id": "v2f",
    "label": "V2F",
    "title": "Energy and movement",
    "description": "A more abstract approach, with people moving through a bright, open scene. The yellow creates energy, though it moves beyond the core CARET palette.",
    "file": "homepage-v2f.png",
    "width": 1600,
    "height": 6800
  },
  {
    "id": "v2g",
    "label": "V2G",
    "title": "Space and possibility",
    "description": "A light, architectural approach with people set within a mint-toned environment. Airy and stylized, with the setting doing much of the storytelling.",
    "file": "homepage-v2g.png",
    "width": 1600,
    "height": 6800
  },
  {
    "id": "v2h",
    "label": "V2H",
    "title": "Movement in the CARET palette",
    "description": "Building on the energy and movement of V2F that Vicki liked, this option brings the scene into the CARET palette. Mint green and an orange accent retain the abstract feel while creating a closer connection to the brand.",
    "file": "homepage-v2h.png",
    "width": 1600,
    "height": 6800
  },
  {
    "id": "v2i",
    "label": "V2I",
    "title": "A cinematic working session",
    "description": "A darker, more atmospheric view of people working together. The green tones connect to the brand, while the lighting creates a more dramatic mood.",
    "file": "homepage-v2i.png",
    "width": 1600,
    "height": 6800
  },
  {
    "id": "v2j",
    "label": "V2J",
    "title": "A shared perspective",
    "description": "An overhead view puts the group and its shared work at the center. Collaborative and composed, with the green seating anchoring the palette.",
    "file": "homepage-v2j.png",
    "width": 1600,
    "height": 6800
  },
  {
    "id": "v2k",
    "label": "V2K",
    "title": "Engaged and connected",
    "description": "A bright, engaged expression brings the interaction into focus. The mint shirt and green setting make this a strong fit for the CARET palette.",
    "file": "homepage-v2k.png",
    "width": 1600,
    "height": 6800
  }
];
const overview = document.getElementById('overview');
const viewer = document.getElementById('viewer');
const mockup = document.getElementById('mockup');
const links = document.querySelectorAll('[data-option]');
const canvas = document.getElementById('canvas');
function show() {
  const id = location.hash.slice(1).toLowerCase();
  const index = options.findIndex(option => option.id === id);
  const option = options[index];
  overview.hidden = !!option;
  viewer.hidden = !option;
  document.querySelector('[data-overview]').setAttribute('aria-current', option ? 'false' : 'page');
  links.forEach(link => {
    if (option && link.dataset.option === option.id) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  if (option) {
    document.getElementById('option-heading').textContent = option.label + ' · ' + option.title;
    document.getElementById('option-description').textContent = option.description;
    document.getElementById('position').textContent = (index + 1) + ' of ' + options.length;
    document.getElementById('error').hidden = true;
    mockup.hidden = false;
    mockup.alt = 'CARET homepage ' + option.label + ': ' + option.title;
    mockup.width = option.width;
    mockup.height = option.height;
    mockup.src = 'images/' + option.file + '?v=4';
    const previous = document.getElementById('previous');
    previous.href = index ? '#' + options[index - 1].id : '#overview';
    previous.textContent = index ? '← Previous' : '← Overview';
    const next = document.getElementById('next');
    next.href = index < options.length - 1 ? '#' + options[index + 1].id : '#overview';
    next.textContent = index < options.length - 1 ? 'Next →' : 'Back to overview →';
    canvas.scrollLeft = 0;
  }
  document.title = option ? option.label + ' | CARET Homepage Hero Review' : 'CARET Homepage Hero Review';
  window.scrollTo(0, 0);
}
mockup.addEventListener('error', () => { mockup.hidden = true; document.getElementById('error').hidden = false; });
function setSize(actual) {
  canvas.classList.toggle('actual', actual);
  document.getElementById('fit').setAttribute('aria-pressed', String(!actual));
  document.getElementById('actual').setAttribute('aria-pressed', String(actual));
}
document.getElementById('fit').addEventListener('click', () => setSize(false));
document.getElementById('actual').addEventListener('click', () => setSize(true));
window.addEventListener('hashchange', show);
show();

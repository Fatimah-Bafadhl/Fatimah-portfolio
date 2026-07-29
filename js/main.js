import * as THREE from 'three';

/* ===========================================
   PROJECT DATA — edit this to update content
   -----------------------------------------------
   This is now a CORRIDOR, not a 4-wall room, so it scales:
   projects are placed one after another as you walk in,
   alternating left/right automatically by their position
   in this array. To add a project, just add another object
   below — the corridor grows to fit it, nothing else to
   rewire. `wall` is no longer used.

   Keep this array to a curated, small set (roughly 4-6) of
   your strongest work — that's the point of the corridor.
   Anything beyond that belongs in `archiveProjects` further
   down, which appears as a plain list at the far end instead
   of forcing a visitor to walk past everything you've made.

   video / screenshots / github / demo are all
   optional. Leave them empty and the gallery will render
   clearly-marked placeholders in their place so you can
   preview the exact final layout before the real assets
   exist.
   =========================================== */
const projects = [
  {
    id: 'reesha',
    main: true,
    image: 'assets/images/reesha-frame.jpg',
    number: '01',
    title: 'Reesha',
    tagline: 'Reesha is a mobile application designed to support local artists by providing a dedicated platform to showcase and sell their artwork. The project was inspired by the challenge many emerging artists face in gaining visibility on general-purpose social media and commercial marketplaces. By connecting artists with art enthusiasts in a focused environment, Reesha aims to make discovering, purchasing, and requesting custom artwork more accessible while encouraging the growth of the local creative community. <br><br>Developed as my senior graduation project, Reesha demonstrates my ability to contribute to the complete software development process from planning and UI implementation to backend integration, testing, and team collaboration. The application was built using React Native and Firebase, with a strong emphasis on usability, scalability, and an intuitive user experience.',
    role: 'Team Leader • React Native Developer (Team of 6)',
    stack: 'React Native · Expo · Firebase · Git/GitHub',
    body: `I led a six-person team through the full project lifecycle breaking down tasks,
      reviewing each member's work, and making final calls on direction. I managed our
      Git/GitHub workflow, and resolving merge conflicts before integrating new features into the shared codebase. Alongside my leadership responsibilities, I played an active technical role by transforming the approved UI designs into React Native interfaces, integrating them with Firebase services, and collaborating on implementation and testing to deliver a functional and user-friendly application. `,
    challenges: [
      {
        title: 'Managing Git conflicts across a 6-person team',
        body: 'With six of us in the same codebase, conflicts came up often. I had everyone work on their own branch instead of pushing straight to main, reviewed every branch before merging, and resolved conflicts manually so we always had one stable, working version.'
      },
      {
        title: 'Speeding up slow-loading screens',
        body: 'Some screens were slow because our code fetched Firebase data one collection at a time, in sequence. I restructured those calls to run in parallel instead, which significantly improved screen responsiveness.'
      }
    ],
    video: 'assets/videos/reesha-demo.mp4',
screenshots: [
  'assets/images/reesha-intro.jpg',
  'assets/images/reesha-rej.jpg',
  'assets/images/reesha-hom.jpg',
  'assets/images/reesha-fav.jpg',
  'assets/images/reesha4.jpg',
  'assets/images/reesha-lang.jpg',
  'assets/images/reesha6.jpg'
],
  },
  {
 id: 'app',
    light: true,
    image: 'assets/images/app-frame12.png',
    number: '04',
    title: 'Pocket Habit Chef',
    tagline: 'A recipe-finder Android app that turns whatever\'s left in the fridge into meal ideas, helping users reduce food waste with saved favorites, shareable recipe cards, and a running search history.',
    role: 'UI Design & QA Testing (team of 3)',
    stack: 'Java · Android Studio · SQLite',
    body: `Pocket Habit Chef lets someone type in a few leftover ingredients and matches them
      against a local SQLite database of recipes pulled from TheMealDB, splitting each result
      into what you already have and what you still need. I was responsible for designing the user interface and evaluating the application's usability across the complete user journey. I focused on creating a smooth experience from entering ingredients to browsing recipe matches, viewing details, saving favorites, and sharing recipes. Alongside the UI work, I performed end-to-end testing across all four screens, identifying navigation issues and verifying that each feature worked as intended before the final submission.`,
    challenges: [
      {
        title: 'Catching navigation dead-ends before submission',
        body: "With recipe data passed between four activities (search → results → details → saved), it was easy for a broken intent extra or a missing back path to strand someone mid-flow. I manually tested every navigation path search, view details, save, share, revisit saved and flagged the couple of spots where a screen was showing a blank value instead of the recipe it should have had."
      },
      {
        title: "Making 'what matched' obvious at a glance",
        body: "The results screen needed to show which of a recipe's ingredients matched what someone typed versus what they'd still need to buy. I pushed for splitting that into two lines per card matched ingredients in one color, the rest in grey so a good match is obvious without reading the full list."
      }
    ],
    video: 'assets/videos/app-demo.mp4',
    screenshots: [
      'assets/images/app1-main.jpg',
      'assets/images/app2-list.jpg',
      'assets/images/app3-detailes.jpg',
      'assets/images/app4-results.jpg',
      'assets/images/app5-sheard.jpg',
      'assets/images/app6-saved.jpg'
    ],
    github: null,
    demo: null
  },
  {
   id: 'dashboard',
    // data: true,
    image: 'assets/images/dashboard4.png',
    number: '03',
    title: 'Electronic Real Estate Auctions | Decision Support Dashboard',
    tagline: 'A data analysis and Power BI dashboard examining what drives revenue in Saudi electronic real estate auctions (Q1 2025), built to help an auction director forecast performance and allocate resources.',
    role: 'Data Analyst · Data Cleaning, Descriptive Statistics & Dashboard Design (team of 4)',
    stack: 'Excel · Power BI',
    body: `Using a public Saudi Open Data dataset, I cleaned and validated the data in Excel by checking for missing values, duplicates, and outliers 
    before performing descriptive statistical analysis. I then designed the interactive
      Power BI dashboard on top of that: KPI cards, a top-cities breakdown, and a slicer so
      the director can filter by region and test "what-if" changes in asset volume.`,
    challenges: [
      {
        title: 'Deciding what to do with a 459M SAR outlier',
        body: "One auction's total sale value sat far above every other record. Rather than deleting it, I checked it against the IQR fence to confirm it was a genuine high-value auction, not a data-entry error, and kept it in the dataset so the analysis accurately reflected real market conditions rather than an artificially filtered dataset."
      },
  
    ],
    video: 'assets/videos/dashboard-demo.mp4',
    screenshots: [
      'assets/images/dashboard1.png',
      'assets/images/dashboard2.png',
      'assets/images/dashboard3.png',
      'assets/images/dashboard4.png'
    ],
    github: null,
    demo: null
  },
  {
       id: 'website',
    image: 'assets/images/website-frame.png',
    number: '02',
    title: "Start Your Journey (ابدأ رحلتك)",
    tagline: 'An Arabic-language educational platform that helps prospective students explore Saudi universities, find their ideal major through a short quiz, read student reviews, and calculate their weighted admission score.',
    role: 'Front-End Developer & Back-End (team of 3)',
    stack: 'HTML · CSS · JavaScript · PHP · MySQL',
    body: `Across six pages, I built the site's front-end layout in HTML and designed the
      back-end architecture in PHP and MySQL, including the two-table database (universities
      and reviews) behind it. I focused on implementing the student review feature, allowing visitors to submit reviews and see newly added feedback appear instantly without refreshing the page.`,
    challenges: [
      {
        title: 'Submitting and refreshing reviews without a page reload',
        body: "I built lightweight PHP endpoints (submit_review.php and get_reviews.php) that inserts and reads from the reviews table and returns JSON, then called it from the front end with XMLHttpRequest so a new review shows up in the list right after it's submitted, instead of the visitor waiting for a full page refresh."
      },
      {
        title: 'Keeping university data editable instead of hard-coded',
        body: 'Rather than hardcoding each university\'s details directly into the HTML, I pulled them from a MySQL table through PHP, so adding or updating a university only means changing a database row, not editing every page that lists it.'
      }
    ],
    video: 'assets/videos/website-demo.mp4',
    screenshots: [
      'assets/images/website1.png',
      'assets/images/website2.png',
      'assets/images/website3.png',
      'assets/images/website4.png',
      'assets/images/website5.png',
      'assets/images/website6.png'
    ],
    github: null,
    demo: null
  }
];

/* ===========================================
   ARCHIVE — everything past the curated corridor
   -----------------------------------------------
   Rendered as a plain list, not a 3D frame, behind a single
   "More Work" stop at the far end of the corridor. Add as
   many entries as you like; this list has no effect on the
   corridor's length.
   =========================================== */
const archiveProjects = [
  // Add entries here as older/smaller projects pile up, e.g.:
  // { title: 'Project name', tagline: 'One line on what it was', stack: 'Stack', link: null },
];

/* ===========================================
   PALETTE (mirrors css/styles.css — canvas can't read CSS vars)
   =========================================== */
const PALETTE = {
  bg: 0xfbf6e4,
  wall: 0xf3ecd3,
  wallDeep: 0xeae2c2,
  floor: 0xe4d9ae,
  floorDark: 0xc9b078,
  ceiling: 0xfbf6e4,
  ink: '#2B2A22',
  inkSecondary: '#6B6852',
  inkMuted: '#948F76',
  brass: 0xa9793c,
  verdigris: 0x3f6358,
  placeholderBg: '#EFE7C9',
  placeholderBorder: 'rgba(43,42,34,0.28)'
};

/* ===========================================
   SCENE CONSTANTS — corridor layout
   -----------------------------------------------
   The corridor's length is derived from how many curated
   projects exist, so adding a project automatically extends
   the room instead of requiring a redesign.
   =========================================== */
const CORRIDOR_WIDTH = 7;
const CORRIDOR_HEIGHT = 6;
const ENTRANCE_GAP = 3.8;     // entrance wall to the first row of projects
const PROJECT_SPACING = 5.5;  // distance between consecutive ROWS (left+right pair), not individual frames
const FAR_GAP = 5;            // last row to the far end wall, where the hero project (Reesha) hangs

// The "main" project (Reesha) is pulled out of the side walk and hung on the
// far end wall instead — the centerpiece you walk toward, visible the moment
// you enter. Everything else is paired up two-at-a-time, directly across
// from each other (left wall / right wall, same depth), rather than
// zig-zagging down a single line. The archive ("More Work") stop fills
// whichever side is left over in the final pair, so it always ends up last,
// right before the hero wall — never first, never alone in its own row.
const heroProject = projects.find((p) => p.main) || null;
const sideProjects = projects.filter((p) => !p.main);
const SIDE_STOPS = sideProjects.length + 1; // + 1 for the archive stop
const SIDE_ROWS = Math.ceil(SIDE_STOPS / 2);

const CORRIDOR_LENGTH = ENTRANCE_GAP + (SIDE_ROWS - 1) * PROJECT_SPACING + FAR_GAP;
const CORRIDOR_HALF_WIDTH = CORRIDOR_WIDTH / 2;
const CORRIDOR_HALF_LENGTH = CORRIDOR_LENGTH / 2;

const WALL_MARGIN = 0.55;      // how close the camera may get to a wall
const EYE_HEIGHT = 1.65;
const MOVE_ACCEL = 26;         // units/s^2
const MOVE_DAMPING = 9;        // higher = stops faster
const MOVE_MAX_SPEED = 3.1;
const BOB_AMPLITUDE = 0.018;
const BOB_FREQUENCY = 7.5;

let scene, camera, renderer;
let yaw = 0, pitch = 0;
let isDragging = false;
let lastX = 0, lastY = 0;
let pointerDownX = 0, pointerDownY = 0;
let autoRotate = true;

const raycaster = new THREE.Raycaster();
const clickableFrames = [];
const frameGroups = new Map();   // id -> THREE.Group
const frameSpots = new Map();    // id -> THREE.SpotLight
const frameNormals = new Map();  // id -> THREE.Vector3 (facing into the room)
const frameCenters = new Map();  // id -> THREE.Vector3 (art center, world space)

// movement
const keysDown = new Set();
const velocity = new THREE.Vector3();
let bobTime = 0;

// camera walk-in animation (triggered by double-click)
let camAnim = null; // { from:{pos,yaw,pitch}, to:{pos,yaw,pitch}, t, duration }

// currently "focused" project (spotlight brightened / frame scaled)
let focusedId = null;
const clock = new THREE.Clock();

const canvas = document.getElementById('gallery-canvas');

/* ===========================================
   SCENE SETUP
   =========================================== */
function initScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(PALETTE.bg);
  scene.fog = new THREE.Fog(PALETTE.bg, Math.max(8, CORRIDOR_LENGTH * 0.35), CORRIDOR_LENGTH * 0.95);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
  // Start at the row closest to the hero wall — hero centered dead ahead,
  // with the last pair of side frames flanking left/right — rather than
  // back at the entrance. From here the visitor can see the "main" piece
  // immediately and walk around to explore the rest.
  const START_ROW = SIDE_ROWS - 1;
  const START_BACK_OFFSET = 3; // pull back toward the entrance so the flanking
                                // left/right frames are fully visible too, not
                                // just the hero filling the frame
  const startZ = CORRIDOR_HALF_LENGTH - ENTRANCE_GAP - START_ROW * PROJECT_SPACING + START_BACK_OFFSET;
  camera.position.set(0, EYE_HEIGHT, startZ);
  yaw = 0; // face the hero wall (was Math.PI, which faced backward toward the entrance)

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  buildRoom();

  // Side-wall stops, in walk order. The archive ("More Work") stop is
  // appended after the curated side projects, then swapped with
  // 'dashboard' below — per feedback, those two traded spots.
  const archiveStop = { id: 'archive', isArchive: true, light: true, data: true, number: '—', title: 'Coming Soon' };
  const stops = [...sideProjects, archiveStop];
  const dashboardIdx = stops.findIndex((p) => p.id === 'dashboard');
  const archiveIdx = stops.findIndex((p) => p.id === 'archive');
  [stops[dashboardIdx], stops[archiveIdx]] = [stops[archiveIdx], stops[dashboardIdx]];

  stops.forEach((project, i) => buildFrame(project, projectTransform(i)));
  if (heroProject) buildFrame(heroProject, heroTransform());
  buildLighting();

  window.addEventListener('resize', onResize);
}

/* ---------- Procedural textures (no external image files needed) ---------- */

function makeWoodFloorTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 512;
  const ctx = c.getContext('2d');

  // base
  ctx.fillStyle = '#e4d9ae';
  ctx.fillRect(0, 0, c.width, c.height);

  // planks running along one axis
  const plankH = 40;
  for (let y = 0; y < c.height; y += plankH) {
    const shade = 0.9 + Math.sin(y * 0.7) * 0.05 + (Math.random() * 0.06 - 0.03);
    ctx.fillStyle = `rgba(169,121,60,${0.05 + Math.random() * 0.05})`;
    ctx.fillRect(0, y, c.width, plankH);
    ctx.fillStyle = `rgba(43,42,34,${0.06})`;
    ctx.fillRect(0, y, c.width, 1);

    // grain lines within each plank
    ctx.strokeStyle = `rgba(120,90,50,0.08)`;
    ctx.lineWidth = 1;
    for (let i = 0; i < 6; i++) {
      const gy = y + 4 + Math.random() * (plankH - 8);
      ctx.beginPath();
      ctx.moveTo(0, gy);
      for (let x = 0; x < c.width; x += 24) {
        ctx.lineTo(x, gy + (Math.random() * 2 - 1));
      }
      ctx.stroke();
    }
    // plank seams (vertical, staggered)
    const seamOffset = (Math.floor(y / plankH) % 2) * 128;
    for (let x = seamOffset; x < c.width; x += 256) {
      ctx.fillStyle = 'rgba(43,42,34,0.08)';
      ctx.fillRect(x, y, 1, plankH);
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(CORRIDOR_WIDTH / 4, CORRIDOR_LENGTH / 4);
  return tex;
}

function makePlasterWallTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#f3ecd3';
  ctx.fillRect(0, 0, c.width, c.height);

  const imgData = ctx.getImageData(0, 0, c.width, c.height);
  for (let i = 0; i < imgData.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 8;
    imgData.data[i] += n;
    imgData.data[i + 1] += n;
    imgData.data[i + 2] += n;
  }
  ctx.putImageData(imgData, 0, 0);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(CORRIDOR_LENGTH / 6, CORRIDOR_HEIGHT / 3);
  return tex;
}

// A small plaque marking the end of the curated walk — reads like a
// museum "reading room" sign rather than a missing-content placeholder.
function makeArchivePlaqueTexture(w, h, count) {
  const scale = 128;
  const c = document.createElement('canvas');
  c.width = Math.round(w * scale);
  c.height = Math.round(h * scale);
  const ctx = c.getContext('2d');

  ctx.fillStyle = PALETTE.placeholderBg;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.strokeStyle = 'rgba(63,99,88,0.4)';
  ctx.lineWidth = 5;
  ctx.strokeRect(14, 14, c.width - 28, c.height - 28);

  const cx = c.width / 2;
  const cy = c.height / 2;

  ctx.strokeStyle = '#3F6358';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(cx, cy - c.height * 0.06, c.height * 0.09, 0, Math.PI * 2);
  ctx.moveTo(cx - c.width * 0.05, cy - c.height * 0.06);
  ctx.lineTo(cx + c.width * 0.05, cy - c.height * 0.06);
  ctx.stroke();

  ctx.fillStyle = PALETTE.ink;
  ctx.font = `600 ${Math.round(scale * 0.3)}px Georgia, serif`;
  ctx.textAlign = 'center';
  ctx.fillText('Coming Soon', cx, cy + c.height * 0.16);

  ctx.fillStyle = PALETTE.inkSecondary;
  ctx.font = `500 ${Math.round(scale * 0.18)}px monospace`;
  const label = 'future projects in progress →';
  ctx.fillText(label, cx, cy + c.height * 0.27);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeGlassSheenTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const ctx = c.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, c.width, c.height);
  grad.addColorStop(0.0, 'rgba(255,255,255,0)');
  grad.addColorStop(0.42, 'rgba(255,255,255,0)');
  grad.addColorStop(0.5, 'rgba(255,255,255,0.35)');
  grad.addColorStop(0.58, 'rgba(255,255,255,0)');
  grad.addColorStop(1.0, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, c.width, c.height);
  const tex = new THREE.CanvasTexture(c);
  return tex;
}

function makePlacardTexture(project) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#F3ECD3';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.strokeStyle = 'rgba(43,42,34,0.2)';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, c.width - 2, c.height - 2);

  // The hero placard is read from further away (it's on the far wall, not
  // walked right up to like the side frames), so give it noticeably larger
  // type — same canvas resolution, bigger glyphs — rather than shrinking
  // proportionally with the rest of the layout.
  const numberSize = project.main ? 30 : 22;
  const titleSize = project.main ? 38 : 30;

  ctx.fillStyle = project.data ? '#3F6358' : '#A9793C';
  ctx.font = `500 ${numberSize}px monospace`;
  ctx.fillText(project.number, 24, 44);

  ctx.fillStyle = PALETTE.ink;
  ctx.font = `500 ${titleSize}px Georgia, serif`;
  ctx.fillText(project.title, 24, 92);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// Generated placeholder for the artwork itself, shown until a real
// screenshot is added — so the gallery is fully previewable right away.
function makeArtPlaceholderTexture(project, w, h) {
  const scale = 128;
  const c = document.createElement('canvas');
  c.width = Math.round(w * scale);
  c.height = Math.round(h * scale);
  const ctx = c.getContext('2d');

  ctx.fillStyle = PALETTE.placeholderBg;
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.strokeStyle = PALETTE.placeholderBorder;
  ctx.lineWidth = 6;
  ctx.setLineDash([14, 10]);
  ctx.strokeRect(16, 16, c.width - 32, c.height - 32);
  ctx.setLineDash([]);

  const cx = c.width / 2;
  const cy = c.height / 2 - 20;
  ctx.strokeStyle = PALETTE.inkMuted;
  ctx.lineWidth = 5;
  const iw = Math.min(c.width, c.height) * 0.26;
  ctx.strokeRect(cx - iw / 2, cy - iw * 0.35, iw, iw * 0.7);
  ctx.beginPath();
  ctx.arc(cx - iw * 0.2, cy - iw * 0.1, iw * 0.08, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - iw / 2, cy + iw * 0.28);
  ctx.lineTo(cx - iw * 0.1, cy - iw * 0.02);
  ctx.lineTo(cx + iw * 0.15, cy + iw * 0.18);
  ctx.lineTo(cx + iw / 2, cy - iw * 0.08);
  ctx.lineTo(cx + iw / 2, cy + iw * 0.35);
  ctx.lineTo(cx - iw / 2, cy + iw * 0.35);
  ctx.closePath();
  ctx.stroke();

  ctx.fillStyle = PALETTE.inkSecondary;
  ctx.font = `500 ${Math.round(scale * 0.22)}px monospace`;
  ctx.textAlign = 'center';
  ctx.fillText('add screenshot', cx, cy + iw * 0.75);
  ctx.fillText(project.title, cx, cy + iw * 0.75 + Math.round(scale * 0.3));

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* ---------- Room geometry ---------- */

function buildRoom() {
  const floorTex = makeWoodFloorTexture();
  const wallTex = makePlasterWallTexture();

  const wallMat = new THREE.MeshStandardMaterial({ map: wallTex, color: PALETTE.wall, roughness: 0.92 });
  const floorMat = new THREE.MeshPhysicalMaterial({
    map: floorTex,
    color: 0xffffff,
    roughness: 0.5,
    metalness: 0,
    clearcoat: 0.28,
    clearcoatRoughness: 0.3
  });
  const ceilMat = new THREE.MeshStandardMaterial({ color: PALETTE.ceiling, roughness: 1 });
  const trimMat = new THREE.MeshStandardMaterial({ color: PALETTE.wallDeep, roughness: 0.75 });

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(CORRIDOR_WIDTH, CORRIDOR_LENGTH), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(CORRIDOR_WIDTH, CORRIDOR_LENGTH), ceilMat);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.y = CORRIDOR_HEIGHT;
  scene.add(ceiling);

  const halfW = CORRIDOR_HALF_WIDTH;
  const halfL = CORRIDOR_HALF_LENGTH;

  // Long side walls — where the curated projects hang
  const sideWallGeo = new THREE.PlaneGeometry(CORRIDOR_LENGTH, CORRIDOR_HEIGHT);
  const leftWall = new THREE.Mesh(sideWallGeo, wallMat);
  leftWall.position.set(-halfW, CORRIDOR_HEIGHT / 2, 0);
  leftWall.rotation.y = Math.PI / 2;
  scene.add(leftWall);

  const rightWall = new THREE.Mesh(sideWallGeo, wallMat);
  rightWall.position.set(halfW, CORRIDOR_HEIGHT / 2, 0);
  rightWall.rotation.y = -Math.PI / 2;
  scene.add(rightWall);

  // End caps — entrance behind the visitor, far wall holds the archive stop
  const capWallGeo = new THREE.PlaneGeometry(CORRIDOR_WIDTH, CORRIDOR_HEIGHT);
  const entranceCap = new THREE.Mesh(capWallGeo, wallMat);
  entranceCap.position.set(0, CORRIDOR_HEIGHT / 2, halfL);
  entranceCap.rotation.y = Math.PI;
  scene.add(entranceCap);

  const farCap = new THREE.Mesh(capWallGeo, wallMat);
  farCap.position.set(0, CORRIDOR_HEIGHT / 2, -halfL);
  scene.add(farCap);

  // Baseboard + crown molding as real boxes (not flat decals), sized to
  // each wall's own length so nothing overhangs or falls short.
  const addTrim = (wall, length) => {
    const baseboard = new THREE.Mesh(new THREE.BoxGeometry(length, 0.24, 0.06), trimMat);
    baseboard.position.copy(wall.position);
    baseboard.position.y = 0.12;
    baseboard.rotation.copy(wall.rotation);
    baseboard.translateZ(0.03);
    baseboard.receiveShadow = true;
    scene.add(baseboard);

    const crown = new THREE.Mesh(new THREE.BoxGeometry(length, 0.16, 0.09), trimMat);
    crown.position.copy(wall.position);
    crown.position.y = CORRIDOR_HEIGHT - 0.14;
    crown.rotation.copy(wall.rotation);
    crown.translateZ(0.045);
    scene.add(crown);
  };

  addTrim(leftWall, CORRIDOR_LENGTH - 0.1);
  addTrim(rightWall, CORRIDOR_LENGTH - 0.1);
  addTrim(entranceCap, CORRIDOR_WIDTH - 0.1);
  addTrim(farCap, CORRIDOR_WIDTH - 0.1);
}

// Where the i-th side stop hangs: paired two-at-a-time, left then right,
// at the SAME depth (row) — so the left wall and right wall always face
// each other squarely instead of stair-stepping down the corridor.
function projectTransform(index) {
  const row = Math.floor(index / 2);
  const side = index % 2 === 0 ? 'right' : 'left';
  const x = side === 'right' ? CORRIDOR_HALF_WIDTH - 0.05 : -(CORRIDOR_HALF_WIDTH - 0.05);
  const rotationY = side === 'right' ? -Math.PI / 2 : Math.PI / 2;
  const z = CORRIDOR_HALF_LENGTH - ENTRANCE_GAP - row * PROJECT_SPACING;
  return { position: [x, 2.1, z], rotationY };
}

// The hero project (Reesha) always sits centered on the far end wall —
// dead ahead from the entrance — marking the destination of the walk.
// Mounted a little higher than the side frames: it's a bigger piece with
// a bigger placard underneath, and it needs the extra clearance so that
// placard doesn't run into the floor.
function heroTransform() {
  return { position: [0, 2.7, -(CORRIDOR_HALF_LENGTH - 0.05)], rotationY: 0 };
}

function frameFacingNormal(rotationY) {
  return new THREE.Vector3(Math.sin(rotationY), 0, Math.cos(rotationY));
}

function buildFrame(project, transform) {
  const { position, rotationY } = transform;
  const group = new THREE.Group();
  group.position.set(...position);
  group.rotation.y = rotationY;
  scene.add(group);
  frameGroups.set(project.id, group);
  frameNormals.set(project.id, frameFacingNormal(rotationY));
  frameCenters.set(project.id, group.position.clone());

  // All side-wall frames (left + right) share one consistent size so the
  // corridor reads as a coherent set. Only the hero piece on the far wall
  // is intentionally larger, as the centerpiece.
  const w = project.main ? 4 : 3.2;
  const h = project.main ? 3 : 2.4;
  const accent = project.data ? PALETTE.verdigris : PALETTE.brass;

  // Outer frame moulding
  const outerMat = new THREE.MeshStandardMaterial({ color: accent, roughness: 0.4, metalness: 0.28 });
  const outer = new THREE.Mesh(new THREE.BoxGeometry(w + 0.22, h + 0.22, 0.12), outerMat);
  outer.position.z = -0.05;
  outer.castShadow = true;
  outer.receiveShadow = true;
  group.add(outer);

  // Inner bevel lip (slightly darker) for a real-moulding feel
  const innerMat = new THREE.MeshStandardMaterial({ color: PALETTE.ink, roughness: 0.6, metalness: 0.1 });
  const inner = new THREE.Mesh(new THREE.BoxGeometry(w + 0.06, h + 0.06, 0.05), innerMat);
  inner.position.z = -0.005;
  group.add(inner);

  // Artwork plane — starts with a generated placeholder, swapped for the
  // real image once it loads (or left as-is if no image exists yet).
  // The archive stop has no image at all — it's a permanent plaque.
  const initialTex = project.isArchive
    ? makeArchivePlaqueTexture(w, h, archiveProjects.length)
    : makeArtPlaceholderTexture(project, w, h);
  const artMat = new THREE.MeshStandardMaterial({ map: initialTex, roughness: 0.85 });
  const art = new THREE.Mesh(new THREE.PlaneGeometry(w, h), artMat);
  art.userData.projectId = project.id;
  art.receiveShadow = true;
  art.position.z = 0.035; 
  group.add(art);
  clickableFrames.push(art);

  if (project.image) {
    const loader = new THREE.TextureLoader();
    loader.load(
      project.image,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        artMat.map = tex;
        artMat.needsUpdate = true;
      },
      undefined,
      () => { /* keep the generated placeholder if no real image exists yet */ }
    );
  }

  // Glass sheen — a thin, mostly-transparent plane with a soft diagonal
  // highlight, in front of the art, to suggest a protective glass pane.
  const glassMat = new THREE.MeshPhysicalMaterial({
    map: makeGlassSheenTexture(),
    transparent: true,
    opacity: 0.5,
    roughness: 0.15,
    metalness: 0,
    depthWrite: false
  });
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(w, h), glassMat);
  glass.position.z = 0.045;
  group.add(glass);

  // Slim flanking pilasters either side of the artwork — a small
  // architectural detail that also reads as "this piece matters".
  const pilasterMat = new THREE.MeshStandardMaterial({ color: PALETTE.wallDeep, roughness: 0.8 });
  [-1, 1].forEach((side) => {
    const pilaster = new THREE.Mesh(new THREE.BoxGeometry(0.1, h + 0.6, 0.08), pilasterMat);
    pilaster.position.set(side * (w / 2 + 0.5), 0, -0.06);
    pilaster.receiveShadow = true;
    group.add(pilaster);
  });

  // Placard beneath the frame. Positioned as: frame's own bottom edge, then
  // a fixed gap, then the placard — sized relative to the PLACARD's own
  // height (not a flat offset that assumed one fixed size), so a taller
  // placard doesn't end up dipping below floor level.
  const placardTex = makePlacardTexture(project);
  const placardMat = new THREE.MeshBasicMaterial({ map: placardTex });
  const placardW = project.main ? Math.min(w, 2.6) : Math.min(w, 2);
  const placardH = placardW * 0.25;
  const frameBottom = h / 2 + 0.11; // matches the outer moulding box's own half-height
  const placardGap = 0.15;
  const placard = new THREE.Mesh(new THREE.PlaneGeometry(placardW, placardH), placardMat);
  placard.position.set(0, -(frameBottom + placardGap + placardH / 2), 0);
  placard.userData.projectId = project.id;
  group.add(placard);
  clickableFrames.push(placard);

  // Recessed ceiling spotlight fixture (visual) + the actual light
  const fixtureMat = new THREE.MeshStandardMaterial({ color: 0x1c1a14, roughness: 0.5, metalness: 0.4 });
  const fixture = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.08, 20), fixtureMat);
  fixture.position.set(position[0] * 0.62, CORRIDOR_HEIGHT - 0.05, position[2]);
  scene.add(fixture);

  const spot = new THREE.SpotLight(0xfff6de, project.main ? 11 : 7.5, 9, Math.PI / 7, 0.55, 1.6);
  spot.position.copy(fixture.position);
  spot.target = group;
  spot.castShadow = project.main; // only the hero piece casts a full shadow, for performance
  if (spot.castShadow) {
    spot.shadow.mapSize.set(1024, 1024);
    spot.shadow.bias = -0.001;
  }
  spot.userData.baseIntensity = spot.intensity;
  scene.add(spot);
  scene.add(spot.target);
  frameSpots.set(project.id, spot);
}

function buildLighting() {
  scene.add(new THREE.AmbientLight(0xfff8e6, 1.15));
  const fill = new THREE.HemisphereLight(0xfffaf0, 0xd8cd9e, 0.55);
  scene.add(fill);
}

/* ===========================================
   LOOK-AROUND + WASD MOVEMENT
   =========================================== */
function initControls() {
  canvas.setAttribute('tabindex', '0');

  canvas.addEventListener('pointerdown', (e) => {
    if (camAnim) return;
    isDragging = true;
    autoRotate = false;
    lastX = pointerDownX = e.clientX;
    lastY = pointerDownY = e.clientY;
    canvas.classList.add('dragging');
  });

  window.addEventListener('pointerup', (e) => {
    isDragging = false;
    canvas.classList.remove('dragging');
    const dx = Math.abs(e.clientX - pointerDownX);
    const dy = Math.abs(e.clientY - pointerDownY);
    if (dx < 5 && dy < 5) handleSingleClick(e);
  });

  window.addEventListener('pointermove', (e) => {
    if (!isDragging || camAnim) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    yaw -= dx * 0.0028;
    pitch -= dy * 0.0028;
    pitch = Math.max(-0.5, Math.min(0.5, pitch));
  });

  canvas.addEventListener('dblclick', (e) => {
    e.preventDefault();
    const id = pickFrameAt(e.clientX, e.clientY);
    if (id) walkTowardFrame(id);
  });

  window.addEventListener('keydown', (e) => {
    if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(e.key.toLowerCase())) {
      keysDown.add(e.key.toLowerCase());
      autoRotate = false;
    }
    if (e.key === 'Escape') {
      if (lightbox.classList.contains('open')) closeLightbox();
      else if (panel.classList.contains('open')) closeDetail();
    }
  });
  window.addEventListener('keyup', (e) => keysDown.delete(e.key.toLowerCase()));

  // touch d-pad
  document.querySelectorAll('#touch-pad [data-dir]').forEach((btn) => {
    const dir = btn.dataset.dir;
    const key = { forward: 'w', back: 's', left: 'a', right: 'd' }[dir];
    const press = (ev) => { ev.preventDefault(); keysDown.add(key); autoRotate = false; };
    const release = (ev) => { ev.preventDefault(); keysDown.delete(key); };
    btn.addEventListener('pointerdown', press);
    btn.addEventListener('pointerup', release);
    btn.addEventListener('pointerleave', release);
    btn.addEventListener('pointercancel', release);
  });
}

function pickFrameAt(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  const mouse = new THREE.Vector2(
    ((clientX - rect.left) / rect.width) * 2 - 1,
    -((clientY - rect.top) / rect.height) * 2 + 1
  );
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(clickableFrames);
  return hits.length > 0 ? hits[0].object.userData.projectId : null;
}

function handleSingleClick(e) {
  const id = pickFrameAt(e.clientX, e.clientY);
  if (!id) return;
  if (id === 'archive') {
    focusFrame(id);
    openArchive();
    return;
  }
  const project = projects.find((p) => p.id === id);
  if (project) {
    focusFrame(id);
    openDetail(project);
  }
}

function focusFrame(id) {
  if (focusedId && focusedId !== id) unfocusFrame(focusedId);
  focusedId = id;
}

function unfocusFrame(id) {
  const spot = frameSpots.get(id);
  if (spot) spot.userData.targetIntensity = spot.userData.baseIntensity;
}

// Smoothly walk the camera up to a frame for a closer look (double-click)
function walkTowardFrame(id) {
  const group = frameGroups.get(id);
  const normal = frameNormals.get(id);
  if (!group || !normal) return;

  const targetPos = group.position.clone().addScaledVector(normal, 2.3);
  targetPos.y = EYE_HEIGHT;
  const lookTarget = group.position.clone();
  lookTarget.y = 1.9;

  const dir = lookTarget.clone().sub(targetPos).normalize();
  const targetYaw = Math.atan2(dir.x, dir.z);
  const targetPitch = Math.max(-0.5, Math.min(0.5, Math.asin(dir.y)));

  camAnim = {
    from: { pos: camera.position.clone(), yaw, pitch },
    to: { pos: targetPos, yaw: targetYaw, pitch: targetPitch },
    t: 0,
    duration: 1.1
  };
  isDragging = false;
  autoRotate = false;
  velocity.set(0, 0, 0);
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function updateCameraAnimation(dt) {
  if (!camAnim) return;
  camAnim.t += dt / camAnim.duration;
  const p = Math.min(camAnim.t, 1);
  const e = easeInOutCubic(p);
  camera.position.lerpVectors(camAnim.from.pos, camAnim.to.pos, e);
  yaw = THREE.MathUtils.lerp(camAnim.from.yaw, camAnim.to.yaw, e);
  pitch = THREE.MathUtils.lerp(camAnim.from.pitch, camAnim.to.pitch, e);
  if (p >= 1) camAnim = null;
}

function updateMovement(dt) {
  if (camAnim) return;

  const forward = (keysDown.has('w') || keysDown.has('arrowup')) ? 1 : (keysDown.has('s') || keysDown.has('arrowdown')) ? -1 : 0;
  const strafe = (keysDown.has('d') || keysDown.has('arrowright')) ? 1 : (keysDown.has('a') || keysDown.has('arrowleft')) ? -1 : 0;

  const forwardVec = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
  const rightVec = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));

  const accel = new THREE.Vector3();
  accel.addScaledVector(forwardVec, forward);
  accel.addScaledVector(rightVec, strafe);
  if (accel.lengthSq() > 0) accel.normalize().multiplyScalar(MOVE_ACCEL);

  velocity.addScaledVector(accel, dt);
  velocity.multiplyScalar(Math.max(0, 1 - MOVE_DAMPING * dt));
  if (velocity.length() > MOVE_MAX_SPEED) velocity.setLength(MOVE_MAX_SPEED);

  const next = camera.position.clone().addScaledVector(velocity, dt);

  // Simple AABB collision so visitors can't walk through the walls
  const boundX = CORRIDOR_HALF_WIDTH - WALL_MARGIN;
  const boundZ = CORRIDOR_HALF_LENGTH - WALL_MARGIN;
  next.x = Math.max(-boundX, Math.min(boundX, next.x));
  next.z = Math.max(-boundZ, Math.min(boundZ, next.z));
  camera.position.x = next.x;
  camera.position.z = next.z;

  // Subtle head-bob tied to movement speed only
  const speed = Math.min(velocity.length(), MOVE_MAX_SPEED);
  if (speed > 0.05) {
    bobTime += dt * BOB_FREQUENCY * (speed / MOVE_MAX_SPEED + 0.4);
    camera.position.y = EYE_HEIGHT + Math.sin(bobTime) * BOB_AMPLITUDE * (speed / MOVE_MAX_SPEED);
  } else {
    camera.position.y += (EYE_HEIGHT - camera.position.y) * Math.min(1, dt * 6);
  }
}

/* ===========================================
   DETAIL PANEL
   =========================================== */
const panel = document.getElementById('detail-panel');
const content = document.getElementById('detail-content');
const scrim = document.getElementById('panel-scrim');
let lastFocusedTrigger = null;

function videoBlockHTML(project) {
  if (project.video) {
    return `
      <div class="media-block">
        <div class="video-frame" data-expand-video="${project.video}" role="button" tabindex="0" aria-label="Open full-size video">
          <video src="${project.video}" muted playsinline loop preload="none" data-autoplay></video>
        </div>
      </div>`;
  }
  return `
    <div class="media-block">
      <div class="video-frame placeholder">
        <p class="ph-label">▶ demo video<span>add a 20–40s .mp4 to preview it here</span></p>
      </div>
    </div>`;
}

function carouselHTML(project) {
  const shots = project.screenshots || [];
  const items = shots.length
    ? shots.map((src, i) => `<button class="carousel-item" data-src="${src}" data-index="${i}"><img src="${src}" alt="${project.title} screenshot ${i + 1}" loading="lazy" /></button>`).join('')
    : Array.from({ length: 4 }).map((_, i) => `<div class="carousel-item placeholder">screenshot ${i + 1}</div>`).join('');
  return `
    <div class="carousel-block">
      <p class="carousel-label">Screenshots</p>
      <div class="carousel">${items}</div>
    </div>`;
}

function actionsHTML(project) {
  const gh = project.github
    ? `<a class="btn btn--secondary" href="${project.github}" target="_blank" rel="noopener">GitHub ↗</a>`
    : '';
  const demo = project.demo
    ? `<a class="btn btn--primary" href="${project.demo}" target="_blank" rel="noopener">Live demo ↗</a>`
    : '';
  return `<div class="actions">${demo}${gh}</div>`;
}

function openDetail(project) {
  lastFocusedTrigger = document.activeElement;
  content.className = 'detail-content' + (project.data ? ' data' : '');
  content.innerHTML = `
    <p class="plaque__eyebrow">${project.number} — ${project.main ? 'graduation project' : project.light ? 'concept & flow' : project.data ? 'data & analysis' : 'website'}</p>
    <h2>${project.title}</h2>
    ${project.tagline ? `<p class="tagline">${project.tagline}</p>` : ''}
    ${videoBlockHTML(project)}
    ${carouselHTML(project)}
    <div class="meta">
      <div class="meta-item"><span class="label">Role</span><span class="value">${project.role}</span></div>
      <div class="meta-item"><span class="label">Stack</span><span class="value mono">${project.stack}</span></div>
    </div>
    <div class="body"><p>${project.body}</p></div>
    ${project.challenges.length ? `<p class="section-label">Challenges</p>` : ''}
    ${project.challenges.map((c) => `
      <div class="challenge">
        <h3>${c.title}</h3>
        <p>${c.body}</p>
      </div>
    `).join('')}
    ${actionsHTML(project)}
  `;
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  scrim.classList.add('open');

  // wire up screenshot -> lightbox
  const shots = project.screenshots || [];
  content.querySelectorAll('.carousel-item[data-src]').forEach((btn) => {
    btn.addEventListener('click', () => openLightbox(shots, Number(btn.dataset.index)));
  });

  // fade the video in only after the panel is open, never while browsing
  const video = content.querySelector('video[data-autoplay]');
  if (video) {
    setTimeout(() => video.play().catch(() => {}), 350);
  }
// wire up video frame -> full-size lightbox (click or Enter/Space)
const videoFrame = content.querySelector('[data-expand-video]');
if (videoFrame) {
  const expand = () => openVideoLightbox(videoFrame.dataset.expandVideo);
  videoFrame.addEventListener('click', expand);
  videoFrame.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); expand(); }
  });
}
  document.getElementById('close-detail').focus();

  const spot = frameSpots.get(project.id);
  if (spot) spot.userData.targetIntensity = spot.userData.baseIntensity * 1.4;
  const group = frameGroups.get(project.id);
  if (group) group.userData.targetScale = 1.035;
}

function archiveListHTML() {
  if (!archiveProjects.length) {
    return ``;
  }
  const items = archiveProjects.map((a) => `
    <div class="archive-item">
      <h3>${a.title}</h3>
      ${a.tagline ? `<p>${a.tagline}</p>` : ''}
      ${a.stack ? `<p class="value mono">${a.stack}</p>` : ''}
      ${a.link
        ? `<a class="btn btn--secondary" href="${a.link}" target="_blank" rel="noopener">View ↗</a>`
        : `<span class="btn btn--placeholder">Add link</span>`}
    </div>`).join('');
  return `<div class="archive-list">${items}</div>`;
}

function openArchive() {
  lastFocusedTrigger = document.activeElement;
  content.className = 'detail-content data';
  content.innerHTML = `
    <p class="plaque__eyebrow">Coming Soon</p>
    <h2>Future Projects</h2>
    <p class="tagline">I am continually working on new ideas and expanding my skill set. Any new projects outside the main gallery will be listed here as they are completed.</p>
    ${archiveListHTML()}
  `;
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  scrim.classList.add('open');
  document.getElementById('close-detail').focus();

  const spot = frameSpots.get('archive');
  if (spot) spot.userData.targetIntensity = spot.userData.baseIntensity * 1.4;
  const group = frameGroups.get('archive');
  if (group) group.userData.targetScale = 1.035;
}

function closeDetail() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  scrim.classList.remove('open');
  const video = content.querySelector('video');
  if (video) video.pause();

  if (focusedId) {
    unfocusFrame(focusedId);
    const group = frameGroups.get(focusedId);
    if (group) group.userData.targetScale = 1;
    focusedId = null;
  }
  if (lastFocusedTrigger && lastFocusedTrigger.focus) lastFocusedTrigger.focus();
}

document.getElementById('close-detail').addEventListener('click', closeDetail);
scrim.addEventListener('click', closeDetail);

/* ===========================================
   LIGHTBOX (fullscreen screenshots)
   =========================================== */

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');
let lightboxShots = [];
let lightboxIndex = 0;

function openLightbox(shots, index) {
  if (!shots.length) return;
  lightboxShots = shots;
  lightboxIndex = index;
  lightbox.classList.remove('video-mode');
  lightboxImg.src = shots[lightboxIndex];
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function openVideoLightbox(src) {
  if (!src) return;
  lightbox.classList.add('video-mode', 'open');
  lightbox.setAttribute('aria-hidden', 'false');
  lightboxVideo.src = src;
  lightboxVideo.currentTime = 0;
  lightboxVideo.muted = false;
  lightboxVideo.loop = true;
  lightboxVideo.play().catch(() => {});
}

function closeLightbox() {
  lightbox.classList.remove('open', 'video-mode');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxVideo.pause();
  lightboxVideo.removeAttribute('src');
  lightboxVideo.load();
}

function stepLightbox(delta) {
  lightboxIndex = (lightboxIndex + delta + lightboxShots.length) % lightboxShots.length;
  lightboxImg.src = lightboxShots[lightboxIndex];
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', () => stepLightbox(-1));
document.getElementById('lightbox-next').addEventListener('click', () => stepLightbox(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

/* ===========================================
   ACCESSIBLE PROJECT LIST (keyboard-only path)
   =========================================== */
function buildSrProjectList() {
  const list = document.getElementById('sr-project-list');
  projects.forEach((project) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = `View ${project.title}`;
    btn.addEventListener('click', () => {
      focusFrame(project.id);
      openDetail(project);
    });
    li.appendChild(btn);
    list.appendChild(btn);
  });

  const archiveLi = document.createElement('li');
  const archiveBtn = document.createElement('button');
  archiveBtn.textContent = 'View future projects (coming soon)';
  archiveBtn.addEventListener('click', () => {
    focusFrame('archive');
    openArchive();
  });
  archiveLi.appendChild(archiveBtn);
  list.appendChild(archiveBtn);
}

/* ===========================================
   INTRO / ENTER FLOW
   =========================================== */
const intro = document.getElementById('intro');
const hint = document.getElementById('hint');
const gallery = document.getElementById('gallery');

document.getElementById('enter-btn').addEventListener('click', () => {
  intro.classList.add('hidden');
  gallery.setAttribute('aria-hidden', 'false');
  canvas.focus();
  setTimeout(() => hint.classList.add('faded'), 4500);
});

document.getElementById('exit-btn').addEventListener('click', () => {
  intro.classList.remove('hidden');
  gallery.setAttribute('aria-hidden', 'true');
});

/* ===========================================
   RESIZE + RENDER LOOP
   =========================================== */
function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function updateFrameScales(dt) {
  frameGroups.forEach((group) => {
    const target = group.userData.targetScale ?? 1;
    const s = THREE.MathUtils.damp(group.scale.x, target, 6, dt);
    group.scale.setScalar(s);
  });
}

function updateSpotlights(dt) {
  frameSpots.forEach((spot) => {
    const target = spot.userData.targetIntensity ?? spot.userData.baseIntensity;
    spot.intensity = THREE.MathUtils.damp(spot.intensity, target, 5, dt);
  });
}

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);

  if (autoRotate) yaw += 0.0006;

  updateCameraAnimation(dt);
  updateMovement(dt);
  updateFrameScales(dt);
  updateSpotlights(dt);

  camera.rotation.order = 'YXZ';
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;

  renderer.render(scene, camera);
}

/* ===========================================
   INIT
   =========================================== */
function supportsWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}

if (!supportsWebGL()) {
  document.getElementById('webgl-fallback').hidden = false;
  intro.style.display = 'none';
} else {
  try {
    initScene();
    initControls();
    buildSrProjectList();
    animate();
  } catch (e) {
    console.error('THREE ERROR:', e);
  }
}
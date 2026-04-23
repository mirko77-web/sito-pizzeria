import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "393401177597";

function apriWhatsApp(messaggio) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messaggio)}`;
  window.open(url, "_blank");
}

// Inject Google Fonts
function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);
  return null;
}

const NAV_ITEMS = [
  { id: "home",     label: "Home",     icon: "/house-chimney-heart.png" },
  { id: "menu",     label: "Menu",     icon: "/menu-burger.png" },
  { id: "contatti", label: "Contatti", icon: "/phone-call.png" },
  { id: "eventi",   label: "Eventi",   icon: "/party_2982898.png" },
  { id: "social",   label: "Social",   icon: "/3917633.png" },
];

const MENU_SECTIONS = [
  {
    key: "antipasti",
    label: "Antipasti",
    icon: "/antiopasto.png",
    items: [
      { nome: "Antipasto all'Italiana", ingredienti: "prosciutto crudo, mozzarella, salame dolce, formaggi, melanzane e peperoni sott'olio", prezzo: "10.00" },
      { nome: "Antipasto della Casa", ingredienti: "mix di prodotti locali a seconda della disponibilità", prezzo: "15.00" },
      { nome: "Antipasto Armonia", ingredienti: "mix di salumi e formaggi, mix di frittini, melanzane, peperoni e funghi sott'olio", prezzo: "13.00" },
      { nome: "Antipasto di Mare", ingredienti: "insalata di mare, polpette di polpo, alici marinate, chele di granchio", prezzo: "12.00" },
      { nome: "Antipasto Perla", ingredienti: "polpette di carne, capocollo, funghi, burratina, formaggi, friselline casarecce, insalata di mare", prezzo: "14.00" },
      { nome: "Polpette di Carne", ingredienti: "", prezzo: "5.00" },
      { nome: "Frittini Misti", ingredienti: "", prezzo: "9.00" },
    ],
  },
  {
    key: "salentine",
    label: "Salentine",
    icon: "/mandu_8755649.png",
    items: [
      { nome: "Piadina", ingredienti: "", prezzo: "2.00" },
      { nome: "Calzone", ingredienti: "pomodoro, mozzarella, prosciutto cotto, funghi", prezzo: "8.50" },
      { nome: "Puccia della Casa", ingredienti: "mozzarella, pomodoro, prosciutto cotto, salame dolce o piccante, svizzero, tonno, giardiniera", prezzo: "6.00" },
      { nome: "Puccia Caprese", ingredienti: "mozzarella, pomodoro, fior di latte, prosciutto crudo", prezzo: "8.50" },
      { nome: "Panzerotto Fritto", ingredienti: "pomodoro, mozzarella, prosciutto cotto", prezzo: "2.50" },
      { nome: "Panzerotto Fritto", ingredienti: "pomodoro, mozzarella, ventricina e svizzero", prezzo: "3.00" },
    ],
  },
  {
    key: "pizzeClassiche",
    label: "Pizze Classiche",
    icon: "/pizza-slice.png",
    items: [
      { nome: "Margherita", ingredienti: "pomodoro, mozzarella, origano", prezzo: "6.00" },
      { nome: "Napoli", ingredienti: "pomodoro, mozzarella, acciughe, capperi, olive", prezzo: "7.00" },
      { nome: "Marinara", ingredienti: "pomodoro, aglio, origano", prezzo: "3.50" },
      { nome: "Frutti di Mare", ingredienti: "pomodoro, mozzarella, frutti di mare", prezzo: "9.50" },
      { nome: "Caprese", ingredienti: "base piadina, pomodoro, mozzarella, prosciutto crudo, rucola", prezzo: "8.50" },
      { nome: "Capricciosa", ingredienti: "pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive", prezzo: "8.50" },
      { nome: "Quattro Stagioni", ingredienti: "pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive", prezzo: "8.50" },
      { nome: "Diavola", ingredienti: "pomodoro, mozzarella, salame piccante", prezzo: "7.00" },
      { nome: "Ortolana", ingredienti: "pomodoro, mozzarella, melanzane, zucchine, funghi, peperoni", prezzo: "8.50" },
      { nome: "Bufalina", ingredienti: "pomodoro, mozzarella di bufala, basilico", prezzo: "8.50" },
      { nome: "Americana", ingredienti: "pomodoro, mozzarella, patatine fritte, wurstel", prezzo: "8.50" },
      { nome: "Tonno e Cipolla", ingredienti: "pomodoro, mozzarella, tonno, cipolla", prezzo: "8.00" },
      { nome: "Delicata", ingredienti: "pomodoro, mozzarella, panna e crudo", prezzo: "8.50" },
      { nome: "Salsiccia e Friarielli", ingredienti: "pomodoro, mozzarella, salsiccia fresca e friarielli", prezzo: "9.00" },
      { nome: "Speck e Scamorza", ingredienti: "pomodoro, mozzarella, funghi, speck, scamorza", prezzo: "8.50" },
      { nome: "Mare e Monti", ingredienti: "pomodoro, mozzarella, funghi, gamberetti, grana, rucola", prezzo: "8.50" },
      { nome: "Della Casa", ingredienti: "pomodoro, mozzarella, grana, prosciutto cotto, rucola, funghi di muschio", prezzo: "9.50" },
      { nome: "Bufalina e Basilico", ingredienti: "pomodoro, mozzarella di bufala, basilico", prezzo: "9.00" },
      { nome: "Porchetta", ingredienti: "pomodoro, mozzarella, porchetta, salame piccante", prezzo: "9.00" },
    ],
  },
  {
    key: "pizzeSpeciali",
    label: "Pizze Speciali",
    icon: "/pizza-whole-slice.png",
    special: true,
    items: [
      { nome: "La Fattoria", ingredienti: "mozzarella DOP, pomodoro, funghi porcini, bresaola punta d'anca, grana, rucola e glassa", prezzo: "12.00" },
      { nome: "Burratina", ingredienti: "mozzarella DOP, pomodoro, capocollo M.F., pancetta, burratina, basilico", prezzo: "11.00" },
      { nome: "Esplosiva", ingredienti: "mozzarella DOP, battuto di friarielli, salamino piccante, olive nere, pomodoro ciliegino, basilico", prezzo: "11.00" },
      { nome: "Bolognese", ingredienti: "mozzarella DOP, mortadella, granella di pistacchio, burratina", prezzo: "11.00" },
      { nome: "Ventricina e Gorgonzola", ingredienti: "mozzarella DOP, pomodoro, ventricina e gorgonzola", prezzo: "11.00" },
      { nome: "Stracciatella", ingredienti: "mozzarella DOP, stracciatella, bresaola, grana, rucola", prezzo: "11.00" },
      { nome: "Casereccia", ingredienti: "mozzarella DOP, pomodoro, cipolla di Tropea, pomodori secchi, peperoncino, capocollo M.F.", prezzo: "11.00" },
    ],
  },
  {
    key: "primi",
    label: "Primi Piatti",
    icon: "/fork-spaghetti.png",
    items: [
      { nome: "Spaghetti agli Scampi", ingredienti: "", prezzo: "13.00" },
      { nome: "Penne all'Arrabbiata", ingredienti: "", prezzo: "10.00" },
      { nome: "Risotto ai Frutti di Mare", ingredienti: "", prezzo: "12.00" },
      { nome: "Trofie Salsiccia e Funghi", ingredienti: "", prezzo: "10.00" },
      { nome: "Penne alla Pescatora", ingredienti: "", prezzo: "12.00" },
      { nome: "Piatto del Giorno", ingredienti: "", prezzo: "VARIA" },
    ],
  },
  {
    key: "secondi",
    label: "Secondi Piatti",
    icon: "/steak.png",
    items: [
      { nome: "Costata di Vitello", ingredienti: "", prezzo: "12.00" },
      { nome: "Tagliata di Manzo", ingredienti: "", prezzo: "14.00" },
      { nome: "Frittura Mista Mare", ingredienti: "", prezzo: "14.00" },
      { nome: "Brace Mista di Carne", ingredienti: "", prezzo: "18.00" },
      { nome: "Piatto del Giorno", ingredienti: "", prezzo: "VARIA" },
    ],
  },
  {
    key: "contorni",
    label: "Contorni",
    icon: "/steak.png",
    items: [
      { nome: "Crocchette o altri fritti", ingredienti: "", prezzo: "5.00" },
      { nome: "Patate Fritte", ingredienti: "", prezzo: "5.00" },
      { nome: "Insalata Verde", ingredienti: "", prezzo: "5.00" },
      { nome: "Insalata Mista", ingredienti: "", prezzo: "7.00" },
      { nome: "Fritto Misto", ingredienti: "", prezzo: "12.00" },
    ],
  },
  {
    key: "bevande",
    label: "Bevande",
    icon: "/wine-glass-crack.png",
    items: [
      { nome: "Acqua Naturale", ingredienti: "Bottiglia 1L", prezzo: "2.00" },
      { nome: "Coca Cola", ingredienti: "Lattina 33cl", prezzo: "2.50" },
      { nome: "Fanta", ingredienti: "Lattina 33cl", prezzo: "2.50" },
      { nome: "Coca Cola", ingredienti: "Bottiglia 1,5L", prezzo: "4.00" },
      { nome: "Fanta", ingredienti: "Bottiglia 1,5L", prezzo: "4.00" },
      { nome: "Birra alla Spina", ingredienti: "Media 40cl", prezzo: "DISPONIBILITÀ" },
      { nome: "Vino della Casa", ingredienti: "Rosso o Bianco, calice", prezzo: "4.00" },
      { nome: "Birra in Bottiglia", ingredienti: "Raffo, Dreher, Heineken, Nastro Azzurro", prezzo: "DISPONIBILITÀ" },
    ],
  },
  {
    key: "dessert",
    label: "Dessert",
    icon: "/cheese-cake.png",
    items: [
      { nome: "Tiramisù", ingredienti: "savoiardi, mascarpone, caffè, cacao", prezzo: "6.00" },
      { nome: "Panna Cotta", ingredienti: "panna cotta con frutti di bosco", prezzo: "5.50" },
      { nome: "Cheesecake", ingredienti: "New York style con coulis di frutti rossi", prezzo: "6.50" },
      { nome: "Dolce del Giorno", ingredienti: "varia a seconda della disponibilità", prezzo: "—" },
    ],
  },
];

const EVENTI = [
  { 
    id: 1, 
    titolo: "Karaoke & Live Music", 
    data: "Ogni Sabato", 
    ora: "20:00 – 23:00", 
    descrizione: "Pizza, dolci e bevande. Perfetto per famiglie e gruppi di amici!", 
    img: "/tanto.jpg" 
  },
  { 
    id: 4, 
    titolo: "Gran Cenone di San Silvestro", 
    data: "31 Dicembre 2026", 
    ora: "20:00 – 2:00", 
    descrizione: "Evento e locandina ancora non disponibili.", 
    img: "/capo.jpg"
  },
  { 
    id: 2, 
    titolo: "San Valentino", 
    data: "14 Febbraio 2026", 
    ora: "19:00 – 00:00", 
    descrizione: "Menù speciale per coppie. Prenota il tuo tavolo e goditi la serata con musica dal vivo.", 
    img: "/sanvale.png" 
  },
  { 
    id: 3, 
    titolo: "Festa della Donna", 
    data: "8 Marzo 2026", 
    ora: "21:00 – 23:30", 
    descrizione: "Musica dal vivo. Ambiente magico per una serata indimenticabile!", 
    img: "/donnapizzeria.jpg" 
  },
  { 
    id: 5, 
    titolo: "Festa del Papà", 
    data: "19 Marzo 2026", 
    ora: "20:00 – 00:00", 
    descrizione: "Serata spettacolare con menù speciale, musica e brindisi. Prenota subito!", 
    img: "/papa.jpg" 
  },
  { 
    id: 6,
    titolo: "sagra della polpetta 25° anniversario",
    data: "13 Agosto 2026", 
    ora: "19:00 – 02:00", 
    descrizione: "25a sagra della polpetta, piazza V.Veneto - Avetrana.", 
    img: "/polpetta.png" 
  }
];
/* ─── STILI GLOBALI ─────────────────────────────────────────────────────── */
const globalStyle = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --gold: #C9A96E;
    --gold-light: #E8D5AA;
    --gold-dark: #8B6914;
    --black: #0A0A0A;
    --gray-900: #111111;
    --gray-800: #1A1A1A;
    --gray-700: #262626;
    --gray-600: #3A3A3A;
    --gray-400: #888888;
    --gray-200: #CCCCCC;
    --white: #FAF9F7;
    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body: 'Jost', 'Helvetica Neue', sans-serif;
    --radius: 12px;
    --transition: 0.3s cubic-bezier(0.4,0,0.2,1);
  }
  html { scroll-behavior: smooth; }
  body { background: var(--black); color: var(--white); font-family: var(--font-body); -webkit-font-smoothing: antialiased; }

  /* NAV BOTTOM (mobile-first) */
  .nav-bar {
    position: fixed; bottom: 0; left: 0; right: 0; z-index: 100;
    background: rgba(10,10,10,0.97);
    border-top: 1px solid var(--gray-700);
    backdrop-filter: blur(12px);
    display: flex; justify-content: space-around; align-items: center;
    padding: 8px 4px 12px;
    safe-area-inset-bottom: env(safe-area-inset-bottom);
  }
  @media(min-width:768px){
    .nav-bar { position: sticky; top: 0; bottom: auto; border-top: none; border-bottom: 1px solid var(--gray-700); padding: 12px 24px; justify-content: center; gap: 48px; }
  }
  .nav-item {
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    background: none; border: none; cursor: pointer; padding: 4px 8px;
    color: var(--gray-400); font-family: var(--font-body); font-size: 10px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase;
    transition: color var(--transition); min-width: 0; flex: 1; max-width: 72px;
  }
  .nav-item.active { color: var(--gold); }
  .nav-icon-wrap {
    width: 36px; height: 36px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    background: var(--gray-800); transition: background var(--transition), box-shadow var(--transition);
  }
  .nav-item.active .nav-icon-wrap {
    background: var(--gold-dark);
    box-shadow: 0 0 16px rgba(201,169,110,0.35);
  }
  .nav-icon-wrap img { width: 18px; height: 18px; filter: brightness(0) invert(1); opacity: 0.5; transition: opacity var(--transition); }
  .nav-item.active .nav-icon-wrap img { opacity: 1; }
  @media(min-width:768px){
    .nav-item { font-size: 11px; max-width: 100px; flex: none; }
    .nav-icon-wrap { width: 44px; height: 44px; }
    .nav-icon-wrap img { width: 20px; height: 20px; }
  }

  /* WHATSAPP FAB */
  .wa-fab {
    position: fixed; right: 16px; bottom: 76px; z-index: 200;
    width: 52px; height: 52px; border-radius: 50%;
    background: #25D366; color: #fff;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 24px rgba(37,211,102,0.4);
    animation: pulse-green 2.5s infinite;
    text-decoration: none;
  }
  @media(min-width:768px){ .wa-fab { bottom: 24px; right: 24px; width: 56px; height: 56px; } }
  @keyframes pulse-green {
    0%,100% { box-shadow: 0 4px 24px rgba(37,211,102,0.4); }
    50% { box-shadow: 0 4px 40px rgba(37,211,102,0.7); }
  }

  /* SEZIONI */
  .main-content { padding-bottom: 80px; }
  @media(min-width:768px){ .main-content { padding-bottom: 0; } }

  /* HERO */
  .hero { position: relative; height: 100svh; min-height: 520px; overflow: hidden; }
  .hero video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.9) 100%); }
  .hero-content { position: relative; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 24px; gap: 28px; }
  .hero-logo { max-width: 220px; width: 70%; }
  @media(min-width:768px){ .hero-logo { max-width: 320px; } }

  /* GOLD DIVIDER */
  .gold-divider { width: 60px; height: 2px; background: linear-gradient(to right, transparent, var(--gold), transparent); margin: 0 auto; }

  /* BUTTONS */
  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--gold); color: var(--black);
    border: none; border-radius: var(--radius);
    padding: 14px 32px; font-family: var(--font-body);
    font-size: 14px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
    cursor: pointer; transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
    text-decoration: none;
  }
  .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,169,110,0.3); }
  .btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--white);
    border: 1.5px solid rgba(255,255,255,0.5); border-radius: var(--radius);
    padding: 14px 32px; font-family: var(--font-body);
    font-size: 14px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
    cursor: pointer; transition: all var(--transition);
    text-decoration: none;
  }
  .btn-outline:hover { border-color: var(--gold); color: var(--gold); }
  .btn-dark {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    background: var(--gray-800); color: var(--white);
    border: 1px solid var(--gray-600); border-radius: var(--radius);
    padding: 13px 28px; font-family: var(--font-body);
    font-size: 13px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;
    cursor: pointer; transition: all var(--transition);
    width: 100%;
    text-decoration: none;
  }
  .btn-dark:hover { background: var(--gold-dark); border-color: var(--gold); color: var(--white); }

  /* SECTION TITLES */
  .section-title { font-family: var(--font-display); font-size: clamp(2.2rem,7vw,4rem); font-weight: 300; letter-spacing: 0.04em; color: var(--white); text-align: center; line-height: 1.1; }
  .section-title em { font-style: italic; color: var(--gold); }
  .section-sub { font-family: var(--font-body); font-size: 13px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); text-align: center; margin-bottom: 12px; }

  /* CARDS */
  .card { background: var(--gray-800); border: 1px solid var(--gray-700); border-radius: var(--radius); padding: 20px; transition: border-color var(--transition), transform var(--transition); }
  .card:hover { border-color: var(--gold-dark); transform: translateY(-2px); }
  .card-special { background: linear-gradient(135deg, var(--gray-800), var(--gray-900)); border-color: var(--gold-dark); }
  .card-price { font-family: var(--font-display); font-size: 1.6rem; font-weight: 600; color: var(--gold); white-space: nowrap; }
  .card-name { font-family: var(--font-body); font-size: 1rem; font-weight: 600; color: var(--white); }
  .card-desc { font-size: 0.8rem; color: var(--gray-400); margin-top: 4px; font-style: italic; line-height: 1.5; }

  /* MENU ACCORDION */
  .accordion-btn {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%; background: var(--gray-800); border: 1px solid var(--gray-700);
    border-radius: var(--radius); padding: 16px 20px;
    color: var(--white); font-family: var(--font-body); font-size: 15px; font-weight: 500; letter-spacing: 0.06em;
    cursor: pointer; transition: all var(--transition); text-align: left;
  }
  .accordion-btn:hover { background: var(--gray-700); border-color: var(--gold-dark); }
  .accordion-btn.open { border-color: var(--gold); background: rgba(201,169,110,0.06); }
  .accordion-icon { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: var(--gray-700); border-radius: 50%; flex-shrink: 0; margin-right: 12px; }
  .accordion-icon img { width: 16px; height: 16px; filter: brightness(0) invert(1); opacity: 0.7; }
  .accordion-arrow { font-size: 10px; color: var(--gold); transition: transform var(--transition); flex-shrink: 0; margin-left: 8px; }
  .accordion-arrow.open { transform: rotate(180deg); }
  .accordion-body { overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1); }

  /* GRID */
  .grid-2 { display: grid; grid-template-columns: 1fr; gap: 12px; }
  @media(min-width:640px){ .grid-2 { grid-template-columns: repeat(2,1fr); } }
  .grid-3 { display: grid; grid-template-columns: 1fr; gap: 16px; }
  @media(min-width:768px){ .grid-3 { grid-template-columns: repeat(3,1fr); } }

  /* FEATURE CHIPS */
  .chip { display: inline-flex; align-items: center; gap: 6px; background: var(--gray-700); border: 1px solid var(--gray-600); color: var(--gray-200); border-radius: 999px; padding: 6px 14px; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; }

  /* INFO CARD */
  .info-card { background: var(--gray-800); border: 1px solid var(--gray-700); border-radius: var(--radius); padding: 24px; }

  /* EVENT CARD */
  .event-card { background: var(--gray-800); border: 1px solid var(--gray-700); border-radius: 16px; overflow: hidden; transition: transform var(--transition), box-shadow var(--transition); }
  .event-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
  .event-img { width: 100%; height: 200px; object-fit: cover; }
  .event-placeholder { width: 100%; height: 200px; background: var(--gray-700); display: flex; align-items: center; justify-content: center; font-size: 3rem; }

  /* SALA CARD */
  .sala-card { background: var(--gray-800); border-radius: 20px; overflow: hidden; border: 1px solid var(--gray-700); }
  .sala-img {
  width: 100%;
  height: 220px; /* Ridotto per mobile */
  object-fit: cover;
}
@media (min-width: 768px) {
  .sala-img {
    height: 380px;
  }
}
@media (max-width: 480px) {
  .sala-img {
    height: 200px; /* Ancora più piccolo */
  }
}
  .sala-badge { display: inline-block; background: var(--gray-900); border: 1px solid var(--gold-dark); color: var(--gold); padding: 6px 16px; border-radius: 999px; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 16px; }

  /* STAT ROW */
  .stat-row { display: flex; align-items: center; gap: 12px; padding: 14px; background: var(--gray-900); border-radius: 10px; border: 1px solid var(--gray-700); }
  .stat-emoji { font-size: 1.5rem; flex-shrink: 0; }
  .stat-label { font-size: 0.95rem; font-weight: 600; color: var(--white); }
  .stat-sub { font-size: 0.75rem; color: var(--gray-400); margin-top: 1px; }

  /* SOCIAL LINKS */
  .social-link { display: flex; align-items: center; gap: 16px; padding: 20px; background: var(--gray-800); border: 1px solid var(--gray-700); border-radius: var(--radius); text-decoration: none; color: var(--white); transition: all var(--transition); }
  .social-link:hover { border-color: var(--gold); background: rgba(201,169,110,0.06); transform: translateX(4px); }
  
}
  .social-link {
  background: rgba(255, 255, 255, 0.05); /* leggero vetro */
  padding: 14px 18px;
  border-radius: 12px;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.social-link img {
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
  opacity: 0.9;
}



  /* CONTACT FORM */
  .form-group label { display: block; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 8px; }
  .form-input { width: 100%; background: var(--gray-700); border: 1px solid var(--gray-600); border-radius: 8px; padding: 12px 16px; color: var(--white); font-family: var(--font-body); font-size: 14px; transition: border-color var(--transition); }
  .form-input:focus { outline: none; border-color: var(--gold); }
  .form-input::placeholder { color: var(--gray-400); }

  /* ORARI INFO */
  .orari-badge { display: inline-block; background: rgba(201,169,110,0.12); border: 1px solid var(--gold-dark); color: var(--gold-light); padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; }

  /* SCROLL UTIL */
  .section-wrap { max-width: 900px; margin: 0 auto; padding: 40px 16px; }
  @media(min-width:768px){ .section-wrap { padding: 64px 24px; } }

  /* CTA BANNER */
  .cta-banner { background: linear-gradient(135deg, var(--gray-800) 0%, var(--gray-900) 100%); border: 1px solid var(--gray-700); border-radius: 20px; padding: 40px 24px; text-align: center; }
  .cta-banner h3 { font-family: var(--font-display); font-size: clamp(1.6rem,5vw,2.5rem); font-weight: 300; color: var(--white); margin-bottom: 10px; }
  .cta-banner p { color: var(--gray-400); font-size: 14px; margin-bottom: 24px; line-height: 1.7; }

  /* FOOTER */
  .footer { background: var(--gray-900); border-top: 1px solid var(--gray-700); padding: 32px 16px; text-align: center; }
  .footer p { font-size: 12px; color: var(--gray-400); line-height: 2; }
  .footer strong { color: var(--gold); font-weight: 500; font-family: var(--font-display); font-size: 15px; }

  /* SECTION TAG */
  .tag-line { display: inline-block; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold); border: 1px solid var(--gold-dark); padding: 5px 14px; border-radius: 999px; margin-bottom: 16px; }
`;

/* ─── ACCORDION MENU ──────────────────────────────────────────────────── */
function AccordionSection({ section }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: 10 }}>
      <button
        className={`accordion-btn${open ? " open" : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span style={{ display: "flex", alignItems: "center", flex: 1, minWidth: 0 }}>
          <span className="accordion-icon">
            <img src={section.icon} alt={section.label} />
          </span>
          <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.06em" }}>
            {section.label}
          </span>
          {section.special && (
            <span style={{ marginLeft: 10, background: "var(--gold-dark)", color: "var(--white)", fontSize: 9, padding: "2px 8px", borderRadius: 999, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", flexShrink: 0 }}>★ SPECIALI</span>
          )}
        </span>
        <span className={`accordion-arrow${open ? " open" : ""}`}>▼</span>
      </button>
      <div
        className="accordion-body"
        style={{ maxHeight: open ? "9999px" : "0" }}
      >
        <div className="grid-2" style={{ padding: "12px 0 4px" }}>
          {section.items.map((item, i) => (
            <div key={i} className={`card${section.special ? " card-special" : ""}`}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                <span className="card-name">{item.nome}</span>
                <span className="card-price">€{item.prezzo}</span>
              </div>
              {item.ingredienti && <p className="card-desc">{item.ingredienti}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── APP ────────────────────────────────────────────────────────────────── */
export default function App() {
  const [sezione, setSezione] = useState("home");
  const [formDati, setFormDati] = useState({ nome: "", email: "", messaggio: "" });

  const handleFormChange = (e) => setFormDati({ ...formDati, [e.target.name]: e.target.value });
  const handleFormInvia = () => {
    if (!formDati.nome || !formDati.messaggio) { alert("Per favore compila Nome e Messaggio."); return; }
    const testo = `Ciao! Mi chiamo ${formDati.nome}${formDati.email ? ` (${formDati.email})` : ""}.\n\n${formDati.messaggio}`;
    apriWhatsApp(testo);
    setFormDati({ nome: "", email: "", messaggio: "" });
  };

  return (
    <>
      <FontLoader />
      <style>{globalStyle}</style>

      {/* WA FAB */}
      <a className="wa-fab" href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ciao!%20Vorrei%20prenotare%20un%20tavolo`} target="_blank" rel="noopener noreferrer" title="Contattaci su WhatsApp">
        <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* NAVBAR */}
      <nav className="nav-bar">
        {NAV_ITEMS.map((item) => (
          <button key={item.id} className={`nav-item${sezione === item.id ? " active" : ""}`} onClick={() => setSezione(item.id)}>
            <span className="nav-icon-wrap">
              <img src={item.icon} alt={item.label} />
            </span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* MAIN */}
      <main className="main-content">

        {/* ── HOME ────────────────────────────────────────────── */}
        {sezione === "home" && (
          <div>
            {/* HERO */}
            <div className="hero">
              <video autoPlay loop muted playsInline>
                <source src="/pizza.mp4" type="video/mp4" />
              </video>
              <div className="hero-overlay" />
              <div className="hero-content">
                <img src="/laperla.png" alt="La Perla" className="hero-logo" />
                <div className="gold-divider" />
                <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--gold-light)", fontSize: "clamp(1rem,3vw,1.3rem)", letterSpacing: "0.05em" }}>
                  Dal 1993 · Avetrana
                </p>
                <button className="btn-primary" onClick={() => apriWhatsApp("Ciao! Vorrei prenotare un tavolo alla Pizzeria La Perla. Potete aiutarmi?")}>
                  Prenota un Tavolo
                </button>
              </div>
            </div>

            {/* STORIA */}
            <div className="section-wrap">
              <p className="section-sub">La nostra storia</p>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                Una <em>passione</em> che dura da trent'anni
              </h2>
              <div className="gold-divider" style={{ marginBottom: 32 }} />
              <p style={{ color: "var(--gray-200)", lineHeight: 1.9, fontSize: "1rem", fontFamily: "var(--font-body)", textAlign: "center", maxWidth: 640, margin: "0 auto 20px" }}>
                Dal 1993, La Perla porta sulle vostre tavole il vero sapore della pizza. Il nostro impasto viene lavorato a mano e lasciato lievitare naturalmente per 48 ore.
              </p>
              <p style={{ color: "var(--gray-400)", lineHeight: 1.9, fontSize: "0.9rem", textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
                Vi aspettiamo per farvi vivere un'esperienza culinaria autentica, in un ambiente accogliente e familiare.
              </p>

              <div className="grid-3" style={{ marginTop: 40 }}>
                {[
                  { icon: "/pizza-slice.png", title: "Pizza Artigianale", desc: "Forno a legna e lievitazione naturale 48h" },
                  { icon: "/recipe-book.png", title: "Ingredienti Freschi", desc: "Prodotti di prima qualità selezionati ogni giorno" },
                  { icon: "/hand-holding-heart.png", title: "Tradizione", desc: "Oltre trent'anni di passione e dedizione" },
                ].map((f) => (
                  <div key={f.title} className="info-card" style={{ textAlign: "center" }}>
                    <img src={f.icon} alt={f.title} style={{ width: 36, height: 36, filter: "invert(1)", opacity: 0.7, margin: "0 auto 12px" }} />
                    <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--white)", marginBottom: 6 }}>{f.title}</h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--gray-400)", lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* VIDEO 2 */}
            <div style={{ position: "relative", margin: "0 16px 24px", borderRadius: 20, overflow: "hidden" }}>
              <video autoPlay loop muted playsInline style={{ width: "100%", height: 280, objectFit: "cover" }}>
                <source src="/pasta.mp4" type="video/mp4" />
              </video>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
                <span className="tag-line">Il nostro ristorante</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,6vw,3rem)", color: "var(--white)", fontWeight: 300, lineHeight: 1.15, marginBottom: 16 }}>
                  Dove ogni momento<br /><em style={{ color: "var(--gold)" }}>diventa speciale</em>
                </h3>
                <button className="btn-outline" style={{ fontSize: 12, padding: "10px 24px" }} onClick={() => apriWhatsApp("Ciao! Vorrei prenotare un tavolo.")}>
                  Prenota Ora
                </button>
              </div>
            </div>

            {/* SALE */}
            <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 40px", display: "flex", flexDirection: "column", gap: 32 }}>
              {[
                {
                  img: "/sala2.jpeg", alt: "Sala Principale", badge: "Sala Principale",
                  title: "Sala Principale",
                  desc: "Un ambiente caldo e accogliente dove gustare le nostre specialità in un'atmosfera familiare.",
                  stats: [{ e: "👥", l: "110 Posti", s: "Capacità totale" }, { e: "❄️", l: "Climatizzata", s: "Estate e inverno" }, ],
                  chips: ["✓ Wi-Fi gratuito", "✓ Accessibile", "✗ No Fumatori"],
                  btnLabel: "Prenota un Tavolo", btnMsg: "Ciao! Vorrei prenotare un tavolo in Sala Principale."
                },
                {
                  video: "/video sala giardino.mp4", alt: "Giardino", badge: "Giardino & Feste",
                  title: "Giardino & Feste",
                  desc: "Uno spazio all'aperto ideale per feste, battesimi, comunioni e cene sotto le stelle.",
                  stats: [{ e: "🎊", l: "Fino a 70 persone", s: "Perfetto per eventi" },],
                  chips: ["✓ 70 mq", "✓ Zona coperta", "✓ Parcheggio"],
                  btnLabel: "Richiedi Preventivo", btnMsg: "Ciao! Vorrei un preventivo per un evento nel Giardino."
                },
                {
                  img: "/sala perla 1.jpeg", alt: "Sala Eventi", badge: "Sala Eventi",
                  title: "Sala Eventi",
                  desc: "Spazio elegante per matrimoni, compleanni, battesimi e cerimonie aziendali, feste private.",
                  stats: [{ e: "💍", l: "Fino a 120 persone", s: "Grandi eventi" }, { e: "🍽️", l: "Menù Custom", s: "Personalizzabile" }],
                  chips: ["✓ Catering", "✓ Decorazioni", "✓ Staff dedicato"],
                  btnLabel: "Organizza Evento", btnMsg: "Ciao! Vorrei organizzare un evento nella Sala Eventi."
                },
              ].map((sala) => (
                <div key={sala.title} className="sala-card">
                  {sala.video
                    ? <video autoPlay loop muted playsInline className="sala-img"><source src={sala.video} type="video/mp4" /></video>
                    : <img src={sala.img} alt={sala.alt} className="sala-img" />
                  }
                  <div style={{ padding: "24px 20px" }}>
                    <span className="sala-badge">{sala.badge}</span>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,5vw,2.2rem)", fontWeight: 300, color: "var(--white)", marginBottom: 10 }}>{sala.title}</h3>
                    <p style={{ color: "var(--gray-400)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16 }}>{sala.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                      {sala.stats.map((s) => (
                        <div key={s.l} className="stat-row">
                          <span className="stat-emoji">{s.e}</span>
                          <div><div className="stat-label">{s.l}</div><div className="stat-sub">{s.s}</div></div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                      {sala.chips.map((c) => <span key={c} className="chip">{c}</span>)}
                    </div>
                    <button className="btn-dark" onClick={() => apriWhatsApp(sala.btnMsg)}>{sala.btnLabel}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── MENU ────────────────────────────────────────────── */}
        {sezione === "menu" && (
          <div className="section-wrap">
            <p className="section-sub">La nostra cucina</p>
            <h2 className="section-title" style={{ marginBottom: 8 }}>Il Nostro <em>Menù</em></h2>
            <div className="gold-divider" style={{ marginBottom: 32 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {MENU_SECTIONS.map((s) => <AccordionSection key={s.key} section={s} />)}
            </div>
          </div>
        )}

        {/* ── CONTATTI ────────────────────────────────────────── */}
        {sezione === "contatti" && (
          <div className="section-wrap">
            <p className="section-sub">Dove siamo</p>
            <h2 className="section-title" style={{ marginBottom: 8 }}>Contattaci</h2>
            <div className="gold-divider" style={{ marginBottom: 32 }} />

            <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 32 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.1234567890!2d17.7234567!3d40.3234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE5JzI0LjQiTiAxN8KwNDMnMjQuNCJF!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%" height="280" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {[
                { icon: "/search-location.png", title: "Indirizzo", content: "Via Alcide De Gasperi, 86 — Avetrana (TA)", link: { href: "https://maps.google.com/?q=Via+Alcide+De+Gasperi+86+Avetrana", label: "📍 Apri in Google Maps" } },
                { icon: "/phone-call.png", title: "Telefono", content: "340 117 7597", link: { href: "tel:3401177597", label: "Chiama ora" } },
                { icon: "/clock-three.png", title: "Orari di Apertura", content: null },
              ].map((item) => (
                <div key={item.title} className="info-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <img src={item.icon} alt={item.title} style={{ width: 28, height: 28, filter: "invert(1)", opacity: 0.6 }} />
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>{item.title}</span>
                  </div>
                  {item.content && <p style={{ color: "var(--gray-200)", fontSize: "0.9rem", marginBottom: item.link ? 12 : 0 }}>{item.content}</p>}
                  {item.title === "Orari di Apertura" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <p style={{ color: "var(--gray-200)", fontSize: "0.9rem" }}>Lunedì – Domenica: 12:00 – 15:00</p>
                      <p style={{ color: "var(--gray-200)", fontSize: "0.9rem" }}>Lunedì – Domenica: 19:00 – 23:30</p>
                      <span className="orari-badge" style={{ marginTop: 8, display: "inline-block" }}>⚠ Chiuso il Mercoledì</span>
                    </div>
                  )}
                  {item.link && <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ display: "inline-flex", width: "auto", marginTop: 4 }}>{item.link.label}</a>}
                </div>
              ))}
            </div>

            {/* FORM */}
            <div className="info-card" style={{ marginBottom: 32 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 300, color: "var(--white)", marginBottom: 24 }}>
                Inviaci un <em style={{ color: "var(--gold)" }}>messaggio</em>
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Nome *", name: "nome", type: "text", placeholder: "Il tuo nome" },
                  { label: "Email", name: "email", type: "email", placeholder: "tua@email.com" },
                ].map((f) => (
                  <div key={f.name} className="form-group">
                    <label>{f.label}</label>
                    <input className="form-input" type={f.type} name={f.name} value={formDati[f.name]} onChange={handleFormChange} placeholder={f.placeholder} />
                  </div>
                ))}
                <div className="form-group">
                  <label>Messaggio *</label>
                  <textarea className="form-input" name="messaggio" value={formDati.messaggio} onChange={handleFormChange} placeholder="Scrivici qui..." rows={4} style={{ resize: "vertical" }} />
                </div>
                <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={handleFormInvia}>
                  Invia su WhatsApp 💬
                </button>
              </div>
            </div>

            <div className="cta-banner">
              <p className="section-sub">Organizziamo il tuo evento</p>
              <h3>Il tuo momento <em style={{ color: "var(--gold)", fontStyle: "italic" }}>indimenticabile</em></h3>
              <p>Contattaci per un preventivo personalizzato. Ci occupiamo di ogni dettaglio.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                <a href="tel:+393401177597" className="btn-primary">📞 Chiama Ora</a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ciao!%20Vorrei%20informazioni%20per%20un%20evento`} target="_blank" rel="noopener noreferrer" className="btn-outline">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        )}

        {/* ── EVENTI ──────────────────────────────────────────── */}
        {sezione === "eventi" && (
          <div className="section-wrap">
            <p className="section-sub">Cosa succede da noi</p>
            <h2 className="section-title" style={{ marginBottom: 8 }}>I Nostri <em>Eventi</em></h2>
            <div className="gold-divider" style={{ marginBottom: 32 }} />
            <div className="grid-2">
              {EVENTI.map((ev) => (
                <div key={ev.id} className="event-card">
                  {ev.img
                    ? <img src={ev.img} alt={ev.titolo} className="event-img" />
                    : <div className="event-placeholder">🎉</div>
                  }
                  <div style={{ padding: "20px 16px" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--white)", marginBottom: 12, textTransform: "capitalize" }}>{ev.titolo}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <span style={{ fontSize: "1rem" }}>📅</span>
                        <div>
                          <div style={{ fontSize: 10, color: "var(--gray-400)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Data</div>
                          <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--gold-light)" }}>{ev.data}</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <span style={{ fontSize: "1rem" }}>⏰</span>
                        <div>
                          <div style={{ fontSize: 10, color: "var(--gray-400)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Orario</div>
                          <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--gold-light)" }}>{ev.ora}</div>
                        </div>
                      </div>
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "var(--gray-400)", lineHeight: 1.6, marginBottom: 16, fontStyle: "italic" }}>{ev.descrizione}</p>
                    <button
                      className="btn-dark"
                      onClick={() => apriWhatsApp(`Ciao! Sono interessato all'evento "${ev.titolo}" del ${ev.data}. Vorrei prenotare.`)}
                    >
                      Prenota Ora
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cta-banner" style={{ marginTop: 40 }}>
              <h3>Non perdere nessun <em style={{ color: "var(--gold)", fontStyle: "italic" }}>evento</em></h3>
              <p>Seguici sui social e ricevi aggiornamenti in tempo reale su tutti i nostri appuntamenti.</p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
                💬 Notifiche WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* ── SOCIAL ──────────────────────────────────────────── */}
        {sezione === "social" && (
          <div className="section-wrap">
            <p className="section-sub">Rimani in contatto</p>
            <h2 className="section-title" style={{ marginBottom: 8 }}>Seguici sui <em>Social</em></h2>
            <div className="gold-divider" style={{ marginBottom: 32 }} />
            <p style={{ color: "var(--gray-400)", textAlign: "center", marginBottom: 32, fontSize: "0.9rem", lineHeight: 1.8 }}>
              Novità, offerte speciali ed eventi in diretta sui nostri canali.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
              {[
                { href: "https://www.facebook.com/laperlacoffeebeerwine?mibextid=wwXIfr", icon: "/facebook.png", name: "Facebook", handle: "@laperlacoffeebeerwine", color: "#1877F2" },
                { href: "https://www.instagram.com/laperla_avetrana?igsh=MWh3dTl1MHM2ejNkbQ%3D%3D", icon: "/camera.png", name: "Instagram", handle: "@laperla_avetrana", color: "#E1306C" },
                { href: "https://www.google.com/search?q=la+perla+avetrana", icon: "/google.png", name: "Google", handle: "La Perla – Avetrana", color: "#4285F4" },
              ].map((s) => (
                <a key={s.name} className="social-link" href={s.href} target="_blank" rel="noopener noreferrer">
                  <img src={s.icon} alt={s.name} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: "1rem", color: "var(--white)", marginBottom: 2 }}>{s.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--gray-400)" }}>{s.handle}</div>
                  </div>
                  <span style={{ color: "var(--gold)", fontSize: "1.2rem" }}>→</span>
                </a>
              ))}
            </div>
            <div className="footer">
              <strong>La Perla Pizzeria Ristorante</strong>
              <p>Dal 1993 · Via Alcide De Gasperi, 86 · Avetrana (TA)</p>
              <p style={{ marginTop: 8 }}>© 2025 – Tutti i diritti riservati</p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
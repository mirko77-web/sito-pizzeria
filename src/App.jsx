import { useState } from "react";

function App() {
  const [sezioneAttiva, setSezioneAttiva] = useState("home");
  const [sezioniMenuAperte, setSezioniMenuAperte] = useState({
    pizzeClassiche: false,
    pizzeSpeciali: false,
    primiPiatti: false,
    secondiPiatti: false,
    bevande: false,
    dessert: false,
  });

  
  const eventi = [
    {
      id: 1,
      titolo: "Gran cenone di San Silvestro",
      data: "31 Dicembre 2025",
      ora: "20:00 - 2:00",
      descrizione: "gran cenone di San silvestro , aspettando il capodanno con menù e dj set",
     
    },
    {
      id: 2,
      titolo: "San Valentino",
      data: "14 Febbraio 2026",
      ora: "19:00 - 00:00",
      descrizione: "Menu speciale per coppie. Prenota il tuo tavolo e goditi la serata con musica dal vivo.",
     
    },
    {
      id: 3,
      titolo: "festa della donna",
      data: "8 marzo 2026",
      ora: "21:00 - 23:30",
      descrizione: "Musica dal vivo . Ambiente magico per una serata indimenticabile!",
      
    },
    {
      id: 4,
      titolo: "karaoke e live music",
      data: "Ogni sabato",
      ora: "20:00 - 23:00",
      descrizione: " pizza, dolci e bevande. Perfetto per famiglie e gruppi di amici !",
     
    },
    {
      id: 5,
      titolo: "Festa del papà",
      data: "19 Marzo 2026",
      ora: "20:00 - 00:00",
      descrizione: "Serata spettacolare con menù speciale, musica e brindisi. Prenota subito!",
     
    },
    
  ];


  const toggleSezioneMenu = (sezione) => {
    setSezioniMenuAperte((prev) => ({
      ...prev,
      [sezione]: !prev[sezione],
    }));
  };
  return (
    <div className="min-h-screen bg-black">
      {/* NAVBAR */}
      <nav className="bg-black shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-center items-center">
            {/* Menu Bottoni Circolari */}
            <div className="flex gap-6">
              {/* Home */}
              <button
                onClick={() => setSezioneAttiva("home")}
                className={`flex flex-col items-center gap-2 transition group ${
                  sezioneAttiva === "home" ? "" : "opacity-70 hover:opacity-100"
                }`}
              >
                {/* Bottone WhatsApp Fluttuante */}

                <a
                  href="https://wa.me/393481234567?text=Ciao!%20Vorrei%20prenotare%20un%20tavolo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 transition-all duration-300 hover:scale-110 animate-bounce"
                  title="Contattaci su WhatsApp"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>

                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition ${
                    sezioneAttiva === "home"
                      ? "bg-red-600 ring-2 ring-red-400"
                      : "bg-gray-800 group-hover:bg-gray-700"
                  }`}
                >
                  <img
                    src="/house-chimney-heart.png"
                    alt="Home"
                    className={`w-8 h-8 transition ${
                      sezioneAttiva === "home" ? "" : "brightness-0 invert"
                    }`}
                  />
                </div>
                <span className="text-white text-sm font-medium">Home</span>
              </button>

              {/* Menu */}
              <button
                onClick={() => setSezioneAttiva("menu")}
                className={`flex flex-col items-center gap-2 transition group ${
                  sezioneAttiva === "menu" ? "" : "opacity-70 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition ${
                    sezioneAttiva === "menu"
                      ? "bg-red-600 ring-2 ring-red-400"
                      : "bg-gray-800 group-hover:bg-gray-700"
                  }`}
                >
                  <img
                    src="/menu-burger.png"
                    alt="Menu"
                    className={`w-8 h-8 transition ${
                      sezioneAttiva === "menu" ? "" : "brightness-0 invert"
                    }`}
                  />
                </div>
                <span className="text-white text-sm font-medium">Menu</span>
              </button>

              <button
                onClick={() => setSezioneAttiva("contatti")}
                className={`flex flex-col items-center gap-2 transition group ${
                  sezioneAttiva === "contatti"
                    ? ""
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition ${
                    sezioneAttiva === "contatti"
                      ? "bg-red-600 ring-2 ring-red-400"
                      : "bg-gray-800 group-hover:bg-gray-700"
                  }`}
                >
                  <img
                    src="/phone-call.png"
                    alt="Contatti"
                    className={`w-8 h-8 transition ${
                      sezioneAttiva === "contatti" ? "" : "brightness-0 invert"
                    }`}
                  />
                </div>
                <span className="text-white text-sm font-medium">Contatti</span>
              </button>
{/* Eventi */}
              <button
                onClick={() => setSezioneAttiva("eventi")}
                className={`flex flex-col items-center gap-2 transition group ${
                  sezioneAttiva === "eventi"
                    ? ""
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition ${
                    sezioneAttiva === "eventi"
                      ? "bg-red-600 ring-2 ring-red-400"
                      : "bg-gray-800 group-hover:bg-gray-700"
                  }`}
                >
                  <img
                    src="public/party_2982898.png"
                    alt="Eventi"
                    className={`w-8 h-8 transition ${
                      sezioneAttiva === "eventi" ? "" : "brightness-0 invert"
                    }`}
                  />
                </div>
                <span className="text-white text-sm font-medium">eventi</span>
              </button>
              <button
                onClick={() => setSezioneAttiva("social")}
                className={`flex flex-col items-center gap-2 transition group ${
                  sezioneAttiva === "social"
                    ? ""
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition ${
                    sezioneAttiva === "social"
                      ? "bg-red-600 ring-2 ring-red-400"
                      : "bg-gray-800 group-hover:bg-gray-700"
                  }`}
                >
                  <img
                    src="/3917633.png"
                    alt="Social"
                    className={`w-8 h-8 transition ${
                      sezioneAttiva === "social" ? "" : "brightness-0 invert"
                    }`}
                  />
                </div>
                <span className="text-white text-sm font-medium">Social</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTENUTO PRINCIPALE */}
      <main>
        {/* SEZIONE HOME con VIDEO */}
        {sezioneAttiva === "home" && (
          <div className="relative">
            {/* Hero Section con Video */}
            <div className="relative h-[600px] overflow-hidden">
              {/* Video di sfondo */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="/pizza.mp4" type="video/mp4" />
              </video>

              {/* Overlay scuro */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Testo sopra il video */}
              <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
                <img src="public/laperla.png" alt="logo perla " className="" />
                <button className="bg-black hover:bg-red-600 text-white hover:text-black border-2 border-black px-8 py-4 rounded-lg text-xl font-semibold shadow-lg transition animate-pulse-slow">
                  Prenota un Tavolo
                </button>
              </div>
            </div>

            {/* Presentazione Testuale */}
            <div className="max-w-6xl mx-auto px-4 py-16">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Colonna Sinistra */}
                <div>
                  <h3 className="text-4xl font-bold text-red-800 mb-6">
                    La Nostra Storia
                  </h3>
                  <p className="text-lg text-white mb-4">
                    Dal 1993, La Perla porta sulle vostre tavole il vero sapore
                    della pizza. La nostra passione per la tradizione si unisce
                    alla ricerca costante della qualità.
                  </p>
                  <p className="text-lg text-white mb-4">
                    Ogni pizza è preparata con amore, utilizzando solo
                    ingredienti freschi e selezionati. Il nostro impasto viene
                    lavorato a mano e lasciato lievitare naturalmente per 48
                    ore.
                  </p>
                  <p className="text-lg text-white">
                    Vi aspettiamo per farvi vivere un'esperienza culinaria
                    autentica, in un ambiente accogliente e familiare.
                  </p>
                </div>

                {/* Colonna Destra */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-2">
                      <img
                        src="/pizza-slice.png"
                        alt="pizza"
                        className="w-8 h-8"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-black-800 mb-2">
                      Pizza
                    </h4>
                    <p className="text-gray-600">
                      Autentica tradizione con forno a legna e lievitazione
                      naturale
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-2">
                      <img
                        src="/recipe-book.png"
                        alt="ingredienti"
                        className="w-8 h-8"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-black-800 mb-2">
                      Ingredienti Freschi
                    </h4>
                    <p className="text-gray-600">
                      Selezioniamo solo prodotti di prima qualità e a km zero
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-2">
                      <img
                        src="/hand-holding-heart.png"
                        alt="tradizione"
                        className="w-8 h-8"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-black-800 mb-2">
                      tradizione
                    </h4>
                    <p className="text-gray-600">
                      Il nostro team ha oltre 25 anni di esperienza combinata
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Presentazione Testuale */}
            <div className="max-w-6xl mx-auto px-4 py-16">
              <div className="grid md:grid-cols-2 gap-12"></div>
            </div>

            {/* Sezione Sale - Layout a Scala */}
            <div className="max-w-7xl mx-auto px-4 py-16">
              {/* Video Hero Introduttivo */}
              <div className="relative mb-24">
                {/* Container Video */}
                <div className="max-w-6xl mx-auto px-4">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    {/* Video */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[500px] object-cover"
                    >
                      <source src="/pasta.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay gradiente animato */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                    {/* Contenuto sopra il video */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16">
                      {/* Badge */}
                      <div className="inline-block bg-black text-white px-6 py-2 rounded-full font-bold mb-4 w-fit">
                        ✨ Il nostro ristorante
                      </div>

                      {/* Titolo principale */}
                      <h3 className="text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                        Dove Ogni Momento
                        <br />
                        Diventa Speciale
                      </h3>

                      {/* Descrizione */}
                      <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                        Tre ambienti unici pensati per accogliere i tuoi momenti
                        più importanti. Dal pranzo alla cena al grande evento.
                      </p>

                      {/* Bottoni CTA */}
                      <div className="flex flex-wrap gap-4">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-xl font-bold text-lg transition">
                          Prenota Ora
                        </button>
                      </div>
                    </div>

                    {/* Decorazione angoli */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-600/20 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-600/20 to-transparent rounded-tr-full"></div>
                  </div>
                </div>

                {/* Linea decorativa sotto */}
                <div className="max-w-6xl mx-auto px-4 mt-8">
                  <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-32">
                {/* Card 1 - Sala Principale (Immagine Sinistra, Testo Destra) */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Immagine Card */}
                  <div className="w-full lg:w-1/2 transform lg:-translate-y-12">
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                      <img
                        src="public/sala perla 2.jpeg"
                        alt="Sala Principale"
                        className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Overlay hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                      {/* Badge */}
                      <div className="absolute top-6 left-6 bg-white text-black px-6 py-3 rounded-full font-bold shadow-lg">
                         Sala Principale
                      </div>

                      {/* Testo hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-lg font-semibold">
                          Clicca per scoprire di più...
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Testo */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-6">
                      <h4 className="text-5xl font-bold text-white">
                        Sala Principale
                      </h4>
                    </div>

                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      Un ambiente caldo e accogliente dove potrete gustare le
                      nostre specialità in un'atmosfera familiare. La nostra
                      sala interna è stata progettata per farvi sentire a casa,
                      con arredi eleganti e un'illuminazione soffusa.
                    </p>

                    {/* Caratteristiche */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
                        <span className="text-4xl">👥</span>
                        <div>
                          <span className="font-bold text-white text-xl block">
                            110 Posti
                          </span>
                          <span className="text-gray-400">Capacità totale</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
                        <span className="text-4xl">❄️</span>
                        <div>
                          <span className="font-bold text-white text-xl block">
                            Climatizzata
                          </span>
                          <span className="text-gray-400">
                            Estate e inverno
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
                        <span className="text-4xl">🎵</span>
                        <div>
                          <span className="font-bold text-white text-xl block">
                            Musica
                          </span>
                          <span className="text-gray-400">
                            Ambiente rilassante
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Badge benefici */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                        ✓ Wi-Fi gratuito
                      </span>
                      <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                        ✓ Accessibile
                      </span>
                      <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                        ✗ Zona NON fumatori
                      </span>
                    </div>

                    <button className="bg-white hover:bg-red-700 text-black px-10 py-4 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-lg">
                      Prenota un Tavolo
                    </button>
                  </div>
                </div>

                {/* Card 2 - Giardino/Sala Eventi (Testo Sinistra, Immagine Destra) */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                  {/* Immagine Card */}
                  <div className="w-full lg:w-1/2 transform lg:translate-y-12">
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                      >
                        <source
                          src="/video sala giardino.mp4"
                          type="video/mp4"
                        />
                        Il tuo browser non supporta il tag video
                      </video>

                      {/* Overlay hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                      {/* Badge */}
                      <div className="absolute top-6 right-6 bg-white text-black px-6 py-3 rounded-full font-bold shadow-lg">
                      Giardino
                      </div>

                      {/* Testo hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-lg font-semibold">
                          Clicca per scoprire di più...
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Testo */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-6">
                      
                      <h4 className="text-5xl font-bold text-white">
                        Giardino & Feste
                      </h4>
                    </div>

                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      Una sala all'aperto perfetta per le serate estive. Il
                      nostro giardino offre un ampio spazio ideale per feste,
                      battesimi, comunioni e cene sotto le stelle in
                      un'atmosfera magica.
                    </p>

                    {/* Caratteristiche */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
                        <span className="text-4xl">🎊</span>
                        <div>
                          <span className="font-bold text-white text-xl block">
                            Eventi Speciali
                          </span>
                          <span className="text-gray-400">
                            Fino a 70 persone
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
                        <span className="text-4xl">💡</span>
                        <div>
                          <span className="font-bold text-white text-xl block">
                            Illuminazione
                          </span>
                          <span className="text-gray-400">Scenografica</span>
                        </div>
                      </div>
                    
                    </div>

                    {/* Badge benefici */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                        ✓ Spazio 70 mq
                      </span>
                      <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                        ✓ Zona coperta
                      </span>
                      <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                        ✓ Parcheggio
                      </span>
                    </div>

                    <button className="bg-white hover:bg-red-700 text-black px-10 py-4 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-lg">
                      Richiedi Preventivo
                    </button>
                  </div>
                </div>

                {/* Card 3 - Sala Eventi (Immagine Sinistra, Testo Destra) */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Immagine Card */}
                  <div className="w-full lg:w-1/2 transform lg:-translate-y-12">
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                      <img
                        src="public/sala perla 1.jpeg"
                        alt="Sala Eventi"
                        className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Overlay hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                      {/* Badge */}
                      <div className="absolute top-6 left-6 bg-white text-black px-6 py-3 rounded-full font-bold shadow-lg">
                       Sala Eventi
                      </div>

                      {/* Testo hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-lg font-semibold">
                          Clicca per scoprire di più...
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Testo */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-6">
                      
                      <h4 className="text-5xl font-bold text-white">
                        Sala Eventi
                      </h4>
                    </div>

                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      Uno spazio elegante e raffinato dedicato ai tuoi momenti
                      più importanti. Ideale per matrimoni, compleanni,
                      battesimi, comunioni e cerimonie aziendali. Un ambiente
                      che renderà il tuo evento davvero speciale.
                    </p>

                    {/* Caratteristiche */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
                        <span className="text-4xl">💍</span>
                        <div>
                          <span className="font-bold text-white text-xl block">
                            eventi speciali
                          </span>
                          <span className="text-gray-400">
                            Fino a 120 persone
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
                        <span className="text-4xl">🎤</span>
                        <div>
                          <span className="font-bold text-white text-xl block">
                            Audio Pro
                          </span>
                          <span className="text-gray-400">
                            Sistema professionale
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
                        <span className="text-4xl">🍽️</span>
                        <div>
                          <span className="font-bold text-white text-xl block">
                            Menu Custom
                          </span>
                          <span className="text-gray-400">
                            Personalizzabile
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Badge benefici */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                        ✓ Servizio catering
                      </span>
                      <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                        ✓ Decorazioni incluse
                      </span>
                      <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                        ✓ Staff dedicato
                      </span>
                    </div>

                    <button className="bg-white hover:bg-red-700 text-black px-10 py-4 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-lg">
                      Organizza Evento
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        )}
      
          {sezioneAttiva === "menu" && (
          <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
          <div className="max-w-6xl mx-auto px-4 py-16">
           <h2 className="text-5xl font-bold text-gray-900 text-center mb-12">
                Il Nostro Menu
              </h2>

              {/* PIZZE CLASSICHE */}
              <button
                className="flex items-center justify-between w-full bg-black text-white px-6 py-3 rounded-lg font-bold mb-4 mt-8"
                onClick={() => toggleSezioneMenu("pizzeClassiche")}
                aria-expanded={sezioniMenuAperte.pizzeClassiche}
              >
                <div className="flex items-center">
                  <img
                    src="pizza-slice.png"
                    className="w-10 h-10 invert mr-4 "
                    alt="pizza"
                  />
                  <span>Pizze Classiche</span>
                </div>
                <span>{sezioniMenuAperte.pizzeClassiche ? "▲" : "▼"}</span>
              </button>

              {sezioniMenuAperte.pizzeClassiche && (
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      nome: "Margherita",
                      ingredienti: "Pomodoro, mozzarella, basilico",
                      prezzo: "7.00",
                    },
                    {
                      nome: "Marinara",
                      ingredienti: "Pomodoro, aglio, origano, olio evo",
                      prezzo: "6.00",
                    },
                    {
                      nome: "Diavola",
                      ingredienti: "Pomodoro, mozzarella, salame piccante",
                      prezzo: "8.50",
                    },
                    {
                      nome: "Quattro Stagioni",
                      ingredienti:
                        "Pomodoro, mozzarella, prosciutto, funghi, carciofi, olive",
                      prezzo: "10.00",
                    },
                    {
                      nome: "Capricciosa",
                      ingredienti:
                        "Pomodoro, mozzarella, prosciutto, funghi, carciofi",
                      prezzo: "9.50",
                    },
                    {
                      nome: "Quattro Formaggi",
                      ingredienti:
                        "Mozzarella, gorgonzola, fontina, parmigiano",
                      prezzo: "9.00",
                    },
                  ].map((pizza) => (
                    <div
                      key={pizza.nome}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-black-800">
                          {pizza.nome}
                        </h4>
                        <span className="text-2xl font-bold text-red-600">
                          €{pizza.prezzo}
                        </span>
                      </div>
                      <p className="text-gray-600">{pizza.ingredienti}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* PIZZE SPECIALI */}
              <button
                className="flex items-center justify-between w-full bg-black text-white px-6 py-3 rounded-lg font-bold mb-4 mt-8"
                onClick={() => toggleSezioneMenu("pizzeSpeciali")}
                aria-expanded={sezioniMenuAperte.pizzeSpeciali}
              >
                <div className="flex items-center">
                  <img
                    src="pizza-whole-slice.png"
                    className="w-10 h-10 invert mr-4 "
                    alt="pizza"
                  />
                  <span>Pizze Speciali</span>
                </div>
                <span>{sezioniMenuAperte.pizzeSpeciali ? "▲" : "▼"}</span>
              </button>

              {sezioniMenuAperte.pizzeSpeciali && (
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      nome: "La Perla",
                      ingredienti:
                        "Pomodoro, bufala, pachino, rucola, scaglie di parmigiano",
                      prezzo: "12.00",
                    },
                    {
                      nome: "Salsiccia e Friarielli",
                      ingredienti:
                        "Mozzarella, salsiccia napoletana, friarielli",
                      prezzo: "11.00",
                    },
                    {
                      nome: "Tartufata",
                      ingredienti:
                        "Mozzarella, funghi porcini, crema di tartufo",
                      prezzo: "13.50",
                    },
                    {
                      nome: "Burrata e Crudo",
                      ingredienti:
                        "Pomodoro, burrata, prosciutto crudo di Parma, rucola",
                      prezzo: "14.00",
                    },
                  ].map((pizza) => (
                    <div
                      key={pizza.nome}
                      className="bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-lg shadow-md hover:shadow-xl transition border-2 border-red-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-black-800">
                          {pizza.nome}
                        </h4>
                        <span className="text-2xl font-bold text-red-600">
                          €{pizza.prezzo}
                        </span>
                      </div>
                      <p className="text-gray-600">{pizza.ingredienti}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* PRIMI PIATTI */}
              <button
                className="flex items-center justify-between w-full bg-black text-white px-6 py-3 rounded-lg font-bold mb-4 mt-8"
                onClick={() => toggleSezioneMenu("primiPiatti")}
                aria-expanded={sezioniMenuAperte.primiPiatti}
              >
                <div className="flex items-center">
                  <img
                    src="fork-spaghetti.png"
                    className="w-10 h-10 invert mr-4 "
                    alt="primi piatti "
                  />
                  <span>Primi Piatti</span>
                </div>
                <span>{sezioniMenuAperte.primiPiatti ? "▲" : "▼"}</span>
              </button>

              {sezioniMenuAperte.primiPiatti && (
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      nome: "Spaghetti alla Carbonara",
                      ingredienti: "Guanciale, uova, pecorino, pepe nero",
                      prezzo: "10.00",
                    },
                    {
                      nome: "Pasta all'Amatriciana",
                      ingredienti: "Guanciale, pomodoro, pecorino, peperoncino",
                      prezzo: "9.50",
                    },
                    {
                      nome: "Risotto ai Funghi Porcini",
                      ingredienti:
                        "Riso carnaroli, funghi porcini, parmigiano, burro",
                      prezzo: "12.00",
                    },
                    {
                      nome: "Tagliatelle al Ragù",
                      ingredienti: "Pasta fresca, ragù di carne, parmigiano",
                      prezzo: "11.00",
                    },
                  ].map((piatto) => (
                    <div
                      key={piatto.nome}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-black-800">
                          {piatto.nome}
                        </h4>
                        <span className="text-2xl font-bold text-red-600">
                          €{piatto.prezzo}
                        </span>
                      </div>
                      <p className="text-gray-600">{piatto.ingredienti}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* SECONDI PIATTI */}
              <button
                className="flex items-center justify-between w-full bg-black text-white px-6 py-3 rounded-lg font-bold mb-4 mt-8"
                onClick={() => toggleSezioneMenu("secondiPiatti")}
                aria-expanded={sezioniMenuAperte.secondiPiatti}
              >
                <div className="flex items-center">
                  <img
                    src="steak.png"
                    className="w-10 h-10 invert mr-4 "
                    alt="secondi piatti "
                  />
                  <span>Secondi Piatti</span>
                </div>
                <span>{sezioniMenuAperte.secondiPiatti ? "▲" : "▼"}</span>
              </button>

              {sezioniMenuAperte.secondiPiatti && (
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      nome: "Tagliata di Manzo",
                      ingredienti:
                        "Manzo, rucola, pomodorini, scaglie di grana",
                      prezzo: "16.00",
                    },
                    {
                      nome: "Grigliata Mista di Carne",
                      ingredienti:
                        "Salsiccia, costine, bistecca, patate al forno",
                      prezzo: "18.00",
                    },
                    {
                      nome: "Filetto di Branzino",
                      ingredienti: "Branzino, verdure grigliate, limone",
                      prezzo: "15.00",
                    },
                    {
                      nome: "Cotoletta alla Milanese",
                      ingredienti: "Vitello impanato, patate fritte, limone",
                      prezzo: "14.00",
                    },
                  ].map((piatto) => (
                    <div
                      key={piatto.nome}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-black-800">
                          {piatto.nome}
                        </h4>
                        <span className="text-2xl font-bold text-red-600">
                          €{piatto.prezzo}
                        </span>
                      </div>
                      <p className="text-gray-600">{piatto.ingredienti}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* BEVANDE */}
              <button
                className="flex items-center justify-between w-full bg-black text-white px-6 py-3 rounded-lg font-bold mb-4 mt-8"
                onClick={() => toggleSezioneMenu("bevande")}
                aria-expanded={sezioniMenuAperte.bevande}
              >
                <div className="flex items-center">
                  <img
                    src="wine-glass-crack.png"
                    className="w-10 h-10 invert mr-4 "
                    alt="bevande"
                  />
                  <span>Bevande</span>
                </div>
                <span>{sezioniMenuAperte.bevande ? "▲" : "▼"}</span>
              </button>

              {sezioniMenuAperte.bevande && (
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      nome: "Acqua Naturale",
                      ingredienti: "Bottiglia 1L",
                      prezzo: "2.00",
                    },
                    {
                      nome: "Coca Cola",
                      ingredienti: "Lattina 33cl",
                      prezzo: "3.00",
                    },
                    {
                      nome: "Birra alla Spina",
                      ingredienti: "Media 40cl",
                      prezzo: "4.50",
                    },
                    {
                      nome: "Vino della Casa",
                      ingredienti: "Rosso o Bianco, calice",
                      prezzo: "4.00",
                    },
                  ].map((bevanda) => (
                    <div
                      key={bevanda.nome}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-black-800">
                          {bevanda.nome}
                        </h4>
                        <span className="text-2xl font-bold text-red-600">
                          €{bevanda.prezzo}
                        </span>
                      </div>
                      <p className="text-gray-600">{bevanda.ingredienti}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* DESSERT */}
              <button
                className="flex items-center justify-between w-full bg-black text-white px-6 py-3 rounded-lg font-bold mb-4 mt-8"
                onClick={() => toggleSezioneMenu("dessert")}
                aria-expanded={sezioniMenuAperte.dessert}
              >
                <div className="flex items-center">
                  <img
                    src="cheese-cake.png"
                    className="w-10 h-10 invert mr-4 "
                    alt="dessert"
                  />
                  <span>Dessert</span>
                </div>
                <span>{sezioniMenuAperte.dessert ? "▲" : "▼"}</span>
              </button>

              {sezioniMenuAperte.dessert && (
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      nome: "Tiramisù",
                      ingredienti: "Savoiardi, mascarpone, caffè, cacao",
                      prezzo: "6.00",
                    },
                    {
                      nome: "Panna Cotta",
                      ingredienti: "Panna cotta con frutti di bosco",
                      prezzo: "5.50",
                    },
                    {
                      nome: "Cheesecake",
                      ingredienti: "New York style con coulis di frutti rossi",
                      prezzo: "6.50",
                    },
                    {
                      nome: "Profiteroles",
                      ingredienti: "Bignè con crema e cioccolato",
                      prezzo: "6.00",
                    },
                  ].map((dolce) => (
                    <div
                      key={dolce.nome}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-black-800">
                          {dolce.nome}
                        </h4>
                        <span className="text-2xl font-bold text-red-600">
                          €{dolce.prezzo}
                        </span>
                      </div>
                      <p className="text-gray-600">{dolce.ingredienti}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            </div>
          )}
        
{/* SEZIONE CONTATTI */}
{sezioneAttiva === "contatti" && (
  <div 
    className="bg-black min-h-screen pt-12 pb-16 relative"
    style={{
      backgroundImage: 'url(/Avetrana_panorama_notturno.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  >
    {/* Overlay scuro */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    
    <div className="max-w-6xl mx-auto px-4 relative z-10"> 
      <h2 className="text-5xl font-bold text-white text-center mb-12"> 
        Contattaci
      </h2>
      {/* Mappa Google Maps - FULL WIDTH */}
      <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.1234567890!2d17.7234567!3d40.3234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE5JzI0LjQiTiAxN8KwNDMnMjQuNCJF!5e0!3m2!1sit!2sit!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Info Contatti */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-3">
              <img
                src="/search-location.png"
                alt="Indirizzo"
                className="w-10 h-10"
              />
              <h3 className="text-xl font-bold text-gray-900">
                Indirizzo
              </h3>
            </div>
            <p className="text-gray-700">Via Alcide De Gasperi, 86</p>
            <p className="text-gray-700 mb-3">Avetrana (TA)</p>
            <a
              href="https://maps.google.com/?q=Via+Alcide+De+Gasperi+86+Avetrana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-red-700 text-black px-4 py-2 rounded-lg transition"
            >
              📍 Apri in Google Maps
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-3">
              <img
                src="/phone-call.png"
                alt="Telefono"
                className="w-10 h-10"
              />
              <h3 className="text-xl font-bold text-gray-900">
                Telefono
              </h3>
            </div>
            <a
              href="tel:3401177597"
              className="text-gray-700 hover:text-red-600 block"
            >
              3401177597
            </a>
            <a
              href="tel:+393481234567"
              className="text-gray-700 hover:text-red-600 block"
            >
              3401177597
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-3">
              <img
                src="/clock-three.png"
                alt="Orari"
                className="w-10 h-10"
              />
              <h3 className="text-xl font-bold text-gray-900">Orari</h3>
            </div>
            <p className="text-gray-700">Lun-Dom: 12:00 - 15:00</p>
            <p className="text-gray-700">Lun-Dom: 19:00 - 23:30</p>
            <p className="text-red-600 font-semibold mt-2">
              ⚠️ Chiuso il Mercoledì
            </p>
          </div>
        </div>

        {/* Form Contatto */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text- mb-6">
            Inviaci un messaggio
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nome
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Il tuo nome"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="tua@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Messaggio
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Scrivici qui..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Invia Messaggio
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-gradient-to-r from-white to-black p-12 rounded-3xl shadow-2xl">
        <h4 className="text-3xl font-bold text-black mb-4">
          Organizziamo il Tuo Evento Perfetto
        </h4>
        <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
          Contattaci per un preventivo personalizzato. Ci occupiamo di
          ogni dettaglio per rendere il tuo evento indimenticabile.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+393401177597"
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-lg"
          >
            📞 Chiama Ora
          </a>

          <a
            href="https://wa.me/393481234567?text=Ciao!%20Vorrei%20informazioni%20per%20un%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-lg"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
)}

{/* SEZIONE EVENTI */}
        {sezioneAttiva === "eventi" && (
          <div className="bg-black min-h-screen pt-12 pb-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-5xl font-bold text-white text-center mb-12">I Nostri Eventi</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {eventi.map((evento) => (
                  <div key={evento.id} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                    {/* Header evento */}
                    <div className="bg-grey p-6 text-center">
                      <div className="text-6xl mb-3">{evento.emoji}</div>
                      <h3 className="text-2xl font-bold text-white">{evento.titolo}</h3>
                    </div>
                    
                    {/* Content evento */}
                    <div className="p-6 text-white">
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">📅</span>
                          <div>
                            <p className="text-sm text-gray-400">Data</p>
                            <p className="font-bold text-lg">{evento.data}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">⏰</span>
                          <div>
                            <p className="text-sm text-gray-400">Ora</p>
                            <p className="font-bold text-lg">{evento.ora}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg mb-6">
                        <p className="text-gray-100">{evento.descrizione}</p>
                      </div>
                      
                      <a 
                        href="https://wa.me/393401177597?text=Ciao!%20Sono%20interessato%20all'evento%20La%20Perla"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white hover:bg-red-700 text-black font-bold py-3 rounded-lg transition transform hover:scale-105 block text-center"
                      >
                        Prenota Ora 
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info sezione */}
              <div className="mt-16 text-center bg-gradient-to-r from-black to-white-700 p-12 rounded-3xl">
                <h3 className="text-3xl font-bold text-white mb-4">Non Vuoi Perdere Nessun Evento?</h3>
                <p className="text-xl text-gray-100 mb-6">Seguici sui social e iscriviti alla nostra newsletter!</p>
                <a 
                  href="https://wa.me/393401177597"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-xl font-bold text-lg transition transform hover:scale-105 inline-block"
                >
                  Ricevi Notifiche via WhatsApp 💬
                </a>
              </div>
            </div>
          </div>
        )}

 {/* SEZIONE SOCIAL */}
        {sezioneAttiva === "social" && (
          <div className="bg-black min-h-screen pt-12 pb-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-5xl font-bold text-white text-center mb-8">Seguici sui Social</h2>
              <p className="text-xl text-gray-300 text-center mb-12">
                Resta aggiornato sulle nostre novità, offerte speciali e eventi!
              </p>

              {/* Social Cards */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <a href="https://www.facebook.com/laperlacoffeebeerwine?mibextid=wwXIfr&rdid=gSICT2aCPV9sZOPM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZBrJt2QfE%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="invert text-black p-8 rounded-lg shadow-lg transition transform hover:scale-105">
                  <div className="text-6xl mb-4"><img src="public/facebook.png" alt="" /></div>
                  <h3 className="text-2xl font-bold mb-2">Facebook</h3>
                  <p>@laperla_pizzeria</p>
                </a>

                <a href="https://www.instagram.com/laperla_avetrana?igsh=MWh3dTl1MHM2ejNkbQ%3D%3D" target="_blank" rel="noopener noreferrer" className="invert text-black p-8 rounded-lg shadow-lg transition transform hover:scale-105">
                  <div className="text-6xl mb-4"> <img src="public/camera.png" alt="" /></div>
                  <h3 className="text-3xl font-bold mb-2">Instagram</h3>
                  <p>@laperla_pizzeria</p>
                </a>

                <a href="https://www.google.com/search?q=la+perla+avetrana" target="_blank" rel="noopener noreferrer" className="invert text-black p-8 rounded-lg shadow-lg transition transform hover:scale-105">
                  <div className="text-6xl mb-4"><img src="public/google-logo.jpg" alt="" /></div>
                  <h3 className="text-2xl font-bold mb-2">Google</h3>
                  <p>@laperla_avetrana</p>
                </a>
              </div>
            </div>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-white py-8 mt-16">
              <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-lg mb-2">La Perla Pizzeria Ristorante</p>
                <p className="text-gray-400">Dal 1993, la tradizione nel cuore della città</p>
                <p className="mt-4 text-sm text-gray-500">© 2025 - Tutti i diritti riservati</p>
              </div>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
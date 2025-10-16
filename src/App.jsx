import { useState } from "react";

function App() {
  const [sezioneAttiva, setSezioneAttiva] = useState("home");

  return (
    <div className="min-h-screen bg-amber-50">
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

              {/* Contatti */}
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

              {/* Social */}
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
                  <h3 className="text-4xl font-bold text-black-800 mb-6">
                    La Nostra Storia
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Dal 1993, La Perla porta sulle vostre tavole il vero sapore
                    della pizza. La nostra passione per la tradizione si unisce
                    alla ricerca costante della qualità.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Ogni pizza è preparata con amore, utilizzando solo
                    ingredienti freschi e selezionati. Il nostro impasto viene
                    lavorato a mano e lasciato lievitare naturalmente per 48
                    ore.
                  </p>
                  <p className="text-lg text-gray-700">
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
          </div>
        )}

        {/* SEZIONE MENU */}
        {sezioneAttiva === "menu" && (
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-5xl font-bold text-black-800 text-center mb-12">
              Il Nostro Menu
            </h2>

            {/* Pizze Classiche */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-black mb-6">
                Pizze Classiche
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
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
                    ingredienti: "Mozzarella, gorgonzola, fontina, parmigiano",
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
            </div>

            {/* Pizze Speciali */}
            <div>
              <h3 className="text-3xl font-bold text-black-700 mb-6">
                ✨ Pizze Speciali
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    nome: "La Perla",
                    ingredienti:
                      "Pomodoro, bufala, pachino, rucola, scaglie di parmigiano",
                    prezzo: "12.00",
                  },
                  {
                    nome: "Salsiccia e Friarielli",
                    ingredienti: "Mozzarella, salsiccia napoletana, friarielli",
                    prezzo: "11.00",
                  },
                  {
                    nome: "Tartufata",
                    ingredienti: "Mozzarella, funghi porcini, crema di tartufo",
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
            </div>
          </div>
        )}

        {/* SEZIONE CONTATTI */}

        {sezioneAttiva === "contatti" && (
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-5xl font-bold text-black-800 text-center mb-12">
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
                    <h3 className="text-xl font-bold text-black-800">
                      Indirizzo
                    </h3>
                  </div>
                  <p className="text-gray-700">Via Alcide De Gasperi, 86</p>
                  <p className="text-gray-700 mb-3">Avetrana (TA)</p>
                  <a
                    href="https://goo.gl/maps/TUO_LINK_MAPS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-black-700 text-white px-4 py-2 rounded-lg transition"
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
                    <h3 className="text-xl font-bold text-black-800">
                      Telefono
                    </h3>
                  </div>
                  <a
                    href="tel:+390612345 67"
                    className="text-gray-700 hover:text-red-600 block"
                  >
                    +39 06 1234567
                  </a>
                  <a
                    href="tel:+393481234567"
                    className="text-gray-700 hover:text-red-600 block"
                  >
                    +39 348 1234567
                  </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src="/clock-three.png"
                      alt="Orari"
                      className="w-10 h-10"
                    />
                    <h3 className="text-xl font-bold text-black-800">Orari</h3>
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
                <h3 className="text-2xl font-bold text-red-800 mb-6">
                  Inviaci un messaggio
                </h3>
                <form className="space-y-4">
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
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
                  >
                    Invia Messaggio
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* SEZIONE SOCIAL */}
        {sezioneAttiva === "social" && (
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h2 className="text-5xl font-bold text-black-800 mb-8">
              Seguici sui Social
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Resta aggiornato sulle nostre novità, offerte speciali e eventi!
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-black p-8 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                <div className="text-6xl mb-4">
                  <img src="public/facebook.png" alt="" />
                </div>
                <h3 className="text-2xl font-bold mb-2">facebook</h3>
                <p>@laperla_pizzeria</p>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br  text-black p-8 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                <div className="text-6xl mb-4">
                  <img src="/instagram-circle.png" alt="" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Instagram</h3>
                <p>@laperla_pizzeria</p>
              </a>

              {/* TripAdvisor */}
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-black p-8 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                <div className="text-6xl mb-4">
                  <img src="public/tripadvisor.png" alt="" />
                </div>
                <h3 className="text-2xl font-bold mb-2">TripAdvisor</h3>
                <p>Lascia una recensione</p>
              </a>
            </div>
            {/* Gallery Instagram Style con Lightbox */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-black-800 mb-8">
                Le Nostre Foto
              </h3>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    id: 1,
                    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
                  },
                  {
                    id: 2,
                    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600",
                  },
                  {
                    id: 3,
                    img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600",
                  },
                  {
                    id: 4,
                    img: "https://images.unsplash.com/photo-1590534047268-964fd7f8c250?w=600",
                  },
                  {
                    id: 5,
                    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
                  },
                  {
                    id: 6,
                    img: "https://images.unsplash.com/photo-1564758564527-b97d79cb27c1?w=600",
                  },
                ].map((foto) => (
                  <div
                    key={foto.id}
                    className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  >
                    <img
                      src={foto.img}
                      alt={`Pizza ${foto.id}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg mb-2">La Perla Pizzeria Ristorante</p>
          <p className="text-white-200">
            Dal 1993, la tradizione nel cuore della città
          </p>
          <p className="mt-4 text-sm text-white-100">
            © 2025 - Tutti i diritti riservati
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

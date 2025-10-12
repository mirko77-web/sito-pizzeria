import { useState } from "react";

function App() {
  const [sezioneAttiva, setSezioneAttiva] = useState("home");

  return (
    <div className="min-h-screen bg-amber-50">
      {/* NAVBAR */}
<nav className="bg-black shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 py-4">
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-3">
        {/* Puoi aggiungere un logo qui se vuoi */}
      </div>

      {/* Menu Bottoni */}
      <div className="flex gap-4">
        <button
          onClick={() => setSezioneAttiva("home")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            sezioneAttiva === "home"
              ? "bg-white text-black"
              : "bg-gray-800 text-white hover:bg-red-600"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setSezioneAttiva("menu")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            sezioneAttiva === "menu"
              ? "bg-white text-black"
              : "bg-gray-800 text-white hover:bg-red-600"
          }`}
        >
          Menu
        </button>
        <button
          onClick={() => setSezioneAttiva("contatti")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            sezioneAttiva === "contatti"
              ? "bg-white text-black"
              : "bg-gray-800 text-white hover:bg-red-600"
          }`}
        >
          Contatti
        </button>
        <button
          onClick={() => setSezioneAttiva("social")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            sezioneAttiva === "social"
              ? "bg-white text-black"
              : "bg-gray-800 text-white hover:bg-red-600"
          }`}
        >
          Social
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
                <source src="public/pizza.mp4" type="video/mp4" />
              </video>

              {/* Overlay scuro */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Testo sopra il video */}
              <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
                <img src="public/laperla.png" alt="logo perla " className="" />
                <button className="bg-black hover:bg-red-600 text-white hover:text-black border-2 border-black px-8 py-4 rounded-lg text-xl font-semibold shadow-lg transition">
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
                  <p className="text-lg text-gray-700 mb-4">
                    Dal 1993, La Perla porta sulle vostre tavole il vero sapore
                    della pizza. La nostra passione per la tradizione
                    si unisce alla ricerca costante della qualità.
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
                    <div className="text-4xl mb-2">🍕</div>
                    <h4 className="text-2xl font-bold text-red-800 mb-2">
                      Pizza
                    </h4>
                    <p className="text-gray-600">
                      Autentica tradizione con forno a legna e lievitazione
                      naturale
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-2">🥗</div>
                    <h4 className="text-2xl font-bold text-red-800 mb-2">
                      Ingredienti Freschi
                    </h4>
                    <p className="text-gray-600">
                      Selezioniamo solo prodotti di prima qualità e a km zero
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-2">👨‍🍳</div>
                    <h4 className="text-2xl font-bold text-red-800 mb-2">
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
            <h2 className="text-5xl font-bold text-red-800 text-center mb-12">
              Il Nostro Menu
            </h2>

            {/* Pizze Classiche */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-red-700 mb-6">
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
                      <h4 className="text-xl font-bold text-red-800">
                        {pizza.nome}
                      </h4>
                      <span className="text-2xl font-bold text-green-600">
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
              <h3 className="text-3xl font-bold text-red-700 mb-6">
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
                      <h4 className="text-xl font-bold text-red-800">
                        {pizza.nome}
                      </h4>
                      <span className="text-2xl font-bold text-green-600">
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
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-5xl font-bold text-red-800 text-center mb-12">
              Contattaci
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Info Contatti */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-3">📍</div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">
                    Indirizzo
                  </h3>
                  <p className="text-gray-700">Via alcide de gasperi , 86</p>
                  <p className="text-gray-700">Avetrana (TA)</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-3">📞</div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">
                    Telefono
                  </h3>
                  <p className="text-gray-700">+39 06 1234567</p>
                  <p className="text-gray-700">+39 348 1234567</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-3">⏰</div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">Orari</h3>
                  <p className="text-gray-700">Lun-Dom: 12:00 - :00</p>
                  <p className="text-gray-700">Lun-Dom: 19:00 - 23:30</p>
                  <p className="text-red-600 font-semibold mt-2">
                    Chiuso il Mercoledi
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
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
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
            <h2 className="text-5xl font-bold text-red-800 mb-8">
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
                className="bg-blue-600 hover:bg-blue-700 text-white p-8 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                <div className="text-6xl mb-4"><img src="/facebgook.png" alt="" /></div>
                <h3 className="text-2xl font-bold mb-2">Facebook</h3>
                <p>@laperlaPizzeria</p>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white p-8 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                <div className="text-6xl mb-4"><img src="/instgra.png" alt="" /></div>
                <h3 className="text-2xl font-bold mb-2">Instagram</h3>
                <p>@laperla_pizzeria</p>
              </a>

              {/* TripAdvisor */}
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white p-8 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                <div className="text-6xl mb-4">🦉</div>
                <h3 className="text-2xl font-bold mb-2">TripAdvisor</h3>
                <p>Lascia una recensione</p>
              </a>
            </div>

            {/* Gallery Instagram Style */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-red-800 mb-8">
                📷 Le Nostre Foto
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={num}
                    className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
                  >
                    <img
                      src={`https://images.unsplash.com/photo-${
                        1513104890000 + num
                      }?w=400&q=80`}
                      alt={`Pizza ${num}`}
                      className="w-full h-full object-cover hover:scale-110 transition duration-300"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-red-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg mb-2">🍕 La Perla Pizzeria Ristorante</p>
          <p className="text-amber-200">
            Dal 1985, la tradizione napoletana nel cuore della città
          </p>
          <p className="mt-4 text-sm text-amber-100">
            © 2025 - Tutti i diritti riservati
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

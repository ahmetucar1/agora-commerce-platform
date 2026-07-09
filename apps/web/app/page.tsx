export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
          Agora Sarkuteri
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
          Premium kalitede şarküteri ürünlerinin en iyi seçkisi
        </p>
        <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95">
          Ürünleri Keşfet
        </button>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <div className="text-4xl mb-3">🥩</div>
            <h3 className="font-bold text-lg mb-2">Premium Ürünler</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Türkiye'nin en kaliteli şarküteri ürünleri</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-bold text-lg mb-2">Hızlı Teslimat</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">24 saatte kapınıza ulaştırıyoruz</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="font-bold text-lg mb-2">Taze & Lezzetli</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Her gün taze olarak hazırlanır</p>
          </div>
        </div>

        <div className="mt-16 text-slate-600 dark:text-slate-400">
          <p className="text-sm">🔄 Admin Panel: <a href="/admin" className="text-orange-600 hover:underline font-semibold">/admin</a></p>
        </div>
      </div>
    </div>
  );
}

// cache buster: 1783600772

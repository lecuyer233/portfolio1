import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col items-center">
      <header className="w-full bg-white shadow-md p-5 fixed top-0 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800">Clara Lecuyer</h1>
        <nav className="flex gap-4">
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Accueil</button>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">À propos</button>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Projets</button>
        </nav>
      </header>

      <main className="flex flex-col md:flex-row items-center justify-center mt-24 px-5 w-full max-w-6xl">
        <div className="md:w-1/3 flex justify-center">
          <Image src="/profile.jpg" width={250} height={250} className="rounded-full shadow-lg" alt="Clara Lecuyer" />
        </div>
        <div className="md:w-2/3 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-4xl font-bold">Bonjour, moi c'est Clara !</h2>
          <p className="mt-3 text-lg text-gray-700">
            Étudiante en Science des Données, je partage avec vous mes projets d'analyse et de modélisation.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">Data Analysis</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">Data Science</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">Machine Learning</span>
          </div>
        </div>
      </main>
    </div>
  );
}


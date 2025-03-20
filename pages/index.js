import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <header className="w-full flex justify-between items-center p-5 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Clara Lecuyer</h1>
        <nav className="flex gap-4">
          <button className="bg-teal-600 px-4 py-2 rounded-lg">Accueil</button>
          <button className="bg-teal-600 px-4 py-2 rounded-lg">À propos</button>
          <button className="bg-teal-600 px-4 py-2 rounded-lg">Projets</button>
        </nav>
        <div className="flex gap-3">
          <span>🌙</span>
          <span>🔗</span>
          <span>🐙</span>
        </div>
      </header>
      <main className="flex flex-col md:flex-row items-center justify-center text-center max-w-5xl mx-auto p-10">
        <div className="relative w-64 h-64">
          <Image src="/profile.jpg" alt="Clara Lecuyer" layout="fill" className="rounded-xl" />
        </div>
        <div className="md:ml-10 mt-5 md:mt-0">
          <h2 className="text-5xl font-bold">Bonjour, moi c'est Clara !</h2>
          <p className="mt-3 text-lg">
            Étudiante en <span className="text-teal-500 font-semibold">Science des Données</span>, 
            je partage avec vous mes projets d'analyse et de modélisation.
          </p>
          <div className="flex gap-4 mt-5">
            <button className="bg-teal-600 px-4 py-2 rounded-lg">Data Analysis</button>
            <button className="bg-teal-600 px-4 py-2 rounded-lg">Data Science</button>
            <button className="bg-teal-600 px-4 py-2 rounded-lg">Machine Learning</button>
          </div>
        </div>
      </main>
    </div>
  );
}
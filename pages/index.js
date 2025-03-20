import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Barre de navigation */}
      <header className="w-full flex justify-between items-center p-5 max-w-6xl mx-auto">
        
        {/* Nom Clara Lecuyer à gauche */}
        <h1 className="text-2xl font-bold">Clara Lecuyer</h1>

        {/* Boutons centrés */}
        <nav className="flex gap-6">
          <button className="bg-teal-600 px-4 py-2 rounded-lg">Accueil</button>
          <button className="bg-teal-600 px-4 py-2 rounded-lg">À propos</button>
          <button className="bg-teal-600 px-4 py-2 rounded-lg">Projets</button>
        </nav>

        {/* Icônes GitHub, LinkedIn et mode sombre à droite */}
        <div className="flex gap-4">
          {/* GitHub */}
          <a href="https://github.com/ton-github" target="_blank" rel="noopener noreferrer">
            <Image src="/github.svg" alt="GitHub" width={30} height={30} />
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ton-linkedin" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} />
          </a>
          {/* Mode sombre */}
          <span className="text-2xl">🌙</span>
        </div>
      </header>

      {/* Contenu principal centré */}
      <main className="flex flex-col md:flex-row items-center justify-center text-center max-w-5xl mx-auto p-10">
        
        {/* Photo Clara */}
        <div className="relative w-64 h-64">
          <Image 
            src="/profile.jpg" 
            alt="Clara Lécuyer" 
            width={250} 
            height={250} 
            className="rounded-xl object-cover"
          />
        </div>

        {/* Texte à côté */}
        <div className="md:ml-10 mt-5 md:mt-0">
          <h2 className="text-5xl font-bold">Bonjour, moi c'est Clara !</h2>
          <p className="mt-3 text-lg">
            Étudiante en <span className="text-teal-500 font-semibold">Science des Données</span>, 
            je partage avec vous mes projets d'analyse et de modélisation.
          </p>

          {/* Boutons en dessous */}
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


const Footer = () => {
  return (
    <footer className="w-full bg-pink-100 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold text-pink-800">
            成蹊大学教授図鑑
          </h2>
          <p className="text-pink-700 text-sm">
            SEIKEI UNIVERSITY PROFESSOR COMPENDIUM
          </p>
          <div className="border-t border-pink-300 w-full max-w-md pt-4">
            <p className="text-center text-pink-600 text-xs">
                {new Date().getFullYear()} Seikei University Professor-s-Compendium. 
            </p>
            <p className="text-center text-pink-600 text-xs">
              produced by PeachTech.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

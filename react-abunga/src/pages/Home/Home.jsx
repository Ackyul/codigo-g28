import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#95b721] pt-8 pb-12 flex justify-center items-center relative">
        {/* Logo Image - Left */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
          <img 
            src="/logo-abunga.png" 
            alt="Abunga Logo" 
            className="w-28 h-28 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Text Logo - Centered */}
        <div className="z-10">
          <div className="bg-white px-12 py-5 rounded-3xl shadow-md">
            <img 
              src="/abunga-text.png" 
              alt="Abunga" 
              className="h-16 object-contain"
            />
          </div>
        </div>
        
        <Navbar />
        
        <div className="absolute bottom-0 left-0 right-0 flex flex-col">
          <div className="h-2 bg-[#e24052]"></div>
          <div className="h-2 bg-[#d08635]"></div>
          <div className="h-2 bg-[#e3c561]"></div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16 max-w-6xl space-y-16">
        {/* Somos Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#95b721] mb-8">Somos:</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Una marca arequipeña que transforma fruta local en snacks deshidratados y rollitos saludables 💚
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Natural, sostenible y hecho con propósito
            </p>
            <div className="pt-8">
              <p className="text-2xl font-semibold text-gray-800">
                Contactos al 📞: <a href="tel:973391928" className="text-[#95b721] hover:underline">973391928</a>
              </p>
            </div>
          </div>

          {/* Image Placeholder - Right Side */}
          <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
            <p className="text-gray-400 text-lg">Imagen de fruta deshidratada</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder - Left Side */}
          <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
            <p className="text-gray-400 text-lg">Imagen para misión</p>
          </div>

          {/* Mission Text - Right Side */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#95b721] mb-8">Nuestra Misión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hacer "retumbar" a los paladares arequipeños con snacks saludables, prácticos y de alta calidad elaborados a base de frutas deshidratadas y sus derivados, en constante innovación, promoviendo hábitos de consumo natural con responsabilidad social y medioambiental, fomentando la economía circular.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Vision Text - Left Side */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#95b721] mb-8">Nuestra Visión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser la marca líder en snacks saludables a base de frutas deshidratadas a nivel nacional reconocida por su innovación, calidad y compromiso con la alimentación, la salud y el medioambiente.
            </p>
          </div>

          {/* Image Placeholder - Right Side */}
          <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
            <p className="text-gray-400 text-lg">Imagen para visión</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#95b721] text-white py-8 mt-auto">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-['Capriola'] mb-2 text-white">
                abunga
              </h3>
              <p className="text-sm text-white/80">Snacks naturales de Arequipa</p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <p className="font-semibold mb-2">Contáctanos</p>
              <a href="tel:973391928" className="text-white hover:text-[#e3c561] transition-colors text-lg">
                📞 973391928
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-white/80">
                © {new Date().getFullYear()} Abunga
              </p>
              <p className="text-xs text-white/60 mt-1">
                Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

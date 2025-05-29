import Image from "next/image";
import heroImage from "../../../public/img/img-header.webp";

export function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden p-5">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
      <Image
        width={1920}
        height={1080}
        src={heroImage}
        alt="Sports apparel collection"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center animate-fadeIn">
        <div className="max-w-lg">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            La calidad se encuentra con el estilo
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Los mejores diseños para tu guardarropa, combinando comodidad y
            elegancia.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer">
              Comprar nuevos diseños
            </button>
            <button className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              Explora la colección
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

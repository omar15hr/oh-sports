import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Running",
    image: "",
  },
  {
    id: 2,
    name: "Training",
    image: "",
  },
  {
    id: 3,
    name: "Basketball",
    image: "",
  },
  {
    id: 4,
    name: "Fútbol",
    image: "",
  },
];

export default function Home() {
  return (
    <div>
      <section className="r elative h-[600px] overflow-hidden p-5">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        {/* <Image
        width={1920}
        height={1080}
        src={heroImage}
        alt="Sports apparel collection"
        className="absolute inset-0 w-full h-full object-cover object-top"
      /> */}
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Compra por categoría
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <span className="inline-block text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Comprar ahora <i className="fas fa-arrow-right ml-1"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Productos más vendidos</h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-300 !rounded-button cursor-pointer">
                chevron left
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-300 !rounded-button cursor-pointer">
                chevron right
              </button>
            </div>
          </div>

          {/* <ProductList /> */}

          <div className="text-center mt-12">
            <button className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              Ver todos los productos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

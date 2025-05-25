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

export function CategoryCardsSection() {
  return (
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
  );
}

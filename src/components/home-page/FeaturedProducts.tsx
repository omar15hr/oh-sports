export function FeaturedProducts() {
  return (
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
  );
}

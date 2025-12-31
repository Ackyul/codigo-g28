import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { cn } from "../lib/utils";
import { PRECIOS } from "../lib/constants";
import { ProductModal } from "./product-modal";
import useCartStore from "../stores/useCartStore";

function ProductCard({ product }) {
  const [selectedWeight, setSelectedWeight] = useState("50gr");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) return null;

  // Calculate dynamic price if it's a Fruit, otherwise use API price
  const getPrice = () => {
    if (product.tipo === "Fruta" && product.fruta && PRECIOS[product.fruta]) {
       return PRECIOS[product.fruta][selectedWeight] || product.precio;
    }
    // Rollos pricing logic
    if (product.tipo.includes("Roll")) {
        if (product.fruta === "Cacao" || product.name.toLowerCase().includes("cacao")) {
            return 15;
        }
        return 10;
    }
    return product.precio;
  };

  const displayPrice = getPrice();

  const handleAddToCart = (e) => {
      e.stopPropagation();
      addToCart({
          id: product.id,
          name: product.name,
          image: product.image,
          price: displayPrice,
          brand: product.brand
      }, 1, selectedWeight);
  };

  return (
    <>
      <Card 
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer border-2 border-black rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:-translate-y-1 transition-transform bg-white"
      >
        <CardContent className="p-4 flex flex-col h-full">
          <div className="h-48 w-full flex items-center justify-center mb-4 bg-white rounded-xl">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-full max-w-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
          </div>
          <div className="mt-auto space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{product.brand}</p>
              <h3 className="font-bold text-lg leading-tight line-clamp-2">{product.name}</h3>
              {product.tipo === "Fruta" && (
                <div className="flex gap-2 my-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedWeight("50gr"); }}
                    className={cn(
                      "flex-1 text-xs font-bold py-1 px-2 rounded-lg transition-colors border",
                      selectedWeight === "50gr" 
                        ? "bg-[#95b721] text-white border-[#95b721]" 
                        : "bg-white text-[#95b721] border-[#95b721] hover:bg-[#ebf3d6]"
                    )}
                  >
                    50gr
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedWeight("100gr"); }}
                    className={cn(
                      "flex-1 text-xs font-bold py-1 px-2 rounded-lg transition-colors border",
                      selectedWeight === "100gr" 
                        ? "bg-[#95b721] text-white border-[#95b721]" 
                        : "bg-white text-[#95b721] border-[#95b721] hover:bg-[#ebf3d6]"
                    )}
                  >
                    100gr
                  </button>
                </div>
              )}
              <p className="text-3xl font-black text-[#95b721]">S/ {displayPrice}</p>
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white font-bold py-2 rounded-xl text-sm hover:bg-gray-800 transition-colors"
              >
                  Añadir al carrito
              </button>
          </div>
        </CardContent>
      </Card>
      
      <ProductModal 
        product={product} 
        isOpen={isModalOpen} 
        onClose={setIsModalOpen} 
      />
    </>
  );
}

export default ProductCard;

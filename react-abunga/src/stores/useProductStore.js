import { create } from 'zustand';
import { fetchProducts } from '../services/api';

const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  visibleCount: 8,

  validateProducts: async () => {
    const { products } = get();
    if (products.length === 0) {
      await get().getProducts();
    }
  },

  getProducts: async () => {
    set({ loading: true, error: null });
    try {
      let data = await fetchProducts();
      for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
      }
      
      data = data.map(p => {
        if (p.fruta === 'Mango' && p.tipo === 'Fruta') {
           return { ...p, image: '/mango.png' };
        }
        if (p.fruta === 'Manzana' && p.tipo === 'Fruta') {
           return { ...p, image: '/manzana.png' };
        }
        return p;
      });

      set({ products: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  filters: {
    types: [],
    fruits: []
  },

  setFilter: (category, value) => set((state) => {
    const current = state.filters[category];
    const newFilters = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    
    return { 
      filters: { 
        ...state.filters, 
        [category]: newFilters 
      },
      visibleCount: 8 
    };
  }),

  getFilteredProducts: () => {
    const { products, filters } = get();
    return products.filter((product) => {
      const typeMatch = filters.types.length === 0 || filters.types.some(filterType => {
          if (filterType === "Rollos") return product.tipo.includes("Roll");
          return product.tipo === filterType;
      });
      
      const fruitMatch = filters.fruits.length === 0 || filters.fruits.includes(product.fruta);
      return typeMatch && fruitMatch;
    });
  },

  setVisibleCount: (count) => set((state) => ({ visibleCount: state.visibleCount + count })),
}));

export default useProductStore;

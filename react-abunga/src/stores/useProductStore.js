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
      const data = await fetchProducts();
      // Shuffle array randomly on fetch
      for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
      }
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
      // Loose matching for types (e.g. "Rollos" filter matches "Rollitos" type)
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

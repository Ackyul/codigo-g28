import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product, quantity = 1, weight) => {
        const { cart } = get();
        const existingItemIndex = cart.findIndex(
          (item) => item.id === product.id && item.selectedWeight === weight
        );

        if (existingItemIndex > -1) {
          const newCart = [...cart];
          newCart[existingItemIndex].quantity += quantity;
          set({ cart: newCart });
        } else {
          set({
            cart: [...cart, { ...product, quantity, selectedWeight: weight }],
          });
        }
      },

      removeFromCart: (productId, weight) => {
        set((state) => ({
          cart: state.cart.filter(
            (item) => !(item.id === productId && item.selectedWeight === weight)
          ),
        }));
      },

      updateQuantity: (productId, weight, quantity) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId && item.selectedWeight === weight
              ? { ...item, quantity: Math.max(1, quantity) }
              : item
          ),
        }));
      },

      clearCart: () => set({ cart: [] }),

      getTotalPrice: () => {
        const { cart } = get();
        // Calculation assumes product.price is the unit price for the selected weight
        // Ideally, price should be stored in the cart item at the time of addition to avoid recalculation issues if prices change
        // For this specific app, we calculated price before adding to cart, so item.price is correct.
        return cart.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
      },
      
      getItemsCount: () => {
          const { cart } = get();
          return cart.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'shopping-cart', // unique name
    }
  )
);

export default useCartStore;

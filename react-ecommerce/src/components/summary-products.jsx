import SummaryProductCard from "./summary-product-card";

function SummaryProducts({ items, addQuantity, removeItem, reduceQuantity }) {
  return (
    <div className="space-y-5 lg:space-y-10 flex-6">
      {items?.map((item) => (
        <SummaryProductCard
          key={item.id}
          item={item}
          addQuantity={addQuantity}
          reduceQuantity={reduceQuantity}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
}

export default SummaryProducts;
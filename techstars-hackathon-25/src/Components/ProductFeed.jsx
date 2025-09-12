import ProductCard from "./ProductCard";
import "./ProductFeed.css";

export default function ProductFeed({
  title,
  products,
  showUploadButton,
  onUpload,
}) {
  return (
    <div className="product-feed">
      <div className="product-feed-header">
        <h2>{title} Products</h2>

        {showUploadButton && (
          <button className="upload-btn" onClick={onUpload}>
            + List Item
          </button>
        )}
      </div>

      {products.length === 0 ? (
        <p>No products available yet.</p>
      ) : (
        <div className="product-grid">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              item={item}
              onContact={() => alert(`Contact seller: ${item.seller}`)}
              showWants={title === "Swap"}
            />
          ))}
        </div>
      )}
    </div>
  );
}

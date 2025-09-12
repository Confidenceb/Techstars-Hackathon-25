// Components/ProductFeed.jsx
export default function ProductFeed({ title, products, showUploadButton }) {
  return (
    <div className="product-feed">
      <h2>{title} Products</h2>

      {products.length === 0 ? (
        <p>No products available yet.</p>
      ) : (
        <ul>
          {products.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}

      {showUploadButton && (
        <button className="upload-btn">List Item for Swap</button>
      )}
    </div>
  );
}

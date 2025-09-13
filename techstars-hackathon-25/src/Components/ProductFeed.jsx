import { useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductFeed.css";

// Reusable UploadForm (modal)
function UploadForm({ title, onClose }) {
  return (
    <div className="overlay">
      <div className="upload-form">
        <h3 className="form-title">List a {title} Item</h3>
        <form>
          {/* Image Upload */}
          <label>Upload Image</label>
          <input type="file" accept="image/*" className="input-form" required />

          <label>Title</label>
          <input
            className="input-form"
            type="text"
            placeholder="Item name"
            required
          />

          <label>Description</label>
          <textarea
            className="input-form"
            placeholder="Brief description"
            required
          />

          <label>Category (optional)</label>
          <input
            type="text"
            placeholder="e.g., Electronics (skip if not needed)"
            className="input-form"
          />

          <label>Seller (optional)</label>
          <input
            type="text"
            placeholder="e.g., John Doe • Shoes (skip if not needed)"
            className="input-form"
          />

          {title === "Buy" && (
            <>
              <label>Price</label>
              <input
                className="input-form"
                type="number"
                placeholder="Enter price"
              />
            </>
          )}

          {title === "Swap" && (
            <>
              <label>What do you want in return?</label>
              <input
                className="input-form"
                type="text"
                placeholder="e.g., Samsung Galaxy S20"
              />
            </>
          )}

          {title === "Rent" && (
            <>
              <label>Rent Price</label>
              <input
                className="input-form"
                type="number"
                placeholder="Price per day/week"
              />
              <label>Duration</label>
              <input
                className="input-form"
                type="text"
                placeholder="e.g., 1 week"
              />
            </>
          )}

          <div className="form-actions">
            <button type="submit" className="btn submit-btn">
              Submit
            </button>
            <button type="button" onClick={onClose} className="btn cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ProductFeed({ title, products, showUploadButton }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="product-feed">
      <div className="product-feed-header">
        <h2>{title} Products</h2>

        {showUploadButton && (
          <button className="upload-btn" onClick={() => setIsFormOpen(true)}>
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

      {/* Modal Form */}
      {isFormOpen && (
        <UploadForm title={title} onClose={() => setIsFormOpen(false)} />
      )}
    </div>
  );
}

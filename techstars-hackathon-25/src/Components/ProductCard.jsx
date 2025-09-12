import React from "react";
import "./ProductCard.css";

export default function ProductCard({ item, onContact, showWants }) {
  return (
    <div className="card">
      <div className="card-image">
        {item.image ? (
          <img src={item.image} alt={item.title} className="product-img" />
        ) : (
          <div className="image-placeholder">
            {(item.title || "").slice(0, 2).toUpperCase()} 📦
          </div>
        )}
      </div>

      <div className="card-body">
        <div className="card-header">
          <h4 className="card-title">{item.title}</h4>

          {item.price && (
            <p className="card-price">
              NGN {item.price}
              {item.priceUnit ? ` / ${item.priceUnit}` : ""}
            </p>
          )}
        </div>

        {showWants && item.wants && (
          <p className="card-wants">
            Wants: <strong>{item.wants}</strong>
          </p>
        )}

        <p className="card-desc">{item.description}</p>

        <p className="card-meta">
          Seller: {item.seller} • {item.category}
        </p>

        {item.condition && (
          <p className="card-meta">Condition: {item.condition}</p>
        )}

        {item.location && <p className="card-meta">📍 {item.location}</p>}

        {item.dateListed && (
          <p className="card-meta">🗓️ Listed on: {item.dateListed}</p>
        )}

        <div className="card-actions">
          <button className="btn contact-btn" onClick={onContact}>
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
}

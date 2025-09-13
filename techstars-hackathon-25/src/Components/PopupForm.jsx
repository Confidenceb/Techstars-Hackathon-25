import { useState } from "react";
import "./PopupForm.css";

export default function ProductForm({ type, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    category: "",
    condition: "",
    location: "",
    price: "",
    wants: "",
    rentPrice: "",
    duration: "",
    seller: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="overlay">
      <div className="form-container">
        <h2>List a {type} Item</h2>
        <form onSubmit={handleSubmit} className="product-form">
          <label>Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />

          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Item name"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            placeholder="Brief description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <label>Category</label>
          <input
            type="text"
            name="category"
            placeholder="e.g., Electronics"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <label>Condition</label>
          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>

          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="City / State"
            value={formData.location}
            onChange={handleChange}
            required
          />

          {/* Buy Section */}
          {type === "Buy" && (
            <>
              <label>Price</label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </>
          )}

          {/* Swap Section */}
          {type === "Swap" && (
            <>
              <label>Wants (Skip if not needed)</label>
              <input
                type="text"
                name="wants"
                placeholder="e.g., Samsung Galaxy S20 or newer"
                value={formData.wants}
                onChange={handleChange}
              />
            </>
          )}

          {/* Rent Section */}
          {type === "Rent" && (
            <>
              <label>Rent Price</label>
              <input
                type="number"
                name="rentPrice"
                placeholder="Price per day/week"
                value={formData.rentPrice}
                onChange={handleChange}
                required
              />

              <label>Duration</label>
              <input
                type="text"
                name="duration"
                placeholder="e.g., 1 week"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            </>
          )}

          {/* Seller Name - Optional */}
          <label>Seller (Skip if not needed)</label>
          <input
            type="text"
            name="seller"
            placeholder="e.g., Tunde"
            value={formData.seller}
            onChange={handleChange}
          />

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

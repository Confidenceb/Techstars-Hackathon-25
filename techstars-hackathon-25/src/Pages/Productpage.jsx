import React, { useState } from "react";
import Sidebar from "../Components/Sidebar.jsx";
import ProductCard from "../Components/ProductCard.jsx";
import "./ProductsPage.css";

const initialItems = [
  {
    id: 1,
    type: "buy",
    title: "Organic Chemistry Textbook",
    price: 2500,
    category: "Books",
    condition: "Used",
    description: "Good condition",
    seller: "Abdul",
  },
  {
    id: 2,
    type: "rent",
    title: "Lab Coat (XL)",
    price: 200,
    priceUnit: "per day",
    category: "Lab",
    condition: "Good",
    description: "Clean, available for rent",
    seller: "Fatiha",
  },
  {
    id: 3,
    type: "swap",
    title: "Calculus Past Questions",
    wants: "Organic Chemistry Textbook",
    category: "PQs",
    description: "Complete set 2017-2023",
    seller: "Pamilerin",
  },
  {
    id: 4,
    type: "sell",
    title: "USB 64GB Flash Drive",
    price: 1500,
    category: "Electronics",
    condition: "New",
    description: "Brand new",
    seller: "Christopher",
  },
];

function ProductsPage() {
  const [activeTab, setActiveTab] = useState("buy"); // buy | sell | swap | rent
  const [items, setItems] = useState(initialItems);

  // Helpers
  const filteredItems = items.filter((it) => it.type === activeTab);

  const addListing = (newItem) => {
    newItem.id = Date.now();
    setItems((prev) => [newItem, ...prev]);
    setActiveTab(newItem.type); // jump to that tab
  };

  // handlers for forms (Sell, Swap) placed inline for simplicity
  const handleSellSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newItem = {
      type: "sell",
      title: form.title.value,
      price: Number(form.price.value) || 0,
      category: form.category.value || "General",
      condition: form.condition.value || "Used",
      description: form.description.value || "",
      seller: form.seller.value || "Unknown",
    };
    addListing(newItem);
    form.reset();
  };

  const handleSwapSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newItem = {
      type: "swap",
      title: form.title.value,
      wants: form.wants.value,
      category: form.category.value || "General",
      description: form.description.value || "",
      seller: form.seller.value || "Unknown",
    };
    addListing(newItem);
    form.reset();
  };

  const handleRentRequest = (item) => {
    // placeholder: open modal or send request later; for now alert
    alert(`Rent requested: ${item.title}\nContact seller: ${item.seller}`);
  };

  const handleContact = (item) => {
    // placeholder: open whatsapp or email. For demo, alert.
    alert(`Contact seller: ${item.seller}\nItem: ${item.title}`);
  };

  return (
    <div className="products-page">
      <Sidebar />

      <main className="main-area">
        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === "buy" ? "active" : ""}`}
            onClick={() => setActiveTab("buy")}
          >
            Buy
          </button>
          <button
            className={`tab ${activeTab === "sell" ? "active" : ""}`}
            onClick={() => setActiveTab("sell")}
          >
            Sell
          </button>
          <button
            className={`tab ${activeTab === "swap" ? "active" : ""}`}
            onClick={() => setActiveTab("swap")}
          >
            Swap
          </button>
          <button
            className={`tab ${activeTab === "rent" ? "active" : ""}`}
            onClick={() => setActiveTab("rent")}
          >
            Rent
          </button>
        </div>

        {/* Tab content */}
        <section className="tab-content">
          {activeTab === "buy" && (
            <>
              <h2>Available for purchase</h2>
              <div className="grid">
                {filteredItems.length === 0 ? (
                  <p>No items yet. Be the first to list!</p>
                ) : (
                  filteredItems.map((it) => (
                    <ProductCard
                      key={it.id}
                      item={it}
                      onContact={() => handleContact(it)}
                    />
                  ))
                )}
              </div>
            </>
          )}

          {activeTab === "sell" && (
            <>
              <h2>Sell an item</h2>
              <form className="listing-form" onSubmit={handleSellSubmit}>
                <input
                  name="title"
                  placeholder="Item title (e.g. Calculus Book)"
                  required
                />
                <input name="price" type="number" placeholder="Price (NGN)" />
                <input name="category" placeholder="Category" />
                <input name="condition" placeholder="Condition (New/Used)" />
                <input name="seller" placeholder="Your name" />
                <textarea name="description" placeholder="Short description" />
                <button type="submit" className="btn">
                  Publish Listing
                </button>
              </form>

              <h3>Your recent sell listings</h3>
              <div className="grid">
                {filteredItems.map((it) => (
                  <ProductCard
                    key={it.id}
                    item={it}
                    onContact={() => handleContact(it)}
                  />
                ))}
              </div>
            </>
          )}

          {activeTab === "swap" && (
            <>
              <h2>Propose a swap</h2>
              <form className="listing-form" onSubmit={handleSwapSubmit}>
                <input
                  name="title"
                  placeholder="Item you have (title)"
                  required
                />
                <input
                  name="wants"
                  placeholder="Item you want in exchange"
                  required
                />
                <input name="category" placeholder="Category" />
                <input name="seller" placeholder="Your name" />
                <textarea
                  name="description"
                  placeholder="Details & condition"
                />
                <button type="submit" className="btn">
                  Propose Swap
                </button>
              </form>

              <h3>Swap posts</h3>
              <div className="grid">
                {filteredItems.map((it) => (
                  <ProductCard
                    key={it.id}
                    item={it}
                    onContact={() => handleContact(it)}
                    showWants
                  />
                ))}
              </div>
            </>
          )}

          {activeTab === "rent" && (
            <>
              <h2>Rentals</h2>
              <div className="grid">
                {filteredItems.map((it) => (
                  <div key={it.id}>
                    <ProductCard
                      item={it}
                      onContact={() => handleContact(it)}
                    />
                    <div style={{ marginTop: 8 }}>
                      <label>
                        Days:{" "}
                        <input
                          type="number"
                          min="1"
                          defaultValue="1"
                          className="days-input"
                          id={`days-${it.id}`}
                        />
                      </label>
                      <button
                        className="btn"
                        onClick={() => {
                          const days =
                            Number(
                              document.getElementById(`days-${it.id}`).value
                            ) || 1;
                          alert(
                            `Total: NGN ${it.price * days}. Request sent to ${
                              it.seller
                            }`
                          );
                          handleRentRequest(it);
                        }}
                      >
                        Request Rent
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default ProductsPage;

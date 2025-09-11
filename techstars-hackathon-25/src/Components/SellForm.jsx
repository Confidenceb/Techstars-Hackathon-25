// Components/SellForm.jsx
export default function SellForm() {
  return (
    <div className="sell-form">
      <h2>Sell an Item</h2>
      <form>
        <input type="text" placeholder="Item Name" />
        <input type="number" placeholder="Price" />
        <textarea placeholder="Description"></textarea>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

import { useState } from "react";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

const Logo = () => <h1>🌴 Far Away 🧳</h1>;

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function submitHandler(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form onSubmit={submitHandler} className="add-form">
      <h3>Add items to your packing list</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems=[...items];
  if (sortBy==='input') {
    sortedItems=items;
  }
  else if (sortBy==='description') {
sortedItems=[...items];
    sortedItems.sort((a,b) => {
    const nameA = a.description.toUpperCase(); // ignore upper and lowercase
    const nameB = b.description.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}
else{
  sortedItems.sort((a, b) =>  b.packed -a.packed);
}

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={item.id}
            item={item}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "" }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Add something to your packing list</p>;
  const totalItems = items.length;
  const totalPacked = items.reduce((acc, cur) => acc + cur.packed, 0);

  const percentagePacked = +((totalPacked / totalItems) * 100).toFixed(2);
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You're ready to go!"
          : ` You have ${totalItems} items on your list, and you already packed
        ${totalPacked} (${percentagePacked}%) of them`}
      </em>
    </footer>
  );
}

export default App;

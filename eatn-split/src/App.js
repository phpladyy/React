import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
];

const ActionButton = ({ children, onClick }) => (
  <button onClick={onClick} className="button">
    {children}
  </button>
);

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddingFriendForm, setShowAddingFriendForm] = useState(false);
  const handleShowAddingFriend = () => setShowAddingFriendForm((show) => !show);

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddingFriendForm(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddingFriendForm && (
          <FormAddingFriend onAddFriends={handleAddFriends} />
        )}
        <ActionButton onClick={handleShowAddingFriend}>
          {showAddingFriendForm ? "close" : "Add friend"}
        </ActionButton>
      </div>
      <FormSplitingBill />
    </div>
  );
}

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>{friend.name} is even with you</p>}
      <ActionButton>Select</ActionButton>
    </li>
  );
}

function FormAddingFriend({ onAddFriends }) {
  const [friendName, setfriendName] = useState("");
  const [imgUrl, setimgUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!friendName || !imgUrl) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: friendName,
      image: `${imgUrl}?u=${id}`,
      balance: 0,
    };
    onAddFriends(newFriend);
    setfriendName("");
    setimgUrl("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friendInput">😻 Friend name</label>
      <input
        type="text"
        id="friendInput"
        value={friendName}
        onChange={(e) => setfriendName(e.target.value)}
      />
      <label htmlFor="imageInput">🖼️ Image URL</label>
      <input
        type="text"
        id="imageInput"
        value={imgUrl}
        onChange={(e) => setimgUrl(e.target.value)}
      />

      <ActionButton>Add</ActionButton>
    </form>
  );
}

function FormSplitingBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label htmlFor="billValue">💵 Bill value</label>
      <input type="text" id="billValue" />
      <label htmlFor="yourExpense">😫 Your expense</label>
      <input type="text" id="yourExpense" />
      <label htmlFor="friendExpense">😻 Friend expense</label>
      <input type="text" id="friendExpense" disabled />
      <label htmlFor="selectPayer">😫 Who is paying the bill?</label>
      <select id="selectPayer">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <ActionButton>Split bill</ActionButton>
    </form>
  );
}

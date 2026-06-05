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
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
const ActionButton = ({ children, onClick }) => (
  <button onClick={onClick} className="button">
    {children}
  </button>
);
export default function App() {
  const [showAddingFriendForm, setShowAddingFriendForm] = useState(false);
  const handleShowAddingFriend = () =>
    setShowAddingFriendForm((show)=> !show);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddingFriendForm && <FormAddingFriend />}
        <ActionButton onClick={handleShowAddingFriend}>
          {showAddingFriendForm ? "close" : "Add friend"}
        </ActionButton>
      </div>
      <FormSplitingBill />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;
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

function FormAddingFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="friendInput">😻 Friend name</label>
      <input type="text" id="friendInput" />
      <label htmlFor="imageInput">🖼️ Image URL</label>
      <input type="text" id="imageInput" />

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

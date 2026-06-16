import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=2147",
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
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);
  const [showAddingFriendForm, setShowAddingFriendForm] = useState(false);

  const handleShowAddFriendForm = () =>
    setShowAddingFriendForm((show) => !show);

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    handleShowAddFriendForm();
  }

  function handleSelection(friend) {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id !== friend.id ? friend : null,
    );
    setShowAddingFriendForm(false);
  }

  function handleSplit(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
          friends={friends}
        />
        {showAddingFriendForm && (
          <FormAddingFriend onAddFriends={handleAddFriends} />
        )}
        <ActionButton onClick={handleShowAddFriendForm}>
          {showAddingFriendForm ? "Close" : "Add friend"}
        </ActionButton>
      </div>
      {selectedFriend && (
        <FormSplitingBill
          key={selectedFriend.id}
          onSplit={handleSplit}
          selectedFriend={selectedFriend}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          selectedFriend={selectedFriend}
          onSelection={onSelection}
          key={friend.id}
          friend={friend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = friend?.id === selectedFriend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
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
      <ActionButton onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </ActionButton>
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
      <label htmlFor="friendInput">Friend name</label>
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

function FormSplitingBill({ selectedFriend, onSplit }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : 0;
  const [whoPays, setWhoPays] = useState("user");

  function changeFriendBal(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplit(whoPays === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="billValue">Bill value</label>
      <input
        type="text"
        id="billValue"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor="yourExpense">Your expense</label>
      <input
        type="text"
        id="yourExpense"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value),
          )
        }
      />
      <label htmlFor="friendExpense">{selectedFriend.name} expense</label>
      <input type="text" id="friendExpense" disabled value={paidByFriend} />
      <label htmlFor="selectPayer">Who is paying the bill?</label>
      <select
        id="selectPayer"
        value={whoPays}
        onChange={(e) => setWhoPays(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <ActionButton onClick={changeFriendBal}>Split bill</ActionButton>
    </form>
  );
}

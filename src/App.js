import { useState } from "react";
import FriendList from "./components/FriendList";
import SpliteBill from "./components/SpliteBill";
import AddFriendForm from "./components/AddFriendForm";
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

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function splitBill(value) {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          setFormOpen={setFormOpen}
        />
        {formOpen && (
          <AddFriendForm setFriends={setFriends} friends={friends} />
        )}
        <button
          className="button"
          onClick={() => setFormOpen((fromOpen) => !fromOpen)}
        >
          {!formOpen ? "Add Friend" : "close"}
        </button>
      </div>
      <div className="sidebar">
        {selectedFriend !== null && (
          <SpliteBill selectedFriend={selectedFriend} splitBill={splitBill} />
        )}
      </div>
    </div>
  );
}

export default App;

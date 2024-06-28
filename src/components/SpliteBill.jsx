import { useState } from "react";
import { Button } from "./Button";

export default function SpliteBill({ selectedFriend, splitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  function onSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    else {
      splitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
      setBill("");
      setPaidByUser("");
      setWhoIsPaying("user");
    }
  }
  return (
    <form className="form-split-bill" onSubmit={onSubmit}>
      <h2>split a bill with {selectedFriend?.name}</h2>
      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♂️ your expense:</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>👨🏿‍🤝‍👨🏻 {selectedFriend?.name}'s expense:</label>
      <input type="text" disabled value={paidByFriend} />
      <label>🤑 who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selectedFriend?.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

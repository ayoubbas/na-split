import { Button } from "./Button";

function Friend({ friend, setSelectedFriend, selectedFriend, setFormOpen }) {
  const isSelected = friend.id === selectedFriend?.id;
  function handleClick() {
    setSelectedFriend((select) => (select?.id === friend.id ? null : friend));
    setFormOpen(false);
  }
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name} </h3>
      {friend.balance > 0 && (
        <p className="green">
          you owe {friend.name} {friend.balance}$
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p> you owe sarah</p>}

      <Button onClick={handleClick}>{isSelected ? "close" : "select"}</Button>
    </li>
  );
}
export default Friend;

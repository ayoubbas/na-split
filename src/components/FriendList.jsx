import Friend from "./Friend";

function FriendList({
  friends,
  selectedFriend,
  setSelectedFriend,
  setFormOpen,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          setFormOpen={setFormOpen}
        />
      ))}
    </ul>
  );
}
export default FriendList;

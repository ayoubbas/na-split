import { useState } from "react";
import { Button } from "./Button";

function AddFriendForm({ setFriends, friends, setOpenSplitForm }) {
  const [name, setName] = useState("");
  const [image, setUrlImage] = useState("https://i.pravatar.cc/48");

  function handleSubmite(e) {
    e.preventDefault();
    setFriends([
      ...friends,
      {
        id: crypto.randomUUID(),
        name,
        image,
        balance: 0,
      },
    ]);
  }
  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmite(e)}>
      <label>👨🏼‍🤝‍👨🏼Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>📷 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setUrlImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

export default AddFriendForm;

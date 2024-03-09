import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form action="">
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <br />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note"
          cols="0"
          rows="5"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}
export default CreateArea;

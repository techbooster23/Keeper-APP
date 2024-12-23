import React, { useState } from "react";

function CreateArea(props) {
  const [inputItem, setInput] = useState({
    title: "",
    content: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    await setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button
          onClick={(e) => {
            props.addCurrNote(inputItem);
            e.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

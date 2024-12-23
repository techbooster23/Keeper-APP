import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [AllNotes, updateNotes] = useState([
    {
      title: "Note title",
      content: "Note Content",
    },
  ]);

  const updateAllNotes = (note) => {
    console.log(note);
    updateNotes((preval) => {
      return [
        ...preval,
        {
          title: note.title,
          content: note.content,
        },
      ];
    });
  };

  const deleteItem = (id) => {
    updateNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea addCurrNote={updateAllNotes} />
      {AllNotes.map((note, i) => {
        return (
          <Note
            key={i}
            id={i}
            title={note.title}
            content={note.content}
            delete={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

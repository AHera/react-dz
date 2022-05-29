/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

import Storage from "./components/Storage";
import NotesList from "./components/NotesList";
import Popup from "./components/Popup";

function App() {
  const [notesObj, setNotes] = useState(Storage.getNotes());
  return (
    <div
      css={css`
        margin: auto;
        max-width: 800px;
      `}
    >
      <Popup setNotes={setNotes} />
      <NotesList notes={notesObj} />
    </div>
  );
}

export default App;

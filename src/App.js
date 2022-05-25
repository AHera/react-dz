/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Notes from "./data/Notes.json";
import NotesList from "./components/NotesList";
import AddButton from "./components/AddButton";

function App() {
  return (
    <div
      css={css`
        margin: auto;
        max-width: 800px;
      `}
    >
      <AddButton />
      <NotesList notes={Notes} />
    </div>
  );
}

export default App;

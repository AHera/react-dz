/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import RandomID from "../../hooks/RandomID";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      `}
    >
      {notes.map((item) => (
        <NoteItem key={RandomID(5)} data={item} />
      ))}
    </div>
  );
}

export default NoteList;

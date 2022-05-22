/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import notes from "./data/notes.json";

function App() {
  console.log(notes);
  return (
    <div
      css={css`
        background: yellow;
      `}
    >
      app with emotion
    </div>
  );
}

export default App;

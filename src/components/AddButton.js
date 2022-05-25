/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function AddButton() {
  return (
    <div
      css={css`
        margin: 15px 35px;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        background: #000000;
        color: #ffffff;
        font-size: 50px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      +
    </div>
  );
}

export default AddButton;

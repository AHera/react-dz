/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import FormCreateNote from "./FormCreateNote";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenClick = () => {
    setIsOpen(true);
  };
  const onCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div
        onClick={onOpenClick}
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
          cursor: pointer;
        `}
      >
        +
      </div>
      <div
        css={css`
          display: ${isOpen ? "block" : "none"};
        `}
      >
        <FormCreateNote />
        <span
          onClick={onCloseClick}
          css={css`
            position: absolute;
            right: 5px;
            top: 5px;
            width: 25px;
            height: 25px;
            font-size: 25px;
            cursor: pointer;
          `}
        >
          &#10006;
        </span>
      </div>
    </div>
  );
}

export default Popup;

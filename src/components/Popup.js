/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import FormCreateNote from "./FormCreateNote";

function Popup(setNotes) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenClick = () => {
    setIsOpen(true);
  };
  const onCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
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
      {isOpen && (
        <div
          css={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #0000005e;
            align-items: center;
            display: flex;
          `}
        >
          <div
            css={css`
              display: ${isOpen ? "block" : "none"};
              margin: 0 auto;
              position: relative;
              border: 1px solid;
              background: #e6eced;
            `}
          >
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
            <FormCreateNote setNotes={setNotes} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;

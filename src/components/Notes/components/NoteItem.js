/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const NoteItem = ({ data: { title, date, description } }) => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
      margin: 15px;
      padding: 10px;
      width: 200px;
      background: #e6eced;
      border: 1px solid #000000;
      h3 {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 0px;
        padding: 10px 5px;
        border: 1px solid #000000;
        font-size: 14px;
      }
      p {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 10px 0px;
        padding: 5px;
        border: 1px solid #000000;
      }
    `}
  >
    <h3>{title}</h3>
    <p>{date}</p>
    <p>{description}</p>
  </div>
);

export default NoteItem;

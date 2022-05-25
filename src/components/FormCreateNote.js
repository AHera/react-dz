/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function FormCreateNote() {
  return (
    <form
      css={css`
        position: relative;
        margin: 15px 35px;
        padding: 30px;
        width: 400px;
        display: flex;
        flex-direction: column;
        border: 1px solid;
        background: #e6eced;
        input {
          margin: 10px 0px;
          padding-left: 15px;
          height: 30px;
          border: 1px solid;
          font-size: 18px;
          background: #e6eced;
        }
      `}
    >
      <div
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
      </div>
      <input name="title" type="text" placeholder="Название заметки" />
      <input
        css={css`
          min-height: 200px;
        `}
        name="description"
        type="text"
        placeholder="Описание заметки"
      />

      <button
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: flex-end;
          margin: 15px 0px;
          padding: 15px;
          width: 200px;
          font-size: 20px;
          border: 1px solid;
          border-radius: 5px;
          background: #e6eced;
          cursor: pointer;
        `}
      >
        Добавить
      </button>
    </form>
  );
}

export default FormCreateNote;

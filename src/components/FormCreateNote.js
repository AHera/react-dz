/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CreateDate from "./CreateDate";
import Storage from "./Storage";

function FormCreateNote(setNotes) {
  const onFormSubmit = function (event) {
    event.preventDefault();

    const newNote = {
      title: event.target.title.value,
      date: CreateDate(),
      description: event.target.description.value,
    };

    const currentNotes = Storage.getNotes();
    currentNotes.push(newNote);
    Storage.setNotes(currentNotes);
    setNotes(false);
  };

  return (
    <form
      onSubmit={onFormSubmit}
      css={css`
        position: relative;
        margin: 15px 35px;
        padding: 30px;
        width: 250px;
        display: flex;
        flex-direction: column;
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

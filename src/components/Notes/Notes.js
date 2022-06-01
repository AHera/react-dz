import NotesList from "./components/NotesList";
import Popup from "../Popup";
import FormCreateNote from "../FormCreateNote";
import useNotes from "./hooks/useNotes";

function Notes() {
  const { notesData, addNote, isClosePopup } = useNotes();

  return (
    <div>
      <Popup isClosePopup={isClosePopup}>
        <FormCreateNote onSubmit={addNote} />
      </Popup>
      <NotesList notes={notesData} />
    </div>
  );
}

export default Notes;

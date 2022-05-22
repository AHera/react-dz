import RandomID from "./RandomID";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  return notes.map((item) => <NoteItem key={RandomID(5)} data={item} />);
}

export default NoteList;

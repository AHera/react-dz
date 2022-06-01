import CreateDate from "../../hooks/CreateDate";
import Storage from "../../hooks/Storage";
import { useState } from "react";

const useNotes = () => {
  const [notesData, setNotesData] = useState(Storage.getNotes());
  const [isClosePopup, setIsClosePopup] = useState(false);

  const addNote = (event) => {
    event.preventDefault();

    const newNote = {
      title: event.target.title.value,
      date: CreateDate(),
      description: event.target.description.value,
    };

    setNotesData([...notesData, newNote]);
    Storage.setNotes([...notesData, newNote]);

    setIsClosePopup(true);

    setTimeout(() => {
      setIsClosePopup(false);
    }, 1000);
  };

  return {
    notesData,
    addNote,
    isClosePopup,
  };
};
export default useNotes;

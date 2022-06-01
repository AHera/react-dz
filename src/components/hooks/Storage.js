import Notes from "../../data/Notes.json";

const Storage = {
  isNotes() {
    return !!localStorage.getItem("notes");
  },
  getNotes() {
    return JSON.parse(localStorage.getItem("notes"));
  },
  setNotes(dataNotes) {
    localStorage.setItem("notes", JSON.stringify(dataNotes));
  },
};

if (!Storage.isNotes()) {
  Storage.setNotes(Notes);
}

export default Storage;

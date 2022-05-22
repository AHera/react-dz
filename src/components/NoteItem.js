const NoteItem = ({ data: { title, date, description } }) => (
  <div className="note">
    <div className="title">{title}</div>
    <div className="date">{date}</div>
    <div className="description">{description}</div>
  </div>
);

export default NoteItem;

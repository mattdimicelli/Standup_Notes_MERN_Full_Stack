import Note from './Note';

const Notes = ({ notes }) => {
    const notesList = notes.map(note => <Note note={note} />);
    return (
        {notesList}
    )
}
export default Notes;
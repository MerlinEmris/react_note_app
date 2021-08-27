import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { addNote } from './actions';
import { NewNoteInput } from './NewNoteInput';
import { NotesState } from './notesReducer';

function App() {

  const notes = useSelector<NotesState,NotesState['notes']>((state) => state.notes)
  const dispatch = useDispatch()
  
  const onAddNote = (note:string) => {
    dispatch(addNote(note))
  }

  return (
    <>
      <NewNoteInput addNote={ onAddNote } />
      
      <hr></hr>
      <ol>
        {notes.map((note,index) => {
          return <li className="m-4 p-4 my-6 text-center bg-red-300 text-lg font-extrabold flex justify-between" key={index}><div>{ note }</div><div className="bg-red-600 text-white p-2">X</div> </li>
        })}
      </ol>
    </>
  );
}

export default App;

import React, { ChangeEvent } from 'react'

interface NewNoteInputProps {
    addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {

    const [note, setNote] = React.useState("");

    const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }

    const onAddNoteClick = () => {
        addNote(note)
        setNote("")
    }

    return (
        <div className="flex justify-center align-middle text-center">
            <input value={note} onChange={updateNote} className=" text-white m-2 p-2 bg-gray-400 placeholder-gray-100" type="text" name="note" placeholder="Note" />
            <button onClick={ onAddNoteClick } className="bg-yellow-500 rounded-md m-2 p-4 text-white text-lg" >Add note</button>
        </div>
    )
}

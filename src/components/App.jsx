import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {

    const [notes, changeNotes] = useState([]);

    function addNote(note) {
        changeNotes(previous => {
            return [...previous, note];
        });
    }

    function deleteItem(id) {
        changeNotes(previous => {
            return previous.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAction={addNote}/>
            {notes.map((fnote, index) => {
                return (<Note key={index} id={index} title={fnote.title} content={fnote.content} onAction={deleteItem}/>);
            })}
            <Footer />
        </div>
    );
}

export default App;
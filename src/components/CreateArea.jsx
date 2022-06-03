import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {

    const [state, changeState] = useState({title: "", content: ""});
    const [displayState, changeDState] = useState(false);

    function updateChanges(event) {
      
      const {name, value} = event.target;

      changeState(previous => {
        return {
          ...previous,
          [name] : value
        }
      })
    }

    function clickNote() {
      changeDState(true);
    }

    return (
        <div>
          <form className="create-note">
            {(displayState && <input onChange={updateChanges} name="title" placeholder="Title" value={state.title} />)}
            <textarea onClick={clickNote} onChange={updateChanges} name="content" placeholder="Take a note..." rows={(displayState ? 3 : 1)} value={state.content} />
            <Zoom in={displayState}>
              <Fab type="button" onClick={() => {
                props.onAction(state);
                changeState({title: "", content: ""});
                }}>
                <AddIcon />
              </Fab>
            </Zoom>
          </form>
        </div>
      );
}

export default CreateArea;
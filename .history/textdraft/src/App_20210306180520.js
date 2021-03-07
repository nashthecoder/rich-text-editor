import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

const App = () => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  return (
    <div className="App">
      <header className="App-header">
        Mama Tech RichTextEditor Demo
      </header>
      <Editor 
      defaultEditorState={editorState} // Prop to update editor state in a controlled way
      onEditorStateChange={setEditorState} //A function called when there is a change in editor state that takes an object argument of type EditorState
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      />
    </div>
  )
}

export default App;
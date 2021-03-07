import React, { useState } from 'react';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

const App = () => {
  let _contentState = ContentState.createFromText('Sample content state');
  const raw = convertToRaw(_contentState)
  const [contentState, setContentState] = useState(raw) // ContentState JSON
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  return (
    <div className="App">
      <header className="App-header">
        Mama Tech RichTextEditor Demo
      </header>
      <Editor 
      defaultEditorState={editorState} // Object of type EditorState to initialize editor state with once it has been created
      onEditorStateChange={setEditorState} //A function called when there is a change in editor state that takes an object argument of type EditorState
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      />
    </div>
  )
}

export default App;
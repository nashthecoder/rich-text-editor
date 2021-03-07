import React from 'react'
import {Editor, EditorState} from 'draft-js';

export class PageContainer extends Component {
    render() {
        return (
            <div>
                <Editor />
            </div>
        )
    }
}

export default PageContainer

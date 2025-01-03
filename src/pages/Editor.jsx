import React from 'react'
import {HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar} from "@syncfusion/ej2-react-richtexteditor"

import { EditorData } from "../data/dummy"
import Header from "../components/Header"

function Editor() {
  return (
    <div className='m-2 md:10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[Toolbar, QuickToolbar, Link, Image, HtmlEditor]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
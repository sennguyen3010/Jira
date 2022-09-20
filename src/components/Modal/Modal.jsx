import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Modal() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div>
      {/* Modal trigger button */}
      {/* <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
        Launch
      </button> */}
      {/* Modal Body */}
      {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        // data-bs-backdrop="static"
        // data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Create issue
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="">Name project</label>
                <input className="form-control" type="text" id="projectName" />
              </div>

              <div className="form-group">
                <label htmlFor="">Description</label>
                <Editor
                  id="description"
                  apiKey="your-api-key"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue="<p>This is the initial content of the editor.</p>"
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist',
                      'autolink',
                      'lists',
                      'link',
                      'image',
                      'charmap',
                      'preview',
                      'anchor',
                      'searchreplace',
                      'visualblocks',
                      'code',
                      'fullscreen',
                      'insertdatetime',
                      'media',
                      'table',
                      'code',
                      'help',
                      'wordcount',
                    ],
                    toolbar:
                      'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                  }}
                />
                {/* <button type="button" onClick={log}>
                  Log editor content
                </button> */}
              </div>
              <div className="form-group">
                <label htmlFor="">Issue Type</label>
                <select className="form-control" name="" id="projectCategory">
                  <option value="">Dự án web</option>
                  <option value="">Dự án web</option>
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Create project
              </button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Optional: Place to the bottom of scripts */}
    </div>
  );
}

// Copyright 2019 Stanford University, licensed under Apache 2.0
export default class LinkedDataEditor extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <style>
      div {
        background-color: white;
        border: 1px solid #4e7b74;
      }
      h1 {
        color: #00505c;
        text-align: center;
      }
      img {
        width: 800px;
      }
      p {
        padding: .5em;
      }
    </style>
    <div>
      <h1>Linked Data Editor</h1>
      <p>

      </p>
      <a href="https://sinopia.io/">
        <img src="img/sinopia-homepage.png" alt="Sinopia's Homepage" />
      </a>
      <p>
        After logging into Sinopia using a AWS Cognito login and clicking on the
        Linked Data Editor routes to <strong>templates</strong> tab.
      </p>
      <a href="https://sinopia.io/templates">
       <img src="img/sinopia-templates-tab.png" alt="Sinopia's Templates Tab">
      </a>
      <p>
       Loading a Resource Template routes to the <strong>editor</strong> tab
      </p>
      <a href="https://sinopia.io/editor" alt="Sinopia's Editor Tab">
       <img src="img/sinopia-editor-work-title.png" alt="Sinopia Editor Tab with Work Title Resource Template">
      </a>
    </div>
    `
  }
}

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
    </style>
    <div>
      <h1>Linked Data Editor</h1>
    </div>
    `
  }
}

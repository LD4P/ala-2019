// Copyright 2019 Stanford University, licensed under Apache 2.0
export default class SinopiaProfileEditor extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <style>
      h1 {
        text-align: center;
      }
    </style>
    <div class="pe">
      <h1>Sinopia's Profile Editor</h1>
    </div>
    `
  }
}

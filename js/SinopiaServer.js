// Copyright 2019 Stanford University, licensed under Apache 2.0
export default class SinopiaServer extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <style>
      h1 {
        text-align: center;
      }
    </style>
    <div>
      <h1>Sinopia Server</h1>
    </div>
    `
  }
}

// Copyright 2019 Stanford University, licensed under Apache 2.0
export default class NextSteps extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <style>
      h1 {
        text-align: center;
      }
      .pe {
        background-color: white;
        border: 1px solid black;
      }
    </style>
    <div class="pe">
      <h1>Next Steps &hellip;</h1>
    </div>
    `
  }
}

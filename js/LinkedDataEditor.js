export default class LinkedDataEditor extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <div>
      <h1>Linked Data Editor</h1>
    </div>
    `
  }
}

export default class SinopiaProfileEditor extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <div>
      <h1>Sinopia's Profile Editor</h1>
    </div>
    `
  }
}

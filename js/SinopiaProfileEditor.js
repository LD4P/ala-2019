export default class SinopiaProfileEditor extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attach.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <div>
      <h1>Sinopia's Profile Editor</h1>
    </div>
    `
  }
}

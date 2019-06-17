export default class SinopiaServer extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <div>
      <h1>Sinopia Server</h1>
    </div>
    `
  }
}

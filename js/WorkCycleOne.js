import AboutSinopia from './AboutSinopia.js'
import LinkedDataEditor from './LinkedDataEditor.js'
import SinopiaProfileEditor from './SinopiaProfileEditor.js'
import SinopiaServer from './SinopiaServer.js'

customElements.define(`about-sinopia`, AboutSinopia)
customElements.define(`linked-data-editor`, LinkedDataEditor)
customElements.define(`sinopia-pe`, SinopiaProfileEditor)
customElements.define(`sinopia-server`, SinopiaServer)

class WorkCycleOne extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
      <style>
        .intro {
          background-image: url("img/home-background.png");
          border: 1px solid black;
          padding: .5em;
        }
        .sinopia-services {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 10px;
          grid-auto-rows: minmax(100px, auto);
         }
      </style>
      <div id="work-cycle-one">
        <div class="intro">
          <h4 style="float: right">
          <a href="https://ld4p.github.io/ala-2019/">https://ld4p.github.io/ala-2019</a></h4>

          <h2>ALA 2019 BIBFRAME Update</h2>
          <h1>Introducing Sinopia</h1>
          <p>by Jeremy Nelson &amp; Joshua Greben<br/>
           <a href="http://library.stanford.edu/">Stanford University Libraries</a>
           </p>
        </div>
        <about-sinopia></about-sinopia>
        <br />
        <div class="sinopia-services">
          <sinopia-pe></sinopia-pe>
          <linked-data-editor slot="loop"></linked-data-editor>
          <sinopia-server slot="loop"></sinopia-server>
        </div>
      </div>
    `
  }
}

export default WorkCycleOne

// Copyright 2019 Stanford University, licensed under Apache 2.0
import AboutSinopia from './AboutSinopia.js'
import LinkedDataEditor from './LinkedDataEditor.js'
import NextSteps from './NextSteps.js'
import SinopiaProfileEditor from './SinopiaProfileEditor.js'
import SinopiaServer from './SinopiaServer.js'

customElements.define(`about-sinopia`, AboutSinopia)
customElements.define(`linked-data-editor`, LinkedDataEditor)
customElements.define(`next-steps`, NextSteps)
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
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 10px;
          grid-auto-rows: minmax(100px, auto);
         }
      </style>
      <div id="work-cycle-one">
        <div class="intro">
          <h4 style="float: right">
          <a href="https://ld4p.github.io/ala-2019/">https://ld4p.github.io/ala-2019</a></h4>

          <h2>ALA 2019 BIBFRAME Update</h2>
          <h1 style="font-size: 3em;">Introducing Sinopia</h1>
          <p>by Jeremy Nelson &amp; Joshua Greben<br/>
           <a href="http://library.stanford.edu/">Stanford University Libraries</a>
           </p>
        </div>
        <about-sinopia></about-sinopia>
        <br />
        <div class="sinopia-services">
          <linked-data-editor slot="loop"></linked-data-editor>
          <sinopia-server slot="loop"></sinopia-server>
          <sinopia-pe></sinopia-pe>
          <next-steps></next-steps>
        </div>
        <div class="intro">
          Copyright &copy; 2019 <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a> This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
          Source code at <a href="https://github.com/LD4P/ala-2019">https://github.com/LD4P/ala-2019</a>.
        </div>
      </div>
    `
  }
}

export default WorkCycleOne

export default class AboutSinopia extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <style>
    .about {
      background-color: white;
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-gap: 10px;
      grid-auto-rows: minmax(200px, auto);
      margin-top: 1em;
      padding: 2em;
     }
    .one {
      grid-column: 1;
      grid-row: 1;
    }
    .two {
      grid-column: 2;
      grid-row: 1;
    }
    </style>
    <div class="about">
      <div class="one">
        <h1>About Sinopia</h1>
        <p>
          A project of the Andrew Mellon Foundation Linked Data for Production (LD4P),
          Sinopia is a collaborative linked-data editing environment that runs on
          <a href="https://aws.amazon.com/">Amazon Web Services</a> public cloud at
          <a href="https://sinopia.io">https://sinopia.io</a>.
        </p>
        <p>
          With project starting in fall of 2018, Sinopia is finishing up it's first
          work-cycle with the impending release of a Minimal Viable Product (MVP)
          at the end of July. 
        </p>
      </div>
      <div class="two">
        <img src="img/sinopia.png" style="width: 200px;"/>
      </div>
    </div>
    `
  }
}

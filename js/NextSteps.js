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

      h2 {
        margin-left: 1em;
      }
      li {
        font-size: 1.25em;
      }
      .pe {
        background-color: white;
        border: 1px solid black;
      }
    </style>
    <div class="pe">
      <h1>Next Steps &hellip;</h1>
      <h2>This Work Cycle</h2>
      <ul>
        <li>Edit existing Sinopia RDF Entities</li>
        <li>Simple search for finding existing Sinopia RDF Entities</li>

      </ul>
      <h2>Future</h2>
      <ul>
        <li>Edit external RDF sources (Wikidata, ShareVDE, &hellip;)</li>
        <li>Derive a new RDF entity based on an existing entity</li>
        <li>Expand cohort</li>
        <li>Feature requests from you!</li>
      </ul>
    </div>
    `
  }
}

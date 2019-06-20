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
      img {
        width: 800px;
      }
    </style>
    <div>
      <h1>Linked Data Editor &amp; Sinopia Server</h1>
      <p>
        The Linked Data Editor generates RDF based on the state of the application.
        Clicking on the <strong>Preview RDF</strong> button will display the RDF
        graph:
      </p>
      <img src="img/sinopia-preview-rdf-modal.png" alt="Preview RDF Modal with RDF graph" />
      <p>
        Clicking on the <img src="img/save-and-publish-button.png" style="width: 100px" alt="Save and Publish Button" />
        brings up a modal to select a group to save the RDF graph to and then the
        RDF is stored and managed in an instance of
        <a href="https://www.trellisldp.org/">Trellis</a>, a Linked-Data Platform,
       running on Amazon Web Services.
     </p>
     <p>
       The Sinopia Server returns the Trellis URI which can then be seen if you click on the
      <strong>Preview RDF</strong> button again:
     </p>
     <img src="img/sinopia-preview-saved-rdf.png" alt="Preview RDF Modal with saved Trellis URI" />
     <p>
     Click on the <a href="https://trellis.development.sinopia.io/repository/stanford/6b22feb6-c35f-462a-94d0-e8e5700fb75a">https://trellis.development.sinopia.io/repository/stanford/6b22feb6-c35f-462a-94d0-e8e5700fb75a</a>
     resolves to this web view:
     </p>
     <img src="img/trellis-pride-and-prejudice.png" alt="Trellis view of Pride and Prejudice" />
    </div>
    `
  }
}

// Copyright 2019 Stanford University, licensed under Apache 2.0
export default class SinopiaProfileEditor extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <style>
      h1 {
        text-align: center;
      }
    </style>
    <div class="pe">
      <h1>Sinopia's Profile Editor</h1>
      <p>
        Creating Resource Templates usually starts with by going to the
        <a href="https://profile-editor.sinopia.io/">https://profile-editor.sinopia.io/</a>
        and a creating a Profile. After creating and validating the enclosed
        Resource Templates, a JSON Profile file is exported and saved to your
        local computer's hard-drive.
      </p>
      <a href="https://profile-editor.sinopia.io/#/profile/sinopia">
        <img src="img/sinopia-profile-editor.png" style="width: 800px" />
      </a>
      <p>
        Sinopia's Profile Editor is a version of the Library of Congress's
        <a href="http://bibframe.org/profile-edit/">Profile Editor</a>.
      </p>
    </div>
    `
  }
}

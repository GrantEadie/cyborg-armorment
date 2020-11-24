import React from "react";



function Header() {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
        <a id="navTitle" class="navbar-brand" href="#">E | O </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse justify-content-center navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active mr-2">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Support</a>
            </li>
          </ul>
        </div>

      </nav>
      <br /><br />
      <div className="header container">
        <h1>endymion outfitters</h1>
        <h4>synthetic armament and bio-modification</h4>
      </div>
    </React.Fragment>
  );
}

export default Header;
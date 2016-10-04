var yo = require('yo-yo');

module.exports = function landing(box) {
	return yo`<div class="container">
    <div class="admision-box">
      <div class="psadmision-logo">
        <img class="pear-logo-admision" src="pear-logo.png" alt="pear-logo" />
        <h1>pearseries</h1>
      </div>
      ${box}
    </div>
  </div>`
}


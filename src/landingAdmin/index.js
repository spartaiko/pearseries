var yo = require('yo-yo');
var quiztest = require('../quizDir');


module.exports = function landingAdmin(box) {
	return yo`<div class="container">
    <div class="admision-box">
      <div class="psadmision-logo">
        <img class="pear-logo-admision" src="pear-logo.png" alt="pear-logo" />
        <h1>Examen de puta</h1>
      </div>
      ${box}
      jsjdfjsjdfjsdjfjsd
  </div>`
}

var yo = require('yo-yo');
var landing = require('../landing/admision.js')

var admisionTest = yo`<div class="title">
 <h1>pearseries - AdmisionTest</h1>
</div>`;

module.exports = landing(admisionTest);






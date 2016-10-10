var yo = require('yo-yo');
var quiztest = require('../quizDir');
var landing = require('../landing/admision.js')

var admisionTest = yo`<div class="title">
	<div id = "frame" role = "content">
  	${quiztest(function (quiz){
  	})}
  </div>
</div>`;

module.exports = landing(admisionTest);

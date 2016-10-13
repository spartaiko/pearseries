var yo = require('yo-yo');
var quiztest = require('../quizDir');
var landingAdmin = require('../landingAdmin');

var admisionTest = yo`<div class="title">
	<div id = "frame" role = "content">
  	${quiztest(function (quiz){
  	})}
  </div>
</div>`;

module.exports = landingAdmin(admisionTest);

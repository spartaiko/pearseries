var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/admision', function(ctx, next) {

	title('Admision');
	var main = document.getElementById('main-container');
    empty(main).appendChild(template);
})
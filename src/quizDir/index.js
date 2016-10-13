var yo = require('yo-yo');

module.exports = function (quiz) {

 var quiztitle = "The Flash";

 var quiz = [
	        {
	            "question" : "Quien NO desarrollo la serie 'The Flash'",
	            "image" : "http://www.tctelevision.com/elnoticiero/sites/default/files/img-articulo/the_flash.jpg",
	            "choices" : [
	                                    "Greg Berlanti",
	                                    "Melissa Rosenberg",
	                                    "Andrew Kreisberg",
	                                    "Geoff Johns"
	                                ],
	            "correct" : "Melissa Rosenberg",
	            "explanation" : "Melissa Rosenberg es la creadora de la serie 'Jessica Jones'.",
	        },
            {
                "question" : "Como se llama el actor que interpreta a Barry Allen (The Flash)?",
                "image" : "http://www.el19digital.com/files/articulos/111512.jpg",
                "choices" : [
                                        "Jesse L. Martin",
                                        "Tom Cavanagh",
                                        "Thomas Grant Gustin",
                                        "Keiynan Lonsdale"
                                    ],
                "correct" : "Thomas Grant Gustin",
                "explanation" : "Thomas Grant Gustin es el actor que interpreta a The Flash. Nacio el 14 enero de 1990 en Norfolk, Virginia.",
            },
            {
                "question" : "En que episodio oficialmente aparece Flash Reverso",
                "image" : "http://www.lacasadeel.net/wp-content/uploads/2014/12/the-flash-mid-season-finale-trailer-the-man-in-the-yellow-suit.png",
                "choices" : [
                                        "The Man in the Yellow Suit",
                                        "Rogue Air",
                                        "Fastest Man Alive",
                                        "Revenge of the Rogues"
                                    ],
                "correct" : "The Man in the Yellow Suit",
                "explanation" : "En la primer temporada Flash Reverso aparece en el episodio 09.",
            },
	        {
	            "question" : "Q2: Who is on the two dollar bill?",
	            "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/US_%242_obverse-high.jpg/320px-US_%242_obverse-high.jpg",
	            "choices" : [
	                                    "Thomas Jefferson",
	                                    "Dwight D. Eisenhower",
	                                    "Benjamin Franklin",
	                                    "Abraham Lincoln"
	                                ],
	            "correct" : "Thomas Jefferson",
	            "explanation" : "The two dollar bill is seldom seen in circulation. As a result, some businesses are confused when presented with the note.",
	        },
	        {
	            "question" : "Q3: What event began on April 12, 1861?",
	            "image" : "",
	            "choices" : [
	                                    "First manned flight",
	                                    "California became a state",
	                                    "American Civil War began",
	                                    "Declaration of Independence"
	                                ],
	            "correct" : "American Civil War began",
	            "explanation" : "South Carolina came under attack when Confederate soldiers attacked Fort Sumter. The war lasted until April 9th 1865.",
	        },
            {
                "question" : "Q1: Who came up with the theory of relativity?",
                "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
                "choices" : [
                                        "Sir Isaac Newton",
                                        "Nicolaus Copernicus",
                                        "Albert Einstein",
                                        "Ralph Waldo Emmerson"
                                    ],
                "correct" : "Albert Einstein",
                "explanation" : "Albert Einstein drafted the special theory of relativity in 1905.",
            },
            {
                "question" : "Q1: Who came up with the theory of relativity?",
                "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
                "choices" : [
                                        "Sir Isaac Newton",
                                        "Nicolaus Copernicus",
                                        "Albert Einstein",
                                        "Ralph Waldo Emmerson"
                                    ],
                "correct" : "Albert Einstein",
                "explanation" : "Albert Einstein drafted the special theory of relativity in 1905.",
            },
            {
                "question" : "Q1: Who came up with the theory of relativity?",
                "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
                "choices" : [
                                        "Sir Isaac Newton",
                                        "Nicolaus Copernicus",
                                        "Albert Einstein",
                                        "Ralph Waldo Emmerson"
                                    ],
                "correct" : "Albert Einstein",
                "explanation" : "Albert Einstein drafted the special theory of relativity in 1905.",
            },
            {
                "question" : "Q2: Who is on the two dollar bill?",
                "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/US_%242_obverse-high.jpg/320px-US_%242_obverse-high.jpg",
                "choices" : [
                                        "Thomas Jefferson",
                                        "Dwight D. Eisenhower",
                                        "Benjamin Franklin",
                                        "Abraham Lincoln"
                                    ],
                "correct" : "Thomas Jefferson",
                "explanation" : "The two dollar bill is seldom seen in circulation. As a result, some businesses are confused when presented with the note.",
            },
            {
                "question" : "Q3: What event began on April 12, 1861?",
                "image" : "",
                "choices" : [
                                        "First manned flight",
                                        "California became a state",
                                        "American Civil War began",
                                        "Declaration of Independence"
                                    ],
                "correct" : "American Civil War began",
                "explanation" : "South Carolina came under attack when Confederate soldiers attacked Fort Sumter. The war lasted until April 9th 1865.",
            },
	     

	    ];

 var currentquestion = 0,
     score = 0,
     submt = true,
     picked;

 jQuery(document).ready(function ($) {


     function htmlEncode(value) {
         return $(document.createElement('div')).text(value).html();
     }


     function addChoices(choices) {
         if (typeof choices !== "undefined" && $.type(choices) == "array") {
             $('#choice-block').empty();
             for (var i = 0; i < choices.length; i++) {
                 $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
             }
         }
     }

     function nextQuestion() {
         submt = true;
         $('#explanation').empty();
         $('#question').text(quiz[currentquestion]['question']);
         $('#pager').text('Pregunta ' + Number(currentquestion + 1) + ' of ' + quiz.length);
         if (quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != "") {
             if ($('#question-image').length == 0) {
                 $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
             } else {
                 $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
             }
         } else {
             $('#question-image').remove();
         }
         addChoices(quiz[currentquestion]['choices']);
         setupButtons();


     }


     function processQuestion(choice) {
         if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
             $('.choice').eq(choice).css({
                 'background-color': '#50D943'
             });
             $('#explanation').html('<strong>Correcto!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
             score++;
         } else {
             $('.choice').eq(choice).css({
                 'background-color': '#D92623'
             });
             $('#explanation').html('<strong>Incorrecto!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
         }
         currentquestion++;
         $('#submitbutton').html('SIGUIENTE PREGUNTA &raquo;').on('click', function () {
             if (currentquestion == quiz.length) {
                 endQuiz();
             } else {
                 $(this).text('Verifica la respuesta').css({
                     'color': '#222'
                 }).off('click');
                 nextQuestion();
             }
         })
     }


     function setupButtons() {
         $('.choice').on('mouseover', function () {
             $(this).css({
                 'background-color': '#'
             });
         });
         $('.choice').on('mouseout', function () {
             $(this).css({
                 'background-color': '#'
             });
         })
         $('.choice').on('click', function () {
             picked = $(this).attr('data-index');
             $('.choice').removeAttr('style').off('mouseout mouseover');
             $(this).css({
                 'border-color': '#222',
                 'font-weight': 700,
                 'background-color': '#c1c1c1'
             });
             if (submt) {
                 submt = false;
                 $('#submitbutton').css({
                     'color': '#000'
                 }).on('click', function () {
                     $('.choice').off('click');
                     $(this).off('click');
                     processQuestion(picked);
                 });
             }
         })
     }


     function endQuiz() {
         $('#explanation').empty();
         $('#question').empty();
         $('#choice-block').empty();
         $('#submitbutton').remove();
         $('#question').text("You got " + score + " out of " + quiz.length + " correct.");
         $(document.createElement('h2')).css({
             'text-align': 'center',
             'font-size': '4em'
         }).text(Math.round(score / quiz.length * 100) + '%').insertAfter('#question');
     }


     function init() {
         //add title
         if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
             $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
         } else {
             $(document.createElement('h1')).text("Quiz").appendTo('#frame');
         }

         //add pager and questions
         if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
             //add pager
             $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Pregunta 1 de ' + quiz.length).appendTo('#frame');
             //add first question
             $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
             //add image if present
             if (quiz[0].hasOwnProperty('image') && quiz[0]['image'] != "") {
                 $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
             }
             $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html('&nbsp;').appendTo('#frame');

             //questions holder
             $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');

             //add choices
             addChoices(quiz[0]['choices']);

             //add submit button
             $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Verifica la respuesta').css({
                 'font-weight': 700,
                 'color': '#222',
                 'padding': '30px 0'
             }).appendTo('#frame');

             setupButtons();
         }
     }

     init();
 })
};
let i = 0;// number question
let baseResult = [];
localStorage.clear();
next();//first question print

//window.scrollBy(0,500);


async function next() {

//************** Подключение JSON файла 
                     
let  response =  await fetch('../tests/biolog_test_1.json');

let base =  await response.json();

//***************** работа с вопросами 
 
  
     
  let result;
 
  print_question (base.bullet[i].question);
  print_img (base.bullet[i].picture);
  print_answers (base.bullet[i].typeOFanswers, base.bullet[i].answers);
  save_result(base.bullet[i].typeOFanswers);
  baseResult.push(localStorage.result);
 
  i++; //next question

  if (i == 7) {
    print_result(base, baseResult);
   
  }

return ;
}

//* **************************** FUNCTION ********************* 

function print_question(i) {
  $('div.test_question').html(i);
};


function print_img(path) {
  if (path=='') { 
    $('.test_img').slideUp(500);
  } else {
    $('.test_img').slideDown(500);
     
  
  let test_img = '<img src="'+path+'" id="test_img1">';
    
  $('div.test_img').html('');
  $('div.test_img').append(test_img);

  //const el = document.getElementById('sgf');//? window scroll
  //console.log(el);
  //el.scrollIntoView();
   //window.scrollTo(0,1000);
  

  }
  
};


function print_answers(typeOFanswers, answers) {

  if (typeOFanswers == "button") {

    $('div.test_answer').html('');
    
    for(let i = 0; i < 4; i++) {
      let answer = '<div class="answer_button">'+answers[i]+'</div>';
      $('div.test_answer').append(answer);
        }

  } else {
    
    $('div.test_answer').html('');
    let answer = '<input type="text" id="res">'
    $('div.test_answer').append(answer);
  }


};

function save_result(typeOFanswers) {
  let result;

  if (typeOFanswers == "button") {
    $('.answer_button').on('click', function() {

      $('.answer_button').css('background-color','white');
      $(this).css('background-color','green');
      
      localStorage.result = this.innerHTML ;
         
    })
    
  } else {
    $('input').change(function(){
      localStorage.result = this.value;
    });
   
  }
  
}

function print_result (base,baseResult) {
  $('div.area_test>div').addClass('hide');
  $('div.area_test>button').addClass('hide');

  let field = $('div.area_test');

  field.append('<div class="result question_title">Р Е З У Л Ь Т А Т Ы</div>');
 
  //*** Print  - button *******************************************/
 
  var total_right = 0;
  for (let j = 0; j < baseResult.length-1; j++) {

    field.append('<div class="result question">'+base.bullet[j].question+'</div>');//print question
    
    if (base.bullet[j].picture != '') {
    field.append('<img src="'+base.bullet[j].picture+'" class="result picture">');//print img
    }
    let your;

    if ((base.bullet[j].typeOFanswers == "button")) {

     for (let n =0; n < 4; n++ ) {
      
           
        if (base.bullet[j].answers[n] == baseResult[j+1]) {
          your = " (Ваш ответ)";
        } else {
          your = "";
        }
              //mark right
        if (base.bullet[j].answers[n] == base.bullet[j].right_answer) {
          field.append('<div class="result answers green">'+base.bullet[j].answers[n]+'<span class="blue">'+your+'</span>'+'</div>');

          //  Check right answer
          if (base.bullet[j].right_answer == baseResult[j+1]) { total_right++ ; }
          
        } else {
          field.append('<div class="result answers">'+base.bullet[j].answers[n]+'<span class="blue">'+your+'</span>'+'</div>');
        }
      }
    }
    field.append('<div class="line"></div>');
  }

  // *** Print - input *********************





  //****************** TOTAL ********************** */

  field.append('<div class="total_right"> ПРАВИЛЬНЫХ ОТВЕТОВ :  '+total_right+'</div>');
}
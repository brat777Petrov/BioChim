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

  if (i == 4) {
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
  }
  
  let test_img = '<img src="'+path+'" >';
    
  $('div.test_img').html('');
  $('div.test_img').append(test_img);
  
  
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

  for (let j = 0; j < baseResult.length; j++) {

    field.append('<div class="result question">'+base.bullet[j].question+'</div>');
    
    if (base.bullet[j].picture != '') {
    field.append('<img src="'+base.bullet[j].picture+'" class="result picture">');
    }

    for (let n =0; n < 4; n++ ) {
      field.append('<div class="result answers">'+base.bullet[j].answers[n]+'</div>');
    }

    field.append('<div class="line"></div>');

    
  }

}
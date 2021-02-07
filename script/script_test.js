let i = 0;// number question
next();//first question print

async function next() {

//************** Подключение JSON файла 
                     
let  response =  await fetch('../tests/biolog_test_1.json');

let base =  await response.json();

//***************** работа с вопросами 

 
  
  print_question (base.bullet[i].question);
  print_img (base.bullet[i].picture);
  print_answers (base.bullet[i].typeOFanswers, base.bullet[i].answers);
  //save_result();
  i++; //next question

return ;
}

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
    let answer = '<input autofocus type="text">'
    $('div.test_answer').append(answer);
  }


};


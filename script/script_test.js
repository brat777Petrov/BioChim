let i = 0;// номер вопроса number question
next();

async function next() {

//************** Подключение JSON файла 
                     
let  response =  await fetch('../tests/biolog_test_1.json');

let base =  await response.json();

//***************** работа с вопросами */   console.log(base); 

 
  
  print_question (base.bullet[i].question);

i++;

return ;
}

function print_question(i) {
  $('div.test_question').html(i);
};


function print_img() {};


function print_answers() {};
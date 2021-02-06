let i = 0;// номер вопроса number question
next();

async function next() {

//************** Подключение JSON файла 
                     
let  response =  await fetch('../tests/biolog_test_1.json');

let base =  await response.json();

//***************** работа с вопросами */    console.log(); 

 
  
  print_question (base.bullet[i].question);
  print_img (base.bullet[i].picture);

  i++;

return ;
}

function print_question(i) {
  $('div.test_question').html(i);
};


function print_img(path) {
  let test_img = '<img src="'+path+'" >';
  
  
  $('div.test_img').html('');
  $('div.test_img').append(test_img);
};


function print_answers() {};
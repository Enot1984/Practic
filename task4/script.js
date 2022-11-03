skill.addEventListener('click', function(event) {
      let link = prompt("Измените текст ссылки"); 
      if (link) {
            document.querySelector('#skill').textContent = `${link}`;
      }
      else {
            document.querySelector('#skill',).textContent = "Измените текст ссылки";
} 
 console.log('Получилось!'); 
});

// В задании надо было использовать preventDefoult, я сделела так, что задача решилась без неё. Вставляю, ничего не меняется) поэтому решила оставить так. Возможно конечно, что это решение неверно.

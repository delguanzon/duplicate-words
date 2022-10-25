window.addEventListener("load", function() {
  let sentence = "Hello hello hello world world sentence"; 
  let distinctWords = ["X"];
  let words = sentence.split(" ");
  words.forEach( function(word) {
      let ctr = 0;    
      // Determine number of occurence of word in words array
      for(i = 0; i < words.length; i++) {
          let x = words[i];
          if(x.toLowerCase() === word.toLowerCase()) {
              ctr+=1;            
          }
      }
      // 
      distinctWords.push(word.toLowerCase() + " " + ctr);
      if(distinctWords.length >= 2 ) {
        if(distinctWords[distinctWords.length - 2] === distinctWords[distinctWords.length - 1]) 
        distinctWords.pop();
      }
      
      // let isDuplicate; 

      // distinctWords.forEach(function(element) {
      //   if (word.toLowerCase() === element.toLowerCase()) {
      //       isDuplicate = true;
      //   } 
      // });

      // // If hasn't been added already, add to distinctWords
      // if (!isDuplicate) {
      //   distinctWords.push(word.toLowerCase());
      // }
  });

  console.log(distinctWords);
  
  let body = document.querySelector("body");
  let ul = document.createElement("ul");
  body.append(ul);

  distinctWords.forEach(function(word) {
    let li = document.createElement("li");
    ul.append(li);
    li.append(word);
  });
  

});

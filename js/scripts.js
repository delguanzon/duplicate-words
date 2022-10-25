window.addEventListener("load", function() {

  let form = document.getElementById("form");
  form.addEventListener("submit", function(event) { 
    event.preventDefault();
    let sentence = document.getElementById("sentence").value; 
    let distinctWords = [];

    //let newSentence = sentence.replace(/\W/g, ''); //regex for removing punctuations

    let words = sentence.split(" ");
    console.log(words);

    words.forEach( function(word) {
        let ctr = 0;
        let newWord = word.replace(/\W/g, '');

        /** Determine number of occurence of word in words array*/
        if(newWord != "") { //ignore empty elements; happens if you use double space or two non-alpha numeric characters on your sentence
          for(i = 0; i < words.length; i++) {
              let x = words[i].replace(/\W/g, '');
              if(x.toLowerCase() === newWord.toLowerCase()) {
                  ctr+=1;
              }
          }

          
          distinctWords.push(newWord.toLowerCase() + " " + ctr);
          console.log(distinctWords);
          if(distinctWords.length >= 2 ) {
            for(i = 0; i < distinctWords.length - 1; i++) { //Iterate to all elements of distinct words except the latest word
              if(distinctWords[i] === distinctWords[distinctWords.length - 1]) { //compare the last element to the current word of distinct words
                //console.log("pop "+ distinctWords[distinctWords.length - 1]) >>>console.log for debugging;
                distinctWords.pop();
              }
            }
          }
        }

          // distinctWords.forEach(function(word) { //Iterate to all elements of distinct words
          //   console.log(word + " ? " + distinctWords[distinctWords.length - 2]);
          //   console.log(word === distinctWords[distinctWords.length - 2]);
          //   if(word === distinctWords[distinctWords.length - 2]) //compare the last element to the current word of distinct words
          //   console.log("pop "+ distinctWords[distinctWords.length - 2])  
          //   distinctWords.pop(); // pop out the last word from the array if current element is equal to last element
          // });


          //if(distinctWords[distinctWords.length - 2] === distinctWords[distinctWords.length - 1])  <Previous code for comparing last and before-last values;
          //distinctWords.pop();        
    });

    console.log(distinctWords);
    
    let body = document.querySelector("body");
    let ul = document.createElement("ul");
    body.append("You entered: " + sentence);
    body.append(ul);
    

    distinctWords.forEach(function(word) {
      let li = document.createElement("li");
      ul.append(li);
      li.append(word);
    });
  });
});

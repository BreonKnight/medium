//Medium  :)
console.log("Sanity Check: JS is working!");
$(document).ready(function(){
  //variables
  var mySentence = "Water may be one of the most abundant compounds on Earth, but it is also one of more mysterious. For example, like most liquids it becomes denser as it cools. But unlike them, it reaches a state of maximum density at 4°C and then becomes less dense before it freezes.";
  var frenchSentence = "L'eau peut être l'un des composés les plus abondants sur terre , mais il est aussi l'un des plus mystérieux . Par exemple , comme la plupart des liquides , il devient plus dense comme il se refroidit . Mais contrairement à eux , il atteint un état de densité maximale à 4 ° C , puis devient moins dense avant qu'elle ne gèle .";
  var italianSentence = "L'acqua può essere uno dei composti più abbondanti sulla Terra, ma è anche uno dei più misterioso . Ad esempio , come la maggior parte dei liquidi che si addensa come si raffredda . Ma a differenza loro , raggiunge uno stato di massima densità a 4 ° C e quindi diventa meno densa prima di congelare .";
  var myPoem = "Roses are red, violets are blue\nI love Medium so should you";


  //This function finds how many words are in the text area.
  function getWordCount(paragraphs) {
    var regExp = /[a-zA-Z]+/ig;
    var count = paragraphs.match(regExp).length;
    if(count === 0) {
      console.log("There are no words.");
      return "There are no words.";
    } else if (count === 1) {
      console.log("There is 1 word.");
      return "There is 1 word.";
    }else{
      console.log("There are " + (count) + " words.")
      return "There are " + count + " words.";
    }
  }

  //This function takes the text area and tells you the number of paragraphs.
  function getSetenceCount(paragraphs) {
    var count = 0;
    //regular expression to handle cases involving words using periods and elipises.
    var regExp = /(\W|^)(mr\.|mrs\.|ms\.|\'|dr\.|\.{2,})(\W|$)/ig;
    paragraphs = paragraphs.replace(/"/g, "");
    var sentences;
    if (paragraphs !== paragraphs.match(regExp)) {
      sentences = paragraphs.split(".")
      sentences.pop();
      count = sentences.length;
    }
    if (count > 1) {
      console.log("There are " + count + " sentences.");
      return "There are " + count + " sentences.";
    } else if (count === 1) {
      console.log("There is " + count + " sentence.");
      return "There is " + count + " sentence.";
    } else {
      console.log("There are no sentences.");
      return "There are no sentences.";
    }
  }

  //Paragraph counter
  function getParagraphCount(paragraphs) {
    //counter for paragraphs
    var count;
    var paragraphArray = [];
    //regex for detecting textfield of words.
    var textArea = /\b[a-zA-Z+ |0-9 |$&+,:;’=?@#|'<>.^*()%!-]+/ig;
    if(paragraphs.match(textArea)) {
      paragraphArray.push(paragraphs)
    }
    count = paragraphArray.length;
    if (count > 1) {
      console.log("There are " + count + " paragraphs.");
      return "There are " + count + " paragraphs.";
    } else if (count === 1) {
      console.log("There is " + count + " paragraph.");
      return "There is " + count + " paragraph.";
    } else {
      console.log("There are no paragraphs.");
      return "There are no paragraphs.";
    }
  }

  //function for bigram
  function bigram(paragraphs) {
    var wordNeighbors = [];
    var words = paragraphs.replace(/[^a-zA-Z ]/g, "").split(" ");
    console.log(words + " Before function");
    words.forEach(function (element, index) {
      if (words[index + 1]) {
        wordNeighbors.push([element , words[index + 1]]);
      } else {
        wordNeighbors.push([element]);
      }
    });
    wordNeighbors.sort();
    console.log(mostPopularBigram(wordNeighbors));
    return mostPopularBigram(wordNeighbors);
  }

  //helper function for bigram
  function mostPopularBigram(array) {
    var reoccuring = {};
    for (var i = 0; i < array.length; i++) {
      reoccuring[array[i]] = (reoccuring[array[i]] || 0) + 1;
    }
    var max = { val: array[0], count: 1 };
    for (var r in reoccuring) {
      if (max.count < reoccuring[r]) { max = { val: r, count: reoccuring[r] }; }
    }
    return "Most popular bigrams: \"" + max.val + "\"" + " (" + max.count +")";
  }

  //gets number of vowels in a text field.
  function vowels(text) {
    var wordtext = text.match(/[aeiou]/gi).length;
    console.log("There are " + wordtext + " vowels in this text area.");
    return "There are " + wordtext + " vowels in this text area.";
  }

  //returns a random word from the text field
  function randomWord(text){
    var regExp = /[a-zA-Z]+/ig;
    var words = text.match(regExp);
    var word = words[Math.floor(Math.random()*words.length)];
    console.log("Random word of the day: " + word + ".")
    return "Random word of the day: " + word + ".";
  }

  //function for language detection with french, english, and italian.
  function detectLanguage(paragraph){
    var regExp = /[a-zA-Z]+/ig;
    var languages = [];
    var english = {name: "English", count: 0};
    var italian = {name: "Italian", count: 0};
    var french  = {name: "French", count: 0};
    var language;
    var englishRegex = /(\W|^)(the | to |be |of |and |a |in |that |have |I |for |not |on| with)(\W|$)/g;
    var frenchRegex = /(\W|^)(le| la| les| je| tu |il| elle| nous| vous| ils| elles)(\W|$)/g;
    var italianRegex = /(\W|^)(il| i| gli| la| le| io| tu| lui| lei| noi| voi| loro)(\W|$)/g;
    var words = paragraph.match(regExp);
    words.forEach(function (word){
      if (word.match(englishRegex)) {
        english.count++;
      }
      if (word.match(frenchRegex)) {
        french.count++;
      }
      if (word.match(italianRegex)) {
        italian.count++;
      }
    });
    languages.push(french, english, italian);
    languages.sort(function (a,b) {
      return parseFloat(a.count) - parseFloat(b.count);
    });
    console.log(languages)
    language = languages.pop();
    console.log("This is the " + language.name + " language.")
    return "This is the " + language.name + " language.";
  }

  var textField = $('#entry').on("click", function (event) {
      event.preventDefault();
      $("#words-list").empty()
      $("#stat-list").empty()
      var text = $(".text-input").val();
      var wordCount = getWordCount(text);
      var sentenceCount = getSetenceCount(text);
      var paragraphCount = getParagraphCount(text);
      var bigramCount = bigram(text);
      var vowel = vowels(text);
      var random = randomWord(text);
      var language = detectLanguage(text);

      $("#words-list").append("<li>" + "<p>" + text + "</p>" + "</li>");
      $("#stat-list").append("<li>" +"<p> Word Count:" + getWordCount(text) + "</p>"
        +"<p> Word Count: " + wordCount + "</p>"
        +"<p> Sentence Count: " + sentenceCount + "</p>"
        +"<p> Paragraph Count: " + paragraphCount + "</p>"
        +"<p> Bigram: " + bigramCount + "</p>"
        +"<p> Vowel Count: " + vowel + "</p>"
        +"<p> Random Word: " + random + "</p>"
        +"<p> Language: " + language + "</p>" +
      "</li>");
  });
  //test cases provided by Jeff
  getWordCount(mySentence);
  getSetenceCount(mySentence);
  getParagraphCount(mySentence);
  bigram(mySentence);
  vowels(mySentence);
  randomWord(mySentence);
  detectLanguage(mySentence);
  detectLanguage(frenchSentence);
  detectLanguage(italianSentence);
});

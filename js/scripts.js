var toStrings = function(phrase){
  var englishWords = phrase.split(" ");

  for(var i = 0; i < englishWords.length; i++) {
    englishWords[i] = piglatin(englishWords[i]);
  }

  var pigPhrase = englishWords.join(" ");

  return pigPhrase;
};


var piglatin = function(englishWord){
  if(qCheck(englishWord)) {
    var splitAt = 2;
  } else {
    var splitAt = indexOfFirstVowel(englishWord);
  }
  return englishWord.slice(splitAt) + englishWord.slice(0,splitAt) + 'ay';
};

var indexOfFirstVowel = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var letters = word.split("");

  for (var i = 0; i < letters.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (letters[i] === vowels[j]){
        return i;
      };
    };
  };
};

var qCheck = function(word) {
  var firstletter = word[0];
  if (firstletter === "q") {
    return true;
  } else {
  return false;
  }
}



$(document).ready(function() {
  $("form#piglatin").submit(function(event) {

    var napkins = $("textarea#text").val();
    var result = toStrings(napkins);

    $("#result").text(result);
    event.preventDefault();
  });
});

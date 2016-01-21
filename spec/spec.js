describe("piglatin", function() {

  it("input word and if starts with a vowel, it will add 'ay' ", function() {
    expect(piglatin("apple")).to.equal("appleay");
  });

  it("words that start with a consonant", function() {
    expect(piglatin("pig")).to.equal("igpay");
  });

  it("will input a word that start with 2 consonants and return pigword", function() {
    expect(piglatin("crave")).to.equal("avecray");
  });

  it("will input a word that starts with 3 consonants and return pigword", function() {
    expect(piglatin("strong")).to.equal("ongstray");
  });

  it("will input a word that starts with 'qu' and return pigword", function() {
    expect(piglatin("acquire")).to.equal("acquireay");
  });
});

describe("toStrings", function(){
  it("will input two or more words and return two pigwords", function() {
    expect(toStrings("his dog")).to.eql("ishay ogday");
  });

});

/*! Bijoy Unicode Converter Engine */

function ConvertToASCII(input) {
  return Avro.parse(input);
}

function ConvertToUnicode(input) {
  return Avro.reverse(input);
}

var Avro = (function () {

  var map = [
    [/ক/g, "K"], [/খ/g, "L"], [/গ/g, "M"], [/ঘ/g, "N"], [/ঙ/g, "O"],
    [/চ/g, "P"], [/ছ/g, "Q"], [/জ/g, "R"], [/ঝ/g, "S"], [/ঞ/g, "T"],
    [/ট/g, "U"], [/ঠ/g, "V"], [/ড/g, "W"], [/ঢ/g, "X"], [/ণ/g, "Y"],
    [/ত/g, "Z"], [/থ/g, "a"], [/দ/g, "b"], [/ধ/g, "c"], [/ন/g, "d"],
    [/প/g, "e"], [/ফ/g, "f"], [/ব/g, "g"], [/ভ/g, "h"], [/ম/g, "i"],
    [/য/g, "j"], [/র/g, "k"], [/ল/g, "l"], [/শ/g, "m"], [/ষ/g, "n"],
    [/স/g, "o"], [/হ/g, "p"], [/া/g, "v"], [/ি/g, "w"], [/ু/g, "y"],
    [/ে/g, "‡"], [/ো/g, "‡v"], [/্/g, "্"]
  ];

  function parse(text) {
    map.forEach(function(rule) {
      text = text.replace(rule[0], rule[1]);
    });
    return text;
  }

  function reverse(text) {
    return text;
  }

  return {
    parse: parse,
    reverse: reverse
  };

})();

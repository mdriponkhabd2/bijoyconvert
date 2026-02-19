function convertToUnicode() {
  const input = document.getElementById("inputText").value;
  document.getElementById("outputText").value = convertBijoyToUnicode(input);
}

function convertToBijoy() {
  const input = document.getElementById("inputText").value;
  document.getElementById("outputText").value = convertUnicodeToBijoy(input);
}

function copyText() {
  const output = document.getElementById("outputText");
  output.select();
  document.execCommand("copy");
  alert("Copied Successfully!");
}

function clearText() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
}

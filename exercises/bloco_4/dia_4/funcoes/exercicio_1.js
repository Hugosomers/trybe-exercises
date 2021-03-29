function checkPalindrome(wordStr, wordlg){

  for(let i = 0; i < wordlg; i+=1){
    if(wordStr[i] !== wordStr[wordlg-1 - i]){
      return false
    }
  }
  return true
}


let word = 'desenvolvimento';
let length = word.length;
let isPalindrome = checkPalindrome(word, length);
console.log(isPalindrome);
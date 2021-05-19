// Encode
let object = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

function encodeCharacteres(char) {
  let receptor = object[char];

  if (receptor) return receptor;

  return char;
}

function encode(str) {
  let encodedStr = '';
  str.split('').forEach((char) => {
    encodedStr += encodeCharacteres(char);
  });
  return encodedStr;
}

// Decode
let objectDecode = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function decodeNumbers(num) {
  let decoderNum = objectDecode[num];

  if (decoderNum) return decoderNum;

  return num;
}

function decode(decodeStr) {
  let decodedStr = '';
  decodeStr.split('').forEach((char) => {
    decodedStr += decodeNumbers(char);
  });
  return decodedStr;
}

module.exports = {
  encode,
  decode
}
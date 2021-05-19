const uppercase = (str, callback) => {
  setTimeout(()=>{
    callback(str.toUpperCase());
  }, 1000);
};

module.exports = {
  uppercase,
}
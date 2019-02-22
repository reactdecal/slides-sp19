function doTwice(func, input) {
  return func(func(input));
}

doTwice(function(message) {
  return message.split("").reverse().join("");
}, "Hello world");

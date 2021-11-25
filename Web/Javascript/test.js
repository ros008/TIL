var a = 1;
var b = 2;
var outer = function () {
  var inner = function () {
    console.log(a);
    console.log(b);
    var a = 3;
  };
  inner();
  console.log(a);
};
outer();
console.log(a);

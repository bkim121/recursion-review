// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  // your code here
  //we need start point
 
  var result = [];
  if (element === undefined) {
    element = document.body;
  }

  var classList = element.classList ? element.classList : [];
  for (var x = 0; x < classList.length; x++) {
    if (classList[x] === className) {
      result.push(element);
    }
  }
  
  var childs = element.childNodes ? element.childNodes : [];
  for (var x = 0; x < childs.length; x ++) {
    result = result.concat(getElementsByClassName(className, childs[x]));
  }
  
  return result;
};

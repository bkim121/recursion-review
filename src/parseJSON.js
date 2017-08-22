// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  console.log(json);

  if (json.length <= 1) {
    return json;
  }
  
  if (json[0] === '[') {
    var result = [];
    
    return result;
  }

  if (json[0] === '{') {
    var result = {};
    var place = [];
    var json = json.slice(1, json.length);
    while (json.length > 2) {
      var hold = parseJSON(json);
      place.push(hold);
      json = json.slice(hold.length + 2);
    }
    
    for (var i = 0; i < place.length - 1; i++) {
      console.log();
      if (place[i + 1] === '') {
        result[place[i]] = '';
        i++;
      } else {
        result[place[i]] = result[place[i + 1]];
        i++;
      } 
    }
    return result;
  }
  
  if (json[0] === '"') {
    var i = 1;
    var string = '';
    while (json[i] !== '"') {
      string += json[i];
      i++;
    }
    return string;
  }

  if (json[0] === ',') {
  
  }
  

  if (json[0] === ':') {
    json = json.slice(2);
    return parseJSON(json);
  }
  
  
  // your code goes here
};














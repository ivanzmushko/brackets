module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets = bracketsConfig.join('').replace(/,/g, '');
  let Stack = [];

  for (let bracket of str) 
    {
      let bracketsIndex = brackets.indexOf(bracket);
      if (bracketsIndex % 2 === 0) 
      {
          if (bracket === brackets[bracketsIndex + 1] && Stack[Stack.length - 1] === bracketsIndex) {
              Stack.pop();
          }
          else if (bracket === brackets[bracketsIndex + 1] && Stack[Stack.length - 1] !== bracketsIndex) 
          {
              Stack.push(bracketsIndex);
          }
          else 
          {
              Stack.push(bracketsIndex);
          }
      }  
      else 
      {
          if (Stack.pop() !== bracketsIndex-1) 
          {
              return false;
          }
      }
      
  }
  return Stack.length === 0;
}

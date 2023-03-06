function sayMyName(name) {
    console.log(name)
  }
  
  // This is you TELLING your computer what to do
  sayMyName('Vrushali')
  
  
  function greeting(name){
    greet = 'Hi ${name} , Nice to meet you!!!'
    console.log(greet)
    console.log('Hi ' + name + ', Nice to meet you!')
  }
  greeting('Vrushali')
  
  
  
  // BONUS: How come these two function calls print two different names if they are both called sayMyName?
  
  // Remember this function?
  function sum(a,b) {
    return a+b
  }
  
  let result = sum(9,10)
  
  // What would this print out? How does "return" work in the function?
  console.log(result)
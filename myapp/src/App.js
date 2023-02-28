import './App.css';

function App() {
  let num1 = 8 ;
  let num2 = 2;

  // document.getElementById("num1-el").innerHTML = num1
  // document.getElementById("num2-el").innerHTML = num2
  
  let sumEl = document.getElementById("sum")

function add(){
  let result = num1 + num2
  sumEl.innerHTML = "Sum: " + result
}
function subtract(){
  let result = num1 - num2

  sumEl.innerHTML = "Sum: " + result
}
function divide(){
  let result = num1 / num2

  sumEl.innerHTML = "Sum: " + result
}
function multiply(){
  let result = num1 * num2

  sumEl.innerHTML = "Sum: " + result
}

  
  return (
    <div className="App">
      <span id="num1-el">8</span>
      <span id="num2-el" >2</span>
      <br />
      <div>
        <button onClick={() => add()} >Add</button>
        <button onClick={() => subtract()} >Subtract</button>
        <button onClick={() => divide()} >Divide</button>
        <button onClick={() => multiply()}>Multiply</button>
      </div>
      <br />
      <span id="sum">Sum : </span>
    </div>
  );
}

export default App;

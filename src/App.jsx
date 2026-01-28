import { First } from "./assets/component/Home";
import Check from "./Day6/Check";

let App = ()=>{
  //return always return only one jsx element 
  //user fragment(<></>) or div to return multiple jsx element
  //always use () to return jsx element

  let count = 300000;
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a paragraph.</p>
      {/* Never use capital letter for jsx element(html like tag) */}
      {/* <B>This is bold text.</B>     */}
      <b>This is bold text</b>
      {/* Use classNmae instead of class attributes */}
      {/* Use htmlFor instead of for  */}
      <b className="boldText">This is another bold text</b>
      {/* User {} for expression or variable */}
      <h4>Total Amount: {67+89}</h4>
      <p>Even or Odd: {45%2==0?"Even":"Odd"}</p>
      <h3>Count value: {count}</h3>
      <First />
      <Check isLoggedIn={true}/>
    </div>

  )
}

export default App

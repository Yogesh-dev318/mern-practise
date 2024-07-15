
function dosomething(event){
    console.log("hello world")
    console.log(event)
}
function dosomething2(){
    console.log("hello")
}
function double(){
    console.log("clicked")
}
export default function Button(){
    return(
        <div>
        <button onClick={dosomething} >Click Me!</button>
        <p onClick={dosomething2} >This para is for event demo</p>
        <p onMouseOver={dosomething2} >This para is for event demo
        This para is for event demoThis para is for event demoThis para is for event demoThis para is for event demo</p>
        <button onDoubleClick={double}>Double Click me!!</button>

        </div>
    )
}
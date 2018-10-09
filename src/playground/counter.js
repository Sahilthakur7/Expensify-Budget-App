
let count = 0;
const someId = 'myidhere';

const addOne = () => {
    count = count + 1; 
    renderCounterApp();
}

const subOne = () => {
    count = count - 1;
    renderCounterApp();
}

const resetFunction = () => {
    count = 0;
    renderCounterApp();
}




const renderCounterApp = () => {

    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subOne}>-1</button>
            <button onClick={resetFunction}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo,appRoot);
}

renderCounterApp();

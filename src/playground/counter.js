class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubOne = this.handleSubOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        this.setState({
            count: this.state.count + 1
        });
    }

    handleSubOne() {
        this.setState({
            count: this.state.count - 1
        })
    }

    handleReset() {
        this.setState({
            count: 0
        })
    }


    render(){
        return(
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />,document.getElementById('app'));

// let count = 0;
// const someId = 'myidhere';

// const addOne = () => {
//     count = count + 1; 
//     renderCounterApp();
// }

// const subOne = () => {
//     count = count - 1;
//     renderCounterApp();
// }

// const resetFunction = () => {
//     count = 0;
//     renderCounterApp();
// }




// const renderCounterApp = () => {

//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={subOne}>-1</button>
//             <button onClick={resetFunction}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo,appRoot);
// }

// renderCounterApp();

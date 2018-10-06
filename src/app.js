var app = {
    title: 'Indecision App',
    subtitle: "Lets you decide",
    options: ['One', 'Two']
}

var template = (
    <div>
        <h1>{app.title}</h1>
        {(app.subtitle) && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are the options" : 'No Options For you'}</p>
        <ol>
            <li>Item one</li> 
            <li>Item two</li> 
        </ol>
    </div>
);

var user = {
    name: 'Sahil Thakur',
    age: 22,
    location: 'Shimla'
};

function getLocation(location){
    if(location){
        return (
            <p>Location: {location} </p>
        );
    }
}

let count = 0;
const someId = 'myidhere';

const addOne = () => {

}

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button>>-1</button>
        <button>reset</button>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot);

var app = {
    title: 'Indecision App',
    subtitle: "Lets you decide",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    console.log(option);

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        appRender();
    }

};


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

const removeAll = () => {
    app.options = [];
    appRender();
}

const appRoot = document.getElementById('app');

const appRender = () => {

    var template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are the options" : 'No Options For you'}</p>
            <p>{app.options.length}</p>
            <button onClick= {removeAll}>Remove All</button>
            <ol>
                <li>Item one</li> 
                <li>Item two</li> 
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot);
}

appRender();

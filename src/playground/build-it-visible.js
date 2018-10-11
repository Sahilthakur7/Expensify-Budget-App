let text = "here is the text";
let ButtonText = "Visibility Toggler";

const onToggler = () => {
    text = 'Text has changed';
    ButtonText = "Mujhe kyu toggle kiya?";
    appRender();
}

const root = document.getElementById('app');

var appRender = () => {
    var template = (
        <div>
            <button style={{fontSize: 20}} onClick={onToggler}>{ButtonText}</button>
            <p>
                {text}
            </p>
        </div>
    );
    ReactDOM.render(template, root);
}



appRender();

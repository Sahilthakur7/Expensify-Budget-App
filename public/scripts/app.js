"use strict";

var text = "here is the text";
var ButtonText = "Visibility Toggler";

var onToggler = function onToggler() {
    text = 'Text has changed';
    ButtonText = "Mujhe kyu toggle kiya?";
    appRender();
};

var root = document.getElementById('app');

var appRender = function appRender() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { style: { fontSize: 20 }, onClick: onToggler },
            ButtonText
        ),
        React.createElement(
            "p",
            null,
            text
        )
    );
    ReactDOM.render(template, root);
};

appRender();

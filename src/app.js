class IndecisionApp extends React.Component {

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your hands in the life of a computer';
        const options = ['Zlatan','Messi', 'Memphis'];

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption options={options}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick(){
        alert('handle Pick');
    }

    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What Should I Do?</button>
            </div>
        );
    }
}

class Options extends React.Component{

    handleRemoveAll(){
        alert('Handle Remove All');
    }

    render(){
        let optionsArray = this.props.options;
        let options = optionsArray.map((option)=>{
            return(
                <Option key={option} optionText={option}/>
            );
        })

        return(
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {optionsArray.length==0? NULL : options}
                <Option/>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return(
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {

    onFormSubmit(e){
        e.preventDefault(); 
        const option = e.target.elements.option.value.trim;
        console.log(option);

        if(option){
            console.log(options);
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button> 
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));

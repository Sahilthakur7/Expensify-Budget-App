class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options: ['Zlatan', 'Wayne', 'Dimitar']
        };
        
    }

    handleDeleteOptions() {
        this.setState({
            options: []
        })
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your hands in the life of a computer';

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options}
                         handleDeleteOptions = {this.handleDeleteOptions} 
                />
                <AddOption options={this.state.options}/>
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
                <button 
                    disabled={!this.props.hasOptions} 
                    onClick={this.handlePick}>What Should I Do?</button>
            </div>
        );
    }
}

class Options extends React.Component{

    render(){
        let optionsArray = this.props.options;
        let options = optionsArray.map((option)=>{
            return(
                <Option key={option} optionText={option}/>
            );
        })

        return(
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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

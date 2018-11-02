class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
        
    }

    handleDeleteOptions() {
        this.setState({
            options: []
        });
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log(randomNum);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value';
        }else if (this.state.options.indexOf(option) > -1){
            return 'Already exists';
        }
        let newArray = this.state.options.concat(option);
        this.setState({
            options: newArray
        })
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your hands in the life of a computer';

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    handlePick = {this.handlePick} 
                    hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options}
                         handleDeleteOptions = {this.handleDeleteOptions} 
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption} 
                    options={this.state.options}/>
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

    render(){
        return (
            <div>
                <button 
                    disabled={!this.props.hasOptions} 
                    onClick={this.props.handlePick}>What Should I Do?</button>
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
                {optionsArray.length==0 ? null : options}
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
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault(); 
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState({
            error: error
        })
        if(option){
            this.props.handleAddOption(option);
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button> 
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));

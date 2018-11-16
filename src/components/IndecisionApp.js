import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Header from './Header.js';
import Action from './Action.js';

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };

    }

    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState({
                    options: options
                })

            } 
        } catch(e){
            //Do nohting
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions() {
        this.setState({
            options: []
        });
    }

    handleDeleteOption(optionToRemove){
        let newOptions = this.state.options.filter((option) => {
            return optionToRemove !== option; 
        });
        this.setState({
            options: newOptions
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
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption} 
                    options={this.state.options}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;

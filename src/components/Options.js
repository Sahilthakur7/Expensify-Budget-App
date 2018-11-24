import React from 'react';
import Option from './Option.js';

class Options extends React.Component{

    render(){
        let optionsArray = this.props.options;
        let options = optionsArray.map((option)=>{
            return(
                <Option key={option} 
                    handleDeleteOption = {this.props.handleDeleteOption} 
                    optionText={option}/>
            );
        })

        return(
            <div>
                <div className="widget-header">
                    <h3 className="widget-header__title">Your Options</h3>
                    <button 
                        className="button--link"
                        onClick={this.props.handleDeleteOptions}>Remove All</button>
                </div>
                {optionsArray.length === 0 && <p className="widget__message">Please add an option </p>}
                {optionsArray.length==0 ? null : options}
            </div>
        );
    }
}

export default Options;

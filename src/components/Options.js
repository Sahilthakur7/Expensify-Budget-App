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
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {optionsArray.length==0 ? null : options}
            </div>
        );
    }
}

export default Options;

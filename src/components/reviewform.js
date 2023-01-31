import React from 'react';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: '', output: props.output};
        this.formUpdate = this.formUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.outputs = []; 
    }

    formUpdate(event) {
        this.setState(state => ({input: event.target.value}));
    }
      
    handleClick() {
        this.outputs.push(this.state.input);
        this.setState(state => ({output: this.outputs}));
    }

    render() {
        return (
            <div className="form-group">
                <label>{this.state.output}</label>
                <input type="text" className="form-control" aria-describedby="reviewHelp" placeholder="Enter review here" value={this.state.input} onChange={this.formUpdate}/>
                <button className='btn btn-primary' onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
};
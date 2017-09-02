import React from 'react';

export default class XLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
        this.AddNum = this.AddNum.bind(this);
    }
    AddNum(){
        this.setState({num:this.state.num+1});
    }
    render() {
        return (
            <div>
                <h1>Xiaofeng's num{this.state.num}
                    Component</h1>
                <button onClick={this.AddNum}>Add</button>
            </div>
        );
    }
}

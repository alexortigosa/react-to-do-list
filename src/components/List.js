import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props)
        this.state = {list: ["Todo 1", "Todo 2"]}
    }

    render() {
        const {list} = this.state
      return (<div>
          <ul>{list.map(element => <ElementList text={element}/>)}</ul>
          <AdderInput/>
          </div>)
    }
}

class ElementList extends Component {
    render(){
        const {text} = this.props
        return <li>{text}</li>
    }
}

class AdderInput extends Component {
    constructor(props){
        super(props)
        this.state = {value : ""}
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render(){
        const {value} = this.state
        return <input type="text" value={value} onChange={this.handleChange}/>
    }
}


export default List;
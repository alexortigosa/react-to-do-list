import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props)
        this.state = {list: ["Todo 1", "Todo 2"]}
    }

    render() {
        const {list} = this.state
      return <ul>{list.map(element => <ElementList text={element}/>)}</ul>
    }
}

class ElementList extends Component {
    render(){
        const {text} = this.props
        return <li>{text}</li>
    }
}


export default List;
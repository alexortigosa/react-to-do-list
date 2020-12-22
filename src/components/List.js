import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props)
        this.state = {list: ["Todo 1", "Todo 2"]}
    }

    addElement = (element) => {
        const {list} = this.state
        list.push(element)
        this.setState({list})
    }

    render() {
        const {list} = this.state
      return (<div>
          <ul>{list.map((element,index) => <ElementList key={index} text={element}/>)}</ul>
          <AdderInput addCallback={this.addElement}/>
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
        const {addCallback} = this.props
        return (<div>
            <input type="text" value={value} onChange={this.handleChange}/>
            <button onClick={()=> addCallback(value)}>Añadir</button>
            </div>)
    }
}


export default List;
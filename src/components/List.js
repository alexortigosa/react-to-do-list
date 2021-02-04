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

    deleteElement = (element) => {
        const {list} = this.state
        list.splice(list.indexOf(element),1)
        this.setState({list}) 
    }

    render() {
        const {list} = this.state
      return (<div>
          <h1>To do List</h1>
          <ul>{list.map((element,index) => <ElementList key={index} text={element} deleteCallback={this.deleteElement}/>)}</ul>
          <AdderInput addCallback={this.addElement}/>
          </div>)
    }
}

class ElementList extends Component {
    render(){
        const {text, deleteCallback} = this.props
        return <li>{text}    <button onClick={()=> deleteCallback(text)}>x</button></li>
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
import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import actionFunc from './actions/myaction';
class App extends Component {
  state = {
    text: "reactData",
    mackwish: ['eat']
  }
  async componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          mackwish: [...this.state.mackwish, json.title]
        })

      })
  }
  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      mackwish: [this.state.text, ...this.state.mackwish]
    });
    this.setState({
      text: ''
    })
    //console.log("form submit")
  }
  changeInputFn = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  deleteFn = (id) => {
    console.log(">>>>>>>>>>>.      " + id);

    let newWishlist = this.state.mackwish.filter((item, index) => {
      console.log(index, id)
      return index !== id
    })
    console.log(newWishlist)
    this.setState({
      mackwish: newWishlist
    })



  }

  render() {
    let wishData = this.state.mackwish.map((item, index) => {
      return <div><h1 key={index}>{item}</h1><button onClick={() => { this.deleteFn(index) }}>delete</button></div>
    })
    return (
      <div>
        <div>--------------------------this is redux part------------------------------------</div>
        <div> i am app component</div >
        <div> my name is {this.props.myname}</div>
        <input placeholder="search" onChange={(e) => this.props.changeFn(e.target.value)} />
        <span>{this.props.myinput}</span>
        <button onClick={() => { this.props.changeName() }}>click</button>
        <button onClick={() => { this.props.addwish() }}>add wish</button>
        {this.props.mywish.map((item, index) => {
          return <h1 key={index}>{item}</h1>
        })}
        <div>--------------------------this is redux part------------------------------------</div>
        <div>----------------this is normal react-----------</div>
        <form onSubmit={(e) => { this.submitForm(e) }}>
          <input type="text" value={this.state.text} className="inputBar" onChange={(e) => this.changeInputFn(e)} />
          <p>{this.state.text}</p>
          <input type="submit" />
        </form>
        <div>{wishData}</div>
        <div>----------------this is normal react-----------</div>
      </div >
    )
  }
}


const mapStateToProps = (state) => {
  return {
    myname: state.name,
    mywish: state.wish,
    myinput: state.inputT
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFn: (name) => { dispatch(actionFunc.addChange(name)) },
    changeName: () => { dispatch(actionFunc.anotherName()) },
    addwish: () => { dispatch(actionFunc.addWish()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);



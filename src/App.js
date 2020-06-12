import React, { Fragment } from "react";
import "./App.css";
import { connect } from 'react-redux';
import actionFunc from './actions/myaction';
function App(props) {
  console.log(props);
  console.log(props.mywish)
  const mywish = props.mywish.map((item, index) => {
    return <h1 key={index}>{item}</h1>
  })
  return (
    <Fragment>
      <div> i am app component</div >
      <div> my name is {props.myname}</div>
      <button onClick={() => { props.changeName() }}>click</button>
      <button onClick={() => { props.addwish() }}>add wish</button>
      {mywish}
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    myname: state.name,
    mywish: state.wish
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => { dispatch(actionFunc.anotherName()) },
    addwish: () => { dispatch(actionFunc.addWish()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

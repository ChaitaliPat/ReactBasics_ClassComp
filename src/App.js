import React from 'react'
import './App.css'
import Age from './Age'

class App extends React.Component{
  state={
    age:5,
    history:[]
  }
  
  incHandler=()=>{
    this.setState({
      ...this.state,
      age:this.state.age+3,
      history:this.state.history.concat({age:this.state.age+3})
    })
  }

  decHandler=()=>{
    this.setState({
      ...this.state,
      age:this.state.age>0?this.state.age-2:0,
      history:this.state.history.concat({age:this.state.age-2})
    })
  }

  render(){
    // console.log("INCREENTED***",this.state)
    return(
      <div className="App">
        <h1>Welcome</h1>
        <Age age={this.state.age}/>
        <div style={{display:"flex",justifyContent:'space-around',alignItems:'center'}}>
          <button onClick={this.incHandler}>*INCREMENT*</button>
          <button onClick={this.decHandler}>*DECREMENT*</button>
        </div>
        <div>
        <h2>HISTORY</h2>
        <ul>
          {this.state.history.map(i=>(
            <li key={Math.random()} style={{backgroundColor:"teal",margin:5}}>{i.age}</li>
          ))}
        </ul>
        </div>
      </div>
    )
  }
}

export default App;

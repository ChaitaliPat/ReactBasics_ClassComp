import React from 'react'
import './App.css'
import Age from './Age'

class App extends React.Component{
  state={age:5}
  
  incHandler=()=>{
    this.setState({
      ...this.state,
      age:this.state.age+1
    })
  }

  decHandler=()=>{
    this.setState({
      ...this.state,
      age:this.state.age>0?this.state.age-1:0
    })
  }

  render(){
    return(
      <div className="App">
        <h1>Welcome</h1>
        <Age age={this.state.age}/>
        <div style={{display:"flex",justifyContent:'space-around',alignItems:'center'}}>
          <button onClick={this.incHandler}>INCREMENT</button>
          <button onClick={this.decHandler}>DECREMENT</button>
        </div>
      </div>
    )
  }
}

export default App;

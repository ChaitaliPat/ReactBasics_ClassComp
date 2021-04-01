import React from 'react'

class Age extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello from Age: {this.props.age}</h1>
            </div>
        )
    }
}

export default Age
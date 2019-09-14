import  React, { Component } from 'react';
import { connect } from 'react-redux';// is used to connect component to reduxStore
import { tick } from '../actions';




class Clock extends Component {

  componentDidMount(){
    setInterval(this.props.tick,1000);
  }
  render(){
    console.log("clock",this.props);
    return (
       <h1>{this.props.time}</h1>
    );
  }

}

function mapStateToProps(state){ // this adds state to props
return {
  time: state.clock.time
  }
}



export default connect(mapStateToProps,{ tick: tick })(Clock);//returns a function with a added method

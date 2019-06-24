import React,{Component, Fragment} from 'react';

export default class FriendZone extends Component{
  render(){
    return(
      <Fragment>
        <div>{this.props.left}</div>
        <div>{this.props.right}</div>
      </Fragment>
    )
  }
}

export const FriendList = () => {
  return <div>FriendList</div>
}

export const ChatZone = () => {
  return <div>ChatZone</div>
}


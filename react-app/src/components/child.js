import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log('31231231',props.father)
		this.state = {
			showFlag: true
		}
  }

	childClick = () => {
		this.props.method()
		console.log(this.props.method, 'dasdadsad')
	}

  render() {
    const showFlag = this.state.showFlag
		let msg
		if(!showFlag) {
			msg = <span>我的父亲{this.props.father}</span>
		} else {
			msg = <span>我的母亲</span> 
		}

		let listMsg
		let arr = [1,2,3,4,5]
		listMsg = arr.map(item => {
			return <div key={item}>{item}</div>
		})

    return <div>
			{msg}
			<div onClick={this.props.method}>button</div>
			<div>
				{listMsg}
			</div>
    </div>;
  }
}


export default Child;

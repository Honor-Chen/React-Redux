// import React, { Component } from 'react'
import React from 'react'
import { connect } from 'react-redux'

/* 以下代码改为UI组件
class TodoList extends Component {
	constructor (props) {
		super(props)
	}
	render() {
		const {
			inputValue,
			inputChange,
			clickButton,
			list
		} = this.props
		return (
			<>
				<div>
					<input value={ inputValue } onChange={ inputChange }/>
					<button onClick={ clickButton }>提交</button>
				</div>
				<ul>
					{
						list.map((item, index) => {
							return (<li key={ index }>{ item }</li>)
						})
					}
				</ul>
			</>
		)
	}
}
*/
const TodoList = props => {
	const {
		inputValue,
		inputChange,
		clickButton,
		list
	} = props
	return (
		<>
			<div>
				<input value={ inputValue } onChange={ inputChange }/>
				<button onClick={ clickButton }>提交</button>
			</div>
			<ul>
				{
					list.map((item, index) => {
						return (<li key={ index }>{ item }</li>)
					})
				}
			</ul>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		inputChange (e) {
			let action = {
				type: 'change_input',
				value: e.target.value
			}
			dispatch(action)
		},
		clickButton () {
			let action = {
				type: 'add_item'
			}
			dispatch(action)
		}
	}
}

// connect 第一个入参代表映射关系（把原来的state映射成组件中的props属性）
export default connect(mapStateToProps, mapDispatchToProps) (TodoList)

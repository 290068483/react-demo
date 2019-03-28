import React,  {Component }from "react"; 
const propsProxyHoc = WrappedComponent => class extends Component {
    handleClick(){
        console.log('我的代理模式里面的click')
    }
    render(){
        return <WrappedComponent {...this.props} handleClick ={this.handleClick}/>;
    }
}

export default propsProxyHoc;
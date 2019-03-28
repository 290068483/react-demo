import React, { Component} from 'react';
import simpleHoc from './simpleHoc/simpleHoc';
import propsProxyHoc from "./propsProxyHoc/propsProxyHoc";
import refHoc from "./refHoc/refHoc";

class Usual extends Component{
    render(){
        console.log(this.props,'props');
        return (
          <div>
            <div>Usual</div>
            <div>
              我是高阶组件生产出来的普通组件，import我使用我就可以出来哦
            </div>
            <button onClick={this.props.handleClick}>点击</button>
          </div>
        );
    }
}
// export default simpleHoc(Usual)
// export default propsProxyHoc(Usual) //代理模式
export default refHoc(Usual) //ref获取组件实例

// @simpleHoc   需要配置，暂时会报错
// export default class Usual extends Component{
//     render(){
//         renturn(
//             <div>Usual</div>
//         )
//     }
// }
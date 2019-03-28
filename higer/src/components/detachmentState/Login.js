import React ,{Component} from 'react';
import formCreate from './formCreate';
class Login extends Component {
  render() {
    return (
        <div>
            <div>
            <label id="username">账号</label>
            <input name="username" {...this.props.getFields("username")} />
            </div>
            <div>
            <label id="password">密码</label>
                    <input name="password" {...this.props.getFields("password")} />
            </div>
            <button onClick={this.props.handleSubmit}>提交</button>
            <div>other content</div>
      </div>
    );
  }
}
export default formCreate(Login);
/** 
 * 1，Login 是一个组件
 *    login handleSubmit是提交里面的逻辑是console，getFields 是formCreate hoc 传递过来的一个回调，通过这个回掉来获取
 *    pwd.value 和username.value
 * 2
 * 这里我们把state，onChange等方法都放到HOC里，其实是遵从的react组件的一种规范，子组件简单，傻瓜，
 * 负责展示，逻辑与操作放到Container。比如说我们在HOC获取到用户名密码之后，再去做其他操作，就方便多了，
 * 而state，处理函数放到Form组件里，只会让Form更加笨重
 * ，承担了本不属于它的工作，这样我们可能其他地方也需要用到这个组件，但是处理方式稍微不同，就很麻烦了
*/
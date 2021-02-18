import React, { Component } from 'react';
import style from './index.less';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const { Item } = Form;
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
class Login extends Component {
    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    /* handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }; */

    render() {
        return (
            <div className={style['loginContainer']}>
                <div className={style['loginForm']}>
                    <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        name="loginForm"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Item>

                        <Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Item>

                        <Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Item>

                        <Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Item>
                    </Form>
                </div>
            </div >
        )
    }
}


export default Login;
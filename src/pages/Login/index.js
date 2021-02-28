import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { login } from 'store/actions/userInfo';
import logo from 'static/images/logo.png';
import style from './index.less';
class Login extends Component {
    state = {
        remember: false
    }
    onFinish = (values) => {
        const { history, handleLogin } = this.props;
        const { username, password } = values;
        if (username.trim().length === 0 || password.trim().length === 0) {
            message.warn('Enter correct info');
        } else {
            handleLogin({
                name: username,
                password
            });
            history.push('/');
        }
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    onRemember = (e) => {
        this.setState({
            remember: e.target.checked
        });
    }

    render() {
        // console.log('props:', this.props);
        return (
            <div className={style['loginContainer']}>
                <div className={style['logo']}>
                    <img src={logo} />
                </div>
                <div className={style['loginForm']}>
                    <Form
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        name="loginForm"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Username is required!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Password is required!',
                                },
                            ]}
                            style={{
                                marginBottom: '4px'
                            }}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item
                            style={{
                                marginBottom: '4px'
                            }}
                        >
                            <Form.Item className={style['remember']} name="remember" valuePropName={false} noStyle>
                                <Checkbox onChange={this.onRemember}>Remember me</Checkbox>
                            </Form.Item>

                            <a className={style['forgot']} href="">Forgot password</a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className={style['submit-button']}>Log in</Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    userInfo: state.userInfo
});

const mapDispatchToProps = dispatch => ({
    handleLogin: data => dispatch(login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
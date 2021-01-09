import React, { Component } from 'react';
import { Table, Space, Row, Col, Button, Dropdown } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import DeleteModal from '../../modals/DeleteModal';
import UserModal from '../../modals/UserModal';
import ProfileMenu from '../../components/ProfileMenu';
import Avatar from 'antd/lib/avatar/avatar';
import { connect } from 'react-redux';


class Home extends Component {
    constructor(props) {
        super(props);
        if (!props.admin.username) props.history.push("/")
        this.state = {
            users: [],
            deleteModalVisible: false,
            editModalVisible: false,
            addModalVisible: false
        };
    }

    columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Fist Name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Profile Image',
            key: 'avatar',
            dataIndex: 'avatar',
            render: avatar => (
                <Space style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar size="large" src={avatar ? avatar : ''} />
                </Space>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => {
                return (
                    <Space size="middle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button type="primary" onClick={() => this.updateEditModalVisibility(record)} shape="round" icon={<EditFilled />} size={16} />
                        <Button type="primary" onClick={() => this.updateDeleteModalVisibility(record)} shape="round" icon={<DeleteFilled />} size={16} />
                    </Space>);
            },
        },
    ];

    updateDeleteModalVisibility = (user) => {
        user ?
            this.setState((prevState) => ({ deleteModalVisible: !prevState.deleteModalVisible, selectedUser: user })) :
            this.setState((prevState) => ({ deleteModalVisible: !prevState.deleteModalVisible }))
    }

    updateEditModalVisibility = (user) => {
        user ?
            this.setState((prevState) => ({ editModalVisible: !prevState.editModalVisible, selectedUser: user })) :
            this.setState((prevState) => ({ editModalVisible: !prevState.editModalVisible }))
    }

    updateAddModalVisibility = () => {
        this.setState((prevState) => ({ addModalVisible: !prevState.addModalVisible }));
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.admin.username) this.props.history.push("/")
        else this.setState({ users: nextProps.users });
    }

    componentWillUpdate() {
        if (!this.props.admin.username) this.props.history.push("/")
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}>
                <div style={{
                    width: '80%',
                    height: '80vh',
                    boxShadow: '0px 0px 10px #FFFFF',
                    padding: '20px',
                    fontSize: '24px'

                }}>
                    <Row style={{ marginBottom: '30px' }}>
                        <Col span={12}>
                            <div>{`Hello, ${this.props.admin?.username?.substr(0, this.props.admin?.username?.indexOf('@'))}`}</div>
                        </Col>
                        <Col span={12} style={{ display: 'flex', flexDirection: 'row-reverse' }} >
                            <Dropdown overlay={<ProfileMenu />} placement="bottomLeft" arrow>
                                <Button type="primary" shape="circle" size={24} >{this.props.admin?.username?.charAt(0)?.toUpperCase()}</Button>
                            </Dropdown>

                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: '40px' }}>
                        <Col>
                            <Button type="primary" onClick={this.updateAddModalVisibility}>Add</Button>
                        </Col>
                    </Row>
                    {this.state.deleteModalVisible && <DeleteModal isVisible={true} setIsModalVisible={this.updateDeleteModalVisibility} user={this.state.selectedUser} />}
                    {this.state.editModalVisible && <UserModal isVisible={true} setIsModalVisible={this.updateEditModalVisibility} user={this.state.selectedUser} />}
                    {this.state.addModalVisible && <UserModal isVisible={true} setIsModalVisible={this.updateAddModalVisibility} newUser={true} />}
                    <Table columns={this.columns} dataSource={this.state.users} bordered />
                    <Row style={{ fontSize: '16px', margin: '20px' }}>
                        <Col span={12}>
                            <div> <footer>&copy; {`Copyright Shivam`}</footer> </div>
                        </Col>
                        <Col span={12} style={{ display: 'flex', flexDirection: 'row-reverse' }} > {`Random Company Name`}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin,
        users: state.users
    }
}

export default connect(mapStateToProps, null)(Home);
import React from 'react';
import { Modal } from 'antd';
import * as Consts from '../constants/consts';
import { useDispatch } from 'react-redux';
import { DeleteUser } from '../actions/userActions';

const DeleteModal = ({ setIsModalVisible, isVisible, user }) => {
  const dispatch = useDispatch();
  const handleOk = () => {
    dispatch(DeleteUser(user));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal visible={isVisible} title={Consts.DELETE_MODAL_TITLE} onOk={handleOk} onCancel={handleCancel}>
      <p>{`Are you sure you want to delete ${user.first_name}'s details?`}</p>
    </Modal>
  );
}

export default DeleteModal;
import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
} from '@material-ui/core';

interface Props {
  message: string;
}

const InfoDialog: React.FC<Props> = ({ message }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(true);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Dialog open={isModalVisible} onClose={closeModal}>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
        <DialogActions>
          <Button variant='contained' color='secondary' onClick={closeModal}>
            {'OK'}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default InfoDialog;

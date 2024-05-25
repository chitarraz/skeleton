import React from "react";
// @mui/material components
import Modal from "@mui/material/Modal";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// @mui/icons-material components

import styles from "../../assets/css/shared-components/modal.module.scss";

export default function DeleteModal({type, ...props}) {

  return (
    <Modal {...props} className={styles.modal}>
      <Paper className={styles.paper}>
        <p className={styles.title}>Are you sure?</p>
        <Typography className={styles.description}>This action cannot be undone. All Values associated with this field will be lost.</Typography>
        <div className={styles.buttonContainer}>
          <Button className={styles.buttonSecondary} onClick={props.onClose}>Cancel</Button>
          <Button className={styles.button} onClick={props.delete}>Delete</Button>
        </div>
      </Paper>
    </Modal>
  );
}
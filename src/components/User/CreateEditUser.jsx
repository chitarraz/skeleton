import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// @mui/material
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

import styles from "../../assets/css/user/user.module.scss";

export default function CreateEditUser({user, ...props}) {
	//const dispatch = useDispatch();

  return (
		<React.Fragment>
			<Modal className={styles.modal} {...props}>
        <Paper elevation={0} className={styles.paper}>
          <p className={styles.title}>Create New User</p>
          <Grid container spacing={4} className={styles.grid}>
            <Grid item xs={4}>
              <Typography>Employee Name <span>*</span> :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField 
                className={styles.textField}
                id="employeeName"  // required for onChange
                variant="outlined"  // design
                inputProps={{ maxLength: 100 }}
                //onChange={(e) => handleOnChange_text(e)}
                placeholder="Enter employee name"
                value={user ? user.name : ''}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Team <span>*</span> :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField 
                className={styles.textField}
                id="team"
                variant="outlined" 
                inputProps={{ maxLength: 20 }}
                //onChange={(e) => handleOnChange_text(e)}
                placeholder="Enter team"
                value={user ? user.team : ''}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Contact Number :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField 
                className={styles.textField}
                id="contact"
                type="number"
                variant="outlined" 
                onInput={(e)=>{ 
                  e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0,15)
                }}
                placeholder="eg. 88775566"
                //onChange={(e) => handleOnChange_text(e)}
                value={user ? user.phone : ''}
              />
            </Grid>
          </Grid>
          <div className={styles.buttonContainer}>
            <Button
              className={styles.button}
              //onClick={()=>handleButtonClick_save()}
            >
              Save
            </Button>
          </div>
        </Paper>
      </Modal>
		</React.Fragment>
  );
};
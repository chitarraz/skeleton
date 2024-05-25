
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// @mui/material components
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
// @mui/icons-material components
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// core components
import CustomIconButton from "../../shared-components/Button/IconButton";
import Table from "../../shared-components/Table/Table";
import DeleteModal from "../../shared-components/Modal/DeleteModal";

import styles from "../../assets/css/user/user.module.scss";
import CreateEditUser from "./CreateEditUser";

export default function User() {
  const [userId, setUserId] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  const users = [
    {name: 'Jason Tan', phone: '96347811', team: 'A Team', id: 1},
    {name: 'Archer Lim', phone: '96125541', team: 'B Team', id: 2},
    {name: 'Afiq Mhd', phone: '96665431', team: 'Service Team', id: 3},
    {name: 'Richard Fang', phone: '9325543', team: 'HVAC Team', id: 4},
    {name: 'Freddie Li', phone: '91236554', team: 'A Team', id: 5},
    {name: 'Nugyen Thao', phone: '96890043', team: 'Service Team', id: 6},
  ];

  const tableHead = [
    { id: 'name', align: "left", label: 'Name' },
    { id: 'phone', align: "left", label: 'Phone Number' },
    { id: 'team', align: "left", label: 'Team' },
    { id: 'action', align: "right", label: '' },
  ];

  const handleModal_edit = (id) => {
    setUserId(id);
    setOpenModal(!openModal);
  }

  const handleModal_delete = (id) => {
    setUserId(id);
    setOpenDeleteModal(!openDeleteModal);
  }

  const handleButtonClick_delete = () => {
    users.filter(({id}) => id !== userId);
    setUserId(null);
  }


  return (
    <React.Fragment>
      <div className={styles.main}>
        <div className={styles.top}><Button className="button" onClick={() => setOpenModal(true)}>Add New</Button></div>
        <Table
          header={tableHead}
        >
          { users.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.team}</TableCell>
                <TableCell align="right">
                  <CustomIconButton
                    type="edit"
                    onClick={() => handleModal_edit(user.id)}
                  />
                  <CustomIconButton 
                    type="delete"
                    onClick={() => handleModal_delete(user.id)}
                  />
                </TableCell>
              </TableRow>
            )
          })}
        </Table>
      </div>
      <DeleteModal
        open={openDeleteModal}
        onClose={() => handleModal_delete(null)}
        delete={handleButtonClick_delete}
      />
      <CreateEditUser user={users.find(({id}) => id === userId)} open={openModal} onClose={() => handleModal_edit()} />
    </React.Fragment>
  );
}
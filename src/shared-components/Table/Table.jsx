
import React from "react";
import PropTypes from "prop-types";
// @mui/material components
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
// @mui/icons-material components
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "../../assets/css/shared-components/table.module.scss";

export default function CustomTable({className, header, children, orderBy, order, onRequestSort, headerProps, ...props}) {

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <Table>
      { header &&
      <TableHead>
        <TableRow>
          {header.map((headCell) => {
            if (!headCell.hidden) {
              return (
                <TableCell
                  className={styles.tableHead}
                  key={headCell.id}
                  align={headCell.align}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  {onRequestSort && headCell.id !== "action"
                  ? <TableSortLabel
                      IconComponent={KeyboardArrowDownIcon}
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={createSortHandler(headCell.id)}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  : <React.Fragment>{headCell.label}</React.Fragment>
                  }
                </TableCell>
              )
            }
            return null;
          })}
        </TableRow>
      </TableHead>
      }
      <TableBody>
        {children}
      </TableBody>
    </Table>
  );
}

CustomTable.propTypes = {
  header: PropTypes.array,
  children: PropTypes.node,
  orderBy: PropTypes.string, 
  order: PropTypes.oneOf(['asc', 'desc']), 
  onRequestSort: PropTypes.func,
  headerProps: PropTypes.string
};
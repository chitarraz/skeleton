import React from "react";
import PropTypes from "prop-types";
// @mui/material components
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
// @mui/icons-material components
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function CustomIconButton({type, ...props}) {

  switch (type) {
    case "edit":
      return (
        <Tooltip title="Edit" placement="top">
          <IconButton 
            {...props}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
      );
    case "delete": 
      return (
        <Tooltip title="Delete" placement="top">
          <IconButton 
            {...props}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )
    case "confirm": 
      return (
        <Tooltip title="Confirm" placement="top">
          <IconButton 
            {...props}
          >
            <CheckCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      )
    case "close": 
      return (
        <Tooltip title="Close" placement="top">
          <IconButton 
            {...props}
          >
            <HighlightOffIcon />
          </IconButton>
        </Tooltip>
      )
    default: return null
  }
}

CustomIconButton.propTypes = {
  type: PropTypes.string,
};
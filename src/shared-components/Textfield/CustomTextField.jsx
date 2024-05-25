// customised text field
import React from "react";

import './index.module.css'

export default function CustomTextField(props) {
  return (
    <input 
      {...props}
      type='text' 
    />
  );
}

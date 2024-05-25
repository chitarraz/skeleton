// customised button
import React from "react";

import './index.module.css'

export default function CustomButton({label, ...props}) {
  return (
    <button {...props}>{label}</button>
  );
}

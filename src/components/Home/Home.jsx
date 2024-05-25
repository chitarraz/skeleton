import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Dashboard from "./Dashboard";

export default function Home() {
	const dispatch = useDispatch();
  return (
		<React.Fragment>
			<Dashboard/>
		</React.Fragment>
  );
};
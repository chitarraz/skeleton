// search history item card
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
//store
import { setValues } from "./store";
import { setValues as setGeneralValues } from "../../store/general";
// css
import CustomButton from "../../shared-components/Button/CustomButton";
import CustomTextField from "../../shared-components/Textfield/CustomTextField";

export default function Weather() {
  const dispatch = useDispatch();
  const text = useSelector(store => store.weather.text);

  const handleOnChange = (e) => {
    dispatch(setValues({[e.target.id]: e.target.value}));
  };

  const handleOnClick = () => {
    console.log('test')
    alert("Button Clicked!");
  };

  return (
    <React.Fragment>
      <CustomButton label="Button" onClick={handleOnClick} />
      <CustomTextField id="text" value={text} onChange={(e)=>handleOnChange(e)} />
    </React.Fragment>
  );
}

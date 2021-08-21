import React, { useState } from "react";

import Form1 from "../Form1/Form1";
import Form2 from "../Form2/Form2";

function Main() {
  const changeComp = (comp) => {
    switch (comp) {
      case "form1": {
        setCurrcomp(<Form1 changeComp={changeComp} />);
        break;
      }
      case "form2": {
        setCurrcomp(<Form2 changeComp={changeComp} />);
        break;
      }
      default:
        break;
    }
  };
  const [currComp, setCurrcomp] = useState(<Form1 changeComp={changeComp} />);

  return <div>{currComp}</div>;
}

export default Main;

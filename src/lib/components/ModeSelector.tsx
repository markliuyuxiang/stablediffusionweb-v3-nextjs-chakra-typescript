import React from "react";

import HgFrame from "./HgFrame";
import Playground from "./Playground";

class ModeSelector extends React.Component 
{
    render() {
      if (process.env.APP_MODE == "IFRAME") {
        return (<HgFrame />);
      }
      else
      {
        return (
            <Playground />
          );
      }
     
  }
}

export default ModeSelector;

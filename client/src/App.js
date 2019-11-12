import React from "react";
import "./sass/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div class="moon"></div>
        <div class="logo">
          <b>
            n<span>a</span>ttsk<span>i</span>f<span>t</span>tet
          </b>
        </div>
      </>
    );
  }
}

export default App;

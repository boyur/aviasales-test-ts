import * as React from 'react';
import Header from 'components/Header';
import './App.scss';

class App extends React.PureComponent {

  public render() {
    return (
      <div>
        <div className="layout">
          <Header />
          <div className="main">
            Main
          </div>
        </div>
      </div>
    );
  }
}

export default App;

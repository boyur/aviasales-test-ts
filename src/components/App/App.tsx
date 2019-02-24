import * as React from 'react';
import './App.scss';

import Header from 'components/Header';
import SettingsPanel from 'components/SettingsPanel';

import filterConfig from 'configs/filter';

class App extends React.PureComponent<{}, IState> {
  public state = {
    currency: 'RUB',
    filter: [0, 1, 2],
  };

  public handleChangeCurrency = (currency: string): void => {
    this.setState({currency});
  }

  public handleChangeFilter = (e: React.ChangeEvent): void => {
    const { id } = e.target;
    const { filter } = this.state;

    if (id === 'all') {
      const isAll = filter.length === filterConfig.length;
      this.setState({ filter: isAll ? [] : [0, 1, 2, 3] });
    } else {
      const stops = parseInt(id, 10);
      const index = filter.findIndex((item) => item === stops);

      if (index === -1) {
        filter.push(stops);
      } else {
        filter.splice(index, 1);
      }

      this.setState({ filter: [...filter] });
    }
  }

  public setOneFilter = (id: string): void => {
    this.setState({ filter: [parseInt(id, 10)] });
  }

  public render() {
    const { currency, filter } = this.state;

    return (
      <div>
        <div className="layout">
          <Header />
          <div className="main">
            <SettingsPanel
              currency={currency}
              filter={filter}
              handleChangeCurrency={this.handleChangeCurrency}
              handleChangeFilter={this.handleChangeFilter}
              setOneFilter={this.setOneFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}

interface IState {
  currency: string;
  filter: number[];
}

export default App;

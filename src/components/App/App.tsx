import React, { PureComponent } from 'react';
import './App.scss';

import Header from 'components/Header';
import SettingsPanel from 'components/SettingsPanel';
import TicketsList from 'components/TicketsList';

import api from 'api';
import { getFiltredTickets } from 'utils';
import filterConfig from 'configs/filter';

interface IState {
  currency: string;
  filter: number[];
  tickets: object[] | null;
  exchangeRates: object | null;
}

class App extends PureComponent<{}, IState> {
  public state = {
    currency: 'RUB',
    filter: [0, 1, 2],
    tickets: null,
    exchangeRates: null,
  };

  public componentDidMount() {
    api.getTickets().then((tickets: object[] ) => {
      this.setState({ tickets });
    });

    api.getExchangeRates().then((exchangeRates: object) => {
      this.setState({ exchangeRates });
    });
  }

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
    const { currency, exchangeRates, filter } = this.state;

    const tickets = getFiltredTickets(this.state.tickets || [], filter);

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
            <TicketsList
              tickets={tickets}
              currency={currency}
              exchangeRates={exchangeRates}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
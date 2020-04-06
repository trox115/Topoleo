import React from 'react';
import PortInicial from './PortInicial';
import history from '../history/history';

const initialState = {
  filter: 'todos',
  portfolios: {
    1: { nome: 'GA', categoria: 'habitação' },
    2: { nome: 'DF', categoria: 'habitação' },
    3: { nome: 'JP', categoria: 'servicos' },
    4: { nome: 'PA', categoria: 'habitação' },
    5: { nome: 'TP', categoria: 'habitação' },
    6: { nome: 'AC', categoria: 'habitação' },
    7: { nome: 'AMC', categoria: 'habitação' },
    8: { nome: 'PM', categoria: 'industrial' },
    9: { nome: 'DF2', categoria: 'habitação' },
    10: { nome: 'JS', categoria: 'servicos' },
    11: { nome: 'LAR AC', categoria: 'servicos' },
    12: { nome: 'MA', categoria: 'habitação' },
    13: { nome: 'MC', categoria: 'habitação' },
    14: { nome: 'TC', categoria: 'habitação' },
    15: { nome: 'MC3', categoria: 'habitação' },
    16: { nome: 'TD2', categoria: 'habitação' },
    17: { nome: 'CA2', categoria: 'habitação' },
    18: { nome: 'RV2', categoria: 'habitação' },
    19: { nome: 'QCS', categoria: 'habitação' },
    20: { nome: 'BT2', categoria: 'industrial' },
    21: { nome: 'JAB2', categoria: 'habitação' },
    22: { nome: 'ZIMMC', categoria: 'industrial' },
    23: { nome: 'JAVIER AUTO', categoria: 'industrial' },
  },
};

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleClick = event => {
    event.preventDefault();
    const filter = { filter: event.target.value };
    this.setState({
      filter,
    });
    console.log(event.target.value);

    const items = document.querySelectorAll('.gallery_product');

    for (let i = 0; i < items.length; i += 1) {
      items[i].style.display = 'none';
      if (items[i].getAttribute('data-id') === event.target.value) {
        items[i].style.display = 'block';
      }
      if (event.target.value === 'todos') {
        items[i].style.display = 'block';
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="gallery-title">Gallery</h1>

            <button
              className="btn btn-default filter-button"
              value="todos"
              onClick={this.handleClick}
            >
              Todos
            </button>
            <button
              className="btn btn-default filter-button"
              value="habitacao"
              onClick={this.handleClick}
            >
              Habitação
            </button>
            <button
              className="btn btn-default filter-button"
              value="industrial"
              onClick={this.handleClick}
            >
              Industrial
            </button>
            <button
              className="btn btn-default filter-button"
              value="servicos"
              onClick={this.handleClick}
            >
              Serviços
            </button>
          </div>
          <br />
          {Object.values(this.state.portfolios).map(value => (
            <PortInicial {...value} />
          ))}
        </div>
      </div>
    );
  }
}
export default PortfolioPage;

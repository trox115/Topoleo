import React from 'react';
import PortInicial from './PortInicial';

const initialState = {
  filter: 'todos',
  portfolios: {
    1: { nome: '7118', categoria: 'habitacao' },
    2: { nome: '6818', categoria: 'habitacao' },
    3: { nome: '6518', categoria: 'habitacao' },
    4: { nome: '6318', categoria: 'habitacao' },
    5: { nome: '6219', categoria: 'turismo' },
    6: { nome: '5918', categoria: 'habitacao' },
    7: { nome: '5719', categoria: 'turismo' },
    8: { nome: '5317', categoria: 'habitacao' },
    9: { nome: '5219', categoria: '' },
    10: { nome: '5117', categoria: 'turismo' },
    11: { nome: '5116', categoria: 'servicos' },
    12: { nome: '5017', categoria: 'servicos' },
    13: { nome: '4719', categoria: 'habitacao' },
    14: { nome: '4716', categoria: 'servicos' },
    15: { nome: '4617', categoria: 'habitacao' },
    16: { nome: '4517', categoria: 'habitacao' },
    17: { nome: '4419', categoria: 'habitacao' },
    18: { nome: '4218', categoria: 'habitacao' },
    19: { nome: '4116', categoria: 'industrial' },
    20: { nome: '4019', categoria: 'habitacao' },
    21: { nome: '3817', categoria: 'habitacao' },
    22: { nome: '3719', categoria: 'habitacao' },
    23: { nome: '3717', categoria: 'habitacao' },
    24: { nome: '3319', categoria: 'habitacao' },
    25: { nome: '3717', categoria: 'habitacao' },
    26: { nome: '3319', categoria: 'habitacao' },
    27: { nome: '3317', categoria: 'habitacao' },
    28: { nome: '3218', categoria: 'habitacao' },
    29: { nome: '3118', categoria: 'habitacao' },
    30: { nome: '3117', categoria: 'turismo' },
    31: { nome: '2918', categoria: 'habitacao' },
    32: { nome: '2819', categoria: 'servicos' },
    33: { nome: '2717', categoria: 'turismo' },
    34: { nome: '2418', categoria: 'habitacao' },
    35: { nome: '2318', categoria: 'habitacao' },
    36: { nome: '2018', categoria: 'habitacao' },
    37: { nome: '2017', categoria: 'habitacao' },
    38: { nome: '1718', categoria: 'habitacao' },
    39: { nome: '0118', categoria: 'servicos' },
    40: { nome: '0318', categoria: 'habitacao' },
    41: { nome: '0618', categoria: 'turismo' },
    69: { nome: '0717', categoria: 'habitacao' },
    70: { nome: '0919', categoria: 'habitacao' },
    71: { nome: '1018', categoria: 'habitacao' },
    72: { nome: '1118', categoria: 'servicos' },
    73: { nome: '1217', categoria: 'habitacao' },
    74: { nome: '1218', categoria: 'habitacao' },
    75: { nome: '1317', categoria: 'habitacao' },
    76: { nome: '1618', categoria: 'habitacao' },
    77: { nome: 'GA', categoria: 'habitacao' },
    78: { nome: 'DF', categoria: 'habitacao' },
    79: { nome: 'JP', categoria: 'servicos' },
    80: { nome: 'PA', categoria: 'habitacao' },
    81: { nome: 'TP', categoria: 'habitacao' },
    82: { nome: 'AC', categoria: 'habitacao' },
    83: { nome: 'AMC', categoria: 'habitacao' },
    84: { nome: 'PM', categoria: 'industrial' },
    85: { nome: 'DF2', categoria: 'habitacao' },
    86: { nome: 'JS', categoria: 'servicos' },
    87: { nome: 'LAR AC', categoria: 'servicos' },
    89: { nome: 'MA', categoria: 'habitacao' },
    90: { nome: 'MC', categoria: 'habitacao' },
    91: { nome: 'TC', categoria: 'habitacao' },
    92: { nome: 'MC3', categoria: 'habitacao' },
    93: { nome: 'TD2', categoria: 'habitacao' },
    94: { nome: 'CA2', categoria: 'habitacao' },
    95: { nome: 'RV2', categoria: 'habitacao' },
    96: { nome: 'QCS', categoria: 'habitacao' },
    97: { nome: 'BT2', categoria: 'industrial' },
    98: { nome: 'JAB2', categoria: 'habitacao' },
    99: { nome: 'ZIMMC', categoria: 'industrial' },
    100: { nome: 'JAVIER AUTO', categoria: 'industrial' },
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
            <button
              className="filter-button"
              value="todos"
              onClick={this.handleClick}
            >
              Todos
            </button>
            <button
              className="filter-button"
              value="habitacao"
              onClick={this.handleClick}
            >
              Habitação
            </button>
            <button
              className="filter-button"
              value="industrial"
              onClick={this.handleClick}
            >
              Industrial
            </button>
            <button
              className="filter-button"
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

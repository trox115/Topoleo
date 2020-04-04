import React from 'react';

const initialState = {
  filter: 'todos',
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
      if (items[i].getAttribute('data-id') == event.target.value) {
        items[i].style.display = 'block';
      }
      if (event.target.value == 'todos') {
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

          <div
            className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter"
            data-id="habitacao"
          >
            <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
          </div>

          <div
            className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter"
            data-id="industrial"
          >
            <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
          </div>

          <div
            className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter"
            data-id="servicos"
          >
            <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
          </div>

          <div
            className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter"
            data-id="habitacao"
          >
            <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
          </div>
        </div>
      </div>
    );
  }
}
export default PortfolioPage;

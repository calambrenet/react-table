import React from 'react';

class ReactTableFooter extends React.Component {
  render() {
    var min = (this.props.page * this.props.items_by_page) + 1;
    var max = (this.props.page+1) * this.props.items_by_page;
    if(max > this.props.n_rows)
      max = this.props.n_rows;

    return <footer>
      <div className="info">Showing {min} to {max} of {this.props.n_rows} entries</div>
      {this.props.children}
    </footer>
  }
};

export default ReactTableFooter;

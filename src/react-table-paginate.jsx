import React from 'react';


class ReactTablePaginate extends React.Component {
  render() {
    var prev_class = 'paginate_button previous';
    var next_class = 'paginate_button next';

    if(this.props.page==0)
      prev_class += ' disable';
    if(this.props.page == this.props.n_pages-1)
      next_class += ' disable';

    return <div className="paginate">
      <a className={prev_class} onClick={this.props.onClick.bind(this, {id:'prev'})}>←</a>
      <a className={next_class} onClick={this.props.onClick.bind(this, {id: 'next'})}>→</a>
    </div>
  }
};

export default ReactTablePaginate;

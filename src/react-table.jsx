import React from 'react';
import ReactTableHeader from './react-table-header.jsx';
import ReactTableBody from './react-table-body.jsx';
import ReactTableFooter from './react-table-footer.jsx';
import ReactTablePaginate from './react-table-paginate.jsx';
import ReactTableFilter from './react-table-filter.jsx';

require("./styles/main.less");

class ReactTable extends React.Component {
  static propTypes = {
    columns: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    data: React.PropTypes.arrayOf(React.PropTypes.array).isRequired,
    paginate: React.PropTypes.bool,
    page: React.PropTypes.number,
    items_by_page: React.PropTypes.number,
    filter: React.PropTypes.bool,
    scrolling: React.PropTypes.bool
  }

  static defaultProps = {
    paginate: true,
    page: 0,
    items_by_page: 5,
    filter: true,
    scrolling: false
  }

  state = {
    column_sortable: 'null',
    column_sortable_type: 'asc',
    data: this.props.data,
    page: this.props.page,
  }

  handleHeader(id) {
    var new_type = this.state.column_sortable_type;

    if(id==this.state.column_sortable){
      if(this.state.column_sortable_type=='asc')
        new_type = 'desc';
      else
        new_type = 'asc';

      this.setState({column_sortable_type: new_type});
    }
    else {
      this.setState({ column_sortable: id });
    }

    if(new_type=='asc'){
      var data = this.state.data.sort(function(a, b) {
        return a[id] > b[id] ? 1 : -1;
      });
    }
    else {
      var data = this.state.data.sort(function(a, b) {
        return a[id] < b[id] ? 1 : -1;
      });
    }

    this.setState({data: data});
  }

  doPaginate(data){
    if(this.props.paginate)
      return data.slice(this.state.page*this.props.items_by_page, (this.state.page+1)*this.props.items_by_page);
    else
      return data;
  }

  handleClick = (data, event) => {
    if(data.id=='header') {
      this.handleHeader(data.data);
    }
    else if(data.id=='prev') {
      this.setState({page : this.state.page-1});
    }
    else if(data.id=='next') {
      this.setState({page : this.state.page+1});
    }
  }

  searchIn = (str) => {
    var result = [];
    var data = this.props.data;
    for(var c=0; c<data.length; c++) {
      for(var i=0; i<data[c].length; i++) {
        if(typeof data[c][i] === 'string') {
          if (data[c][i].match(str)) {
            result.push(data[c]);
            break;
          }
        }
      }
    }
    return result;
  }

  handleFilter = (event) => {
    if(event.target.value.length > 2) {
      var data = this.searchIn(event.target.value);
      this.setState({data: data});
    }
    else {
      this.setState({data: this.props.data});
    }
  }

  render() {
    var data = this.doPaginate(this.state.data);

    if(this.props.filter)
      var table_filter = <ReactTableFilter onChange={this.handleFilter}></ReactTableFilter>

    if(this.props.paginate)
      var footer_paginate = <ReactTablePaginate
                              page={this.state.page}
                              n_pages={Math.ceil(this.state.data.length/this.props.items_by_page)}
                              onClick={this.handleClick}>
                            </ReactTablePaginate>

    return <div className='react-table'>
      {table_filter}
      <table className={this.props.scrolling?'header scrolling':'header'}>
        <ReactTableHeader
          columns={this.props.columns}
          column_sortable={this.state.column_sortable}
          column_sortable_type={this.state.column_sortable_type}
          onClick={this.handleClick}
          ></ReactTableHeader>
      </table>
      <div className={this.props.scrolling?'content scrolling':'content'}>
        <table>
          <ReactTableBody data={data} columns={this.props.columns}></ReactTableBody>
        </table>
      </div>
      <ReactTableFooter page={this.state.page} n_rows={this.state.data.length} items_by_page={this.props.items_by_page}>
        {footer_paginate}
      </ReactTableFooter>
    </div>
  }
};

export default ReactTable;

import React from 'react';

class ReactTableHeader extends React.Component {
  /*handleSort(i) {
    console.log(i);
  }*/

  static propTypes = {
    onClick: React.PropTypes.func.isRequired
  };

  render() {
    return <thead>
      <tr>{
        this.props.columns.map((object, i) => {
          if(i==this.props.column_sortable)
            var class_name='sortable ' + this.props.column_sortable_type;
          else
            var class_name = '';

          var style = {width: (100/this.props.columns.length)+'%'};

          //return <th className="{className}" key={i} onClick={()=>this.handleSort(i)}>{object}</th>
          return <th style={style} className={class_name} key={i} onClick={this.props.onClick.bind(this, {id:'header', data: i})}>{object}</th>
        })
      }
    </tr>
    </thead>
  }
};

export default ReactTableHeader;

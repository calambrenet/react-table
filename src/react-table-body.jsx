import React from 'react';

class ReactTableBody extends React.Component {

  render() {
    var className = 'even';
    return <tbody>
      {
        this.props.data.map((row, i) => {
          if(className=='even')
            className='odd';
          else
            className='even';

          var style = {width: (100/this.props.columns.length)+'%'};

          var fields = row.map((field, c) => {
            return <td style={style} key={c}>{field}</td>
          });

          return <tr key={i} className={className}>{fields}</tr>
        })
      }
    </tbody>
  }
};

export default ReactTableBody;

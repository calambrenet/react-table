import React from 'react';


class ReactTableFilter extends React.Component {
  handleInput(event) {
    console.log(event.target.value);
  }

  render() {
    return <header>
      <div className="filter">
        <label>
          <span>Filter:</span>
          <input onChange={this.props.onChange.bind(this)} placeholder="Type to filter..."></input>
        </label>
      </div>
    </header>
  }
};

export default ReactTableFilter;

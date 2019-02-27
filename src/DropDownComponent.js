
import React, { Component } from 'react';



const EmptyComponent = () => (<div />);

class DropDownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.default,
    };
  }

  render() {
    const { data, style } = this.props;
    const { value } = this.state;
    const Wrapper = data[value] ? data[value].component : EmptyComponent;
    return (
      <React.Fragment>
        <select
          defaultValue={value}
          style={style}
          onChange={e => this.setState({ value: e.nativeEvent.target.value })}
        >
          <option> -- select sorting algorithm -- </option>
          {data.map(((d, idx) => <option key={d} value={idx}> {d.title}</option>))}
        </select>
        <Wrapper />
      </React.Fragment>
    );
  }
}

export default DropDownComponent;

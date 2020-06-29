import React from 'react';

class Form extends React.Component {
  state = {query: null};

  onChangeHandler = (event) => {
    this.setState({query: event.target.value});
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.searchFunc(this.state.query);
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.onChangeHandler} />
        <input type="submit" value="Search" onClick={this.onSubmitHandler} />
      </form>
    );
  }
};

export default Form;
var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass ({
  handleSubmit: function(e) {
    var {dispatch} = this.props;
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit} className="countdown-form">
          <input type="text" ref="todoText" placeholder="Enter a new todo" />
          <button className="button expanded">OK</button>
        </form>
      </div>
    );
  }
});

export default connect(

)(AddTodo);

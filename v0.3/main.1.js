var ListBox = React.createClass({
  changeState: function () {
    var isEdit = this.props.data.isEdit;
    this.setState({ isEdit: !isEdit })
  },
  render: function () {
    var items = this.props.data.inputs;
    var itemDiv = items.map(function (item) {
      return (
        <div>
          <input style='width: 150px;' type='{item}' />
        </div>
      );
    });
    var buttonLabel = this.props.isEdit ? "Edit" : "Preview";
    return (
      <div>
        <div role='viewBtn'>
          <button onClick={this.changeState}>{buttonLabel}</button>
        </div>
        <div role='box'>
          {itemDiv}
        </div>
        <div>
          <button role='dialog-opener' id='opener' onClick={this.props.openDialog}>+</button>
        </div>
      </div>
    );
  }
});


var Dialog = React.createClass({
  inputAddHandler: function () {
    // this.props.dialog.dialog("close");
    this.props.closeDialog();
  },
  inputCloseHandler: function () {
    this.props.closeDialog();
    // this.props.dialog.dialog("close");
  },
  render: function () {
    return (
      <div>
        <div><input name="radio" value="1" defaultValue checked type="radio" />datepicker</div>
        <div><input name="radio" value="2" type="radio" />textbox</div>
        <input type="button" id="dialog-submit" role="dialog-submit" value="submit" onClick={this.inputAddHandler}/>
        <input type="button" id="dialog-close" role="dialog-close" value="cancle" onClick={this.inputCloseHandler}/>
      </div>
    );
  }
});


var Panel = React.createClass({
  getDefaultProps: function () {
    return {
      data: {
        inputs: [],
        isEdit: true
      },
      dialog: {}
    };
  },
  openDialog: function (e) {
    e.preventDefault();

    var $dialog = $("<div>").dialog({
      title: 'Example Dialog Title',
      width: 400,
      close: function (e) {
        React.unmountAndReleaseReactRootNode(this);
        $(this).remove();
      }
    });

    var closeDialog = function (e) {
      e.preventDefault();
      $dialog.dialog('close');
    }

    ReactDOM.render(<Dialog closeDialog={closeDialog} />, $dialog[0])
  },
  render: function () {
    return (
      <div>
        <ListBox
          dialog={this.props.dialog}
          data={this.props.data}>
          openDialog={this.openDialog}>
        </ListBox>
        <Dialog
          ref="dialogBox"
          dialog={this.props.dialog}
          data={this.props.data}>
        </Dialog>
      </div>
    );
  }
});

ReactDOM.render(
  <Panel />,
  document.getElementById('panel')
);
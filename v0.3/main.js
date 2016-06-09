var TextBoxInput = React.createClass({
  render: function () {
    return (
      <input type="text"/>
    )
  }
});

var DatePickerInput = React.createClass({
  render: function () {
    return (
      <input type="date"/>
    )
  }
});

var RemoveButton = React.createClass({
  render: function () {
    return (
      <button data-index={this.props.index} onClick={this.props.removeElement}>-</button>
    )
  }
});

var EditLayout = React.createClass({
  removeElement: function (e) {
    var index = $(e.currentTarget).attr("data-index");
    this.props.removeElement(index);
  },
  render: function () {
    var self = this;
    var ul = this.props.elements.map(function (element, index) {
      if (element === "textbox") {
        return (<div>{element}: <TextBoxInput/><RemoveButton index={index} removeElement={self.removeElement}/></div>)
      }
      else {
        return (<div>{element}: <DatePickerInput/><RemoveButton index={index} removeElement={self.removeElement}/></div>)
      }
    });
    return (
      <div>
        <div><button onClick={this.props.changeEditState}>preview</button></div>
        <div>{ul}</div>
        <div><button onClick= {this.props.openDialog}>+</button></div>
      </div>
    )
  }
});


var PreviewLayout = React.createClass({
  render: function () {
    var ul = this.props.elements.map(function (element) {
      if (element == "textbox") {
        return (<div>{element}: <TextBoxInput/></div>)
      }
      else {
        return (<div>{element}: <DatePickerInput/></div>)
      }
    });
    return (
      <div>
        <div><button onClick={this.props.changeEditState}>edit</button></div>
        <div>{ul}</div>
      </div>
    )
  }
});


var DialogContent = React.createClass({
  getInitialState: function () {
    return {
      type: "datepicker"
    };
  },
  changeSelect: function (e) {
    this.setState({
      type: e.target.value
    });
  },
  submitSelectedType: function () {
    this.props.submitDialog(this.state.type);
  },
  render: function () {
    return (
      <div>
        <div><input name="radio" value="datepicker" checked={this.state.type == "datepicker"} onChange={this.changeSelect} type="radio" />datepicker</div>
        <div><input name="radio" value="textbox" checked={this.state.type == "textbox"} onChange={this.changeSelect} type="radio" />textbox</div>
        <input type="button" role="dialog-submit" value="submit" onClick={this.submitSelectedType }/>
        <input type="button" role="dialog-close" value="cancle" onClick={this.props.closeDialog}/>
      </div>
    )
  }
});


var Panel = React.createClass({
  getInitialState: function () {
    return {
      elements: ["textbox", "datepicker"],
      isEdit: true
    };
  },
  openDialog: function (e) {

    e.preventDefault();
    var self = this;
    var $dialog = $('<div>').dialog({
      title: 'Select input type',
      width: 400,
      close: function (e) {
        $(this).remove();
      }
    });
    var closeDialog = function (e) {
      e.preventDefault();
      $dialog.dialog('close');
    };
    var submitDialog = function (element) {
      self.state.elements.push(element);
      self.setState(self.state);
      $dialog.dialog('close');
    };
    ReactDOM.render(<DialogContent closeDialog={closeDialog} submitDialog={submitDialog} />, $dialog[0])
  },
  changeEditState: function () {
    this.state.isEdit = !this.state.isEdit;
    this.setState(this.state);
  },
  removeElement: function (index) {
    var elements = this.state.elements;
    _.remove(elements, function (element, i) {
      return i == index
    });
    this.setState({ elements: elements });
  },
  render: function () {
    var layout;
    if (this.state.isEdit) {
      layout = <EditLayout elements={this.state.elements} openDialog={this.openDialog} changeEditState={this.changeEditState} removeElement={this.removeElement}/>
    } else {
      layout = <PreviewLayout elements={this.state.elements} changeEditState={this.changeEditState}/>
    }
    return (
      <div>
        {layout}
      </div>
    )
  }
});

ReactDOM.render(<Panel />, document.getElementById('panel'));
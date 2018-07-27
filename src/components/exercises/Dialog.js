import React, {Component} from 'react'
import {
       Button,
       Dialog,
       DialogContent,
       DialogContentText,
       DialogTitle,
       }  from '@material-ui/core';
import Form from './Form';
import Icon from '@material-ui/core/Icon';


export default class extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFormSubmit = exercise => {
    this.handleToggle()
    this.props.onCreate(exercise)
  }

  render() {
    const { open } = this.state,
          { muscles } = this.props

    return (
      <div className="create-modal">
        <Button
        variant="fab"
        color="secondary"
        onClick={this.handleToggle}
        mini>
          <Icon>add_circle</Icon>
        </Button>
        
        <Dialog
          open={open}
          onClose={this.handleToggle}
        >
          <DialogTitle>Add New Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out form below
            </DialogContentText>
            <Form
              muscles={muscles}
              onSubmit={this.handleFormSubmit}
          />
          </DialogContent>
        </Dialog>
      </div> 
    )
  }
}
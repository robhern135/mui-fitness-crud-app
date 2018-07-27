import React, { Component } from 'react';
import {FormControl, Button, MenuItem, InputLabel, Select, TextField} from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  FormControl: {
    width: 400
  },
  xsFormControl: {
    width:250
  }
})

export default withStyles(styles)(class Form extends Component {
  state = this.getInitialState();

  handleChange = name => ({target: { value }}) => 
    this.setState({
        [name]: value
    })
  
  getInitialState() {
    const { exercise } = this.props
    return exercise ? exercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }
  
  static getDerivedStatefromProps({exercise }) {
    return exercise || null
  }

  handleClose = () => {
    this.setState({
      open: false,
      exercise: {
        title: "",
        description:"",
        muscles: ""
      }
    })
  }

  handleSubmit = () => {
    // TODO: validate
    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
      ...this.state
    })
    this.setState(this.getInitialState())
  }

  render() {
    const { title, description, muscles } = this.state,
          { muscles: categories, classes, exercise } = this.props;

    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
          className={classes.FormControl}
        />
        <br />
        <TextField
          multiline
          rows="4"
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
          className={classes.FormControl}
        />
        <br />
        <FormControl className={classes.FormControl}>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select
            value={muscles}
            onChange={this.handleChange('muscles')}
          >
          {categories.map(category =>
            <MenuItem
              key={category}
              value={category}>
              {category}
            </MenuItem>
          )}
          </Select>
          <Button variant="raised" onClick={this.handleSubmit} color="primary">
          {exercise ? 'Edit' : 'Create'}
          </Button>
          </FormControl>
          
      </form>
    )
  }
})
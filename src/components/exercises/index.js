import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import {
  Paper,
  Typography,
  List,
  ListItemText,
  ListItem,
  ListItemSecondaryAction,
  IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Form from './Form';
// import { withStyles } from '@material-ui/core';

// const styles = theme => ({
  
// })

export default ({
  muscles,
  exercises,
  category,
  editMode,
  onSelect,
  exercise,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left.'
  },
  onDelete,
  onSelectEdit,
  onEdit
}) =>
  <div className="exercises-container">
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Paper className="exercise-paper">
        {exercises.map(([group, exercises]) =>
          !category || category === group
            ? <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: 'capitalize' }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) =>
                    <ListItem
                      key={id}
                      button
                      onClick={() => onSelect(id)}
                    >
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onSelectEdit(id)}>
                        <Icon>edit</Icon>
                        </IconButton>
                        <IconButton onClick={() => onDelete(id)}>
                        <Icon>delete</Icon>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </List>
              </Fragment>
            : null
        )}
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Paper className="exercise-paper">
        {editMode
        ? <Form
            exercise={exercise}
            muscles={muscles}
            onSubmit={onEdit}
          />
        : <Fragment>
            <Typography
              variant="display1"
            >
              {title}
            </Typography>
            <Typography
              variant="subheading"
              style={{ marginTop: 20 }}
            >
              {description}
            </Typography>
          </Fragment>
        }        
      </Paper>
    </Grid>
  </Grid>
  </div>
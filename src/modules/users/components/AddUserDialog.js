import React from 'react'
import ReactDOM from 'react-dom'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'
import Slide from '@material-ui/core/Slide'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 'auto',
    minWidth: 150
  },
  menu: {
    width: '100%'
  },
  dense: {
    marginTop: 19,
  }
})

const initialState = {
    firstname: '',
    lastname: '',
    position: ''
};

const Transition = (props) => {
  return <Slide direction="up" {...props} />
}

class AddUserDialog extends React.PureComponent {
  constructor() {
    super()

    this.state = initialState
  }

  handleClose = () => {
    this.props.onClose()
    this.setState(initialState)
  }

  handleButtonClick = () => {
    this.props.onButtonClick({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      position: this.state.position
    })
    this.handleClose()
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  render() {
    const { classes, onClose, selectedValue, onButtonClick, positions, ...other } = this.props

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        keepMounted
        TransitionComponent={Transition}
        {...other}>
        <DialogTitle id="simple-dialog-title">Добавление пользователя</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="Имя"
              value={this.state.firstname}
              onChange={this.handleChange('firstname')}
              margin="normal"
              required
              className={classes.textField}
            />

            <TextField
              id="standard-name"
              label="Фамилия"
              value={this.state.lastname}
              onChange={this.handleChange('lastname')}
              margin="normal"
              required
              className={classes.textField}
            />

            <TextField
              id="standard-select-position"
              select
              label="Группа"
              className={classes.textField}
              value={this.state.position}
              onChange={this.handleChange('position')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Выберите группу"
              margin="normal"
            >
              {positions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
              Закрыть
            </Button>
          <Button size="large" variant="contained" color="primary" onClick={this.handleButtonClick}>Добавить</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const AddUserDialogWithStyles = withStyles(styles)(AddUserDialog)

export default (props) => {
  return ReactDOM.createPortal(<AddUserDialogWithStyles {...props}/>, document.body)
}


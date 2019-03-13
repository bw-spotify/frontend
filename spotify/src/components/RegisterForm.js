import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {register, clearErrors} from '../actions'
import {Link} from 'react-router-dom'

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirm: '',
      passwordMismatch: false
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    this.props.clearErrors()
    this.setState({passwordMismatch: true})
    if(this.state.password === this.state.confirm) {
      this.props.register(this.state.username, this.state.password)
    }
    else {
      this.props.clearErrors()
      this.setState({passwordMismatch: true})
    }
  }

  render() {
    return (
      <div className='register-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as='h2' color='green' textAlign='center'>
              <Icon name='music' /> Register your account
            </Header>
            <Form error size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  // label='Choose a username'
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  onChange={this.handleChange}
                  name='username'
                  value={this.state.username} />
                <Form.Input
                  // label='Choose a password'
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  onChange={this.handleChange}
                  type='password'
                  name='password'
                  value={this.state.password}
                />
                <Form.Input
                  // label='Confirm password'
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Confirm password'
                  onChange={this.handleChange}
                  type='password'
                  name='confirm'
                  value={this.state.confirm}
                />
                {this.props.error ?
                <Message
                  error
                  header='That username already exists'
                  content="If you have forgotten your password, we cannot help you with that yet :'( Otherwise, choose a different username, pls"
                /> : ''}
                {this.state.passwordMismatch ?
                <Message
                  error
                  header='Passwords do not match'
                  content='Please make sure to confirm that your passwords are the same'
                /> : ''}
                <Button color='green' fluid size='large' type='submit'>
                  Register
                </Button>
              </Segment>
            </Form>
            <Message>
              Already registered? <Link to="/login">Log in</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps, {register, clearErrors})(RegisterForm)
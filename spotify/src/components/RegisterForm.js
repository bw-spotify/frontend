import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirm: ''
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    this.props.login(this.state.username, this.state.password)
  }

  render() {
    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Icon name='music' /> Log-in to your account
            </Header>
            <Form error={this.props.error} size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  label='Choose a username'
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  onChange={this.handleChange}
                  name='username'
                  value={this.state.username} />
                <Form.Input
                  label='Choose a password'
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
                  label='Confirm password'
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Confirm password'
                  onChange={this.handleChange}
                  type='password'
                  name='confirm'
                  value={this.state.confirm}
                />
                <Message
                  error
                  header='Username or password unrecognized'
                  content='We do not recognize that username/password combination, please try again'
                />
                <Button color='teal' fluid size='large' type='submit'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default RegisterForm
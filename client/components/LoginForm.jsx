import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap'

const PreferenceInput = (props) => {
  const { handleSubmit, pristine, reset } = props
  return (
    <form className='form-group' onSubmit={handleSubmit}>
      <div>
        <label>
          <h5>...or enter a username and password.</h5>
        </label>
        <div className='form-input'>
          <Field className='form-control' name="username" component="input" type="text" placeholder="Username or Email Address"/>
        </div>
        <div className='form-input'>
          <Field className='form-control' name="password" component="input" type="text" placeholder="Password"/>
        </div>
      </div>
      <div>
        <Button type="submit" disabled={pristine}>Submit</Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'prefInput'  // a unique identifier for this form
})(PreferenceInput)
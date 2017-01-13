import React from 'react'
import { Field, reduxForm } from 'redux-form'

const PreferenceInput = (props) => {
  const { onSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label></label>
        <div>
          <Field name="prefInput" component="input" type="text" placeholder="What do you like?"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'prefInput'  // a unique identifier for this form
})(PreferenceInput)
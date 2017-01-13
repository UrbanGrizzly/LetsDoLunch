import React from 'react'
import { Field, reduxForm } from 'redux-form'

const PreferenceInput = (props) => {
  const { handleSubmit, pristine, reset } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <h4>Help us help you! Add some preferences here:</h4>
        </label>
        <div>
          <Field name="name" component="input" type="text" placeholder="What do you like?"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine}>Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'prefInput'  // a unique identifier for this form
})(PreferenceInput)
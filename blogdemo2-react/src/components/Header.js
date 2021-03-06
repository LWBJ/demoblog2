import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'

function Header(props) {
    let handleSubmit = (values, {setSubmitting}) => {
        props.handleLogin(values)
        setSubmitting(false)
    }
    
    let validate = values => {
        let errors = {}
        if (values.username === '') {
            errors.username = 'Please input your username'
        }
        
        if (values.password === '') {
            errors.password = 'Please input your password'
        }
            
        return errors
    }
    
    let responseOK = props.responseOK
    
    let form
    if (!props.username) {
      form = (
        <Formik
          initialValues = {{
              username: '',
              password: '',
          }}
          onSubmit = {handleSubmit}
          validate = {validate}
        >
          {props => (
            <Form>
              <div className='form-row'>
                <div className='form-group col-12 col-sm-6'>
                  <label htmlFor='login-username'>Username</label>
                  <Field id='login-username' name='username' type='text' className='form-control'/>
                  <span className='text-danger'><ErrorMessage name='username' /></span>
                </div>
                <div className='form-group col-12 col-sm-6'>
                  <label htmlFor='login-password'>Password</label>
                  <Field id='login-password' name='password' type='password' className='form-control'/>
                  <span className='text-danger'><ErrorMessage name='password' /></span>
                </div>
                {responseOK}
              </div>
            
              <div className='form-row'>
                <button className='btn btn-primary mr-1' type='submit' disabled={props.isSubmitting}>Login</button>
                <button className='btn btn-secondary' type='reset' disabled={!props.dirty || props.isSubmitting}>Reset</button>
              </div>
            </Form>
          )}
        </Formik>
      )
    } else form = (
      <div className='row'><div className='col-12'>
        <p>Hello {props.username}</p>
        <button className='btn btn-secondary' type='button' onClick={props.handleLogout}>Logout</button>
      </div></div>
    )
    
    return (
      <div className='row py-4 my-4'><div className='col'>
      
        <div className='row mb-2'>
          <div className='col'>
            <h3><strong>LWBJ Blog Demo 2</strong></h3>
          </div>
        
          <div className='col-auto'>
            <button className={'btn mt-1 ' + (props.username ? 'btn-secondary' : 'btn-primary')} type='button' data-toggle='modal' data-target='#loginModal'>
              {props.username? 'Logout' : 'Admin Login'}
            </button>
                
            <div class="modal fade" id='loginModal' tabindex="-1" role="dialog" aria-labelledby='loginModalLabel' aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content">
            
              <div class="modal-header">
                <h5 class="modal-title" id='loginModalLabel'>Admin Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            
              <div class="modal-body p-4">
                {form}
              </div>
            
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            
            </div></div></div>
          </div>
        </div>
        
        <div className='row'><div className='col-12'>
          <p>A simple CRUD app built with Django, Django REST framework, djangorestframewrok_simplejwt and React frontend. It is also capable of simple login control from the frontend. The backend stores data on meals, snacks, drinks. It also tracks days adn the food and drinks eaten on each day. The app also tracks the calories of each meal and the total calories consumed each day. The app supports CRUD functions as well as pagination and filtering. There is login control on the front end for admins to make changes without going to an admin page.</p>
        </div></div>
        
      </div></div>
    )
}

export default Header
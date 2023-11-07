export default function Validation(values, action){

  let error = {}

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

  // the following are vaid only in sign up process
  if(action === 'Sign Up'){
    if(!values.name){
      error.name = 'Name is empty'
    }
    else{
      error.name = ''
    }

    error.terms = values.terms ? '' : 'Check it!';
  }

  

  if(!values.email){
    error.email = 'Email is empty'
  }
  else if(!email_pattern.test(values.email)){
    error.email = "Email dos not repsect rules"
  }
  else{
    error.email = ''
  }

  if(!values.password){
    error.password = 'Password is empty'
  }
  else if(!password_pattern.test(values.password)){
    error.password = "Password dos not repsect rules"
  }
  else{
    error.password = ''
  }

  

  return error;
}


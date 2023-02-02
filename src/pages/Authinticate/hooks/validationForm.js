export default function validationLogin(values) {
  let errors = {};
 
  if (!values.firstname) {
    errors.firstname = "firstname is required";
  }
  if (!values.lastname) {
    errors.lastname = "lastname is required";
  }
  if (!values.email) {
    errors.email = "email is required";
  } else if (!
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)
  ) {
    errors.email = "email address is invalild";
  }
  
 
  if (!values.phone) {
    errors.phone = " please enter valid mobile number";
  } 
  else if (!/^[789]\d{9}$/.test(values.mobile)) {
    errors.mobile = "mobile number should be start with [7,8,9] and 10 digite";
  }
  if (!values.password) {
    errors.password = "password is requred ";
  } else if (values.password.length < 8) {
    errors.password = "password length more than 8 ";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "confirm password is required";
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "passoword should match with  confirm password ";
  }
 
  return errors ;
}

// export default validationForm;

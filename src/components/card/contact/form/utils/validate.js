import Validator from 'validator';
import isEmpty from '../../../../common/utils/is_Empty';
import { isLength } from '../../../../common/utils/validate';

const validateForm = ({ name, email, text }) => {
  let errors = {};

  // Check if Empty
  name = !isEmpty(name) ? name : '';
  email = !isEmpty(email) ? email : '';
  text = !isEmpty(text) ? text : '';

  // Name
  if(!isLength({ value: name, length: 30 })) errors.name = 'Name must be between 2 and 30 characters';
  
  // Email
  if(!Validator.isEmail(email)) errors.email = 'Email is invalid';

  // Text
  if(!isLength({ value: text, length: 500 })) errors.text = 'Message must be between 2 and 500 characters';

  // Validate Empty
  if(Validator.isEmpty(name)) errors.name = 'Name field is required!';
  if(Validator.isEmpty(email)) errors.email = 'Email field is required!';
  if(Validator.isEmpty(text)) errors.text = 'Message field is required!';

  // Return errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateForm;
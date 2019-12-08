import Validator from 'validator';

const isLength = ({ value, length }) =>
  Validator.isLength(value, { min:2, max: length });

export { isLength }
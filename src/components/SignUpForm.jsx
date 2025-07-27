import { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
  // form state
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  // validate the form inputs
  const checkFormValidity = () => {
    const errors = {};
    
    // check full name
    if (!formValues.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    } else if (formValues.fullName.trim().length < 2) {
      errors.fullName = 'Name should be at least 2 characters long';
    }
    
    // validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email) {
      errors.email = 'Email address is required';
    } else if (!emailPattern.test(formValues.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // check password strength
    if (!formValues.password) {
      errors.password = 'Password is required';
    } else if (formValues.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    // clear error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (checkFormValidity()) {
      setIsSuccess(true);
      console.log('User registration:', formValues);
      // here you'd typically send data to your API
    }
  };

  // show success message
  if (isSuccess) {
    return (
      <div className="signup-success">
        <h2>Welcome aboard, {formValues.fullName}!</h2>
        <p>Your account has been created successfully.</p>
        <button onClick={() => setIsSuccess(false)}>Create Another Account</button>
      </div>
    );
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Join Our Community</h2>
        <p className="signup-subtitle">Start your journey with us today</p>
        
        <form onSubmit={handleFormSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formValues.fullName}
              onChange={handleInputChange}
              className={fieldErrors.fullName ? 'error' : ''}
              placeholder="Enter your full name"
            />
            {fieldErrors.fullName && <span className="error-message">{fieldErrors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              className={fieldErrors.email ? 'error' : ''}
              placeholder="Enter your email address"
            />
            {fieldErrors.email && <span className="error-message">{fieldErrors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              className={fieldErrors.password ? 'error' : ''}
              placeholder="Create a password"
            />
            {fieldErrors.password && <span className="error-message">{fieldErrors.password}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm; 
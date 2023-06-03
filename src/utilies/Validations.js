export const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  export const isValidPassword = (password) => {
    return password.length >=8;
  }

  export const isValidCfPassword = (password, cfPassword) => {
    return cfPassword.length >=8 && password == cfPassword;
  }
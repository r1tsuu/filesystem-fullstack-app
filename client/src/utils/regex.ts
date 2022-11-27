export const email = /\S+@\S+\.\S+/;

export const login =
  /^[a-zA-Z0-9](_(?!(.|_))|.(?!(_|.))|[a-zA-Z0-9]){5,18}[a-zA-Z0-9]$/;

export const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

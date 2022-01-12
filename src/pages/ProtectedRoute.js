import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const userNameValidation = ( usern ) => {
 
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const result = emailRegex.test(usern) || usernameRegex.test(usern);
  return result;
}

const passwordValidation = (pass) => {

  const isWhitespace = /^(?=.*\s)/;
  if (isWhitespace.test(pass))
    return false; // Şifrede bosluk kullanılmamalı. Ekstra bir kontrol sağladım.

  const isContainsUppercase = /^(?=.*[A-Z])/;
  if (!isContainsUppercase.test(pass))
    return false; // Şifre en az bir tane büyük harf içermeli.


  const isContainsLowercase = /^(?=.*[a-z])/;
  if (!isContainsLowercase.test(pass))
    return false; // Şifre en az bir tane küçük harf içermeli.

  const isContainsNumber = /^(?=.*[0-9])/;
  if (!isContainsNumber.test(pass))
    return false; // Şifre en az bir tane rakam içermeli.

  const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])/;
  if (!isContainsSymbol.test(pass))
    return false; // Şifre en az bir tane özel karakter içermeli.

  const isValidLength = /^.{8,30}$/;
  if (!isValidLength.test(pass))
    return false; // Şifre minumum 8 maksimum 30 karakter uzunluğunda olmalı.

  return true; // Eger bir hata almazsak paralo geçerlidir.
}

const ProtectedRoute = ( props ) => {
  
  const { form } = props;
  //mail: abc@gmail.com - password: StrongPass@3r55 __>> isAuth: true
  const isAuth = userNameValidation(form.userName) && passwordValidation(form.password)

  return (
    (isAuth) ? <Outlet /> : <Navigate to="/"/>
  );
}

export default ProtectedRoute
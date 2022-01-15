import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export const userNameValidation = (usern) => {
 
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const result = emailRegex.test(usern) || usernameRegex.test(usern);
  return result;
}

export const passwordValidation = (pass) => {

  // "^(?=.*[a-z]) (?=.*[A-Z]) (?=.*\d) (?=.*[@$!%*?&]) [A-Za-z\d@$!%*?&]{8,}$"
  //En az sekiz karakter, en az bir büyük harf, bir küçük harf ve bir özel karakter:

  const isContainsUppercase = /^(?=.*[A-Z])/;
  if (!isContainsUppercase.test(pass))
    return false; // Şifre en az bir tane büyük harf içermeli.

  const isContainsLowercase = /^(?=.*[a-z])/;
  if (!isContainsLowercase.test(pass))
    return false; // Şifre en az bir tane küçük harf içermeli.


  const isContainsSymbol = /^(?=.*[~`!@#-$%^&*()--+={}[\]|\\:;"'<>,.?/_])/;
  if (!isContainsSymbol.test(pass))
    return false; // Şifre en az bir tane özel karakter içermeli.
    
  const isValidLength = /^.{8,}$/;
  if (!isValidLength.test(pass))
    return false; // Şifre minumum 8 karakter uzunluğunda olmalı

  return true;
}

const ProtectedRoute = (props) => {
  
  const { isAuth } = props;
  // Auth işlemi Login sayfasında gerçekleştiriliyor ama güvenlik açısından burada tekrardan isAuth kontrol edilmelidir.
  return (
    (isAuth) ? <Outlet /> : <Navigate to="/"/>
  );
}

export default ProtectedRoute
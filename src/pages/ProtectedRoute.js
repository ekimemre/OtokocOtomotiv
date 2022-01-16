import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export const userNameValidation = (usern) => {
 
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const result = emailRegex.test(usern) || usernameRegex.test(usern);
  return result;
}

export const passwordValidation = (pass) => {

  //En az sekiz karakter, en az bir büyük harf, bir küçük harf ve bir özel karakter:
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[~`!@#-$%^&*()--+={}[\]|\\:;"'<>,.?/_]).{8,}$/
  if(passwordRegex.test(pass)){
    return false
  }
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
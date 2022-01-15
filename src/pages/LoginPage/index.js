import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { userNameValidation, passwordValidation } from '../ProtectedRoute';
import styles from './styles.module.css'
import ImageIcon from '../../svg/ImageIcon'
import ErrorBox from '../../svg/ErrorBox'
import CloseIcon from '../../svg/CloseIcon'
import Logo from '../../images/Otokoc-Otomotiv-Logo.png';
import Input from '../../components/Input'
import Button from '../../components/Button'


const Login = ( props ) => {

  const navigate = useNavigate()
  const { form, setForm, isAuth, setIsAuth } = props; //App.jsden gelen state değişkenleri.
  const [isInputsValid, setInputsValid] = useState(true)

  const handleChange = (event) => { 
    setForm({...form, [event.target.name]: event.target.value}) //form içinde iki farklı değer saklandığı için hangi değerin değiştirilmesi gerektiğini target ile belirliyoruz.
    const authentication = userNameValidation(form.userName) && passwordValidation(form.password);
    setIsAuth(authentication)
  }

  const inputCheck = () => {

    if(form.userName !== '' && form.password !== '' && isAuth ){ // Yönlendirme yapmadan inputların değerlerini kontrol edip, auth işlemini gerçekleştiriyoruz.
      navigate("/dashboard")      
    }
    setInputsValid(false);
  }

  const closeErrorBox = () => {
    setInputsValid(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.image}>
          <ImageIcon />
      </div>

      <div className={styles.form}>

        <img className={styles.logo} src={Logo} alt="Otokoc-Otomotiv" />

        <div className={styles.inputs}>
          <h1 className={styles.title}>Giriş</h1>
          <Input
              label={"Email"}
              type={"text"}
              name='userName'
              placeholder={"Email / Kullanıcı Adı"}
              value={form.userName}
              onChange={handleChange}
          />
          <Input
              label={"Password"}
              type={"password"}
              name='password'
              placeholder={"Şifre"}
              value={form.password}
              onChange={handleChange}
          />
          <div onClick={inputCheck}>
            <Button text="Giriş Yap " />
          </div>
        </div>

        <p className={styles.error}>
          {!isInputsValid && <ErrorBox />}
          {!isInputsValid && <p className={styles.close} onClick={closeErrorBox}><CloseIcon /></p> }
        </p> 
      </div>
    </div>
  )
}

export default Login;
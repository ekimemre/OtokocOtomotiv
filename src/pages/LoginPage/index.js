import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css'
import ImageIcon from '../../svg/ImageIcon'
import ErrorBox from '../../svg/ErrorBox'
import CloseIcon from '../../svg/CloseIcon'
import Logo from '../../images/Otokoc-Otomotiv-Logo.png';
import Input from '../../components/Input'
import Button from '../../components/Button'


const Login = ( props ) => {

  const { form, setForm } = props;

  const navigate = useNavigate()
  const [isInputsValid, setInputsValid] = useState(true)

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const inputCheck = () => {
    if(form.userName === '' || form.password === ''){
      setInputsValid(false);
    }else{
      navigate("/dashboard")
    }
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
          <h1 className={styles.title}>
              Giriş
          </h1>
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

          {/* <Link to='/dashboard' style={{textDecoration: "none"}} onClick={inputCheck}>
            <Button text="Giriş Yap " />
          </Link> */}
          
        </div>
        
        <div>{JSON.stringify(form)}</div>

        <p className={styles.error}>
          {!isInputsValid && <ErrorBox />}
          {!isInputsValid && <p className={styles.close} onClick={closeErrorBox}><CloseIcon /></p> }
        </p> 
      </div>
    </div>
  )
}

export default Login;
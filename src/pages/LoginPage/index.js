import React from 'react'
import styles from './styles.module.css'
import ImageIcon from '../../svg/ImageIcon'
import ErrorBox from '../../svg/ErrorBox'
import CloseIcon from '../../svg/CloseIcon'
import Logo from '../../images/Otokoc-Otomotiv-Logo.png';
import Input from '../../components/Input'
import Button from '../../components/Button'


const Login = () => {

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
                        // value={form.userName}
                        // onChange={handleChange}
                    />
                    <Input
                        label={"Password"}
                        type={"password"}
                        name='password'
                        placeholder={"Şifre"}
                        // value={form.password}
                        // onChange={handleChange}
                    />
                    <Button text="Giriş Yap " />
                    
                </div>
                
                <p className={styles.error}>
                    <ErrorBox />
                    <p className={styles.close}><CloseIcon /></p>
                    
                </p>

                
                    
            </div>
            
        </div>
    )
}

export default Login;

/*
    return (
        <div className={styles.container}>
            {<img className={styles.companyLogo} src={Logo} alt="Otokoc-Otomotiv" /> }
            
            <div className={styles.image}>
                <ImageIcon/>
            </div>

            
            <div className={styles.form}>
                
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
                    <Button text="Giriş Yap >" />
                </div>

                <div className={styles.message}>
                    <ErrorBox />
                </div>
            </div>
            
        </div>

*/
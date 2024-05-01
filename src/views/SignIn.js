import React, { useState } from 'react';
import { View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Text } from 'react-native';
import { styles } from '../../assets/css/Css';
import icon from '../../assets/img/icon.png';
import { EnterButton, SignInButton, KeepMeLogged, ForgotPassword } from '../buttons/Buttons';
import axios from 'axios';
import { IP,PORT } from '@env';




export default function SignIn({props, navigation: { navigate }}) {
    const [display, setDisplay] = ['none']
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSignIn() {
        const data = {
            email: email,
            password: password
        }
        await axios.post(`http://${IP}:${PORT}/user/login`, data)
        .then((res) => {
            const token = res.data.data.token
            axios.post(`http://${IP}:${PORT}/user/private`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(() => {
                navigate("Crud Window")
                alert('Login efetuado com sucesso')
            })
            .catch(err => {
                console.log(err)
                alert('Usuario ou senha invalida')
                setDisplay('flex')
            })
        }) 
        .catch(err => {
            console.log(err)
            alert('Erro ao autenticar')
        })
        
        
    }
    const Entrar = 'Entrar'
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <ImageBackground style={styles.bg_image} source={{uri: 'https://img.freepik.com/vetores-gratis/fundo-futurista-abstrato-baixo-poli_1048-10122.jpg?t=st=1713721981~exp=1713725581~hmac=9463d7eb58c4d260dbd075db9a6a0a42ae5d05a266088d8b9b3fe35e88161e91'}}>
                <View style={styles.container_top_login}>
                    <Image source={icon} style={styles.logo_login} />
                </View>

                    <View style={styles.container_login}>
                        <View style={{display: display}}>
                            <Text style={styles.invalid_login}>Usuario ou senha invalida!</Text>
                        </View>
                        <TextInput 
                            style={styles.login_input} 
                            placeholder="e-mail"
                            placeholderTextColor={"black"}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize='none'
                        />
                        <TextInput 
                            style={styles.login_input} 
                            placeholder="senha" 
                            secureTextEntry={true} 
                            placeholderTextColor={"black"}
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize='none'
                        />
                    <ForgotPassword title="Esqueceu a senha" onPress={() => navigate("Forgot Password")}/>
                        <KeepMeLogged />
                    <View style={styles.container_login2}>
                        <EnterButton title="Entrar" value={Entrar} onPress={handleSignIn} />
                        <SignInButton title="Cadastre-se!" onPress={() => navigate("Sign Up")} />
                    </View>
                    </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

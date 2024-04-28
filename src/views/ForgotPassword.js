import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../../assets/css/Css';
import { EnterButton } from '../buttons/Buttons';

export default function ForgotPassword() {
    const Enviar = 'Enviar'
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState('');

    const handleSendEmail = () => {
        setEmailSent(true);
    };

    return (
        <View style={styles.container_forgot_password}>
            {!emailSent ? (
                <>
                    <Text style={styles.forgot_password}>
                        Digite seu e-mail para recuperar a senha
                    </Text>
                    <TextInput 
                        style={styles.forgot_email_input} 
                        placeholder="e-mail"
                        placeholderTextColor={"black"}
                        autoCapitalize='none'
                    />
                    <EnterButton onPress={handleSendEmail} title="Enviar" value={Enviar} />
                </>
            ) : (<View style={styles.messageBox}>
                <Text style={styles.messageText}>E-mail enviado com sucesso!</Text>
              </View>
            )}
        </View>
    );
}

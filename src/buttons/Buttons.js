import React, { useState } from 'react';
import { TouchableOpacity, Text, Switch, View, Image } from 'react-native';
import { styles } from '../../assets/css/Css';

export function KeepMeLogged() {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.keepmeloggedbutton}>
            <Text style={styles.text_button}>mantenha-me conectado</Text>
            <Switch
                trackColor={{ false: "#3e3e3e", true: "#09de65" }}
                thumbColor={isEnabled ? "#808080" : "#808080"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}


export function EnterButton({onPress, value}) {
    return (
        <TouchableOpacity style={styles.container_button} onPress={onPress}>
            <Text style={styles.text_button}>{value}</Text>
        </TouchableOpacity>
    );
}

export function ForgotPassword({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.ForgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
    );
}

export function SignInButton({onPress}) {
    return (
        <TouchableOpacity style={styles.container_signin} onPress={onPress}>
            <Text style={styles.text_signin}>Cadastre-se!</Text>
        </TouchableOpacity>
    );
}

export function ButtonHome({onPress, text, icon}) {
    return (
        <TouchableOpacity style={styles.container_item_button} onPress={onPress}>
            <Image source={icon} style={styles.icon_size} />
            <Text>{text}</Text>
        </TouchableOpacity>
    );
}

export function SquareButton({onPress, text}) {
    return (
        <TouchableOpacity style={styles.container_square_button} onPress={onPress}>
            <Text style={styles.container_square_text}>{text}</Text>
        </TouchableOpacity>
    );
}



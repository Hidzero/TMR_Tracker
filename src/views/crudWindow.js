import React from "react";
import { View  } from "react-native";
import { styles } from "../../assets/css/Css";
import { SquareButton } from "../buttons/Buttons";
import axios from 'axios';

export default function CrudWindow({navigation: { navigate }}) {
    const IP = process.env.IP;
    const PORT = process.env.PORT;
    async function handleGetCar(pageData) {
        await axios.get(`http://${IP}:${PORT}/car`)
        .then(res => {
            const data = res.data.map(car => {
                return {
                    marca: car.marca,
                    modelo: car.modelo,
                    ano: car.ano
                }
            })
            navigate(String(pageData), data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    
     
    return (
        <View style={styles.container}>
            <View style={styles.container_squares}>
                <SquareButton text={ 'Criar Carro'} style={styles.squares} onPress={() => navigate('Create Car')}/>
                <SquareButton text={ 'Todos os Carros'} style={styles.squares} onPress={() => handleGetCar('Read Car')}/>
            </View>
            <View style={styles.container_squares}>
                <SquareButton text={ 'Atualizar Carro'} style={styles.squares} onPress={() => navigate('Update Car')}/>
                <SquareButton text={ 'Deletar Carro'} style={styles.squares} onPress={() => handleGetCar('Delete Car')}/>
            </View>
            <View style={styles.container_squares}>
                <SquareButton text={ 'To-Do List'} style={styles.squares} onPress={() => navigate('To-Do List')}/>
            </View>
        </View>      
    );
}

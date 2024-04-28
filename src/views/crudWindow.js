import React from "react";
import { View  } from "react-native";
import { styles } from "../../assets/css/Css";
import { SquareButton } from "../buttons/Buttons";
import axios from 'axios';

export default function CrudWindow({navigation: { navigate }}) {
    async function handleReadCar() {
        await axios.get('http://192.168.0.110:3000/car')
        .then(res => {
            console.log(res.data)
            const data = res.data.map(car => {
                return {
                    marca: car.marca,
                    modelo: car.modelo,
                    ano: car.ano
                }
            })
            navigate('Read Car', data)
        })
        .catch(err => {
            console.log(err)
        })
    }
     
    return (
        <View style={styles.container}>
            <View style={styles.container_squares}>
                <SquareButton text={ 'Criar Carro'} style={styles.squares} onPress={() => navigate('Create Car')}/>
                <SquareButton text={ 'Todos os Carros'} style={styles.squares} onPress={handleReadCar}/>
            </View>
            <View style={styles.container_squares}>
                <SquareButton text={ 'Atualizar Carro'} style={styles.squares} onPress={() => navigate('Update Car')}/>
                <SquareButton text={ 'Deletar Carro'} style={styles.squares} onPress={() => navigate('Delete Car')}/>
            </View>
        </View>      
    );
}

import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../../assets/css/Css";

export default function ReadCar(props) {
    const cars = props.route.params; 

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.container_login2}>
                    {cars.map((car, index) => (
                        <View key={index} style={styles.carContainer}>
                            <Text style={styles.textCarContainer}>Marca: {car.marca}</Text>
                            <Text style={styles.textCarContainer}>Modelo: {car.modelo}</Text>
                            <Text style={styles.textCarContainer}>Ano: {car.ano}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

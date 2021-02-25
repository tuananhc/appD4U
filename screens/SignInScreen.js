import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SignInScreen() {
    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <Image source={require("./resources/Icons/logo_app.png")} style={styles.logo}></Image>
                <Text style={styles.title}>CỔNG DỊCH VỤ CÔNG BỘ Y TẾ</Text>
            </View>
            <View style={styles.footer}> 
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#002581',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 2,
        alignItems: 'center'
    }, 
    logo: {
        padding: 0,
        alignItems: 'center',
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        flexWrap: 'wrap',
        fontSize: 25,
        color: 'white',
        width: 280,
        textAlign: 'center',
    }
}) 
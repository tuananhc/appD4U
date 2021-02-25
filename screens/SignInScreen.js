import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function SignInScreen({ navigation }) {
    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <View style={{padding: 15}}>
                    <Image source={require("../resources/Icons/logo_app.png")} style={styles.logo}></Image>
                </View>
                
                <Text style={styles.title}>CỔNG DỊCH VỤ CÔNG BỘ Y TẾ</Text>
            </View>

            <View style={styles.footer}> 
                <View style={{flex: 1}}/>
                <View style={{paddingTop: 80, justifyContent: 'flex-start', flex: 3}}>
                    <Text style={{opacity: 0.7, fontSize: 15}}>Tên truy cập</Text>
                    <View style={styles.textInput}>
                        <TextInput style={{fontSize: 20}}/>
                        
                        
                    </View>

                    <Text style={{opacity: 0.7, fontSize: 15, paddingTop: 40}}>Mật khẩu</Text>
                    <View style={styles.textInput}>
                        <TextInput style={{fontSize: 20, flex: 0.9}}/>
                        <View style={{justifyContent: 'center', alignItems: 'flex-end', flex: 0.1}}>
                            <Image source={require('../resources/Icons/Group_95.png')}/>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.button} >
                            <Text style={{color: 'red', fontSize: 20}}>ĐĂNG NHẬP</Text>
                        </View>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems: 'center', marginTop: 10}}>
                        <Text style={{color: 'red', fontSize:12}}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                    <View>
                        <View style={{flexDirection: 'row', marginTop: 150, justifyContent: 'center'}}>
                            <Text>Bạn chưa có tài khoản?</Text>
                            <TouchableOpacity>
                                <Text style={{color:'#002581'}}>Đăng ký</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1}}/>
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
        flexDirection: 'row',
        justifyContent: 'center'
    }, 
    logo: {
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
    },
    textInput: {
        paddingTop: 15,
        borderBottomWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row'
    }, 
    button: {
        marginTop: 60,
        padding: 20,
        backgroundColor: '#002581',
        borderRadius: 20,
        height: 20,
        justifyContent: 'center'
    }
}) 
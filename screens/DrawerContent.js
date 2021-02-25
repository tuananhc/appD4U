import React from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar, 
    Text, 
    Drawer,
} from 'react-native-paper';
import HomeScreen from './HomeScreen';

export default function DrawerContent(props) {
    return (
        <View style={{flex: 1}}>
            <StatusBar style={{backgroundColor: '#002581'}}/>
            <DrawerContentScrollView {...props}>
                <View>
                    <View style={styles.userInfo}>
                        <Avatar.Image 
                            source={require('./resources/UserDrawer/Group6516.png')}
                            size={50}
                        />
                        <View style={{paddingLeft: 20}}>
                            <Text style={{color: 'white', fontSize: 20}}>abc</Text>
                            <Text style={{opacity: 0.5, color: 'white'}}>abc@gmail.com</Text>
                        </View>
                        
                    </View>
                </View>

                <Drawer.Section>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Image 
                                source={require('./resources/UserDrawer/Group6550.png')} 
                            />
                        )}
                        label='Trang chủ'
                        onPress={()=>{props.navigation.navigate('HomeScreen')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Image 
                                source={require('./resources/UserDrawer/Group6551.png')} 
                            />
                        )}
                        label='Thông tin chung'
                        onPress={()=>{props.navigation.navigate('Splash')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Image 
                                source={require('./resources/UserDrawer/Group6552.png')} 
                            />
                        )}
                        label='Danh sách thủ tục hành chính'
                        onPress={()=>{}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Image 
                                source={require('./resources/UserDrawer/Group6553.png')} 
                            />
                        )}
                        label='Tra cứu hồ sơ'
                        onPress={()=>{}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Image 
                                source={require('./resources/UserDrawer/Group6554.png')} 
                            />
                        )}
                        label='Quản lý hồ sơ'
                        onPress={()=>{}}
                    />

                    <View style={{borderBottomWidth: 0.5, borderColor: 'gray', padding: 7}}/>
                    <View style={{padding: 7}}/>

                    <DrawerItem
                        icon={({color, size}) => (
                            <Image 
                                source={require('./resources/UserDrawer/Group6555.png')} 
                            />                      
                        )}
                        label='Hướng dẫn & hỗ trợ'
                        onPress={()=>{}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Image 
                                source={require('./resources/UserDrawer/Group6556.png')} 
                            />
                        )}
                        label='Thông tin đăng ký'
                        onPress={()=>{}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Image 
                                source={require('./resources/UserDrawer/Group6557.png')} 
                            />
                        )}
                        label='Thiết lập ứng dụng'
                        onPress={()=>{}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Image 
                                source={require('./resources/UserDrawer/Group6559.png')} 
                            />
                        )}
                        label='Đăng nhập'
                        onPress={()=>{}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Image 
                                source={require('./resources/UserDrawer/Group6560.png')} 
                            />
                        )}
                        label='Đăng ký'
                        onPress={()=>{}}
                    />
                </Drawer.Section> 
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfo: {
        alignItems: 'center',
        paddingLeft: 20,
        flexDirection: 'row',
        backgroundColor: '#002581',
        height: 80
    }
}) 
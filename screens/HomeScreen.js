import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {

    navigationOptions = {
        drawerIcon: () => (
            <Image source={require('./resources/Icons/svg2.png')}/>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                backgroundColor: "#002581",
                height: 300,
                flexDirection: 'column',
                borderBottomLeftRadius: 35,
                borderBottomRightRadius: 35
                }}> 
                <View style={styles.container}>
                    <TouchableOpacity style={styles.navigateButton} onPress={() => navigation.toggleDrawer()}>
                        <Image source={require("./resources/Icons/svg2.png")}/>
                    </TouchableOpacity>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require("./resources/Icons/logo_app.png")} style={styles.logo}></Image>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.title}>CỔNG DỊCH VỤ CÔNG BỘ Y TẾ</Text>
                    </View>
                </View>
            </View>
            <View style={{height: 530}}>
                <View style={styles.navigation}>
                    <View style={{flex: 0.5}}>
                        <TouchableOpacity style={{flex: 0.25, paddingBottom: 5, paddingRight: 5}}>
                        <View style={styles.box}>
                            <View style={styles.icon}>
                            <Image source={require('./resources/Homepage/svg54.png')} />
                            </View>
                            <Text style={{color: '#002581', flex: 0.5}}>Thông tin chung</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 0.25, paddingBottom: 5, paddingRight: 5, paddingTop: 5}}>
                        <View style={styles.box}>
                            <View style={styles.icon}>
                            <Image source={require('./resources/Homepage/svg27.png')}/>
                            </View>
                            <Text style={{color: '#F6A90F', flex: 0.5}}>Tra cứu hồ sơ</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 0.25, paddingBottom: 5, paddingRight: 5, paddingTop: 5}}>
                        <View style={styles.box}>
                            <View style={styles.icon}>
                            <Image source={require('./resources/Homepage/Path8249.png')} />
                            </View>
                            <Text style={{color: '#0083E5', flex: 0.5}}>Thanh toán phí, lệ phí</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 0.25, paddingRight: 5, paddingTop: 5}}>
                        <View style={styles.box}>
                            <View style={styles.icon}>
                            <Image source={require('./resources/Homepage/svg53.png')} />
                            </View>
                            <Text style={{color: '#B24AB9', flex: 0.5}}>Hỏi đáp, góp ý</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 0.5}}>
                        <TouchableOpacity style={{flex: 0.25, paddingBottom: 5, paddingLeft: 5}}>
                        <View style={styles.box}>
                            <View style={styles.icon}>
                            <Image source={require('./resources/Homepage/Group5968.png')} />
                            </View>
                            <Text style={{color: '#44A636', flex: 0.25}}>Danh mục</Text>
                            <Text style={{color: '#44A636', flex: 0.25}}>Thủ tục hành chính</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 0.25, paddingBottom: 5, paddingLeft: 5, paddingTop: 5}}>
                            <View style={styles.box}>
                                <View style={styles.icon}>
                                <Image source={require('./resources/Homepage/svg85.png')} />
                                </View>
                                <Text style={{color: '#E86657', flex: 0.5}}>Quản lý hồ sơ</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 0.25, paddingBottom: 5, paddingLeft: 5, paddingTop: 5}}>
                            <View style={styles.box}>
                                <View style={styles.icon}>
                                <Image source={require('./resources/Homepage/svg84.png')} />
                                </View>
                                <Text style={{color: '#E8577A', flex: 0.5}}>Báo cáo</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 0.25, paddingLeft: 5, paddingTop: 5}}>
                            <View style={styles.box}>
                                <View style={styles.icon}>
                                <Image source={require('./resources/Homepage/Group6353.png')} />
                                </View>
                                <Text style={{color: '#11AAAF', flex: 0.5}}>Hướng dẫn & Hỗ Trợ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    },
    navigateButton: {
        paddingLeft: 20,
        width: 50
    },
    logo: {
        padding: 0,
        alignItems: 'center',
        height: 150,
        resizeMode: 'contain',
    },
    box: {
        flex: 1, 
        backgroundColor: 'white', 
        borderColor: 'black', 
        borderWidth: 2, 
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        borderColor: '#002581'
    },
    title: {
        flexWrap: 'wrap',
        fontSize: 25,
        color: 'white',
        width: 280,
        textAlign: 'center',
    },
    icon: {
        flex: 0.5,
        padding: 10
    },
    navigation: {
        flex: 1, 
        flexDirection: 'row',
        padding: 20
    }
});

export default HomeScreen;
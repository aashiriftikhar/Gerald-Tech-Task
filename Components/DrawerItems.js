import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../assets/color';
import { TouchableOpacity } from 'react-native';

const routes = [
    'Start',
    'Your Carts',
    'Favourites',
    'Your Orders',
];
const DrawerItems = ({ ToggleFun, setName }) => {
    const [Option, setOption] = useState('Start');



    const _switch = (item) => {
        setOption(item);
        ToggleFun()
        setName(item);
    }

    return (
        <View style={styles.root}>
            <Text style={styles.headerText}>Beka</Text>
            <View style={styles.container}>
                {routes.map((item, ind) => {
                    return <TouchableOpacity onPress={() => _switch(item)}>
                        <Text style={{ ...styles.item, backgroundColor: (Option === item) ? colors.sidebar.Selectedtext : "transparent" }} key={ind}>{item}</Text>
                    </TouchableOpacity  >;
                })}

                <View style={styles.line}></View>
                <TouchableOpacity>
                    <Text style={{ ...styles.item }} >Sign Out</Text>
                </TouchableOpacity  >

            </View>
        </View>
    )
}

export default DrawerItems

const styles = StyleSheet.create({
    root: {
        backgroundColor: colors.sidebar.textBG,
        height: '100%',
        // zIndex: 0,
        // transform: [{ rotateZ: '-12deg' }],

        // transform: [{ rotateY: '45deg' }, { rotateZ: '45deg' }],
    },
    headerText: {
        marginLeft: 60,
        marginBottom: 0,
        marginTop: 80,
        color: colors.sidebar.text,
        fontWeight: 'bold',
        fontSize: 26,
        fontFamily: "Inter-Bold"
    },
    container: {
        marginTop: 45
    },
    item: {
        color: colors.sidebar.text,
        fontFamily: "Inter-Medium",
        marginBottom: 20,
        width: '40%',
        marginLeft: '10%',
        borderRadius: 15,
        color: colors.sidebar.text,
        fontSize: 19,
        paddingLeft: 20,
        paddingTop: 15,
        paddingBottom: 15,
    },
    line:{
        borderWidth: .5,
        borderStyle: 'solid',
        borderColor: colors.sidebar.text,
        width: '49%',
        marginLeft: '6%',
        marginVertical: 35,
        // marginHorizontal: 'auto'
    }
})
import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native';
import { UIManager } from 'react-native';
import { Button } from 'react-native';
import { Image } from 'react-native';
import bars from "../assets/images/bars.png"
import { TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from '../assets/color';
import { font } from './fonts/fonts';
import { Dimensions } from 'react-native';

const HomePage = ({ Toggle, ToggleFun, boxPosition, RouteName }) => {

    return (
        <Animated.View
            style={[
                styles.drawer,
                { marginLeft: Toggle ? '0%' : '60%' },
                { marginTop: Toggle ? '0%' : 30 },
                { transform: [{ rotateZ: boxPosition }] },
            ]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={ToggleFun}>
                    <Image source={bars} style={styles.bars} />
                </TouchableOpacity>
                <Text style={styles.headerText}>{RouteName}</Text>

            </View>
        </Animated.View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        position: 'absolute',
        top: "-2.5%",
        height: '105%',
        width: Dimensions.get('window').width * 2,
        borderRadius: 24,

        // zIndex: 1,
        backgroundColor: colors.bg,
        // transform: [{rotateZ: '-12deg'}],
    },
    bars: {
        height: 30,
        width: 30,
        padding: 0,
        margin: 0,
        resizeMode: 'contain',

    },
    headerText: {
        color: colors.text.lightPink,
        fontSize: 24,
        marginLeft: 18,
        fontFamily: 'Inter-Light',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 20
    }
})
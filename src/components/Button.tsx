import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Touchable } from './Touchable';

export interface ButtonProps {
    onPress: () => void;
}

export function Button (props: ButtonProps) {

    const onPress = (): void => {
        const {onPress} = props;
        onPress();
    }

    return (
        <Touchable onPress={onPress} >
      <View style={styles.container}>
         <Text style={styles.textButton}>Set Active</Text>
      </View>
        </Touchable>
    );
}


const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton:{
        fontSize: 25,
        color: 'white'
    }
})
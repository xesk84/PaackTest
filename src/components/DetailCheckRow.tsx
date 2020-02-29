import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface DetailCheckRowProps {
    fieldName: string,
    fieldValue: boolean
}

export function DetailCheckRow (props: DetailCheckRowProps) {
    const {fieldName, fieldValue} = props;
    return (
      <View style={styles.container}>
          <View style={styles.fieldNameContainer}>
            <Text style={styles.fieldName}>{fieldName} </Text>
          </View>
          <View style={styles.fieldValueContainer}>
            <Icon name={fieldValue ? 'check' : 'remove'} size={25} color='black' />
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    fieldName: {
        fontSize: 20,
        color: 'black'
    },
    fieldValue: {
        fontSize: 18,
        color: 'gray'
    },
    fieldNameContainer: {
        width: 120,
        justifyContent: 'center',
      },
    fieldValueContainer: {
        width: 160,
        justifyContent: 'center',
      },
})
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface DetailRowProps {
    fieldName: string,
    fieldValue: string
}

export function DetailTextRow (props: DetailRowProps) {
    const {fieldName, fieldValue} = props;
    return (
      <View style={styles.container}>
          <View style={styles.fieldNameContainer}>
            <Text style={styles.fieldName}>{fieldName} </Text>
          </View>
          <View style={styles.fieldValueContainer}>
            <Text style={styles.fieldValue}>{fieldValue}</Text>
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
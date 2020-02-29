import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface TextListItemProps {
    text: string
}

export function TextListItem (props: TextListItemProps) {
    const {text} = props;
    return (
      <View>
         <Text style={styles.text}>{text}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: 'gray'
    }
})
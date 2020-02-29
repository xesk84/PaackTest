import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface TitleListItemProps {
    title: string
}

export function TitleListItem (props: TitleListItemProps) {
    const {title} = props;
    return (
      <View>
         <Text style={styles.title}>{title}</Text>
      </View>
    );
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    }
})
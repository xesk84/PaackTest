import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Delivery } from '../entities';
import { TitleListItem, TextListItem } from '.';
import Icon from 'react-native-vector-icons/FontAwesome'


export interface ListItemProps {
    item: Delivery
}

export function ListItem (props: ListItemProps) {
    const {item} = props;
    return (
      <View style={styles.listItemContainer}>
          <View style={styles.textSideContainer}>
            <TitleListItem title={item.customerName} />
            <TextListItem text={item.address} />
          </View>
          <View style={styles.selectedItemContainer}>
              <Icon name="star-o" size={30} color='black' />
          </View>
          <View style={styles.goToDetailContainer}>
              <Icon name="chevron-right" size={30} color='black' />
          </View>
      </View>
    );
}


const styles = StyleSheet.create({
    listItemContainer:{
        borderBottomWidth : 0.5,
        borderBottomColor: 'gray',
        height: 80,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textSideContainer: {
        width: 220,
        justifyContent: 'center'
    },
    selectedItemContainer: {
        width: 40,
        justifyContent: 'center'
    },
    goToDetailContainer: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
})
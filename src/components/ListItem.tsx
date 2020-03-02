import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Delivery} from '../entities';
import {TitleListItem, TextListItem, Touchable} from '.';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelectedDeliveryContext } from '../providers/SelectedDeliveryProvider';

export interface ListItemProps {
  item: Delivery;
  navigation
}

export function ListItem(props: ListItemProps) {
  const {item} = props;
  const [selectedDelivery] = useSelectedDeliveryContext();

  const navigateToDetail = (): void => {
    const {navigation} = props;
    navigation.navigate('Detail', {id: item.id});
  };

  return (
    <Touchable onPress={navigateToDetail}>
      <View style={styles.listItemContainer}>
        <View style={styles.textSideContainer}>
          <TitleListItem title={item.customerName} />
          <TextListItem text={item.address} />
        </View>
        <View style={styles.selectedItemContainer}>
            { selectedDelivery === item.id &&
                <Icon name="star-o" size={30} color="black" />
            }
        </View>
        <View style={styles.goToDetailContainer}>
          <Icon name="chevron-right" size={30} color="black" />
        </View>
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    height: 80,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textSideContainer: {
    width: 220,
    justifyContent: 'center',
  },
  selectedItemContainer: {
    width: 40,
    justifyContent: 'center',
  },
  goToDetailContainer: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

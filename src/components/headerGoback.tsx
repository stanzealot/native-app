import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface HeaderProps {
  title: string;
  showOption?: boolean;
  option: string;
}

const Header: React.FC<HeaderProps> = ({title, showOption = false, option}) => {
  const Icon = require('../assets/icons/right.png');
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goBack} style={styles.circle}>
        <Image source={Icon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {showOption && (
        <TouchableOpacity onPress={goBack} style={styles.option}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 10,
  },
  circle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#484848e6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Karla-ExtraBold',
    color: 'white',
  },
  option: {
    borderRadius: 20,
    borderColor: '#28CC9E',
    borderWidth: 2,
    padding: 10,
  },
  optionText: {
    color: '#28CC9E',
  },
});

export default Header;

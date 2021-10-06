import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styled.header}>
      <Text style={styled.headerTitle}>Movies</Text>
    </View>
  );
};

const styled = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#050A30',
  },
  headerTitle: {
    fontSize: 30,
    color: '#FFF',
    fontFamily: '',
  },
});

export default Header;

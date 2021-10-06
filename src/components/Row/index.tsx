import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface RowProps {
  text: string;
}

const Header: React.FC<RowProps> = ({text}) => {
  return (
    <View>
      <Text style={styled.rowText}>{text}</Text>
    </View>
  );
};

const styled = StyleSheet.create({
  rowText: {
    fontSize: 10,
    color: '#FFF',
    fontFamily: '',
    //  backgroundColor: '#050A30',
  },
});

export default Header;

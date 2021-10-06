import React from 'react';
import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';

interface DetailsProps {
  voteAverage: string;
  overview: string;
  title: string;
  popularity: number;
  mediaType: string;
  name?: string;
  modalVisible: boolean;
  setModalVisible: () => void;
}

const Details: React.FC<DetailsProps> = (
  props,
  //   {
  //   voteAverage,
  //   overview,
  //   originalLanguage,
  //   originalName,
  //   popularity,
  //   mediaType,
  // }
) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible();
      }}>
      <View>
        <Text style={styled.rowText}>{props.title || props.name}</Text>
        <Text style={styled.rowText}> {props.voteAverage}</Text>
        <Text style={styled.rowText}>{props.overview}</Text>

        <Text style={styled.rowText}>{props.popularity}</Text>
        <Text style={styled.rowText}>{props.mediaType}</Text>
      </View>
      <Pressable
        style={[styled.button, styled.buttonClose]}
        onPress={() => props.setModalVisible()}>
        <Text style={styled.textStyle}>Hide Modal</Text>
      </Pressable>
    </Modal>
  );
};

const styled = StyleSheet.create({
  
  rowText: {
    fontSize: 10,
    color: '#FFF',
    fontFamily: '',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Details;

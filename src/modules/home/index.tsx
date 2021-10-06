import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Header, Row, Details} from '../../components';
import {getAllMovies, MovieProps} from '../../services/movies';

const HomeScreen: React.FC = () => {
  const [movies, setMovies] = useState<any>([]);
  const [viewModal, setViewModal] = useState(false);
  useEffect(() => {
    const handleMovie = async () => {
      const data = await getAllMovies();

      console.log(data.results.name);
      if (data.results) {
        setMovies(data.results);
      }
    };
    handleMovie();
    
  }, []);

  const createRows = (data: any, columns: number) => {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;
    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true,
      });
      lastRowElements += 1;
    }
    return data;
  };

  const handleDetails = (movie: any) => {
    <Details
      title={movie.title || movie.name}
      voteAverage={movie.vote_average}
      overview={movie.overview}
      popularity={movie.popularity}
      mediaType={movie.mediaType}
      modalVisible={viewModal}
      setModalVisible={() => setViewModal}
    />;

    return true;
  };

  const columns = 3;
  return (
    <>
      <ScrollView style={{backgroundColor: '#050A30'}}>
        <Header />
        <FlatList
          data={createRows(movies, columns)}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({item}) => {
            if (item.empty) {
              return <View style={[styles.item, styles.itemEmpty]} />;
            }
            return (
              // <TouchableHighlight onPress={handleModal} underlayColor="white">
              <TouchableOpacity
                style={styles.item}
                onPress={() => handleDetails(item)}>
                <Image
                  style={styles.imageThumbnail}
                  source={{
                    uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/r2NnRp4mi4G3e0x9zINQIcnGNd8.jpg',
                  }}
                />
                <Row text={item.title || item.name} />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    flexGrow: 1,
    margin: 4,
    padding: 10,
    flexBasis: 0,
    backgroundColor: '#000C66',
  },
  text: {
    color: '#333333',
  },
  itemEmpty: {
    backgroundColor: 'transparent',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

const styled = StyleSheet.create({
  screen: {
    flex: 2,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#050A30',
  },
});

export default HomeScreen;

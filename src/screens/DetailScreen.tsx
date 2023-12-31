import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends NativeStackScreenProps<RootStackParams, 'DetailScreen'> { };


export const DetailScreen = ({ route, navigation }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);


  useMovieDetails(movie.id);


  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{ uri }}
            style={styles.posterImage} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading
        ? <ActivityIndicator size={35} color='grey' style={{ marginTop: 20 }} />
        : <MovieDetails movieFull={movieFull!} cast={cast} />
      }

      {/* Boton para cerrar  */}
      <TouchableOpacity  style={styles.backButton}
      onPress={() => navigation.pop()}>
        <Icon
          name='arrow-back-outline'
          color='white'
          size={60}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    // overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  backButton: {
    position: 'absolute',
    zIndex: 999, //Este es para ios 
    elevation: 9,
    top: 20,
    left: 5

  }
});


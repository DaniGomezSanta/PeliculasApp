import React from 'react';
import { Movie } from '../interfaces/movieInterfaces';
import { FlatList, Text, View } from 'react-native';
import { MoviePoster } from './MoviePoster'; 

interface Props {
  title?: string,
  movies: Movie[]
}

export const HorizontalSlider = ({ title, movies }: Props) => {


  return (
    <View style={{ 
      height: (title) ? 250 : 220
      }}>

      {
        title && <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>{title}</Text>
      }
      
      <FlatList
        data={movies}
        renderItem={({ item }: any) =>
        (<MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true} //Esto es para cambiar que el scroll sea horizontal
        showsHorizontalScrollIndicator={false} //Es par quitar la barra del scroll
      />
    </View>
  )
}

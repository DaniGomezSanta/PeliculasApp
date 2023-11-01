import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {HorizontalSlider }from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

  const { isLoading, peliculasCine } = useMovies();

  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }


  return (
    <ScrollView>

      <View style={{ marginTop: top + 20 }}>
        {/* carrusel principal  */}
        <View style={{ height: 440 }}>
          <Carousel
            data={peliculasCine}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9} //Es para que no se mire de color opaco la imagen que no esta activa
            
            />
        </View>

        {/* Peliculas populares */}
        <HorizontalSlider title='EnCine' movies={peliculasCine}/>
      </View>
    </ScrollView>
  )
}

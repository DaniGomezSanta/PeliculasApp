import React from 'react'
import { FlatList, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import { MovieFull } from '../interfaces/movieInterfaces';
import { Cast } from '../interfaces/creditsInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';
import { HorizontalSlider } from './HorizontalSlider';

interface Props {
  movieFull: MovieFull,
  cast: Cast[],
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name='star-outline'
            color='gray'
            size={16} />
          <Text>{movieFull.vote_average}</Text>

          <Text style={{ marginLeft: 5 }}>
            - {movieFull.genres.map(g => g.name).join(',  ')}
          </Text>
        </View>

        {/* Historia de la Pelicula */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }} >
          Historia
        </Text>
        <Text style={{ fontSize: 16 }}>
          {movieFull.overview}
        </Text>

        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }} >
          Presupuesto
        </Text>
        <Text style={{ fontSize: 18 }}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>
      </View>

      {/* casting */}
      <View style={{ marginTop: 10,  marginBottom: 100 }}>
        <Text style={{ fontSize: 23, marginTop: 10, marginLeft: 20, fontWeight: 'bold' }} >
          Actores
        </Text>

        <FlatList
        data={cast}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={({item})=> <CastItem actor={item} />}     
        horizontal= {true}   
        showsHorizontalScrollIndicator= {false}
        style={{marginTop: 10,height: 70}}
        />
      </View>
    </>
  )
}

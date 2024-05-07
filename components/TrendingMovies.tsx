import React from 'react'
import { Dimensions, Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { TrendingMovies } from '../types/TrendingMovie';
import { useNavigation } from '@react-navigation/native';

var {width, height} = Dimensions.get('window')
export default function TrendingMovie({data}: TrendingMovies) {
  const navigation = useNavigation()
  const handleClick = () => {
    // navigation.navigate('Movie', item) 
  }
  return (
    <View className="mb-8">
        <Text className='text-white text-xl mx-4 mb-5'>Trending</Text>
        <Carousel
          data={data}
          renderItem={({item}) => <MovieCard item={item} handleClick={handleClick}  /> }
          sliderWidth={width}
          itemWidth={width*0.62} 
          firstItem={1}
          inactiveSlideOpacity={0.60}
          slideStyle={{display: "flex", alignItems: "center"}}

          />
    </View>
  )
}


const MovieCard:React.FC<TrendingMovies> = ({item, handleClick}) => {
    return(
        <TouchableWithoutFeedback onPress={handleClick}>
            <Text className="text-white">
               <Image 
                source={require('../assets/movie1.webp')} 
                style={{
                  width: width*0.6,
                  height: height*0.4
                }}
                className='rounded-3xl'
               />
            </Text>
        </TouchableWithoutFeedback>
    )
}

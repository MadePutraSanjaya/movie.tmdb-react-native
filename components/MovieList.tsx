import React from 'react'
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { MovieListProps } from '../types/MovieList'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native'

var {width, height} = Dimensions.get('window')

export default function MovieList({ title, data }: MovieListProps) {
    var movieName = 'Spiderman sasasuasaisiajsijaisjaijaijsij';
    var navigation = useNavigation<any>();
    
    return (
        <View className='mb-8 space-y-4'>
            <View className='flex-row justify-between items-center mx-4'>
                <Text className='text-white text-xl mb-2'>{title}</Text>
                <TouchableOpacity>
                    <Text style={styles.text}>See All</Text>
                </TouchableOpacity>
            </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15}}>
                   {
                    data.map((item: string, index: number) => {
                        return (
                        <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('Movie', item as never) }>
                            <View className='space-y-4 mr-4'>
                                <Image source={require('../assets/movie1.webp')} className='rounded-3xl' style={{width: width*0.33, height: height*0.22}}  />
                                <Text className='text-neutral-300 ml-1'>
                                    {
                                        movieName.length > 14 ? movieName.slice(0,14)+'...' : movieName
                                    }
                                </Text>
                            </View>
                            
                        </TouchableWithoutFeedback>
                        )
                    }) 
                   }
                </ScrollView>
        </View>
    )
}

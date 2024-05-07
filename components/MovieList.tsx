import React from 'react'
import { ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { MovieListProps } from '../types/MovieList'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function MovieList({ title, data }: MovieListProps) {
    var movieName = 'Spiderman ';
    var navigation = useNavigation();
    
    return (
        <View className='mb-8 space-y-4'>
            <View className='flex-row justify-between items-center mx-4'>
                <Text className='text-white text-xl mb-5'>{title}</Text>
                <TouchableOpacity>
                    <Text style={styles.text}>See All</Text>
                </TouchableOpacity>
            </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15}}>
                   {
                    data.map((item: string, index: number) => {
                        return (
                        <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('Movie', item) }>
                            <View >

                            </View>
                            <Text className='text-neutral-300 ml-1'>{movieName}</Text>
                        </TouchableWithoutFeedback>
                        )
                    }) 
                   }
                </ScrollView>
        </View>
    )
}

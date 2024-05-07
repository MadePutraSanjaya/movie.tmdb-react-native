import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';
import TrendingMovie from '../components/TrendingMovies';
import MovieList from '../components/MovieList';

const ios = Platform.OS === 'ios';
function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3])
  const [upcoming, setUpcoming] = useState([1, 2, 3])
  const [topRated, setTopRated] = useState([1, 2, 3])
  return (
    <View className="flex-1 bg-neutral-800 ">
      <SafeAreaView className={ios ? 'mb-4' : 'mb-3'}>
        <StatusBar style='light' />
        <View className='flex-row justify-between items-center mx-4'>
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color='white' />
          <Text className='text-white font-bold text-3xl'>
            <Text style={styles.text}>
                M
            </Text>ovie
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color='white' />

          </TouchableOpacity>
        </View>
      </SafeAreaView>
      
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10}}>
        {/* Movie carousel */}
        <TrendingMovie data={trending} />

        {/* upcoming carousel */}
        <MovieList title="Upcoming" data={upcoming} />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

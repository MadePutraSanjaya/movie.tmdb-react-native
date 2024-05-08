import { View, Text, ScrollView, TouchableOpacity, Platform, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import {  HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';

var {width, height} = Dimensions.get('window')

const ios = Platform.OS === 'ios';
const topMargin = ios ? "" : "mt-3"

export default function MovieScreen() {
    const { params: item } = useRoute();
    const [isFavorite, setFavorite] = useState(false);
    const navigation = useNavigation()

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className='flex-1 bg-neutral-900'
        >
            <View className='w-full'>
                <SafeAreaView className={'absolute z-20 w-full flex-row justify-between items-center px-4'+topMargin}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className='rounded-xl p-1'>
                            <ChevronLeftIcon strokeWidth={2.5} color="white" size={28} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFavorite(!isFavorite)}>
                            <HeartIcon size={35} color={isFavorite ? theme.background : "white"} />
                        </TouchableOpacity>
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}
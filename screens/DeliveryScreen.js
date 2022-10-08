import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Progress from 'react-native-progress';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { selectResturant } from '../redux/Features/resturantSlice';

const DeliveryScreen = () => {
	const navigation = useNavigation();
	const resturant = useSelector(selectResturant);

	return (
		<View className='bg-[#00CCBB] flex-1'>
			<SafeAreaView className='z-50'>
				<View className='flex-row justify-between items-center p-5'>
					<TouchableOpacity onPress={() => navigation.navigate('Home')}>
						<Entypo name='circle-with-cross' size={30} color='white' />
					</TouchableOpacity>
					<Text className='font-light text-white text-lg'>Order Help</Text>
				</View>

				<View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
					<View className='flex-row justify-between'>
						<View>
							<Text className='text-lg text-gray-400'>Estimated Arrival</Text>
							<Text className='text-2xl font-bold'>45-55 Minutes</Text>
						</View>

						<Image
							source={{
								uri: 'https://links.papareact.com/fls',
							}}
							className='h-20 w-20'
						/>
					</View>

					<Progress.Bar size={30} indeterminate={true} color='#00CCBB' />

					<Text className='mt-3 text-gray-500'>
						Your order at {resturant.title} is being prepared!
					</Text>
				</View>
			</SafeAreaView>

			<MapView
				initialRegion={{
					latitude: resturant.lat,
					longitude: resturant.long,
					latitudeDelta: 0.005,
					longitudeDelta: 0.005,
				}}
				className='flex-1 -mt-10 z-0'
				mapType='mutedStandard'
			></MapView>
		</View>
	);
};

export default DeliveryScreen;

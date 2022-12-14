import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import BasketPopup from '../components/Basket/BasketPopup';
import DishCard from '../components/Dishes/DishCard';
import { setResturant } from '../redux/Features/resturantSlice';
import { urlFor } from '../sanity';

const ResturantScreen = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const {
		params: {
			id,
			imgUrl,
			title,
			rating,
			genre,
			address,
			short_description,
			dishes,
			leng,
			lat,
		},
	} = useRoute();

	useEffect(() => {
		dispatch(
			setResturant({
				id,
				imgUrl,
				title,
				rating,
				genre,
				address,
				short_description,
				dishes,
				leng,
				lat,
			})
		);
	}, [dispatch]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<>
			<BasketPopup />

			<ScrollView>
				<View>
					<Image
						source={{
							uri: urlFor(imgUrl).url(),
						}}
						className='w-full h-56 bg-gray-300 p-4'
					/>

					<TouchableOpacity
						onPress={() => navigation.goBack()}
						className='absolute top-7 left-5 p-2 bg-gray-100 rounded-full'
					>
						<AntDesign name='arrowleft' size={20} color='#00CCBB' />
					</TouchableOpacity>
				</View>

				<View className='bg-white'>
					<View className='px-4 pt-4'>
						<Text className='text-3xl font-bold'>{title}</Text>

						<View className='flex-row space-x-2 my-1'>
							<View className='flex-row items-center space-x-1'>
								<AntDesign name='star' size={22} color='green' opacity={0.5} />
								<Text className='text-xs text-gray-500'>
									<Text className='text-green-500'>{rating}</Text> . {genre}
								</Text>
							</View>

							<View className='flex-row items-center space-x-1'>
								<EvilIcons
									name='location'
									size={22}
									color='gray'
									opacity={0.4}
								/>
								<Text className='text-xs text-gray-500'>
									<Text className='text-gray-500'>Nearby . {address}</Text> .
									{genre}
								</Text>
							</View>
						</View>
						<Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
					</View>
					<TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
						<AntDesign
							name='questioncircleo'
							size={20}
							color='gray'
							opacity={0.6}
						/>
						<Text className='pl-2 flex-1 text-md font-bold'>
							Have a food allergy ?
						</Text>
						<Entypo name='chevron-small-right' size={20} color='#00CCBB' />
					</TouchableOpacity>
				</View>
				<View className='pb-36'>
					<Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>

					{dishes.map((dish, i) => (
						<DishCard
							key={i}
							id={dish._id}
							name={dish.name}
							description={dish.short_description}
							price={dish.price}
							image={dish.image}
						/>
					))}
				</View>
			</ScrollView>
		</>
	);
};

export default ResturantScreen;

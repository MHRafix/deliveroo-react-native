import { AntDesign, Entypo, EvilIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/Category/Categories';
import Featured from '../components/Featured/Featured';
import sanityClient from '../sanity';

const HomeScreen = () => {
	const navigation = useNavigation();

	const [featuredCategories, setFeaturedCategories] = useState([]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "featured"] {
					...,
					resturants[]-> {
						...,
						dishes[] -> 
					}
				}`
			)
			.then((data) => {
				setFeaturedCategories(data);
			});
	}, []);

	return (
		<SafeAreaView bg-white pt-5>
			<View className='flex-row pb-3 items-center mx-4 space-x-2'>
				<Image
					source={{
						uri: 'https://links.papareact.com/wru',
					}}
					className='w-7 h-7 bg-gray-300 p-4 rounded-full'
				/>
				<View className='flex-1 '>
					<Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
					<Text className='font-bold text-xl'>
						Current Location
						<Entypo name='chevron-down' size={20} color='#00CCBB' />
					</Text>
				</View>
				<AntDesign name='user' size={20} color='#00BBCC' />
			</View>

			<View className='flex-row items-center space-x-2 pb-2 mx-4'>
				<View className='flex-row items-center space-x-2 flex-1 bg-gray-200 p-3'>
					<EvilIcons name='search' size={24} color='gray' />
					<TextInput
						placeholder='Search...'
						keyboardType='default'
						className='rounded-sm'
					/>
				</View>
				<Feather name='sliders' size={20} color='#00CCBB' />
			</View>

			{/* body */}
			<ScrollView
				className='bg-gray-100'
				contentContainerStyle={{
					paddingBottom: 100,
				}}
			>
				{/* categories */}
				<Categories />

				{/* featured */}
				{featuredCategories.map((category, i) => (
					<Featured
						key={i}
						id={category._id}
						title={category.name}
						description={category.short_description}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

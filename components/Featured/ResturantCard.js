import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { urlFor } from '../../sanity';

const ResturantCard = ({
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
}) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			className='bg-white mr-3 shadow'
			onPress={() => {
				navigation.navigate('Resturant', {
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
				});
			}}
		>
			<Image
				source={{
					uri: urlFor(imgUrl).url(),
				}}
				className='h-36 w-64 rounded-sm'
			/>

			<View className='px-3 pb-4'>
				<Text className='font-bold text-lg pt-2'>{title}</Text>

				<View className='flex-row items-center space-x-1'>
					<AntDesign name='star' opacity={0.5} size={22} color='#22c55e' />
					<Text className='text-xs text-gray-500'>
						<Text className='text-green-500'>{rating}</Text> - {genre}
					</Text>
				</View>
				<View className='flex-row items-center space-x-1'>
					<EvilIcons name='location' color='gray' opacity={0.4} size={22} />
					<Text className='text-xs text-gray-500'>Nearby - . {address} </Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ResturantCard;

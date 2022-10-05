import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import Currency from 'react-currency-formatter';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { urlFor } from '../../sanity';

const Dish = ({ id, name, description, price, image }) => {
	const [isPressed, setIsPressed] = useState(false);

	return (
		<>
			<TouchableOpacity
				onPress={() => setIsPressed(!isPressed)}
				className={`bg-white border p-4 border-gray-200 ${
					isPressed && 'border-b-0'
				}`}
			>
				<View className='flex-row'>
					<View className='flex-1 pr-2'>
						<Text className='text-lg mb-1'>{name}</Text>
						<Text className='text-gray-400'>{description}</Text>
						<Text className='text-gray-400 mt-2'>
							<Currency quantity={price} currency='usd' />
						</Text>
					</View>

					<View>
						<Image
							style={{
								borderWidth: 1,
								borderColor: '#F3F3F4',
							}}
							source={{
								uri: urlFor(image).url(),
							}}
							className='h-20 w-20 bg-gray-300 p-4'
						/>
					</View>
				</View>
			</TouchableOpacity>
			{isPressed && (
				<View className='bg-white px-4'>
					<View className='flex-row items-center space-x-2 pb-3'>
						<TouchableOpacity className='font-bold'>
							<Entypo name='circle-with-minus' size={30} color='#00CCBB' />
						</TouchableOpacity>
						<Text className='text-lg font-bold'>0</Text>
						<TouchableOpacity className='font-bold'>
							<Entypo name='circle-with-plus' size={30} color='#00CCBB' />
						</TouchableOpacity>
					</View>
				</View>
			)}
		</>
	);
};

export default Dish;

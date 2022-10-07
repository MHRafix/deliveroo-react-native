import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Currency from 'react-currency-formatter';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
	selectBasketItems,
	selectBasketTotal,
} from '../../redux/Features/basketSlice';

const BasketPopup = () => {
	const items = useSelector(selectBasketItems);
	const navigation = useNavigation();
	const basketTotal = useSelector(selectBasketTotal);

	if (items.length === 0) return null;

	return (
		<View className='absolute bottom-10 w-full z-50'>
			<TouchableOpacity
				onPress={() => navigation.navigate('Basket')}
				className='mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1'
			>
				<Text className='bg-[#01A296] text-white font-extrabold text-lg py-1 px-2 rounded-sm'>
					{items.length}
				</Text>
				<Text className='flex-1 text-white font-extrabold text-lg text-center'>
					View Basket
				</Text>
				<Text className='text-lg text-white font-extrabold'>
					<Currency quantity={basketTotal} currency='USD' />
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default BasketPopup;

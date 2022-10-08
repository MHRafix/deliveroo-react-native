import { Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import Currency from 'react-currency-formatter';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-web';
import { useDispatch, useSelector } from 'react-redux';
import {
	removeFromBasket,
	selectBasketItems,
	selectBasketTotal,
} from '../redux/Features/basketSlice';
import { selectResturant } from '../redux/Features/resturantSlice';
import { urlFor } from '../sanity';

const BasketScreen = () => {
	const navigation = useNavigation();
	const resturant = useSelector(selectResturant);
	const items = useSelector(selectBasketItems);
	const basketTotal = useSelector(selectBasketTotal);
	const [basketItems, setBasketItems] = useState([]);
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	useMemo(() => {
		const groupedItems = items.reduce((results, item) => {
			(results[item.id] = results[item.id] || []).push(item);
			return results;
		}, {});

		setBasketItems(groupedItems);
	}, [items]);

	return (
		<SafeAreaView className='flex-1 bg-white'>
			<View className='flex-1 bg-slate-100 '>
				<View className='p-4 border-b border-[#0edecd79] bg-white shadow-xs'>
					<View>
						<Text className='text-lg font-bold text-center'>Basket</Text>
						<Text className='text-center text-gray-400'>{resturant.title}</Text>
					</View>
					<TouchableOpacity
						onPress={navigation.goBack}
						className='rounded-full bg-gray-100 absolute top-3 right-5'
					>
						<Entypo name='circle-with-cross' size={30} color='#00CCBB' />
					</TouchableOpacity>
				</View>

				<View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
					<Image
						source={{
							uri: 'https://links.papareact.com/wru',
							// uri: urlFor().url()
						}}
						className='h-7 w-7 bg-gray-300 p-4 rounded-full'
					/>

					<Text className='flex-1'> Deliver in 50 - 75 min</Text>
					<TouchableOpacity>
						<Text className='text-[#00CCBB]'>Change</Text>
					</TouchableOpacity>
				</View>

				<ScrollView className='devide-y devide-gray-200'>
					{Object.entries(basketItems).map(([key, items]) => (
						<View
							key={key}
							className='flex-row items-center space-x-3 bg-white py-2 px-5'
						>
							<Text className='text-[#00CCBB]'>{items.length} x</Text>
							<Image
								source={{ uri: urlFor(items[0]?.image).url() }}
								className='h-12 w-12 rounded-full'
							/>
							<Text className='flex-1'>{items[0]?.name.slice(0, 20)}</Text>

							<Text>
								<Currency quantity={items[0]?.price} currency='usd' />
							</Text>

							<TouchableOpacity>
								<Text
									className='text-[#00CCBB] text-xs'
									onPress={() =>
										dispatch(
											removeFromBasket({
												id: key,
											})
										)
									}
								>
									<Ionicons name='md-remove-circle' size={24} color='#00CCBB' />
								</Text>
							</TouchableOpacity>
						</View>
					))}
				</ScrollView>

				<View className='p-5 bg-white mt-5'>
					<View className='flex-row justify-between my-1'>
						<Text className='text-gray-400'>Subtotal</Text>
						<Text className='text-gray-400'>
							<Currency quantity={basketTotal} currency='usd' />
						</Text>
					</View>

					<View className='flex-row justify-between my-1'>
						<Text className='text-gray-400'>Delivery Fee</Text>
						<Text className='text-gray-400'>
							<Currency quantity={5.99} currency='usd' />
						</Text>
					</View>

					<View className='flex-row justify-between my-1'>
						<Text className='font-extrabold'>Order Total</Text>
						<Text className='font-extrabold'>
							<Currency quantity={basketTotal + 5.99} currency='usd' />
						</Text>
					</View>

					<TouchableOpacity
						onPress={() => navigation.navigate('PreparingOrder')}
						className='rounded-lg my-1 bg-[#00CCBB] p-3'
					>
						<Text className='text-center text-white text-lg font-bold'>
							Place Order
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default BasketScreen;

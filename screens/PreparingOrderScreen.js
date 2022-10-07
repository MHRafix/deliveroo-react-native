import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { SafeAreaView } from 'react-native-safe-area-context';

const PreparingOrderScreen = () => {
	const navigation = useNavigation();

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Delivery');
		}, 4000);
	}, []);

	return (
		<SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
			<Animatable.Image
				source={{
					uri: 'https://user-images.githubusercontent.com/62868878/107191557-569cbc00-6a12-11eb-8a88-a0a67ef8462b.gif',
				}}
				animation='slideInUp'
				iterationCount={1}
				className='h-96 w-96'
			/>

			<Animatable.Text
				animation='slideInUp'
				iterationCount={1}
				className='text-md my-5 text-white font-bold text-center'
			>
				Waiting for Resturant to accept your order!
			</Animatable.Text>

			<Progress.Circle
				size={50}
				indeterminate={true}
				color='white'
				fill='#00CCBB'
			/>
		</SafeAreaView>
	);
};

export default PreparingOrderScreen;

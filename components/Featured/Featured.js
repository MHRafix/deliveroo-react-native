import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import sanityClient from '../../sanity';
import ResturantCard from './ResturantCard';

const Featured = ({ id, title, description, featuredCategory }) => {
	const [resturants, setResturants] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`
		*[_type == "featured" && _id == $id]{
			...,
			resturants[] -> {
				...,
				dishes[] ->,
				type-> {
					name
				}
			},
		}[0]
		`,
				{ id }
			)
			.then((data) => setResturants(data?.resturants));
	}, []);

	return (
		<View>
			<View className='mt-4 flex-row items-center justify-between px-4'>
				<Text className='font-bold text-lg'>{title}</Text>
				<AntDesign name='arrowright' size={24} color='#00BBCC' />
			</View>
			<Text className='text-xs text-gray-500 px-4'>{description}</Text>

			<ScrollView
				horizontal
				contentContainerStyle={{
					paddingHorizontal: 15,
				}}
				showsHorizontalScrollIndicator={false}
				className='pt-4'
			>
				{/* Resturant card */}
				{resturants?.map((resturant, i) => (
					<ResturantCard
						key={i}
						id={resturant._id}
						imgUrl={resturant.image}
						title={resturant.name}
						rating={resturant.name}
						genre={resturant.genre}
						address={resturant.address}
						short_description={resturant.short_description}
						dishes={resturant.dishes}
						leng={resturant.long}
						lat={resturant.lat}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default Featured;

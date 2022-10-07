import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { TailwindProvider } from 'tailwindcss-react-native';
import { store } from './redux/store';
import BasketScreen from './screens/BasketScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import HomeScreen from './screens/HomeScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import ResturantScreen from './screens/ResturantScreen';

// stack define here
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<TailwindProvider>
					<Stack.Navigator>
						<Stack.Screen name='Home' component={HomeScreen} />
						<Stack.Screen name='Resturant' component={ResturantScreen} />
						<Stack.Screen
							name='Basket'
							component={BasketScreen}
							options={{ presentation: 'modal', headerShown: false }}
						/>
						<Stack.Screen
							name='PreparingOrder'
							component={PreparingOrderScreen}
							options={{ presentation: 'fullScreenModal', headerShown: false }}
						/>

						<Stack.Screen
							name='Delivery'
							component={DeliveryScreen}
							options={{ presentation: 'fullScreenModal', headerShown: false }}
						/>
					</Stack.Navigator>
				</TailwindProvider>
			</Provider>
		</NavigationContainer>
	);
}

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';

// stack define here
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<TailwindProvider>
				<Stack.Navigator>
					<Stack.Screen name='Home' component={HomeScreen} />
					<Stack.Screen name='Resturant' component={ResturantScreen} />
				</Stack.Navigator>
			</TailwindProvider>
		</NavigationContainer>
	);
}

import { ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font'
import TabNavigator from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';


export default function App() {

  const [fontLoaded] = useFonts({
    'EBGaramond-Bold': require('./assets/fonts/EBGaramond-Bold.ttf'),
    'Alegreya-Regular': require('./assets/fonts/EBGaramond-Regular.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  return (
    <Provider store={store}>
      <TabNavigator />
      </Provider>
  );
}

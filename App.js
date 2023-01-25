import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCategoryPage from './Pages/AddCategoryPage';
import NotesPage from './Pages/NotesPage';
import HomePage from './Pages/HomePage';
import AddNotePage from './Pages/AddNotePage';
import ViewNotePage from './Pages/ViewNotePage';
import FCGlobalComp from './Functional Comps/FCGlobalComp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FCGlobalComp>
      <NavigationContainer style={styles.container} >
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Add Category" component={AddCategoryPage} />
          <Stack.Screen name="Notes" component={NotesPage} />
          <Stack.Screen name="Add Note" component={AddNotePage} />
          <Stack.Screen name="View Note" component={ViewNotePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </FCGlobalComp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03001C',
    alignItems: 'center',
    justifyContent: 'center',
  },

});



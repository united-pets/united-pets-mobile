import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import founPet from '../Components/FoundPet'
import Home from  '../Components/HomePage'
import addLostPet from '../Components/foundPets'
import Profile from '../Components/profile'
import Posts  from '../Components/Posts';
// import Login from '../Components/login';
const Tab = createBottomTabNavigator();
const FoundName='found'
export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"foundPet"} component={Posts} />
      <Tab.Screen name={"home"} component={Home} />
      <Tab.Screen name={"add lost pet"} component={addLostPet} />
      <Tab.Screen name={"profile"} component={Profile} />
    </Tab.Navigator>

  );
}

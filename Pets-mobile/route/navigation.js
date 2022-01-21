import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import  HomePage  from '../Components/HomePage';
import Login from '../Components/Login';
import SignUp from '../Components/signup';
import GetIteml from '../Components/GetIteml'
import Cameracomp from '../Components/Cameracomp';
import FoundPet from '../Components/FoundPet'
import Mytabs from './buttomTab'
import Updateprofile from "../Components/updateProfile";
import PetService from '../Components/PetService';
import PetsSetting from '../Components/PetsSetting';
import PetsWalker from '../Components/PetsWalker';
import Grooming from "../Components/Grooming";
const Screens = {
  Home: {
    screen: HomePage,
  },
  login: {
    screen: Login,
  },
  signUp: {
    screen: SignUp,
  },
  posts: {
    screen: GetIteml,
  },
  camera: {
    screen: Cameracomp,
  },
  founPet: {
    screen: FoundPet,
  },
  petService: {
    screen: PetService,
  },
  petsWalker: {
    screen: PetsWalker,
  },
  grooming: {
    screen: Grooming,
  },
  PetsSetting: {
    screen: PetsSetting,
  },
  buttomTab: {
    screen: Mytabs,
  },
};




const HomeStack = createStackNavigator(Screens)
export default createAppContainer(HomeStack)
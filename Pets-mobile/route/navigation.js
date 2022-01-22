import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import  HomePage  from '../Components/HomePage';
import Login from '../Components/login';
import SignUp from '../Components/signup';
import GetIteml from '../Components/GetIteml'
import Cameracomp from '../Components/Cameracomp';
import FoundPet from '../Components/FoundPet'
import Mytabs from './buttomTab'
import Updateprofile from "../Components/updateProfile";
const Screens={
    home:{
        screen : HomePage
    },
    login:{
        screen : Login
    },
signUp:{
    screen : SignUp 
},
posts:{
    screen : GetIteml
},
camera:{
    screen : Cameracomp 
},
founPet:{
    screen : FoundPet
},
buttomTab:{
    screen:Mytabs
},

}




const HomeStack = createStackNavigator(Screens)
export default createAppContainer(HomeStack)
import {NavigationContainer} from "@react-navigation/native";
import Home from "./Pages/Home";
import OneTapScore from "./Pages/OneTapScore";
import CampaignOverview from "./Pages/CampaignOverview";
import AdReview from "./Pages/AdReview";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={Home} />
        <Stack.Screen name = "OneTapScore" component={OneTapScore} />
        <Stack.Screen name = "CampaignOverview" component={CampaignOverview} />
        <Stack.Screen name = "AdReview" component={AdReview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
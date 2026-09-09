import {GestureHandlerRootView} from "react-native-gesture-handler";
import * as SplashScreen from 'expo-splash-screen';
import {Stack} from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </GestureHandlerRootView>
    );
};
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {NavigatorScreenParams} from '@react-navigation/native';

import type {CompositeScreenProps} from '@react-navigation/native';
// import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {StackScreenProps} from '@react-navigation/stack';
import {createNavigationContainerRef} from '@react-navigation/native';
import {useNavigationContainerRef} from '@react-navigation/native';
import type {StackNavigationOptions} from '@react-navigation/stack';
import type {NavigationContainerRef} from '@react-navigation/native';
import PopularScreen from './Components/PopularScreen';

const RootStack = createStackNavigator<RootStackParamList>();

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;

// type ProfileScreenRouteProp = Props['route'];
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};

// type TabParamList = {
//   Home: NavigatorScreenParams<StackParamList>;
//   Profile: {userId: string};
// };

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// type ProfileScreenProps = CompositeScreenProps<
//   BottomTabScreenProps<TabParamList, 'Profile'>,
//   StackScreenProps<StackParamList>
// >;

// type ProfileScreenProps = CompositeScreenProps<
//   BottomTabScreenProps<TabParamList, 'Profile'>,
//   CompositeScreenProps<
//     StackScreenProps<StackParamList>,
//     DrawerScreenProps<DrawerParamList>
//   >
// >;

type Props = NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;

function ProfileScreen({route, navigation}: Props) {
  const options: StackNavigationOptions = {
    headerShown: false,
  };
  // const navigationRef = createNavigationContainerRef<RootStackParamList>();
  // const navigationRef = useNavigationContainerRef<RootStackParamList>();

  const navigationRef =
    React.useRef<NavigationContainerRef<RootStackParamList>>(null);

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Profile">
        <RootStack.Screen name="Home" component={PopularScreen} />
        <RootStack.Screen
          name="Profile"
          component={PopularScreen}
          // initialParams={{userId: user.id}}
        />
        <RootStack.Screen name="Feed" component={PopularScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default ProfileScreen;

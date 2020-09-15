import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';


//@ts-ignore
type MainRoutePropType<T> = RouteProp<RootStackParamList, T>;
//@ts-ignore
type MainNavigationProp<T> = StackNavigationProp<RootStackParamList, T>;

export interface RouterPropType<T> {
    route?: MainRoutePropType<T>
    navigation?: MainNavigationProp<T>
}
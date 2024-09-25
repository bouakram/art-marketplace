import { View, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, FlatList, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import { styled } from 'nativewind';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const StyledView = styled(View)
export const StyledText = styled(Text)
export const StyledBtnOpacity = styled(TouchableOpacity)
export const StyledInput = styled(TextInput)
export const StyledViewFeedback = styled(TouchableWithoutFeedback)
export const StyledFlatList = styled(FlatList)
export const StyledImage = styled(Image)
export const StyledIonicIcons = styled(Ionicons)
export const StyledBS = styled(BottomSheet)
export const StyledGestureHandlerRootView = styled(GestureHandlerRootView)
import { SafeAreaView } from 'react-native';
import { StyledView } from "../components/rn-styled-component/WindComponents"

/** components import */
import BackgroundVideo from '@/components/authentication/video-background/background-video.component';
import ScreenInfo from '@/components/authentication/screen-info/screen-info.component';
import BottomSheetComponent from '@/components/authentication/auth-buttom-sheet/bottom-sheet/bottom-sheet.component';
import BottomSheetProvider from '@/contexts/bottom-sheet-context/bottomSheet.context';

export default function VideoScreen() {
  return (
    <BottomSheetProvider>
      <StyledView className="flex-1">
        <SafeAreaView />
        <StyledView className="absolute top-0 left-0 w-full h-full bg-black/40 z-[-1]" />
        <BackgroundVideo />
        <ScreenInfo />
        <BottomSheetComponent />
      </StyledView>
    </BottomSheetProvider>
  );
}
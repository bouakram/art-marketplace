import { useVideoPlayer, VideoView } from 'expo-video';
import { useRef } from 'react';
import { Dimensions, View } from 'react-native';
import { styled } from 'nativewind';

const videoSource = '../../../assets/video/bg-video.mp4';

const StyledView = styled(View);


export default function BackgroundVideo() {
    const ref = useRef(null);
    const player = useVideoPlayer(require(videoSource), player => {
        player.loop = true;
        player.play();
    });

    return (
        <View
            pointerEvents='none'
            style={{
                position: "absolute",
                zIndex: -10,
            }}
        >
            <VideoView
                player={player}
                ref={ref}
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}
                contentFit="cover"
            />
        </View>
    );
}
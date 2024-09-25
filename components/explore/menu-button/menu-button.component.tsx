import { StyledAnimatePresence, StyledMotiView } from '@/components/moti-styled-component/MotiWindComponent'
import { StyledBtnOpacity, StyledIonicIcons, StyledText, StyledView, StyledViewFeedback } from '@/components/rn-styled-component/WindComponents'
import { useEffect, useState } from 'react'

function MenuButton() {
    const [visible, setVisible] = useState<boolean>(false)
    const [menuItemsVisible, setMenuItemsVisible] = useState<boolean>(false)
    const handleDisplayMenuItems = () => {
        setMenuItemsVisible(!menuItemsVisible)
    }
    useEffect(() => {
        setTimeout(() => {
            setVisible(!visible)
        }, 1000);
    }, [])
    return (
        <>
            {visible &&
                <StyledMotiView
                    className='absolute bottom-8 self-center p-4 rounded-full bg-zinc-800 z-10 shadow-zinc-800 shadow-lg'
                    from={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        opacity: { type: 'timing', duration: 500 },
                    }}
                >
                    <StyledBtnOpacity
                        onPress={handleDisplayMenuItems}
                    >
                        <StyledView
                            className='flex flex-row self-center gap-2'
                        >
                            <StyledIonicIcons
                                name="apps-sharp"
                                size={24}
                                className='text-zinc-50 self-center'
                            />
                            <StyledText
                                className='text-lg font-bold text-zinc-50'
                            >
                                Menu
                            </StyledText>
                        </StyledView>
                    </StyledBtnOpacity>
                </StyledMotiView>
            }
            <StyledAnimatePresence >
                {menuItemsVisible && <StyledMotiView
                    className='absolute bottom-8 self-center p-4 rounded-full bg-zinc-800 z-0 '
                    from={{ translateX: 0, translateY: 0 }}
                    animate={{ translateX: 120, translateY: -80 }}
                    exit={{ translateX: 0, translateY: 0 }}
                    transition={{
                        translateX: { type: 'timing', duration: 300, delay: 300 },
                        translateY: { type: 'timing', duration: 300 }
                    }}
                    exitTransition={{
                        translateX: { type: 'timing', duration: 300 },
                        translateY: { type: 'timing', duration: 300, delay: 300 }
                    }}
                >
                    <StyledIonicIcons name='settings' size={24} className='text-zinc-50 self-center' />
                </StyledMotiView>}
            </StyledAnimatePresence>
            <StyledAnimatePresence >
                {menuItemsVisible && <StyledMotiView
                    className='absolute bottom-8 self-center p-4 rounded-full bg-zinc-800 z-0 '
                    from={{ translateX: 0, translateY: 0 }}
                    animate={{ translateX: 40, translateY: -80 }}
                    exit={{ translateX: 0, translateY: 0 }}
                    transition={{
                        translateX: { type: 'timing', duration: 300, delay: 300 },
                        translateY: { type: 'timing', duration: 300 }
                    }}
                    exitTransition={{
                        translateX: { type: 'timing', duration: 300 },
                        translateY: { type: 'timing', duration: 300, delay: 300 }
                    }}
                >
                    <StyledIonicIcons name='person' size={24} className='text-zinc-50 self-center' />
                </StyledMotiView>}
            </StyledAnimatePresence>
            <StyledAnimatePresence >
                {menuItemsVisible && <StyledMotiView
                    className='absolute bottom-8 self-center p-4 rounded-full bg-zinc-800 z-0 '
                    from={{ translateX: 0, translateY: 0 }}
                    animate={{ translateX: -40, translateY: -80 }}
                    exit={{ translateX: 0, translateY: 0 }}
                    transition={{
                        translateX: { type: 'timing', duration: 300, delay: 300 },
                        translateY: { type: 'timing', duration: 300 }
                    }}
                    exitTransition={{
                        translateX: { type: 'timing', duration: 300 },
                        translateY: { type: 'timing', duration: 300, delay: 300 }
                    }}
                >
                    <StyledIonicIcons name='cart' size={24} className='text-zinc-50 self-center' />
                </StyledMotiView>}
            </StyledAnimatePresence>
            <StyledAnimatePresence >
                {menuItemsVisible && <StyledMotiView
                    className='absolute bottom-8 self-center p-4 rounded-full bg-zinc-800 z-0 '
                    from={{ translateX: 0, translateY: 0 }}
                    animate={{ translateX: -120, translateY: -80 }}
                    exit={{ translateX: 0, translateY: 0 }}
                    transition={{
                        translateX: { type: 'timing', duration: 300, delay: 300 },
                        translateY: { type: 'timing', duration: 300 }
                    }}
                    exitTransition={{
                        translateX: { type: 'timing', duration: 300 },
                        translateY: { type: 'timing', duration: 300, delay: 300 }
                    }}
                >
                    <StyledIonicIcons name='heart-sharp' size={24} className='text-zinc-50 self-center' />
                </StyledMotiView>}
            </StyledAnimatePresence>
        </>
    )
}

export default MenuButton
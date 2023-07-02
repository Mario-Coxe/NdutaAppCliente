export const handleEditPerfil = (navigation, setIsBottomSheetVisible) => {
    navigation.navigate('UpdatePerfil');
    setIsBottomSheetVisible(false);
};

export const handleChat = (navigation, setIsBottomSheetVisible) => {
    navigation.navigate('Chat');
    setIsBottomSheetVisible(false);
};

export const handleHistorico = (navigation, setIsBottomSheetVisible) => {
    navigation.navigate('History');
    setIsBottomSheetVisible(false);
};

export const handleCloseAccount = (navigation, setIsBottomSheetVisible) => {
    navigation.navigate('CloseAccount');
    setIsBottomSheetVisible(false);
};

export const handleVoltarHome = (navigation) => {
    navigation.navigate('Home');
}

export const handleConfiguracao = (navegation, setIsBottomSheetVisible) => {
    navegation.navigate('Configuracao')
    setIsBottomSheetVisible(false);
}

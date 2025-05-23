declare global {
    interface Window {
        backend: {
            minimizeToSystemTray: () => void;
            minimizeApp: () => void;
            closeApp: () => void;
            openMiniplayer: () => void;
            closeMiniplayer: () => void;
        }
    }
}

export { };

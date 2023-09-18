const themes = {
    light: {
        bodyBackground: '#e6e6e6',
        containerBackground: '#ffffff',
        text: 'black',
    },

    dark: {
        bodyBackground: 'black',
        containerBackground: '#44444',
        text: 'white',
    }
};

function setTheme(newTheme) {
    const themeColors = themes[newTheme];

    Object.keys(themeColors).map(function (key) { html.style.setProperty(`--${key}`, themeColors[key]); });
}


(() => {
    let allCookies;

    try {
        allCookies = document.cookie;
    } catch (e) {
        allCookies = '';
    }

    let LightThemeHref = 'https://aker-h.github.io/myLib/css/rootTwitterLight.css',
        DarkBlueThemeHref = 'https://aker-h.github.io/myLib/css/rootTwitterDarkBlue.css';

    let rootCss = document.getElementById('rootCss')

    if (allCookies === '') {
        rootCss.href = LightThemeHref;
        document.cookie = 'themeFlag: light';
        return;
    } else if (allCookies !== '') {
        let cookies = allCookies.split('; ');
        let themeFlag = cookies.find((row) => {row.startsWith('themeFlag')})
                               .split('=')[1];
        
        if (themeFlag === undefined || themeFlag === 'light') {
            rootCss.href = LightThemeHref;
        } else if (themeFlag === 'darkBlue') {
            rootCss.href = DarkBlueThemeHref;
        }
        return;
    }
})();

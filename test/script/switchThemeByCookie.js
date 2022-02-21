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
        document.cookie = 'themeFlag=light';
        return;
    } else if (allCookies !== '') {
        let cookies = allCookies.split('; ');
        let themeFlag = cookies.find((row) => {row.startsWith('themeFlag')});
        let value;
        try {
            value = themeFlag.splut('=')[1];
        } catch (e) {
            value = '';
        }
        
        if (value === '' || value === 'light') {
            rootCss.href = LightThemeHref;
        } else if (value === 'darkBlue') {
            rootCss.href = DarkBlueThemeHref;
        }
        return;
    }
})();

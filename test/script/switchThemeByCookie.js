(() => {
    let debug = true;

    let allCookies;

    try {
        allCookies = `${document.cookie}`;
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
        if (debug) {
            console.log(allCookies);
        }
        let cookies = allCookies.split('; ');
        if (debug) {
            console.log(cookies);
        }
        let themeFlag = cookies.find((row) => {row.startsWith('themeFlag')});
        if (debug) {
            console.log(themeFlag);
        }
        let value;
        
        if (debug) {
            console.log(value);
        }

        try {
            value = themeFlag.splut('=')[1];
        } catch (e) {
            value = '';
        }
        
        console.log(value);

        if (value === '' || value === 'light') {
            rootCss.href = LightThemeHref;
        } else if (value === 'darkBlue') {
            rootCss.href = DarkBlueThemeHref;
        }
        return;
    }
})();

(() => {
    let cookie = new Cookie (true);
    let themeFlag = cookie.pull('themeFlag');

    let rootCss = document.getElementById('rootCss')

    if (themeFlag === 'darkBlue') {
        rootCss.href = DarkBlueThemeHref;
    } else {        
        rootCss.href = LightThemeHref;
        if (themeFlag !== 'light') {
            cookie.set('themeFlag', 'light');
        }
    }
})();

(() => {
    let cookie = new Cookie (true);
    let themeFlag = cookie.pull('themeFlag');

    let LightThemeHref = 'https://aker-h.github.io/myLib/css/rootTwitterLight.css',
        DarkBlueThemeHref = 'https://aker-h.github.io/myLib/css/rootTwitterDarkBlue.css';

    let rootCss = document.getElementById('rootCss')

    if (themeFlag === 'darkBlue') {
        rootCss.href = DarkBlueThemeHref;
    } else {
        rootCss.href = LightThemeHref;
    }
})();

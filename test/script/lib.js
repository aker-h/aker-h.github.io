function applyClickListener () {
    console.log(document.cookie);

    $('#testButton').on('click', () => {
        let allCookies = `${document.cookie}`;

        let themeFlag = allCookies.split('; ').find ((row) => {
                                                row.startsWith('themeFlag')}
                                             )
                                       .split('=')[1];

        let LightThemeHref = 'https://aker-h.github.io/myLib/css/rootTwitterLight.css',
            DarkBlueThemeHref = 'https://aker-h.github.io/myLib/css/rootTwitterDarkBlue.css';

        let rootCss = document.getElementById('rootCss');

        switch (themeFlag) {
            case 'light': {
                rootCss.href = DarkBlueThemeHref;
                document.cookie = 'themeFlag: darkBlue';
                break;
            }
            case "darkBlue": {
                rootCss.href = LightThemeHref;
                document.cookie = 'themeFlag: light';
                break;
            }
        }
    });
};

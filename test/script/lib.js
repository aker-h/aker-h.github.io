function applyClickListener () {
    console.log(document.cookie);

    $('#testButton').on('click', () => {
        let debug = true;

        let allCookies = `${document.cookie}`;
        let cookies = allCookies.split('; ');
        if (debug) {
            console.log(cookies);
        }
        let themeFlag = cookies.find((row) => {
            let strRow = `${row}`;
            if (strRow.indexOf('themeFlag') !== -1) {
                return true;
            } else {
                return false;
            }
        });
        if (debug) {
            console.log(themeFlag);
        }
        let value;

        try {
            value = themeFlag.split('=')[1];
        } catch (e) {
            value = '';
        }

        if (debug) {
            console.log(value);
        }

        let LightThemeHref = 'https://aker-h.github.io/myLib/css/rootTwitterLight.css',
            DarkBlueThemeHref = 'https://aker-h.github.io/myLib/css/rootTwitterDarkBlue.css';

        let rootCss = document.getElementById('rootCss');

        switch (themeFlag) {
            case 'light': {
                rootCss.href = DarkBlueThemeHref;
                document.cookie = 'themeFlag=darkBlue';
                break;
            }
            case "darkBlue": {
                rootCss.href = LightThemeHref;
                document.cookie = 'themeFlag=light';
                break;
            }
        }
    });
};

class Cookie {
    constructor (debug = false) {
        this.initialize(debug);
    };

    initialize (debug = false) {
        this.fullValue = `${document.cookie}`;
        this.values = this.fullValue.split('; ');

        if (debug) {
            console.log(this.values);
        }
    }

    pull (key = '') {
        if (key === '') {
            return undefined;
        }

        let data = this.values.find((data) => {data.indexOf(key) === 0});
        let values = data.split('=');

        if (values.length = 2) {
            return values[1];
        } else {
            return undefined;
        }
    }

    set (key, value, path = '', domain = '', expire, secure= 'secure') {
        if (key === undefined) {
            throw new Error ('Key must have an argment.');
        }

        if (secure !== 'secure') {
            throw new Error ('Secure can not have other than "sercure"');
        }

        let setString = `${key}=${value}; `;

        if ((typeof path) === 'string' && path !== '') {
            setString += `path=${path}; `;
        }

        if ((typeof domain) === 'string' && domain !== '') {
            setString += `domain=${domain}; `;
        }

        let date = new Date(expire);

        if (date.toString() !== 'Invalid Date') {
            setString += `expire=${date.toString()}; `;
        } else if (!isNaN(expire)) {
            setString += `max-age=${Number(expire)}; `;
        }

        setString += 'secure; ';

        domain.cookie = setString;
    }
}

function applyClickListener () {
    console.log(document.cookie);

    $('#testButton').on('click', () => {
        let debug = true;

        let allCookies = `${document.cookie}`;
        let cookies = allCookies.split('; ');
        if (debug) {
            console.log(cookies);
        }
        // let themeFlag = cookies.find((row) => {
        //     let strRow = `${row}`;
        //     if (strRow.indexOf('themeFlag') !== -1) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // });
        // if (debug) {
        //     console.log(themeFlag);
        // }
        // let value;

        // try {
        //     value = themeFlag.split('=')[1];
        // } catch (e) {
        //     value = '';
        // }

        // if (debug) {
        //     console.log(value);
        // }

        let cookie = new Cookie(true);
        let themeFlag = cookie.pull('themeFlag');

        let LightThemeHref = 'https://aker-h.github.io/myLib/css/rootTwitterLight.css',
            DarkBlueThemeHref = 'https://aker-h.github.io/myLib/css/rootTwitterDarkBlue.css';

        let rootCss = document.getElementById('rootCss');

        switch (themeFlag) {
            case 'light': {
                rootCss.href = DarkBlueThemeHref;
                cookie.set('themeFlag', 'darkBlue', '', '', (60 * 60 * 24 * 7), 'secure');
                // document.cookie = 'themeFlag=darkBlue; secure';
                break;
            }
            case "darkBlue": {
                rootCss.href = LightThemeHref;
                cookie.set('themeFlag', 'light', '', '', (60 * 60 * 24 * 7), 'secure');
                // document.cookie = 'themeFlag=light; secure';
                break;
            }
        }
    });
};

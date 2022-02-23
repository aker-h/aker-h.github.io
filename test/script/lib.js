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
        let debug = false;
        
        if (key === '') {
            return undefined;
        }

        let data = this.values.find((d) => {
            if (debug) {
                console.log(`key: ${key}\nd  : ${d}`);
            }
            if (d.indexOf(key) === 0) {
                return true;
            } else {
                return false;
            }            
        });
        
        if (debug) {
            console.log(data);
        }

        let values;

        try {
            values = data.split('=');
        } catch (e) {
            return undefined;
        }        

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

        document.cookie = setString;
        this.initialize();
    }
}

let LightThemeHref = 'https://aker-h.github.io/myLib/css/rootTwitterLight.css',
    DarkBlueThemeHref = 'https://aker-h.github.io/myLib/css/rootTwitterDarkBlue.css';

function applyClickListener () {
    console.log(document.cookie);

    $('#testButton').on('click', () => {
        let cookie = new Cookie();
        let themeFlag = cookie.pull('themeFlag');

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

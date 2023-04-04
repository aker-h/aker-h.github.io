'use-strict';

((d) => {
    const createLink = (fileName) => {
        const link = d.createElement('link');
        link.rel  = 'stylesheet';
        link.href = `https://aker-h.github.io/css/twitter/${fileName}.css`;
        return link;
    };

    d.head.appendChild(createLink('color'));
    d.head.appendChild(createLink('theme'));

    const color = new class Color {
        constructor () {
            this._LIGHT_BLUE = 'light-blue';
            this._LIGHT_GREEN = 'light-green';
            this._ORANGE = 'orange';
            this._PINK = 'pink';
            this._PURPLE = 'purple';
            this._YELLOW = 'yellow';
            this._COLORS = [
                this._LIGHT_BLUE,
                this._LIGHT_GREEN,
                this._ORANGE,
                this._PINK,
                this._PURPLE,
                this._YELLOW
            ]
        }

        _clear () {
            this._COLORS.map((COLOR) => {
                d.body.classList.remove(COLOR)
            });
        }

        debug () {
            let str = '';

            this._COLORS.map((COLOR) => {
                str += `${COLOR}\n`;
            });

            console.log(str);
        }

        lightBlue () {
            this._clear();
            d.body.classList.add(this._LIGHT_BLUE);
        }

        lightGreen () {
            this._clear();
            d.body.classList.add(this._LIGHT_GREEN);
        }

        orange () {
            this._clear();
            d.body.classList.add(this._ORANGE);
        }

        pink () {
            this._clear();
            d.body.classList.add(this._PINK);
        }

        purple () {
            this._clear();
            d.body.classList.add(this._PURPLE);
        }

        yellow () {
            this._clear();
            d.body.classList.add(this._YELLOW);
        }
    }

    const theme = new class Theme {
        constructor () {
            this._BLACK = 'black';
            this._DARK_BLUE = 'dark-blue';
            this._LIGHT = 'light';
            this._THEMES = [
                this._BLACK,
                this._DARK_BLUE,
                this._LIGHT
            ]
        }

        _clear () {
            this._THEMES.map((THEME) => {
                d.body.classList.remove(THEME);
            });
        }

        debug () {
            let str = '';

            this._THEMES.map((THEME) => {
                str += `${THEME}\n`;
            });

            console.log(str);
        }

        black () {
            this._clear();
            d.body.classList.add(this._BLACK);
        }

        darkBlue () {
            this._clear();
            d.body.classList.add(this._DARK_BLUE);
        }

        light () {
            this._clear();
            d.body.classList.add(this._LIGHT);
        }
    }

    const asset = new class Asett {
        constructor () {
            this._link = createLink('asset');
        }

        install () {
            d.head.appendChild(this._link);
        }
    }

    window.exApi = {};
    
    window.exApi.color = color;
    window.exApi.theme = theme;
    window.exApi.asset = asset;
})(document);
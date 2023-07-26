/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter']
            },
            colors: {
                beague: '#ECE5D5',
                lightBeague: '#F9E5BF',
                primary: '#EED2A1',
                secondary: '#4F5D64',
                art: '#EED3A3',
                skyblue: '#C6D4D9',
                darkGray: '#4F5D64',
                lightGray: '#828C90',
                moving: 'rgba(255, 255, 255, 0.25)',
                invalid: '#FF9797',
                modal: '#475154'
            },
            backgroundImage: {
                cell: 'linear-gradient(225deg, #EFE6D6 0%, #E9E0CF 100%)',
                cellsBorder: 'linear-gradient(223deg, #FEFCF4 0%, #D1C4B3 100%)',
                gradientBlue: 'linear-gradient(90deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.06) 18.75%, rgba(0, 0, 0, 0.00) 49.71%, rgba(0, 0, 0, 0.04) 82.81%, rgba(0, 0, 0, 0.20) 100%), #C6D4D9',
                gradientOrange: 'linear-gradient(90deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.06) 18.75%, rgba(0, 0, 0, 0.00) 49.71%, rgba(0, 0, 0, 0.04) 82.81%, rgba(0, 0, 0, 0.20) 100%), #E9B98B',
                circleActive: 'linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%), #F9E5BF',
                modal: 'radial-gradient(50% 50.00% at 50% 50.00%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.30) 100%)'
            },
            boxShadow: {
                btn: '-4px 4px 5px 0px rgba(0, 0, 0, 0.35)',
                circleBorder: '-5px 0px 4px 0px #FDF5DA inset, 4px 0px 2px 3px #F8D19F inset, 0px 2px 4px rgba(0, 0, 0, 0.75), -10px 15px 20px rgba(0, 0, 0, 0.65)',
                circle: '5px -6px 4px 0px #FDF5DA inset, -2px 3px 4px 3px #F8D19F inset',
                boardCell: '5px -5px 2px 2px rgba(0, 0, 0, 0.45) inset, -2px 2px 2px 4px rgba(155, 164, 167, 0.40) inset',
                board: '-32px 44px 60px 0px rgba(15, 12, 36, 0.35), -8px 15px 20px 0px rgba(0, 0, 0, 0.65), -4px 4px 4px 4px rgba(155, 164, 167, 0.40) inset, 2px -2px 4px 6px rgba(0, 0, 0, 0.45) inset, 31px -34px 60px 0px rgba(15, 12, 36, 0.8) inset;',
                cells: '-3px 3px 3px 0px rgba(255, 255, 255, 0.60) inset, 2px -2px 2px 0px rgba(0, 0, 0, 0.25) inset, -4px 4px 20px 7px rgba(0, 0, 0, 0.60)',
                cell: '-6px 6px 4px 0px rgba(251, 250, 239, 0.90) inset, 6px -6px 4px 0px rgba(173, 160, 142, 0.80) inset, 2px -2px 1px 0px rgba(129, 113, 99, 0.40) inset',
                scoreDefault: '6px -6px 7px 1px rgba(251, 250, 239, 0.90) inset, -6px 6px 20px 2px rgba(173, 160, 142, 0.80) inset, -2px 2px 1px 0px rgba(129, 113, 99, 0.40) inset'
            }
        },
    },
    plugins: [],
}


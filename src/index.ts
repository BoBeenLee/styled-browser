import { css } from 'styled-components';
import * as bowser from 'bowser';

const browserType = {
    ie: () => false,
    firefox: () => true,
    safari: () => true,
    chrome: () => true,
    opera: () => true,
    webkit: () => true
    // ucbrowser: 'ucbrowser',
};

const browser = Object.keys(browserType).reduce((accumulator, label) => {
    const isBrowser = browserType[label];
    accumulator[label] = (...args) => css`
     ${ isBrowser() ? css.apply(null, args) : ''}
    `;
    return accumulator;
}, {});


console.log(browser.ie`
    helloworld;
`);

export {
    browser,
    browserType
}
# styled-browser



## Usage

```javascript
import styled from 'styled-components';
import browser from 'styled-browser';

const Button = styled.button`
  ${ browser.chrome`
    color: red;
  ` }
  ${ browser.ie8`
    color: blue;
  ` }
  ${ browser.firefox`
    color: green;
  ` }
`;
```

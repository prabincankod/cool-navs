![Logo](./logo.png)

A react component for creating curved material like header (specially for React PWA).

## Installation

#### Install cool-navs using npm

```bash
  npm i cool-navs
```

#### or using yarn package manager

```bash
yarn install cool-navs
```

## Usage/Examples

```javascript
//using es6
import Header from "cool-navs";

function App() {
  return <Header headerName="curved nav" />;
}
export default App;
```

## Props

|    props     |     Default      |              Description               |
| :----------: | :--------------: | :------------------------------------: |
|  headerName  |    Cool Navs     |      defines title of the Header       |
|  textColor   |      black       |  defines color of text of the Header   |
| headerRadius | 1.875rem 1.25rem | defines the curve radius of the Header |
|   bgColor    |    turquoise     | defines background color of the Header |
| headerHeight |     12px 0px     |            defines padding             |
|   textSize   |       20px       |     defines fontsize of the Header     |

## Authors

- [Prabin Subedi](https://www.github.com/prabincankod)

## DropDown Component

A react component to display components according to a value selected.

## Installation

```bash
  yarn add @y2z/dropdown-components
```

## Usage

```javascript
  import DropDown from 'component-drop-down';
  import Selection from './Selection';

  class Example {

    render() {

      return (
        <DropDown
          style={{ width: '100%' }}
          data={[ { title: 'Selection', component: <Selection />}]}
          optionHeader="-- select sorting algorithm --"
          componentStyle={{}}
        />
      )
    }
  }

```

## Parameters

 - style: style object for the select element
 - data: An array of object containing title (string ) and the component to render
 - optionHeader: the default option in a select if not provided will be empty
 - componentStyle: style object for the component container

## Output

<img width="979" alt="screen shot 2019-02-27 at 12 31 49 pm" src="https://user-images.githubusercontent.com/12614476/53471096-b733c800-3a8b-11e9-9cea-588992bd13ad.png">



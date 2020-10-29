import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    Country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (Country) => {
    const data = await fetchData(Country);
    console.log(data)
    this.setState({ data, Country: Country });
  }

  render() {
    const { data, Country } = this.state;

    return (
      <div className={styles.container}>
         <img className={styles.image} src={image} alt="COVID-19" /> 
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} Country={Country} /> 
      </div>
    );
  }
}

export default App;
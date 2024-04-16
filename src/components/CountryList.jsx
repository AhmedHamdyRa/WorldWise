/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";
import Spinner from "./Sidebar";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (cities.legnth)
    return (
      <Message message={"Add your first city by cliking a city on the map"} />
    );

  //   const countries = [];
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
export default CountryList;

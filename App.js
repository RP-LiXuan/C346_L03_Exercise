import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './components/Movie'


class AllMovies extends React.Component {
    render() {
        return (
          <ScrollView>
              <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_color={"grey"}
              poster={require('./img/doctor-sleep.jpg')}/>
              <Movie title={"Midway"} year={2020} icon_name={"person-rifle"} icon_color={"green"}
                     poster={require('./img/midway.jpg')}/>
              <Movie title={"Sheep detective"} year={2026} icon_name={"magnifying-glass"} icon_color={"orange"}
                     poster={{uri: 'https://image.tmdb.org/t/p/original/e8IrWCKIQ3XSGt2RYB6xwFTFHLL.jpg'}}/>
          </ScrollView>
        );
    };
}

export default AllMovies;

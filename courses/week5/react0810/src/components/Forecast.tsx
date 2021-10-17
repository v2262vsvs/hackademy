import React, {FC, FunctionComponentElement, useState} from 'react';
import {LocationSearch} from "../weather/LocationSearch";
import {LocationTable} from "../weather/LocationTable";
import {Weather, WeatherLocation} from "../weather/Weather";
import {searchLocation} from "../weather/WeatherService";
import {ErrorAlert, WarningAlert} from "../weather/Alert";
import {WeatherSummary} from "../weather/WeatherSummaty";

type Props = {};
type State ={
  locations: WeatherLocation[],
  error: string ,
  warning: string ,
  currentLocation: WeatherLocation | null
}


class Forecast extends React.Component<Props,State>{
  constructor(props:Props ) {
    super(props);
    this.state = {
      locations:[],
      error: '' ,
      warning: '',
      currentLocation: null,

    };
  }
  
  
  
  
  

    //const [locations, setLocations] = useState<WeatherLocation[]>([]);
    //const [error, setError] = setState('');
    //const [warning, setWarning] = setState('');
    //const [currentLocation, setCurrentLocation] = setState<WeatherLocation | null>(null);
  
    resetAlerts = () => {
      this.setState({
        error:'',
        warning:''

      });
    }
  
    addLocation = async (term: string) => {
      const locations=this.state.locations;
      this.resetAlerts();
      const location = await searchLocation(term);
  
      if (!location) {
        this.setState({
          error:`No location found called '${term}'`,
        })
        //setError(`No location found called '${term}'`);
      } else if (locations.find(item => item.id === location.id)) {
        this.setState({
          warning:`Location '${term}' is already in the list.`,
        })
        
      } else {
        this.setState({
          locations:[location, ...locations] ,
        })
       
      }
    };
    setCurrentLocation(location:WeatherLocation){
      this.setState({
        currentLocation: location,
      });
    }

    render() {

      
      
    return (
        <div className="container">
            <h1>Weather by your city</h1>
            <LocationSearch onSearch={this.addLocation}/>
            <ErrorAlert message={this.state.error}/>
            <WarningAlert message={this.state.warning}/>
            <LocationTable locations={this.state.locations}
                           current={this.state.currentLocation}
                           onSelect={location => this.setCurrentLocation(location)}/>

            <WeatherSummary location={this.state.currentLocation}/>
        
        </div>

    );
    }
}
export default Forecast;
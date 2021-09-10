import React , {Component} from "react";
import CityForm from "./components/CityForm"
import CityList from "./components/CityList";
import axios from "axios";
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import CityMovie from "./components/CityMovie";
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      locationData:{},
      locationName:'',
      showMap:false,
      showAlert:false,
      errMessage:'',
      WeatherForcast:[],
      MoviesList:[]
    }
  }
  // handelLocationNameChange=(e)=>{
  //   this.setState({
  //     locationName:e.target.value
  //   })

  // } 
  //sham
  handelSubmit = async (e) => {

    e.preventDefault();
    try{
    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${e.target.city.value}&format=json`;
    
    const response = await axios.get(url);
       await this.setState({
      locationData: response.data[0],
      showMap:true,
      showAlert:false,
      errMessage:'',
    });
        const serverUrl=`${process.env.REACT_APP_SERVER_URL}/weather?lon=${this.state.locationData.lon}&lat=${this.state.locationData.lat}`;
      const serverResponse = await axios.get(serverUrl);

      const serverUrlMov=`${process.env.REACT_APP_SERVER_URL}/movies?query=${e.target.city.value}`;
      const serverResponseMov = await axios.get(serverUrlMov);

      this.setState({    
        WeatherForcast:serverResponse.data,
        MoviesList:serverResponseMov.data
      })
      console.log(this.state.MoviesList);
      
      
  } 
  catch(err) { 
    this.setState({
      showMap:false,
      showAlert:true,
      errMessage:err.message
    })}
  }
  

render(){
    return(
      <div>
        {
          this.state.showAlert &&
          <Alert  variant={'danger'}>
    {this.state.errMessage}
  </Alert>
        }
      <CityForm handelLocationNameChange={this.handelLocationNameChange} handelSubmit={this.handelSubmit}/>
       {
        this.state.showMap &&
      <CityList locationData={this.state.locationData} WeatherForcast={this.state.WeatherForcast} /> 
    }
    <CityMovie MoviesList={this.state.MoviesList}/>
     </div>
    )
  }
}
export default App;

//http://localhost:3002/movies?query=amman
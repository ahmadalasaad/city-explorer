import React , {Component} from "react";
import CityForm from "./components/CityForm"
import CityList from "./components/CityList";
import axios from "axios";
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      locationData:{},
      locationName:'',
      showMap:false,
      showAlert:false,
      errMessage:'',
      WeatherForcast:[]
    }
  }
  // handelLocationNameChange=(e)=>{
  //   this.setState({
  //     locationName:e.target.value
  //   })

  // }
  handelSubmit = async (e) => {

    e.preventDefault();
    try{
    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${e.target.city.value}&format=json`;
    
    const response = await axios.get(url);
     this.setState({
      locationData: response.data[0],
      showMap:true,
      showAlert:false,
      errMessage:'',
    });
    
        const serverUrl=`${process.env.REACT_APP_SERVER_URL}/weather?lon=${this.state.locationData.lon}&lat=${this.state.locationData.lat}`;
      const serverResponse = await axios.get(serverUrl);
      this.setState({    
        WeatherForcast:serverResponse.data
      })
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
    }       </div>
    )
  }
}
export default App;

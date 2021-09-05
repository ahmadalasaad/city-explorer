import React ,{Component} from "react";
class CityList extends Component {
  constructor(props){
    super(props);
    this.state={

    } 
  }
  renderlist=()=>{
    
      
        return(
        
        <div>
            <p>City: {this.props.locationData.display_name}</p>
            <p>lat: {this.props.locationData.lat}</p>
            <p>lon: {this.props.locationData.lon}</p>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.ee5214cb3e7ab28674fd4ba18e5902e3&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=5&size=600x600&format=png&maptype=roadmap&markers=icon:<icon>|${this.props.locationData.lat},${this.props.locationData.lon}&markers=icon:small-red-blank|${this.props.locationData.lat},${this.props.locationData.lon}`}/>
        </div>)
    
  }
  render(){
    return(
    this.renderlist()
    )
  }
}
export default CityList;
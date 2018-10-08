import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './Navigation';
import Fimage from './Face';
import 'tachyons';
import Logo from './Logo';
import ImageLinkForm from './ImageLinkForm';
import Rank from './Rank';
import Clarifai from 'clarifai';
import Signup from './signup';
import Register from'./register';

const app = new Clarifai.App({
 apiKey: '9b55de5bb744477f8f11b18336ced432'
});


const particleOptions={
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "white",
                      value_area:500
                    }
                    }
                  }
                }
              
class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      name:'',
      route:'signin',

  user :{
     id:'',
      name:'',
       email:'',
        password:' ',
         entries:0,
          joined:new Date()
  }
    }
  }

loadUser=(data)=>{
  this.setState({user :{
      id:data.id,
      name:data.name,
       email:data.email,
        password:data.password,
         entries:data.entries,
          joined:data.joined
  
  } 
   

  })

}

  calculateLocation =(data) =>{
  const ClarifaiFace= data.outputs[0].data.regions[0].data.face.identity.concepts[0].name;
 
  return ClarifaiFace;

}
 name=(box)=>{
  this.setState({name:box});
}
  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }
  
  onSubmit=()=>{
    this.setState({imageUrl:this.state.input})
       

  app.models.predict(
    "e466caa0619f444ab97497640cefc4dc", this.state.input)
    .then(response=>{
      if(response){
        fetch('http://localhost:3000/image',{
          method:'put',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            id:this.state.user.id
          })
        })
      }
      this.name(this.calculateLocation(response))
      console.log('click');
    
    })
     
  
}
 onRouteChange=(randomvar)=>{
  
    this.setState({route:randomvar});
  
 }

  render() {
    return (
      <div className="App">
     
         <Particles className='particles' params={particleOptions}/>    
            {
              this.state.route==='signin'
                ?

                  <Signup onRouteChange={this.onRouteChange}/>
                     :
                      (
                       this.state.route==='register'
                        ?<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                          :
                          <div>
                          <Navigation onRouteChange={this.onRouteChange}/>
                             <Logo/>
                                <ImageLinkForm onInputChange={this.onInputChange} 
                                   onSubmit={this.onSubmit}/>
                                     <Rank name={this.state.name}/>
                                         <Fimage imageUrl={this.state.imageUrl}/>
                         </div>
                          )
                        }
                      
                   </div>
                 );
               }
             }

export default App;

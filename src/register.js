import React from 'react';
class Register extends React.Component{
constructor(props){
   super(props);
   this.state ={
    email:'',
    password:'',
    name:''

   }
}


    onEmailChange =(event=>{
    this.setState({email:event.target.value})
    
   })
      onPasswordChange=(event=>{
    this.setState({password:event.target.value})
   })

   onNameChange=(event=>{
    this.setState({name:event.target.value})
   })

   onSubmit =()=>{
      fetch('http://localhost:3000/register',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
             email:this.state.email,
             password:this.state.password,
             name:this.state.name
        })
        
      }).then(response=>response.json()).
      then(user=>{
        
        
          //this.props.loadUser(user)
             console.log(this.state.name);
             this.props.onRouteChange('home');
        
      })
      this.props.onRouteChange('signin');
      
   }

  render(){
 const {onRouteChange} = this.props;


      return(
    <article className="br3 pa4  mw6 shadow-1 center ">
  <form action="sign-up_submit" method="get" accept-charset="utf-8">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <p   className="ph0 mh0 fw6 f1 " style={{color:'white'}}>Register</p>
      <div class="mt3">
        <label class="db fw4 lh-copy f6" for="email-address">Name</label>
        <input onChange={this.onNameChange}
        className=" pa2 input-reset ba bg-transparent hover-bg-white w-100 measure" type="name" name="name"  id="name"/>
      </div>
       <div class="mt3">
        <label class="db fw4 lh-copy f6" for="email-address">Email</label>
        <input  onChange={this.onEmailChange}
         className=" pa2 input-reset ba bg-transparent hover-bg-white w-100 measure" type="email" name="email"  id="email"/>
      </div>
      <div class="mt3">
        <label class="db fw4 lh-copy f6" for="password">Password</label>
        <input  onChange={ this.onPasswordChange}
        className="b pa2 input-reset ba bg-transparent hover-bg-white" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div>
       <input  onClick= {this.onSubmit}
      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer hover-bg-blue f6" type="submit" value="Sign Up"/></div>
          </form>
</article>
    );
  }

}
export default Register;
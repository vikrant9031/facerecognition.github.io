import React from 'react';
class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      email:'',
      password:''
    }
  }

     onEmailChange =(event=>{
   this.setState({email:event.target.value});
    
   })
      onPasswordChange=(event=>{
    this.setState({password:event.target.value})
   })

     onSubmitSignIn =()=>{
      fetch('http://localhost:3000/log',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
             email:this.state.email,
             password:this.state.password
        })
      })
      .then(response=>response.json()).then(data=>{
                         if(data==='success'){
                           this.props.onRouteChange('home');

      }
                              console.log(this.state);
    })

                     this.props.onRouteChange('register');

       
      
   }

  render(){
    const {onRouteChange} = this.props;
      return(
    

    <article className="br3 pa4  mw6 shadow-1 center ">
          <form action="sign-up_submit" method="get" accept-charset="utf-8">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <p className="ph0 mh0 fw6 f1 " style={{color:'white'}}>Sign Up</p>
                <div class="mt3">
                  <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
                     <input onChange={this.onEmailChange}
                      className=" pa2 input-reset ba bg-transparent hover-bg-white w-100 measure" type="email" name="email-address"  id="email-address"/>
                       </div>
                         <div class="mt3">
                           <label class="db fw4 lh-copy f6" for="password">Password</label>
                              <input onChange={this.onPasswordChange}
                              className="b pa2 input-reset ba bg-transparent hover-bg-white" type="password" name="password"  id="password"/>
                                </div>
                                  </fieldset>
                                   <div className="mt3">
                                     <input  onClick={this.onSubmitSignIn}
                                       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer hover-bg-blue f6" type="submit" value="Sign Up"/></div>
                                         <p  onClick= {()=>onRouteChange('register')}
                                           className="hover-bg-blue pointer underline">Register</p>

                                            </form>
                                              </article>
                                            );
  }
}

                                                  
export default Signup;
import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class HomePage extends Component{

    constructor(props){
        super(props);
    }
     render()
     {
         return(
             <div style={{width: '100%',margin:'auto'}}>
               <Grid className="home-grid">
                   <Cell col={12}>
                       <img
                       src='/images/myprofile.png'
                       alt="avatar"
                       className="avatar-img"/>

                       <div className="banner-text">
                       <h1>
                       ReactJs Developer | MERN Enthusiast
                       </h1>
                       
                       <hr/>
                       <p> HTML | CSS | Bootstrap | NodeJs| ReactJs | MySql | Express</p>
                       
                       <div className="social-links">
                       
                       <a href="" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"/></a>
                 
                       <a href="" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square" aria-hidden="true"/></a>

                       <a href="" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square" aria-hidden="true"/></a>

                       <a href="" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"/></a>

                  </div>
                       </div>

                      
                   </Cell>
               </Grid>
             </div>
         );
     }

}
export default HomePage;
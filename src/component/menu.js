import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import FetchArticle from './article';

class App extends Component {

        render() {

                return (

                        <BrowserRouter>
                
                        <ul style={{ marginBottom: "2em", fontSize: "1.2rem" }} class="nav justify-content-center">
                                <li class="nav-item">
                                {/* <a class="nav-link" href="#">Accueil</a> */}
                                <Link className="nav-link" to="/">Accueil</Link>
                                </li>
                                <li class="nav-item">
                                {/* <a class="nav-link" href="#">Code</a> */}
                                <Link className="nav-link" to="/code">Code</Link>
                                </li>
                                <li class="nav-item">
                                {/* <a class="nav-link" href="#">Blog</a> */}
                                <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li class="nav-item">
                                {/* <a class="nav-link" href="#">Contact</a> */}
                                <Link className="nav-link" to="/contact">Contatct</Link>
                                </li>
                        </ul>

                        <hr />
                        <div>
                                <Route exact path="/" Component={ Accueil } />
                                <Route path="/code" component={ Code } />
                                <Route path="/blog" component={ Blog } />
                                <Route path="/contact" component={ Contact } />       
                        </div>

                        </BrowserRouter>

                );        
        }
}

class Accueil extends Component {

        render() {
                
                return (

                        <div className="container-fluid">
                        <Header />   
                        <FetchArticle />
                      </div>
                );

        }
}

class Code extends Component {

        render() {
                
                return (

                        <div className="container-fluid">
                                 <Header /> 
                                        <div className="row">
                                                 <div className="col-sm-12 col-md-6 col-lg-6">
                                                 <h2>Code</h2>
                                                </div>
                                         </div>  
                      </div>
                );

        }
}


export default App;
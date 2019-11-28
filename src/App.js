import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import Header  from './component/header';
// import FetchArticle from './component/article';
import Article from './component/article';


    class App extends Component {

       render() {

              return (
                
                  <BrowserRouter>

                  <div className="container-fluid">
            
                    <ul style={{ marginBottom: "2em", fontSize: "1.2rem" }} className="nav justify-content-center">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Accueil</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/code">Code</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                      </li>
                    </ul>

                    <Header />

                    <div>
                        <Route exact path="/" component={ Accueil } />
                        <Route path="/code" component={ Code } />
                        <Route path="/blog" component={ Blog } />
                        <Route path="/contact" component={ Contact } />
                    </div>

                  </div>

                  </BrowserRouter>
              );       
        }
    } 


class Accueil extends Component {

  // render() {
          
  //         return (
  //             <div>
  //               <FetchArticle />
  //             </div>
  //         );

  // } 

        state = {
            data: []
          };
        
          componentDidMount() {
            fetch("./json/articles.json", {
                mode: 'no-cors'
              }) 
           .then(res => res.json())
              .then(data => {
              this.setState({ data });
              })
              .catch(console.log);  
            }
    
      render() {
      
          return (
            <div className="container">
                 <div className="row"> 
                  
                 {this.state.data.map(
                  ({ id, titre, texte }) => (
                    <Article
                      key={id}
                      titre={titre}
                      texte={texte}
                    >
                    </Article>
                  )
                 )}
                  
                </div>
            </div>
          );
        }
      }

class Code extends Component {

  render() {
          
          return (

            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <h2 style={{ color: "purple", fontSize: "1.5em"}}>Code</h2>
                </div>
              </div>
            </div>
          );

  }
}

class Blog extends Component {

  render() {
          
          return (

            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <h2 style={{ color: "purple", fontSize: "1.5em"}}>Blog</h2>
                </div>
              </div>
            </div>
          );

  }
}

class Contact extends Component {

  render() {
          
          return (

            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <h2 style={{ color: "purple", fontSize: "1.5em"}}>Contact</h2>
                </div>
              </div>
            </div>
          );

  }
}

export default App;

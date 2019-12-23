import React, { Component } from 'react';
import Header  from './component/header';
import Article from './component/article';
import GoogleFontLoader from 'react-google-font-loader';

class App extends Component {

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

            <div className="container-fluid .no-padding">

              <GoogleFontLoader fonts = { [{ font: 'Literata'}] } />

               <Header />
    
              <div className="container main">
                <div className="row"> 

                  <div className="col-12">
                  
                  {this.state.data.map(
                  ({ id, date, titre, texte }) => (
                      <Article
                        key={id}
                        titre={titre}
                        texte={texte}
                        date={date}
                      >
                      </Article>
                    )
                  )}

                  </div>
                </div>
              </div>
            </div>
          );
      }
}







export default App;

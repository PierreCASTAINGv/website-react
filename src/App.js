import React, { Component } from 'react';
import Header  from './component/header';
import Article from './component/article';
import GoogleFontLoader from 'react-google-font-loader';
import Grid from '@material-ui/core/Grid';


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

            <div className="container">

              <GoogleFontLoader fonts = { [{ font: 'Literata', weights: [400, 600] }] } />

               <Header />
    
              <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              >
                <Grid item xs={12} sm={10} md={8} lg={8} xl={6}>      
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
                </Grid>
              </Grid>
            </div>
          );
      }
}







export default App;

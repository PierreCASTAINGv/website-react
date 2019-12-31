import React from 'react';
import { handleToggle } from './utils/toggle';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
          main:  'rgb(7, 105, 92)'
      },
      secondary: {
          main:  'rgb(9, 126, 110)'
      }
    }
  });

const Article = ({ date, titre, texte }) => {

    return (  
        
        <div className="article">

            <div
            className="articleHeader"
            onClick={handleToggle}
            >
                <span role="img" aria-label="pictogramme" className="puce">📌</span>
                <span className="date">{ date }</span>
                <h4>{ titre }</h4>
            </div>

            
            <div
            className="accordion"
            >
                <div>
                {texte.map((c, index) => 
                    <p
                    key={index} 
                    >
                    {c}
                    </p>
                    )}
                </div>

                <div>
                    <ThemeProvider theme={theme}>
                    <Button style={{ textTransform: 'none' }} variant="contained" color="primary" size="small">en savoir +</Button>
                    </ThemeProvider>
                </div>
            </div>
      </div>
    );
};

export default Article;

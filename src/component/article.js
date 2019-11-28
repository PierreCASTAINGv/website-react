import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

// class FetchArticle extends Component {  

//     state = {
//         articles: []
//       };
    
//       componentDidMount() {
//         fetch("./json/articles.json", {
//             mode: 'no-cors'
//           }) 
//        .then(res => res.json())
//           .then(data => {
//           this.setState({ articles: data });
//           })
//           .catch(console.log);  
//       }

//     render() {
//     const Article = ({ articles }) => {

//         return (
//             <div className="container">
//                 <div className="row">
//                  <GoogleFontLoader
//                     fonts = {
//                         [{
//                         font: 'Literata'
//                         },
//                         {font: 'Roboto'}
//                         ]
//                     }
//                     />  
//                 {articles.map((article) => (
//                     <div key={id} className="col-sm-12 col-md-6 col-lg-6" style={{ fontFamily: "Literata" }}>
//                         <h4 style={{ color: "rgb(74, 74, 74)"}}>{ article.titre }</h4>
//                             <div >
//                 {article.texte.map((c) => <p style={{ fontFamily: "Roboto", textAlign: "justify", fontSize: "1rem", color: "rgb(84, 84, 84)"}}>{c}</p>)}
                       
//                             </div>
//                     </div>
//                 ))}
//                 </div></div>
//             )
//         };
//         return (
//             <Article articles={this.state.articles} />
//         )
//     }
// }
const Article = ({ titre, texte }) => {

            return (
                 <div className="col-sm-12 col-md-6 col-lg 3">
                    <GoogleFontLoader
                        fonts = {
                            [{
                            font: 'Literata'
                            },
                            {font: 'Roboto'}
                            ]
                        }
                        />  
                        <div style={{ fontFamily: "Literata" }}>
                            <h4 style={{ color: "rgb(74, 74, 74)"}}>{ titre }</h4>
                                <div>
                        {texte.map((c, index) => <p key={index} style={{ fontFamily: "Roboto", textAlign: "justify", fontSize: "1rem", color: "rgb(84, 84, 84)"}}>{c}</p>)}
                                </div>
                        </div>
                    </div>
                )
            };

export default Article;

// export default FetchArticle;
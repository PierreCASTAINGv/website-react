import React from 'react';
import { handleToggle } from './utils/toggle';


const Article = ({ date, titre, texte }) => {

    return (  
        
        <div className="article">

                    <div
                    className="articleHeader"
                    onClick={handleToggle}
                    >
                    <span role="img" aria-label="" className="puce">📌</span>
                    <span className="date">{ date }</span>
                    <h4>
                    { titre }
                    </h4>
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
                    </div>

            </div>
    );
};

export default Article;

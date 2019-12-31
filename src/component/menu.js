import React from 'react';
import { handleNbre } from './utils/toggle';
//import { handleToggle } from './utils/toggle';

const Article = ({ date, titre, texte }) => {

    return (  
        
        <div className="article">

            <div
            data-toggle="modal"
            data-target="#targetModal"
            className="articleHeader"
            //onClick={handleToggle}
            onClick={handleNbre}
            >
                <span role="img" aria-label="pictogramme" className="puce">📌</span>
                <span className="date">{ date }</span>
                <h4>{ titre }</h4>
            </div>

            <div 
            className="modal fade" 
            id="targetModal" 
            //tabindex="-1" 
            //role="dialog" 
            //aria-labelledby="modalLabelLarge"
            aria-hidden="true"
            >
                <div className="modal-dialog modal-xl">

                        <div
                        className="modal-content"
                        >
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            {/* <span className="badge badge-secondary" aria-hidden="true">&times;</span> */}
                            </button>

                            <div
                            className="modal-body"
                            style={{ textAlign: 'center' }}
                            >
                            {texte.map((c, index) => 
                                <p
                                key={index} 
                                >
                                {c}
                                </p>
                                )}
                                 <button style={{ marginBottom: '1em', width: '6em'}} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                </div>
                
            </div>
        </div>
    );
};

export default Article;

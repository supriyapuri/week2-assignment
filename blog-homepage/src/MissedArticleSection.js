import React from 'react';
import MissedArticleCard from './MissedArticleCard'

export default class MissedArticleSection extends React.Component {
    render() {
        const {missedArticle} = this.props;
        return (
            <div>
                <div className= "description2"></div>
                <h2>In case you missed it</h2>
                <hr />
                    <div className= "cards_missed">
                        {missedArticle.map((card, idx)=> 
                   
                        <MissedArticleCard card={card} id={"missed-card-"+idx} /> 
                  
                        )}
                  </div>
                
            </div>
        ) ;

    }

}
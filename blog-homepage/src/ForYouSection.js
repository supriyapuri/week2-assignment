import React from 'react';
import ForYouCard from './ForYouCard';



export default class ForYouSection extends React.Component {


    render() {
        const {forYouSection} = this.props;
        return (
            
            <div>
                <h2>For you</h2>
                <hr />
                    <div className= "cards_foryou">
                        {forYouSection.map((card, idx)=> 
                
                        <ForYouCard card={card} id={"for-you-card-"+idx} key={idx} /> 
                
                        )}
                </div>
                    
             </div>
               
        ) ;

    }

}


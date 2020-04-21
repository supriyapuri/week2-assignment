import React from 'react';




export default class MissedArticleCard extends React.Component{
    render() {
        const hasAudioAvailable = this.props.card.hasAudioAvailable;
        const memberPreview = this.props.card.memberPreview;
        const isMediumMember= this.props.card.author.isMediumMember;
        const postedDate= Date.parse(this.props.card.postedDate);
        const updatedDate= new Intl.DateTimeFormat("en-US", {day: "2-digit",month: "long"}).format(postedDate)
        return(
            <div className= "card2">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
                <img src={this.props.card.image} alt=" " className= "card_image2" />
                <div>
                     <div>
                            <div className= "top_condition">
                                {hasAudioAvailable ? (<i className="material-icons">volume_up</i>) : null}
                                {hasAudioAvailable ? (<p className="audio">Audio Available</p>) : null}
                                {memberPreview ? (<i className="material-icons" align= "right">star_outline</i>) : null}
                            </div>
                            <div className = "title">
                                <h3>{this.props.card.title}</h3>
                                <p className= "description2">{this.props.card.description}</p>
                                
                            </div>
                            
                            <div className= "content_bottom">
                                <div className = "author_image">
                                    {isMediumMember? (<img src={this.props.card.author.image} alt=" " className= "author_image2" />) 
                                        : (<img src={this.props.card.author.image} alt=" " className= "author_image1" />)}

                                </div>

                        
                                <div className = "bottom_middle">
                                    <p className= "author_name">{this.props.card.author.name}</p>
                                    <p className= "doc_details">{updatedDate} . {this.props.card.minutesToRead} min read </p>
                                </div>
                                <i className="material-icons">bookmark_border</i>
                            </div>
                        </div>
                </div>
 
            </div>

        );

    }

}



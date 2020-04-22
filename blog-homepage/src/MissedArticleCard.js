import React from 'react';





export default class MissedArticleCard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isBookmarked: false,
        }
    }
    

    handleBookmark = (e) =>{
        e.preventDefault();
        
        if(!this.state.isBookmarked){
            document.getElementById(this.props.id+"-bookmark").innerHTML= "bookmark";
            document.getElementById(this.props.id+"-bookmark").classList.add("bookmark");
        
        }
        else
        {
            document.getElementById(this.props.id+"-bookmark").classList.remove("bookmark");
            document.getElementById(this.props.id+"-bookmark").innerHTML= "bookmark_border";
            
        }
        
        this.setState((prevState) =>{
            return {isBookmarked:!prevState.isBookmarked};
        })
    }




    render() {
        const hasAudioAvailable = this.props.card.hasAudioAvailable;
        const memberPreview = this.props.card.memberPreview;
        const isMediumMember= this.props.card.author.isMediumMember;
        const postedDate= Date.parse(this.props.card.postedDate);
        const updatedDate= new Intl.DateTimeFormat("en-US", {day: "2-digit",month: "long"}).format(postedDate);
        
        

        return(

            <div className= "card_missed" id= {this.props.id}>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
                <a href = {this.props.card.link}><img src={this.props.card.image} alt=" " className= "card_image2" /></a>
                <div className= "card_text">
                     <div className="article_details">
                            <div className= "icons">
                                {hasAudioAvailable ? (<i className="material-icons">volume_up</i>) : null}
                                {hasAudioAvailable ? (<p className="audio">Audio Available</p>) : null}
                                {memberPreview ? (<i className="material-icons" align= "right">star_outline</i>) : null}
                            </div>
                            <div className = "title">
                                <h3><a href = {this.props.card.link}>{this.props.card.title}</a></h3>
                                <p className= "description2"><a href = {this.props.card.link}>{this.props.card.description}</a></p>
                                
                            </div>
                            
                            <div className= "additional_details">
                                <div className = "author_image">
                                    {isMediumMember? (<img src={this.props.card.author.image} alt=" " className= "author_image2" />) 
                                        : (<img src={this.props.card.author.image} alt=" " className= "author_image1" />)}

                                </div>

                        
                                <div className = "additional_details_text">
                                    <p className= "author_name">{this.props.card.author.name}</p>
                                    <p className= "doc_details">{updatedDate} . {this.props.card.minutesToRead} min read </p>
                                </div>
                                <i className="material-icons " id={this.props.id+"-bookmark"} onClick={this.handleBookmark}>bookmark_border</i>
                            </div>
                        </div>
                </div>
 
            </div>

        );

    }

}



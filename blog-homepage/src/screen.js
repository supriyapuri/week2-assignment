import React from 'react';
import PropTypes from 'prop-types';
import foryouSection from './your-articles.json'
import missedArticle from './missed-articles.json'

class Screen extends React.Component {
    static propTypes = {
        forYouSection: PropTypes.arrayOf(
            PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            link:  PropTypes.string.isRequired,
            author:PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    image: PropTypes.string.isRequired,
                    isMediumMember: PropTypes.bool.isRequired
                })),
            postedDate: PropTypes.string.isRequired,
            minutesToRead: PropTypes.number.isRequired,
            hasAudioAvailable: PropTypes.bool.isRequired,
            memberPreview: PropTypes.bool.isRequired})),

        missedArticle:  PropTypes.arrayOf(
            PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            link:  PropTypes.string.isRequired,
            author:PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    image: PropTypes.string.isRequired,
                    isMediumMember: PropTypes.bool.isRequired
                })),
            postedDate: PropTypes.string.isRequired,
            minutesToRead: PropTypes.number.isRequired,
            hasAudioAvailable: PropTypes.bool.isRequired,
            memberPreview: PropTypes.bool.isRequired})),

    }

    constructor(props) {
        super(props);
         this.state= {
             forYouSection: foryouSection,
             missedArticle: missedArticle
        }
    }

    renderForYouSection() {
        return <ForYouSection forYouSection={this.state.forYouSection} />;
    }

    renderMissedArticleSection() {
    return <MissedArticleSection missedArticle={this.state.missedArticle}/>;
    }

    render(){
        return(
        <div> 
            {this.renderForYouSection()}
 
            {this.renderMissedArticleSection()}

        </div>


        );
    }
    
}

class ForYouSection extends React.Component {
    render() {
        const {forYouSection} = this.props;
        return (
            
            <div>
                <h2>For you</h2>
                <hr />
                    <div className= "cards_foryou">
                        {forYouSection.map((card)=> 
                
                        <ForYouCard card={card} /> 
                
                        )}
                </div>
                    
             </div>
               
        ) ;

    }

}

class MissedArticleSection extends React.Component {
    render() {
        const {missedArticle} = this.props;
        return (
            <div>
                <div className= "description2"></div>
                <h2>In case you missed it</h2>
                <hr />
                    <div className= "cards_missed">
                        {missedArticle.map((card)=> 
                   
                        <MissedArticleCard card={card} /> 
                  
                        )}
                  </div>
                
            </div>
        ) ;

    }

}


class ForYouCard extends React.Component {
    render() {

        const hasAudioAvailable = this.props.card.hasAudioAvailable;
        const memberPreview = this.props.card.memberPreview;
        const isMediumMember= this.props.card.author.isMediumMember;
        const postedDate= Date.parse(this.props.card.postedDate);
        const updatedDate= new Intl.DateTimeFormat("en-US", {day: "2-digit",month: "short"}).format(postedDate)
        
        return(
            
                <div className= "card">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
                    <img src={this.props.card.image} alt=" " className= "card_image" />
                    <div className= "card_content">
                        <div className="content_top">
                            <div className= "top_condition">
                                {hasAudioAvailable ? (<i className="material-icons">volume_up</i>) : null}
                                {hasAudioAvailable ? (<p className="audio">Audio Available</p>) : null}
                                {memberPreview ? (<i className="material-icons">star_outline</i>) : null}
                            </div>
                            <h3>{this.props.card.title}</h3>
                            <p className= "description">{this.props.card.description}</p>
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
                


        );
    }
}

class MissedArticleCard extends React.Component{
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

export {Screen as default};

import React from 'react';
import PropTypes from 'prop-types';
import foryouSection from './your-articles.json';
import missedArticle from './missed-articles.json';
import ForYouSection from './ForYouSection';
import MissedArticleSection from './MissedArticleSection'


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



export {Screen as default};

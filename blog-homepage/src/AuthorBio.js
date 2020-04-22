import React from 'react';




export default class AuthorBio extends React.Component{
    render(){
        const isMediumMember= this.props.isMediumMember;

        
        return(
            <div>
                <div className = "author_image">
                    {isMediumMember? (<img src={this.props.image} alt=" " className= "author_image2" />)
                    :(<img src={this.props.image} alt=" " className= "author_image1" />)}

                </div>

                    <div className = "bottom_middle">
                <p className= "author_name">{this.props.authorName}</p>
                </div>
            </div>
        );
    }

}




import React from 'react';




export default class AuthorBio extends React.Component{
    render(){
        const isMediumMember= this.props.isMediumMember;

        
        return(
            
                <div className = "author_details">
                    {isMediumMember? (<img src={this.props.image} alt=" " className= "author_image2" />)
                    :(<img src={this.props.image} alt=" " className= "author_image1" />)}

                    <p className= "author_name">{this.props.authorName}</p>
                </div>   
            
        );
    }

}




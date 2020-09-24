import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{
  constructor(props){
    super(props);
  }

  
 
  renderComments(comments) {
    if(comments != null) {
      const commentList = comments.map((cmt) => {
        return(
          <li key={cmt.id}>
            <br/>{cmt.comment}<br/>
            --{cmt.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}
          </li>
        )
      });
      return(
        <>
          <div>
          <h4>Comments</h4>
          <ul className="list-unstyled"> 
            {commentList}
          </ul>
          </div>
        </>
      );
    }
    else {
      return(<div></div>);
    }
  }
  renderDish(dish){
          if(dish!=null){
            return(
              <>
              <div className="col-12 col-md-5 m-1">
                  <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                         <CardTitle>{dish.name}</CardTitle>
                         <CardText>{dish.description}</CardText>
                    </CardBody>
                  </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.dish.comments)}
             </div>
         </>
             
            );
          }
          else{
            return(
              <div >
              </div>
            );
          }
        }


  render(){
    return(
    <>
    <div className="container">
    <div className="row">
      {this.renderDish(this.props.dish)}
    </div>
    </div>
    </>
    );
  }
}

export default DishDetail;
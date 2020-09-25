import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';
  
 
  function RenderComments({comments}) {
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
  function RenderDish({dish}){
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
                <RenderComments comments={dish.comments}/>
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


  const DishDetail=(props)=>{
    return(
    <>
    <div className="container">
    <div className="row">
      <RenderDish dish={props.dish}/>
      
    </div>
    </div>
    </>
    );
  }

export default DishDetail;
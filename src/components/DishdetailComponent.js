import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
 
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
              <div className="col-12  m-1">
                  <Card>
                    <CardImg width="100%" object src={process.env.PUBLIC_URL+ dish.image} alt={dish.name} />
                    <CardBody>
                         <CardTitle>{dish.name}</CardTitle>
                         <CardText>{dish.description}</CardText>
                    </CardBody>
                  </Card>
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
        };


  const DishDetail=(props)=>{
    return(
    <>
    <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active><Link to="/menu/:dish.id">{props.dish.name}</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                          
                    
                </div>
                </div>
    </>
    );
  }

export default DishDetail;
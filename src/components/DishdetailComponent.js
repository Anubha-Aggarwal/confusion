import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        console.log("Again getting called on change {props.dish.name} " );
    }

    renderComments(dish) {
        if(this.props.dish != null) {
            console.log(this.props.dish.name);
        }
        const elem = this.props.dish.comments.map((comment) => {
            return(
                <li key={comment.id} >
                    <div>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </div>
                </li>
            );
        });
        return (
            <div className="m-1 col-12 col-md-5" >
                <ul className="list-unstyled">
                    <h4>Comments</h4>
                    {elem}
                </ul>
            </div>
        );
    }

    render() {
        if(this.props.dish != null) {
            return(
                <div className="row"> 
                    <div className="m-1 col-12 col-md-5" >
                            <Card>
                                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                    </div>
                    {this.renderComments(this.props.dish)}
                </div>
            );        
        } else {
            return(
                <div></div>
            );
        }
    }
}
export default Dishdetail;
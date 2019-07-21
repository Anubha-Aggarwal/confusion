import React, {Component} from 'react';
import {Card, CardImg, CardText, CardImgOverlay, CardTitle, CardBody} from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect = (dish) => {
		this.setState({selectedDish: dish});
	}

    renderDish(dish) {
        if(dish != null) {
            return(
                <div className="m-1 col-12 col-md-5" >
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                </div>
            );        
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
        const elem = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="m-1 col-12 col-md-5" >
                    <Card onClick={this.onDishSelect.bind(this, dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });         

        return (
            <div className="container">
                <div className="row">   
                    {elem}
                </div>
                <div className="row">   
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;
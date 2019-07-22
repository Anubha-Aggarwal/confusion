import React, {Component} from 'react';
import Dishdetail from './DishdetailComponent';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

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
                <Dishdetail dish = {this.state.selectedDish} />
            </div>
        );
    }
}

export default Menu;
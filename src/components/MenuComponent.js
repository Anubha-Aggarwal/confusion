import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

class Menu extends Component {
    render() {
        const elem = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="m-1 col-12 col-md-5" >
                    <Card onClick={this.props.onClick.bind(this,dish.id)}>
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
            </div>
        );
    }
}

export default Menu;
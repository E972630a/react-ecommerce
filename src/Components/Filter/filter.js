import React from 'react';
import ProductItems from '../ProductItems/productcards';
import data from '../ProductsPage/storeitems.json';

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productCost: "default",
            filter: "default"
        };
    }
    handleDropDown = (event) => {
        this.setState({
            productCost: event.target.value,
            filter: event.target.value
        })
    }
    render() {
        console.log(data);
        const { productCost, filter } = this.state;
        return (
            <div>
                <h2 className="productContainer">Perfumes and Colognes For Our Ladies and Gentleman</h2>
                <section className="btn">
                    <select className="productType" value={filter} onChange={this.handleDropDown}>
                        <option value="default">Show All</option>
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                        <option value="moreExpensive">More Expensive</option>
                        <option value="lessExpensive">Less Expensive</option>
                    </select>
                </section>

                <div className="productCardContainer">

                    {data.map((item) => {
                        if (productCost === "default" && filter === "default") {
                            return <ProductItems item={item} />
                        } else if (productCost === item.productCost || filter === item.filter) {
                            return <ProductItems item={item} />
                        }
                    })}


                </div>
            </div>
        )
    }
}


export default Filter;
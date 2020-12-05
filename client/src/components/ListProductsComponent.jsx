import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class ListProductsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        
    }

    addProduct() {
        this.props.history.push('/add-product/_add');
    }

    removeProduct(id) {
        ProductService.removeProduct(id).then(res => {
            this.setState({ products: this.state.products.filter(product => product.id !== id) });
        });
    }

    editProduct(id) {
        this.props.history.push(`/add-product/${id}`);
    }

    viewProduct(id){
        this.props.history.push(`/view-product/${id}`);
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Products List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProduct}>Add Product</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Size</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>Stock</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product => 
                                        <tr key = {product.id}>
                                             <td> {product.size} </td>   
                                             <td> {product.jenis}</td>
                                             <td> {product.deskripsi}</td>
                                             <td> {product.jmlbarang}</td>
                                             <td>
                                                 <button onClick={ () => this.editProduct(product.id)} className="btn btn-info">Update</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.removeProduct(product.id)} className="btn btn-danger">Remove</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(product.id)} className="btn btn-info">View</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListProductsComponent
import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            size: '',
            jenis: '',
            deskripsi: '',
            jmlbarang: ''
        }
        this.changeSizeHandler = this.changeSizeHandler.bind(this);
        this.changeDeskripsiHandler = this.changeDeskripsiHandler.bind(this);
        this.changeJenisHandler = this.changeJenisHandler.bind(this);
        this.changeJmlBarangHandler = this.changeJmlBarangHandler.bind(this);

        this.saveOrUpdateProduct = this.saveOrUpdateProduct
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            ProductService.getProductById(this.state.id).then((res) => {
                let product = res.data;
                this.setState({
                    size: product.size,
                    jenis: product.jenis,
                    deskripsi: product.deskripsi,
                    jmlbarang: product.jmlbarang
                });
            });
        }
    }

    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {
            size: this.state.size,
            jenis: this.state.jenis,
            deskripsi: this.state.deskripsi,
            jmlbarang: this.state.jmlbarang,
        };
        console.log('product => ' + JSON.stringify(product));

        if (this.state.id === '_add') {
            ProductService.addProduct(product).then(res => {
                this.props.history.push('/products');
            })
        } else {
            ProductService.updateProduct(product, this.state.id).then(res => {
                this.props.history.push('/products');
            })
        }
    }

    changeSizeHandler = (event) => {
        this.setState({ size: event.target.value });
    }
    changeJenisHandler = (event) => {
        this.setState({ jenis: event.target.value });
    }
    changeDeskripsiHandler = (event) => {
        this.setState({ deskripsi: event.target.value });
    }
    changeJmlBarangHandler = (event) => {
        this.setState({ jmlbarang: event.target.value });
    }

    cancel() {
        this.props.history.push('/products');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Product</h3>
        } else {
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Size : </label>
                                        <input placeholder="Product Size" name="size" className="form-control"
                                            value={this.state.size} onChange={this.changeSizeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Type: </label>
                                        <input placeholder="Product Type" name="jenis" className="form-control"
                                            value={this.state.jenis} onChange={this.changeJenisHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Description: </label>
                                        <input placeholder="Product Description" name="deskripsi" className="form-control"
                                            value={this.state.deskripsi} onChange={this.changeDeskripsiHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Stock: </label>
                                        <input placeholder="Stock" name="jmlbarang" className="form-control"
                                            value={this.state.jmlbarang} onChange={this.changeJmlBarangHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateProductComponent
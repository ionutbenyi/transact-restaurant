import React from 'react';
import Button from "react-bootstrap/Button";
import * as API_MENU from "./api/menu-item-api";
import './fields/fields.css';

import APIResponseErrorMessage from "../commons/errorhandling/api-response-error-message";

class MenuForm extends React.Component {

    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);

        this.state = {

            errorStatus: 0,
            error: null,

            idNotNull: true,

            formControls: {

                // itemId: {
                //     value: '',
                //     valid: true,
                //     placeholder: 'Item id...',
                //     touched: true
                // },

                name: {
                    value: '',
                    placeholder: 'Item name',
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true
                    }
                },

                grams: {
                    value: 0,
                    placeholder: 'Dish grams',
                    valid: false,
                    touched: false,
                    validationRules: {
                        isRequired: true
                    }
                },

                price: {
                    value: 0,
                    placeholder: 'Price',
                    touched: false,
                }
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.refreshPage = this.refreshPage.bind(this);

    }

    toggleForm() {
        this.setState({ collapseForm: !this.state.collapseForm });
    }

    refreshPage() {
        window.location.reload(false);
    }

    fetchItemInfo(itemName){
        return API_MENU.getCompanyById(itemName, (result,status,err) => {
            
            if(result != null && status == 200){
                this.item = result;

                //update form placeholder:
                if (this.item != null){
                    this.state.formControls.name.value = this.item.name;
                    this.state.formControls.grams.value = this.item.grams;
                    this.state.formControls.price.value = this.item.price;
                    
                }  
            } else {
                this.state.errorStatus = status;
                this.state.error = err;
                this.forceUpdate();
            }
        });
    }

    componentDidMount() {

        let i = localStorage.getItem("itemName");
        this.itemName = i;
        
        if (i != null){
            this.fetchItemInfo(i);
        }   
    }


    handleChange = event => {

        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };

        const updatedFormElement = {
            ...updatedControls[name]
        };

        updatedFormElement.value = value;
        updatedFormElement.touched = true;

        updatedControls[name] = updatedFormElement;

        this.setState({
            formControls: updatedControls
        });
    };

    updateMenuItem(item) {
        return API_MENU.updateMenuItem(item, (result, status, error) => {

            if (result !== null && (status === 200 || status === 201)) {
               alert("Successfully updated details!");
               this.forceUpdate();
            } else {
                this.state.errorStatus = status;
                this.error = error;
                this.forceUpdate();
            }
        });
    }

    handleUpdate() {

        let itemLocal = {
            name: this.state.formControls.name.value,
            grams: this.state.formControls.grams.value,
            price: this.state.formControls.price.value,
        };

        if (this.state.formControls.name.value == null)
            itemLocal.name = this.state.formControls.name.placeholder;
        else
            itemLocal.name = this.state.formControls.name.value;

        if (this.state.formControls.grams.value == null)
            itemLocal.grams = this.state.formControls.grams.placeholder;
        else
            itemLocal.grams = this.state.formControls.grams.value;

        if (this.state.formControls.price.value == null)
            itemLocal.price = this.state.formControls.price.placeholder;
        else
            itemLocal.price = this.state.formControls.price.value;

        this.updateMenuItem(itemLocal);
    }

    render() {
        return (
            <div className="companyForm">
                <form onSubmit={this.handleSubmit}>

                    <h1>Manage Menu Item</h1>
                    
                    <br />

                    {/* <div className="form-group">
                        <p className="cformLabel"> Id: </p>
                        <input name="companyId"
                            className="form-control"
                            placeholder={this.state.formControls.companyId.placeholder}
                            value={this.state.formControls.companyId.value}
                            onChange={this.handleChange}
                            touched={this.state.formControls.companyId.toString()}
                        />
                    </div> */}

                    <br />

                    <div className="form-group">
                        <p className="cformLabel"> Name: </p>
                        <input name="name"
                            className="form-control"
                            placeholder={this.state.formControls.name.placeholder}
                            value={this.state.formControls.name.value}
                            onChange={this.handleChange}
                            touched={this.state.formControls.name.toString()}
                        />
                    </div>

                    <br />

                    <div className="form-group">
                        <p className="cformLabel"> Grams: </p>
                        <input name="grams"
                            className="form-control"
                            placeholder={this.state.formControls.grams.placeholder}
                            value={this.state.formControls.grams.value}
                            onChange={this.handleChange}
                            touched={this.state.formControls.grams}
                        />
                    </div>

                    <br />

                    <div className="form-group">
                        <p className="cformLabel"> Price (EUR): </p>
                        <input name="price"
                            className="form-control"
                            placeholder={this.state.formControls.price.placeholder}
                            value={this.state.formControls.price.value}
                            onChange={this.handleChange}
                            touched={this.state.formControls.price}
                        />
                    </div>

                    <br />

                    <div className="form-group">
                        <p className="cformLabel"> City: </p>
                        <input name="city"
                            className="form-control"
                            placeholder={this.state.formControls.city.placeholder}
                            value={this.state.formControls.city.value}
                            onChange={this.handleChange}
                            touched={this.state.formControls.city.toString()}
                        />
                    </div>
                    <br />
                    <div className="form-buttons">
                        <Button
                            onClick={this.handleUpdate}>
                            Update
                        </Button>
                    </div>
                    <br/>

                </form>
            </div>
        );
    }
}

export default CompanyForm;
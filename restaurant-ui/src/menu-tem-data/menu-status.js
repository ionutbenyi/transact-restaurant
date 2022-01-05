import React from 'react';
import * as API_MENU from "./api/menu-items-api";
import {Card, Col, Row} from 'reactstrap';
import Table from  "../commons/tables/table";

const buttonStyle = {
    display: 'inline-block',
    width: 'calc(50% - 4px)',
    margin: '0 auto'
};

const columns = [
    {
        Header:  'Id',
        accessor: 'id',
    },
    {
        Header:  'Name',
        accessor: 'nameAc',
    },
    {
        Header:  'Grams',
        accessor: 'gramsAc',
    },
    {
        Header:  'Price',
        accessor: 'priceAc',
    },
    {
        Header:  'Delete',
        accessor: 'deleteItem',
    }
];

const filters = [
    {
        accessor: 'id',
    },
    {
        accessor: 'nameAc',
    },
    {
        accessor: 'gramsAc',
    },
    {
        accessor: 'priceAc',
    }
];

class CompanyStatus extends React.Component{

    constructor(props){
        super(props);
        this.tableData = [];

        this.compId = -1;

        this.handelDeleteItem = this.handelDeleteItem.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    }

    refreshPage() {
        window.location.reload(false);
    }

    // fetchMenuInfo(userId){
    //     return API_MENU.getCompanyById(userId, (result,status,err) => {
            
    //         if(result != null && status == 200){
    //             console.log("getCompanyById result: " + result.email);
    //             this.company = result
    //             console.log("company result: " + result);
    //             if (this.company != null){
    //                 this.fetchServices();
    //             }
    //         } else {
    //             this.state.errorStatus = status;
    //             this.state.error = err;
    //             this.forceUpdate();
                
    //         }
    //     });
    // }

    handelDeleteItem(item) {
        this.refreshPage(); 
        return API_MENU.deleteItem(item, (result,status,err) => {
            if(result != null && status == 200){
                alert("Successfully deleted item with id: " + item.id);
                this.forceUpdate();
            } else {
                this.state.errorStatus = status;
                this.state.error = err;
                this.forceUpdate();
            }
        });
    }

    fetchItems(){
        return API_MENU.getMenu((result,status,err) => {
            console.log("before push");
            if(result != null && status == 200){
                
                result.forEach(x => {

                    let name = "";
                    
                    this.tableData.push({
                        id: x.id,
                        name: x.name,
                        grams: x.grams,
                        price: x.price,
                        deleteService: <button onClick = {() => this.handelDeleteItem(x)} style={buttonStyle}> Request </button>
                    });

                });
                this.forceUpdate();
            } else {
                this.state.errorStatus = status;
                this.state.error = err;
                this.forceUpdate();
            }
        });
    }

    // componentDidMount() {

    //     let i = localStorage.getItem("userId");
    //     this.compId = i;
    //     console.log("i="+i);
    //     if (i != null){
    //         this.fetchCompanyInfo(i);
    //     }
    // }

    

    render(){
        let pageSize = 5;
        return(     
            <Row>
                <Col>
                    <Card body>
                        <Table 
                            data = {this.tableData}
                            columns = {columns}
                            search = {filters}
                            pageSize = {pageSize}
                        />
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default MenuStatus;
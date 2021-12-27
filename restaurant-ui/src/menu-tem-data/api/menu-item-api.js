import {HOST} from '../../commons/hosts';
import RestApiClient from  "../../commons/api/rest-client";

const endpoint = {
    menu_endpoint: '/item/',
    menu_find_dir: '/menu/',
    new_entry_dir: '/new_entry/'
};

function getCompanyById(userId, callback){
    console.log("Requesting getCompanyById, user: " + userId)
    let request = new Request(HOST.backend_api + endpoint.company_endpoint + userId, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    });

    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function getMenu(callback){
    console.log("Requesting the menu list")
    let request = new Request(HOST.backend_api + endpoint.menu_endpoint + endpoint.menu_find_dir, {
        method: 'GET',
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function getItemByName(itemName, callback){
    console.log("Find by name: "+itemName)
    let request = new Request(HOST.backend_api + endpoint.menu_endpoint + endpoint.menu_find_dir + "?name=" + itemName, {
        method: 'GET'
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function addNewItem(item, callback){
    console.log("Adding new item: " + item.getName())
    let request = new Request(HOST.backend_api + endpoint.menu_endpoint + endpoint.new_entry_dir, {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function updateItem(item, callback){
    console.log("Update item: " + item.getName())
    let request = new Request(HOST.backend_api + endpoint.menu_endpoint, {
        method: 'PUT',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function deleteItem(item, callback){
    console.log("Deleting item: " + item.getName())
    let request = new Request(HOST.backend_api + endpoint.menu_endpoint, {
        method: 'PUT',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}
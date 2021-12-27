import {HOST} from '../../commons/hosts';
import RestApiClient from  "../../commons/api/rest-client";

const endpoint = {
    staff_endpoint: '/staff/'
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

function getStaffing(callback){
    console.log("Requesting the staff list")
    let request = new Request(HOST.backend_api + endpoint.staff_endpoint + "/search", {
        method: 'GET',
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function getStaffByName(staffName, callback){
    console.log("Find by name: "+staffName)
    let request = new Request(HOST.backend_api + endpoint.menu_endpoint + endpoint.menu_find_dir + "?name=" + staffName, {
        method: 'GET'
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function addNewStaff(staff, callback){
    console.log("Adding new staff: " + staff.getName())
    let request = new Request(HOST.backend_api + endpoint.menu_endpoint + endpoint.new_entry_dir, {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(staff)
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function updateStaff(staff, callback){
    console.log("Update staff: " + staff.getName())
    let request = new Request(HOST.backend_api + endpoint.menu_endpoint, {
        method: 'PUT',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(staff)
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function deleteStaff(staff, callback){
    console.log("Deleting staff: " + staff.getName())
    let request = new Request(HOST.backend_api + endpoint.menu_endpoint, {
        method: 'PUT',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(staff)
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}
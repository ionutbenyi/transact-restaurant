import requests

staff_header = "http://localhost:8087/staff"

class StaffInvoker:

    def get_staff(self):
        url = "/search"
        try:
            staff_list = requests.get(staff_header + url).json()
            return staff_list
        except requests.exceptions.HTTPError as error:
            print(error)
        return []

    def get_staff_by_name(self, name):
        url = "/search/find_name/?name=" + name
        try:
            staff_list = requests.get(staff_header + url).json()
            return staff_list
        except requests.exceptions.HTTPError as error:
            print(error)

    def create_staff(self, staff):
        url = "/new_employee"
        try:
            response = requests.post(staff_header + url, data=staff)
            print(response.status_code)
        except requests.exceptions.HTTPError as error:
            print(error)

    def update_staff(self, staff, id):
        url = "/update/?id="+str(id)
        try:
            response = requests.put(staff_header+url, data=staff)
            print(response.status_code)
        except requests.exceptions.HTTPError as error:
            print(error)

    def delete_staff(self, staff, id):
        url = "/delete/?id="+str(id)
        try:
            response = requests.delete(staff_header + url, data=staff)
            print(response.status_code)
        except requests.exceptions.HTTPError as error:
            print(error)


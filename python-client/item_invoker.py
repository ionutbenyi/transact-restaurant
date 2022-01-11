import requests

item_header = "http://localhost:8087/item"

class ItemInvoker:

    def get_item(self):
        url = "/menu"
        try:
            item_list = requests.get(item_header + url).json()
            return item_list
        except requests.exceptions.HTTPError as error:
            print(error)
        return []

    def get_item_by_name(self, name):
        url = "/menu/find_name/?name=" + name
        try:
            item_list = requests.get(item_header + url).json()
            return item_list
        except requests.exceptions.HTTPError as error:
            print(error)

    def create_item(self, item):
        url = "/new_entry"
        try:
            response = requests.post(item_header + url, data=item)
            print(response.status_code)
        except requests.exceptions.HTTPError as error:
            print(error)

    def update_item(self, item, id):
        url = "/update/?id="+str(id)
        try:
            response = requests.put(item_header+url, data=item)
            print(response.status_code)
        except requests.exceptions.HTTPError as error:
            print(error)

    def delete_item(self, item, id):
        url = "/delete/?id="+str(id)
        try:
            response = requests.delete(item_header + url, data=item)
            print(response.status_code)
        except requests.exceptions.HTTPError as error:
            print(error)

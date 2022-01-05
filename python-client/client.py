import requests
import json

from item_invoker import ItemInvoker
from staff_invoker import StaffInvoker

def print_staff(staff, confidentiality):
    print("Name: ", staff['name'])
    print("Function: ", staff['role'])
    print("Email: ", staff['email'])
    if not confidentiality:
        print("Username: ", staff['username'])
        print("Password: ", staff['password'])
    print()

def print_item(item):
    print("Name: ", item['name'])
    print("Grams: ", item['grams'])
    print("Price: ", item['price'])
    print()

def print_item_list(list):
    for item in list:
        print_item(item)

def print_staff_list(list, confidentiality=True):
    print("Staff list:\n")
    for staff in list:
        print_staff(staff, confidentiality)
        # print(staff)

def staff_client_menu(number, si):
    if number == 1:
        # get all staff members
        staff_list = si.get_staff()
        if staff_list:
            print_staff_list(staff_list, False)
        else:
            print("Cannot retrieve staff or list is empty")
    
    if number == 2:
        # get staff member by name
        name = input("Staff name: ")
        staff_list = si.get_staff_by_name(name)
        staff_res = None
        if len(staff_list) > 1:
            username = input("Multiple names found. Insert username: ")
            for staff in staff_list:
                if staff['username'] == username:
                    staff_res = staff
                    break
            if not staff_res:
                print("Invalid username")
        else:
            staff_res = staff_list[0]
        return staff_res


    if number == 3:
        # add new member
        name = input("name: ")
        role = input("role: ")
        email = input("email: ")
        username = input("username: ")
        password = input("password: ")
        staff = {
            "name": name,
            "email": email,
            "password": password,
            "role": role,
            "username": username,
        }
        print(staff)
        si.create_staff(staff)
    
    if number == 4:
        # update existing member
        pass
    if number == 5: 
        # delete existing member
        pass

def item_client_menu(number, ii):
    if number == 1:
        # get all items
        item_list = ii.get_staff()
        if item_list:
            print_staff_list(item_list, False)
        else:
            print("Cannot retrieve item or list is empty")
    if number == 2:
        #get item by name
        pass

    if number == 3:
        # add new item
        pass
    if number == 4:
        # update existing item
        pass
    if number == 5: 
        # delete existing item
        pass

def print_menu(si, ii):
    print("Transact-Restaurant functionalities:")
    print("Area:")
    print("\t1: Restaurant Menu Items")
    print("\t2: Restaurant Staffing")
    area = int(input("Choose area: "))
    if area == 1:
        print("\t\t1: Get items list")
        print("\t\t2: Get item by name")
        print("\t\t3: Add new item")
        print("\t\t4: Update item")
        print("\t\t5: Delete item")
        option = int(input("Choose option: "))
        item_client_menu(option, ii)
    elif area == 2:
        print("\t\t1: Get staff members' list")
        print("\t\t2: Get staff member by name")
        print("\t\t3: Add new staff member")
        print("\t\t4: Update staff member")
        print("\t\t5: Delete staff member")
        option = int(input("Choose option: "))
        staff_client_menu(option, si)
    else:
        print("Incorrect area")
        exit(1)

if __name__ == '__main__':
    si = StaffInvoker()
    ii = ItemInvoker()

    while(True):
        print_menu(si, ii)

    


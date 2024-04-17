# Class that defines the Password object. Object will match values of the table: tblPassword

from .DBConnect import DBAction,DBQuery

class Password:

    # Contructor
    def __init__(self):
        print('YES')

    # Returns True or False
    def login(self, password):
        return False

    #create password. This is only called during user creation.
    def create(self, password):
        print("tbd")

    # Update Password. Password reset.
    def update(self, currentPassword, newPassword):
        print("tbd")

    # delete password. This is only called during user deletion.
    def delete(self, userEmail):
        print("delete")
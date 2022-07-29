# API for Ecommerce Application

## APIS
### Auth APIs
    1. POST /api/auth/register
    Register a user (accept username, password, type of user - buyer/seller)
    ```
        curl --location --request POST 'http://localhost:5000/api/auth/register' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'username=example' \
    --data-urlencode 'password=example' \
    --data-urlencode 'typeofuser=buyer/seller'
```
    2. POST /api/auth/login
    Let a previously registered user log in (e.g. retrieve authentication token)

### APIs for buyers
    1.GET /api/buyer/list-of-sellers
    Get a list of all sellers
    ```
    curl --location --request GET 'http://localhost:5000/api/buyer/list-of-sellers'
    ```
    2.GET /api/buyer/seller-catalog/:seller_id
    Get the catalog of a seller by seller_id
    ```
    curl --location --request GET 'http://localhost:5000/api/buyer/seller-catalog/62e284bc1c05fc2f04a0597e'
    ```
    3. POST /api/buyer/create-order/:seller_id
    Send a list of items to create an order for seller with id = seller_id
    ```
    curl --location --request POST 'http://localhost:5000/api/buyer/create-order/62e284bc1c05fc2f04a0597e' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
         "name":"mackbook pro",
    "price":100000
    },
    {
         "name":"mackbook air",
    "price":80000
    },
    {
         "name":"asus tuf",
    "price":55000
    }

]'
```

### APIs for sellers
    1.POST /api/seller/create-catalog
    Send a list of items to create a catalog for a seller
    ```
        curl --location --request POST 'http://localhost:5000/api/seller/create-catalog' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTI4NGJjMWMwNWZjMmYwNGEwNTk3ZSIsImlhdCI6MTY1OTAyMjE5MCwiZXhwIjoxNjYxNjE0MTkwfQ.kBT_Iamw7pJccO0BXhBaWCJXuFO6FX6vVUmSOKqnduY' \
    --header 'Content-Type: application/json' \
    --data-raw '[
        {
            "name":"mackbook pro",
        "price":100000
        },
        {
            "name":"mackbook air",
        "price":80000
        },
        {
            "name":"asus tuf",
        "price":55000
        }

    ]'
```
    2.GET /api/seller/orders
    Retrieve the list of orders received by a seller
    ```
    curl --location --request GET 'http://localhost:5000/api/seller/orders' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTI4NGJjMWMwNWZjMmYwNGEwNTk3ZSIsImlhdCI6MTY1OTAyMjE5MCwiZXhwIjoxNjYxNjE0MTkwfQ.kBT_Iamw7pJccO0BXhBaWCJXuFO6FX6vVUmSOKqnduY'

```
## Step Before Installation :
1. clone this project : git clone https://github.com/sahilcode17/Ecommerce-api.git 
2. Open the project in any IDE eg. VS Code or sublime
3. Make sure you have npm and nodejs install 
4. If not install from the nodejs website 

## Steps To install the project
```
npm install
npm run server
```
## Possible Error :
1. If you are not able to connect to mongodb do the following
- Create Mongodb atlas account 
- Go to dashboard there you will se connect button in that you will have connect with your application option
- copy that string and replace with the existing string in db.js file ( variable uri)
- If still not able to connect add your ip address in networks in mongodb atlas dashboard
2. If not able to run run install 
- remove the pacakages name that is causing the error and manually install them 
3. If not able to run api's 
- Check documentation for curl , past it in postman you will be able to see possible error 
    


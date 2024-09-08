# fs-103

Create A Bank Account Application

Features:
1. Deposit
2. Withdrawl
3. Watch user history actions


Client
1. React client
2. Routing mechanisem
3. Pages: Account operations, Account History
4. Account operations - form
   accountId - string
   operation - DDL Deposit/Withdrawl
   amount - number
5. Account history - Table with all the data ( button for orderBy feature if needed ) 

Server
1. Node.js express Api
2. use zod for input validation
3. HTTP GET /account/history - return array of history data [ { bankAccountId: <number> , operation: <Deposit/Withdrawl> , amount: <number> , dateTime: <string>  } ]
5. HTTP POST /account/operation -  { bankAccountId: <number>, amount: <number> , operation:  }
6. Bonus - support GET /account/history?orderBy=<amount | dateTime >


   All the Data will be saved in the Server memory.

   use the following libraries
   - zod
   - express
   - .env
   - axios


# Homework 
- watch https://www.youtube.com/watch?v=2mbHyB2VLYY
- Play with the workbench & mysql



# MySQL

# 1/9/2024

```sql

SELECT ProductID,productName,Unit as productUnit FROM Northwind.Products;

SELECT ProductID FROM Northwind.Products;

SELECT count(*) as TotalProducts FROM Northwind.Products;

SELECT * FROM Northwind.Products;

SELECT  DISTINCT(country) FROM Northwind.Suppliers;
SELECT  *  FROM Northwind.Products WHERE Price >= 30 AND price <= 46;
SELECT  *  FROM Northwind.Products WHERE Price Between 30 AND 46;
SELECT  *  FROM Northwind.Products WHERE Price Between 30 AND 46;
SELECT * FROM Northwind.Customers WHERE city = 'berlin';
SELECT LastName FROM Northwind.Employees WHERE FirstName LIKE 'a%';
SELECT  *  FROM Northwind.Products WHERE Price > 40;
SELECT count(*) FROM Northwind.Suppliers WHERE country = 'japan' or country = 'usa';

SELECT *,CONCAT(city,' ',country) FROM Northwind.Customers WHERE city <> 'berlin'

SELECT *,CONCAT(FirstName, ' ', LastName) as Full_Name FROM Northwind.Employees;

SELECT * FROM Northwind.Suppliers WHERE city in ("New Orleans", "Ann Arbor", "Tokyo") 
SELECT * FROM Northwind.Products WHERE productID >= 1  order by Price 

SELECT * FROM Northwind.Products WHERE productID >= 1  order by Price 

SELECT * FROM Northwind.Orders order by OrderDate DESC limit 5
SELECT * FROM Northwind.Products order by Price desc limit 1

SELECT ProductID, MAX(Price) FROM Northwind.Products;
SELECT * FROM Northwind.Products WHERE Price in ( SELECT MAX(Price) from Northwind.Products);

SELECT 
    *
FROM
    Northwind.Products
WHERE
    Price < (SELECT 
            AVG(Price)
        FROM
            Northwind.Products)
            
            
SELECT 
    country, COUNT(*) AS NumberOfCustomers
FROM
    Northwind.Customers
GROUP BY country
Having NumberOfCustomers <10
ORDER BY NumberOfCustomers DESC

SELECT Price, count(*) as NumberOfProductsINThePrice FROM Northwind.Products GROUP BY Price

-- SELECT 
-- FROM
-- WHERE
-- GROUP BY
-- ORDER BY
-- LIMIT


```

1. How many different cities we have in the suppliers? 
2. How many different cities we have in the customers table?  

3. What are the last names of all the employees that their first names starts with A 
4. how much products we have that count as expensive product, their price is higher than 40
5. how many suppliers we have from Japan and usa together

6. how much customers are not from berlin
7. how much suppliers we have in the list: New Orleans, Ann Arbor, Tokyo

8. what is the sum of all product prices in the table? 


# Homework
Watch - https://www.youtube.com/watch?v=7S_tz1z_5bA




# 4/9
1. Create a query that brings an average price per category ( category id )

2. create a query that return location and number of suppliers from each location.

3. create a query that return the most active customer? the customer with the highest amount of orders?

4. from Northwind.OrderDetails , OrderID and the total quantity of items per order

```sql

SELECT 
    CategoryID, AVG(price) AS avg_price
FROM
    Northwind.Products
GROUP BY CategoryID

SELECT 
    CustomerID, count(*) AS number_of_orders
FROM
    Northwind.Orders
GROUP BY CustomerID order by number_of_orders desc

SELECT 
    EmployeeID, count(*) AS number_of_orders
FROM
    Northwind.Orders
GROUP BY EmployeeID order by number_of_orders desc

SELECT 
    Country, count(*) AS number_of_suppliers
FROM
    Northwind.Suppliers
GROUP BY Country order by number_of_suppliers desc




SELECT 
    role, SUM(salary) AS Total_Sal, COUNT(*) AS Number_of_Emp
FROM
    Northwind.Employees
WHERE
    salary IS NOT NULL
GROUP BY role
ORDER BY Total_Sal DESC

```



# JOIN
1. 

```sql

SELECT 
    CategoryName, AVG(price) AS avg_price
FROM
    Northwind.Products
        JOIN
    Northwind.Categories ON Northwind.Products.CategoryID = Northwind.Categories.CategoryID
GROUP BY Northwind.Products.CategoryID


```

2. Create a query that return each product name and supplier name
3. After Writing query 2, combine also data from the categories, product name , supplier name , category name
4. write a query that return the most busy shipper name


```sql

SELECT 
    ProductName, SupplierName
FROM
    Northwind.Products
        JOIN
    Northwind.Suppliers ON Northwind.Products.SupplierID = Northwind.Suppliers.SupplierID





SELECT 
    ProductName, SupplierName, CategoryName
FROM
    Northwind.Products
        JOIN
    Northwind.Suppliers ON Northwind.Products.SupplierID = Northwind.Suppliers.SupplierID
        JOIN
    Northwind.Categories ON Northwind.Products.CategoryID = Northwind.Categories.CategoryID





SELECT 
    Northwind.Shippers.ShipperName, count(*) as number_of_orders
FROM
    Northwind.Orders
        JOIN
    Northwind.Shippers ON Northwind.Orders.ShipperID = Northwind.Shippers.ShipperID
    GROUP BY Northwind.Orders.ShipperID





SELECT 
    *
FROM
    (SELECT 
        Northwind.Shippers.ShipperName, COUNT(*) AS number_of_orders
    FROM
        Northwind.Orders
    JOIN Northwind.Shippers ON Northwind.Orders.ShipperID = Northwind.Shippers.ShipperID
    GROUP BY Northwind.Orders.ShipperID) AS table1
WHERE
    table1.number_of_orders = (SELECT 
            MAX(newTable.number_of_orders) AS maxi
        FROM
            (SELECT 
                Northwind.Shippers.ShipperName, COUNT(*) AS number_of_orders
            FROM
                Northwind.Orders
            JOIN Northwind.Shippers ON Northwind.Orders.ShipperID = Northwind.Shippers.ShipperID
            GROUP BY Northwind.Orders.ShipperID) AS newTable)

```


# Homework  
- import the new DB according the docs

write the following queries:

- Write a query that return every order and status: order id, status id (from orders) , id from order_details_status and status string from order_details_status

- What is the name of the best supplier ( suppliers + products)

- What are the names of customers + employees for each order id ( orders, customers, employees ADV: shippers)

- Write a query that returns employees and thier priviliges ( privilege_name!!!! )

- Write a query that returns purchase order details and the supplier company name

- Who is the best supplier which supply the highest amount of products - bring the first_name and last name, you can also group by number of products order them by the amount



# 8/9
```sql

SELECT 
    distinct(order_id), concat(first_name,' ', last_name) as Full_name , status_name
FROM
    northwind.order_details
        JOIN
    northwind.orders_status ON 
    northwind.order_details.status_id = northwind.orders_status.id
		JOIN northwind.orders ON 
	northwind.orders.id = northwind.order_details.order_id
		JOIN 
	northwind.customers ON northwind.customers.id = northwind.orders.customer_id




SELECT 
    supplier_id, company, COUNT(*) as numberOfProducts
FROM
    northwind.products_suppliers
         JOIN
    northwind.suppliers ON northwind.products_suppliers.supplier_id = northwind.suppliers.id
GROUP BY supplier_id order by numberOfProducts desc;


SELECT 
            northwind.employees.id AS employeeId,
            northwind.employees.first_name AS employeeName,
            COUNT(northwind.orders.id) AS numberOfOrders
    FROM
        northwind.orders
    RIGHT JOIN northwind.employees ON northwind.orders.employee_id = northwind.employees.id
    WHERE northwind.employees.country_region = "ISR"
    GROUP BY northwind.employees.id  order by numberOfOrders desc



```


# Ex 1 
- Write a query that return ALL the employees with the their privileges    
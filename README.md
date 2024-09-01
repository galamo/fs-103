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
SELECT * FROM Northwind.Products WHERE Price in ( SELECT MAX(Price) from Northwind.Products)


```

1. How many different cities we have in the suppliers? 
2. How many different cities we have in the customers table?  

3. What are the last names of all the employees that their first names starts with A 
4. how much products we have that count as expensive product, their price is higher than 40
5. how many suppliers we have from Japan and usa together

6. how much customers are not from berlin
7. how much suppliers we have in the list: New Orleans, Ann Arbor, Tokyo

8. what is the sum of all product prices in the table? 
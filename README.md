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
5. HTTP POST /account/operation -  { bankAccountId: <number>, amount: <number>  }
6. Bonus - support GET /account/history?orderBy=<amount | dateTime >


   All the Data will be saved in the Server memory.

   use the following libraries
   - zod
   - express
   - .env
   - axios

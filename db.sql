CREATE TABLE users
( 
  user_id NUMBER NOT NULL,
  first_name VARCHAR2(200 BYTE) NULL,
  last_name VARCHAR2(200 BYTE) NULL,
  email VARCHAR2(200 BYTE) NULL
);

CREATE TABLE orders
( 
  order_id NUMBER NOT NULL,
  product VARCHAR2(200 BYTE) NULL,
  user_id NUMBER NOT NULL,
);

SELECT * FROM users;

SELECT first_name, last_name, (SELECT COUNT(*) FROM orders WHERE user_id = users.id) AS order_count FROM users;

SELECT * FROM orders WHERE product = 'apple' OR product = 'banana' or product = 'orange' or product = 'pear';

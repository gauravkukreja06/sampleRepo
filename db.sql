SELECT * FROM users;

SELECT name, (SELECT COUNT(*) FROM orders WHERE user_id = users.id) AS order_count FROM users;

SELECT * FROM products WHERE category = 'fruit' OR category ='dairy';

SELECT * FROM products WHERE product_name LIKE '%shirt';

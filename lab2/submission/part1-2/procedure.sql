CREATE OR REPLACE FUNCTION test_procedure(name TEXT) 
RETURNS SETOF products 
AS
$$
    select * from products where title=$1;

$$ LANGUAGE sql;
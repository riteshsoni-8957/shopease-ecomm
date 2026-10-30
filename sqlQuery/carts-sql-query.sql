
-- AIVEN DATABASE SERVICE: CARTS


-- 1. Create carts table
CREATE TABLE IF NOT EXISTS public.carts (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "cartId" BIGINT NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    "productId" VARCHAR(50) NOT NULL,

    name TEXT NOT NULL,
    slug TEXT,
    category VARCHAR(100),
    subcategory VARCHAR(100),
    brand VARCHAR(100),
    description TEXT,

    price NUMERIC(10, 2),
    "originalPrice" NUMERIC(10, 2),
    discount NUMERIC(5, 2),
    rating NUMERIC(3, 2),
    reviews INTEGER,
    stock INTEGER,
    sku VARCHAR(100),

    images TEXT[] DEFAULT '{}',
    colors TEXT[] DEFAULT '{}',
    sizes TEXT[] DEFAULT '{}',
    features TEXT[] DEFAULT '{}',
    tags TEXT[] DEFAULT '{}',

    "isFeatured" BOOLEAN DEFAULT FALSE,
    "isNew" BOOLEAN DEFAULT FALSE,
    "isBestSeller" BOOLEAN DEFAULT FALSE,

    quantity INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 2. Give permissions to shopease_admin

GRANT USAGE ON SCHEMA public TO shopease_admin;

GRANT SELECT, INSERT, UPDATE, DELETE
ON TABLE public.carts
TO shopease_admin;

GRANT USAGE, SELECT, UPDATE
ON ALL SEQUENCES IN SCHEMA public
TO shopease_admin;


-- 3. Select all carts

SELECT * FROM public.carts;


-- 4. Find cart by ID

SELECT * FROM public.carts
WHERE id = 1;


-- 5. Find all carts by session ID

SELECT * FROM public.carts
WHERE "cartId" = 1;


-- 6. Find cart by product ID

SELECT * FROM public.carts
WHERE "productId" = 'P001';


-- 7. Find a user's cart with product details

SELECT *
FROM public.carts
WHERE "cartId" = 1
ORDER BY "createdAt" DESC;


-- 8. Update cart quantity

UPDATE public.carts
SET quantity = 2
WHERE id = 1;


-- 9. Update cart product price

UPDATE public.carts
SET price = 699
WHERE id = 1;


-- 10. Delete cart by ID

DELETE FROM public.carts
WHERE id = 1;


-- 11. Delete all carts of a user

DELETE FROM public.carts
WHERE "cartId" = 1;


-- 12. Delete all rows from carts

TRUNCATE TABLE public.carts RESTART IDENTITY;


-- 13. Drop carts table completely

DROP TABLE IF EXISTS public.carts;

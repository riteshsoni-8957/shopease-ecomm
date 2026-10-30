
-- Aiven database service users query

-- 1. create users table
CREATE TABLE IF NOT EXISTS public.users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'User',
    avatar TEXT,
    phone TEXT,
    address JSONB,
    "createdAt" DATE DEFAULT CURRENT_DATE
);

-- 2. add user
INSERT INTO public.users (
    name,
    email,
    password,
    role,
    avatar,
    phone,
    address,
    "createdAt"
)
VALUES (
    'Ritesh Soni',
    'riteshsoni35468@gmail.com',
    '123456',
    'Admin',
    'https://in.bmscdn.com/artist/anil-bajpai-33204-1728039313.jpg',
    '+91 9336675791',
    '{
        "street": "Jal Nigam",
        "city": "Gauriganj",
        "state": "Uttar Pradesh",
        "pincode": "227409",
        "country": "India"
    }'::jsonb,
    '2026-09-01'
);


-- 3. permission denied for table users
GRANT USAGE ON SCHEMA public TO shopease_admin;

GRANT SELECT, INSERT, UPDATE, DELETE
ON TABLE public.users
TO shopease_admin;

GRANT USAGE, SELECT, UPDATE
ON ALL SEQUENCES IN SCHEMA public
TO shopease_admin;


-- 4. select users
SELECT * FROM users

-- 5. find user by id
SELECT * FROM public.users
WHERE id = 1;

-- 6. find user by email
SELECT * FROM public.users
WHERE email = 'riteshsoni35468@gmail.com';

-- 7. delete user by id
DELETE FROM public.users
WHERE id = 1;

-- 8. update user
UPDATE public.users
SET
    name = 'Ritesh Soni',
    role = 'Admin',
    phone = '+91 9336675791'
WHERE id = 1;

-- 9. check table structure
SELECT
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'users'
ORDER BY ordinal_position;

-- 10. chceck table permission
SELECT
    grantee,
    privilege_type
FROM information_schema.role_table_grants
WHERE table_name = 'users';
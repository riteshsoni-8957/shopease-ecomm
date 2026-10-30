
-- AIVEN DATABASE SERVICE: CATEGORIES


-- 1. Create categories table
CREATE TABLE IF NOT EXISTS public.categories (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(150) NOT NULL UNIQUE,
    description TEXT,
    image TEXT,
    subcategories TEXT[] DEFAULT '{}',
    "isFeatured" BOOLEAN DEFAULT FALSE
);


-- 2. Insert categories data

INSERT INTO public.categories (
    name,
    slug,
    description,
    image,
    subcategories,
    "isFeatured"
)
VALUES
(
    'Men',
    'men',
    'Stylish and comfortable fashion products for men.',
    'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&q=80',
    ARRAY['T-Shirts', 'Jeans', 'Shirts', 'Blazers'],
    TRUE
),
(
    'Women',
    'women',
    'Trendy fashion and clothing collection for women.',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    ARRAY['Dresses', 'Hoodies', 'Jeans'],
    TRUE
),
(
    'Footwear',
    'footwear',
    'Comfortable and stylish footwear for everyday use.',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    ARRAY['Sneakers'],
    TRUE
),
(
    'Accessories',
    'accessories',
    'Complete your look with premium fashion accessories.',
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80',
    ARRAY['Sunglasses', 'Watches'],
    TRUE
),
(
    'Electronics',
    'electronics',
    'Modern electronics and smart gadgets for everyday life.',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    ARRAY['Headphones', 'Smart Watches', 'Computer Accessories'],
    TRUE
),
(
    'Home & Living',
    'home-living',
    'Useful and stylish products for your home.',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    ARRAY['Kitchen', 'Lighting'],
    TRUE
),
(
    'Beauty',
    'beauty',
    'Beauty and skincare products for your daily routine.',
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    ARRAY['Skincare'],
    TRUE
),
(
    'Travel',
    'travel',
    'Travel essentials designed for comfortable journeys.',
    'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80',
    ARRAY['Travel Bags'],
    FALSE
),
(
    'Sports',
    'sports',
    'Fitness and sports products for an active lifestyle.',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    ARRAY['Fitness Accessories'],
    TRUE
)
ON CONFLICT (slug) DO NOTHING;


-- 3. Give permissions to shopease_admin

GRANT USAGE ON SCHEMA public TO shopease_admin;

GRANT SELECT, INSERT, UPDATE, DELETE
ON TABLE public.categories
TO shopease_admin;

GRANT USAGE, SELECT, UPDATE
ON ALL SEQUENCES IN SCHEMA public
TO shopease_admin;


-- 4. Select all categories

SELECT * FROM public.categories;


-- 5. Find category by ID

SELECT * FROM public.categories
WHERE id = 1;


-- 6. Find category by slug

SELECT * FROM public.categories
WHERE slug = 'men';


-- 7. Update category

UPDATE public.categories
SET
    description = 'Latest fashion collection for men.',
    "isFeatured" = TRUE
WHERE id = 1;


-- 8. Delete category by ID

DELETE FROM public.categories
WHERE id = 1;


-- 9. Delete all rows from categories

TRUNCATE TABLE public.categories RESTART IDENTITY;


-- 10. Drop categories table completely

DROP TABLE IF EXISTS public.categories;

import bcrypt from 'bcryptjs';

export const data = {
    users: [    
        {
            name: 'Juan',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'David',
            email: 'notadmin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 139,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product'
        },
        {
            name: 'Adidas coat',
            category: 'coat',
            image: '/images/p2.jpg',
            price: 250,
            countInStock: 10,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Nike shoes',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Anyway Shirt',
            category: 'Shirt',
            image: '/images/p4.jpg',
            price: 119,
            countInStock: 10,
            brand: 'Anyway',
            rating: 4.8,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Adidas pant',
            category: 'pants',
            image: '/images/p5.jpg',
            price: 140,
            countInStock: 0,
            brand: 'Adidas',
            rating: 4.7,
            numReviews: 25,
            description: 'high quality product'
        },
    ]
}
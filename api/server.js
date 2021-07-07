import express from 'express';
import mongoose from 'mongoose';
import {data} from './data.js';
import userRouter from './routes/userRouter.js';

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/iwant', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id)
    if(product) {
        res.send(product)
    } else {
        res.status(404).send({message: 'Product not Found'})
    }
})

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.use('/api/users', userRouter)

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})

app.get('/', (req,res) => {
    res.send('Server is ready');    
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})
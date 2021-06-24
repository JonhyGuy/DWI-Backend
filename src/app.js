import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes';
import costumerRoutes from './routes/customers.routes';
import productRoutes from './routes/products.routes';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res )=>{
    res.json('Welcome');
});

app.use('/auth',authRoutes);
app.use('/products', productRoutes);

export default app;
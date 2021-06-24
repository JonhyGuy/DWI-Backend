import Product from '../models/product';

export const getProduct = async(req, res) => {
 const products = await Product.find();   
 res.json(products);
}

export const getProductById = (req, res) => {
    
}

export const createProduct = async (req, res) => {
    const {name, price, description, stock} = req.body;

    const newProduct = new Product({name, price, description, stock});

   const productSaved =  await newProduct.save();

    res.status(201).json(productSaved);
}
export const updateProductById = (req, res) => {

}
export const deleteProductById = (req, res) => {

}


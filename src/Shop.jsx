import { useEffect, useState } from 'react'
import axios from 'axios'
import './Shop.css'

const Item = (props) => {
    return (
        <div key={props.id} onClick={(e) => props.callback(props.id)}>
            <img src={props.img} width={200} height={200}/><br/>
            id: {props.id}<br/>
            Name: {props.name}<br/>
            Price: {props.price}<br/>
        </div>
    )
}

const Shop = () => {
    const baseURL = 'https://crispy-acorn-9w5qwwr4gxg3945j-5000.app.github.dev'
    const [cart, setCart] = useState([])
    const [products, setProduct] = useState([])

    useEffect(() => {
        axios.get(baseURL+"/api/products").then((res) => {
            setProduct(res.data)
        }).catch(e => {console.log(e)}) 
    }, [])

    const handleClick = (id) => {
        // alert("Add Success!")
        setCart([...cart, products[id]])
    }
    const clearCart = () => {
        setCart([])
    }
    const removeFromCart = (id) => {
        alert("You trying to remove {id}")
        setCart(cart.filter((item) => item.id !== id));
    };
    
    let total = 0

    const productList = products.map((item) => <Item callback={handleClick} {...item}/>)
    const cartList = cart.map((item) => (
        <li key={item.id}>
            {item.id} {item.name} {item.price} {" "} 
            <button onClick={() => removeFromCart(item.id)}>X</button>
        </li>
    ));
    
    for(let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }

    return (
    <>
        <div className="grid-container">{productList}</div>
        <h1>Cart</h1>
        <button onClick={() => clearCart()}>Clear All</button>
        <ol>{cartList}</ol>
        <h2>Total: {total} Baht</h2>
    </>
    )
}

export default Shop
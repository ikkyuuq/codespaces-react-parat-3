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
    const baseURL = 'http://localhost:3001'
    const [cart, setCart] = useState([])
    const [products, setProduct] = useState([
        {id:0,name:"Notebook Acer Swift",price:45900,img:"https://img.advice.co.th/images_nas/pic_product4/A0147295/A0147295_s.jpg"},
        {id:1,name:"Notebook Asus Vivo",price:19900,img:"https://img.advice.co.th/images_nas/pic_product4/A0146010/A0146010_s.jpg"},
        {id:2,name:"Notebook Lenovo Ideapad",price:32900,img:"https://img.advice.co.th/images_nas/pic_product4/A0149009/A0149009_s.jpg"},
        {id:3,name:"Notebook MSI Prestige",price:54900,img:"https://img.advice.co.th/images_nas/pic_product4/A0149954/A0149954_s.jpg"},
        {id:4,name:"Notebook DELL XPS",price:99900,img:"https://img.advice.co.th/images_nas/pic_product4/A0146335/A0146335_s.jpg"},
        {id:5,name:"Notebook HP Envy",price:46900,img:"https://img.advice.co.th/images_nas/pic_product4/A0145712/A0145712_s.jpg"}
    ])
    // useEffect(() => {
    //     axios.get(baseURL+"/api/products").then((res) => {
    //         setProduct(res.data)
    //     })
    // }, [])
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
import { useState } from "react";

function ProductCard(props) {
    const [Count, setCount] = useState(1);
    const onIncreaseCount = () => {
        setCount(Count + 1);
        props.onCardUpdate("INCREASE");
    }
    const onDecreaseCount = () => {
        if (Count > 0) {
            setCount(Count - 1);
        props.onCardUpdate("DECREASE");
        }
    }
    return (
        <div style={{
            display:'flex',justifyContent:'space-between',margin:'40px 180px',alignItems:'center',
        }
        }>
            <div style={{display:'flex',alignItems:'center'}}>
                <img src={props.productImage} style={{ height: '80px' }}></img>
                <div>
                    <h3 style={{ margin: '0px 0px' }}>{props.productName}</h3>
                    <p style={{ margin: '0px 0px' }}>${props.productPrice}</p>
                    <button style={{margin:'0px 0px',border:'none',backgroundColor:'white'}}>remove</button>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <button onClick={onIncreaseCount} style={{ border:'none',backgroundColor:'white',fontSize:'20px',margin:'0px 0px',color:'blue'}}><i class="ri-arrow-up-s-line"></i></button>
                <p style={{ margin: '0px 0px' }}>{Count}</p>
                <button onClick={ onDecreaseCount} style={{ margin: '0px 0px', border: 'none', backgroundColor: 'white', color:'blue',fontSize:'20px'}}><i class="ri-arrow-down-s-line"></i></button>
            </div>
        </div>
    );
}
export default ProductCard;
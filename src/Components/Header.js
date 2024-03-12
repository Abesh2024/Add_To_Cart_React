function Header(props) {
    return (
        <div style={{backgroundColor:'blue',color:'white',width:'100%'}}>
            <div style={{display:"flex",justifyContent:"space-between", width:"66vw",alignItems:'center',marginLeft:'200px'}}>
            <h1>UseReducer</h1>
            <div>
                    <i class="ri-shopping-cart-fill" style={{ fontSize: '30px', position: 'absolute' }}><p style={{ marginTop: '-48px', marginLeft: '16px', backgroundColor: 'black', padding: '0px 8px', borderRadius: '50%' }}>{props.totalCartCount}</p></i>
            </div>
        </div>
        </div>
        
    );
}

export default Header;
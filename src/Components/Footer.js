function Footer(props) {
    const deleteData = () => {
        props.delete();
    }
    return (
        <div style={{ width:"68vw",marginLeft:'200px'}}>
            <hr />
            <div style={{ display: 'flex', justifyContent:'space-between',fontSize:'24px'}}>
                <p>Total</p>
                <p>$2199.96</p>
            </div>
            <div style={{margin:'0 40%'}}>
                <button onClick={deleteData}>clear cart</button>
            </div>
        </div>
    );
}
export default Footer;
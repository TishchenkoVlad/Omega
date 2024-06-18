import "../assets/css/serviceCart.css"
import Button from "../components/Button";


function ServiceCart({ title, content, price }) {

    return (
        <div class="product-us">
            <div className="product-content">
                <h2 className="product-titleus">{title}</h2>
                <p className="product-contentus">{content}</p>
            </div>
            
            <div className="product-form">
                <p className="price">{price}</p>

                <Button>
                    Оставить заявку
                </Button>
            </div>
        </div>
    )
}

export default ServiceCart;
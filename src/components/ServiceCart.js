import serviceCart from "../assets/css/serviceCart.css"
import Button from "../components/Button";


function ServiceCart({children}) {

    return (
        <div class="product-us">
                <div class="product-titleus">
                        {children}
                </div>
                <Button>
                    Оставить заявку
                </Button>
        </div>
        
    )
}

export default ServiceCart;
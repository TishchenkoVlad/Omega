import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
            
            <div class="wrap-logo">
              <a href="" class="logo">Омега-центр</a>
            </div>
            <nav>
              <Link to="/">Главная</Link>
              <Link to="/prices" >Цены</Link>
              <Link to="/services" >Услуги</Link>
              <Link to="/news" >Новости</Link>
              <Link to="/about" >Контакты</Link>
              <Link to="/" >+7 960 612 97 17</Link>
    
              <div class="search">
                  <form action="#">
                      <input type="text" placeholder="Поиск..." name="search" />
                  </form>
              </div>
          </nav>
        </header>
    )
}

export default Header;
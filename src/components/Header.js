

function Header() {
    return (
        <header>
            
            <div class="wrap-logo">
              <a href="" class="logo">Омега-центр</a>
            </div>
            <nav>
              <a href="">Главная</a>
              <a href="{% url 'prices' %}">Цены</a>
              <a href="{% url 'services' %}">Услуги</a>
              <a href="{% url 'news' %}">Новости</a>
              <a href="{% url 'about' %}">Контакты</a>
              <a href="tel:+79606129717">+7 960 612 97 17</a>
    
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
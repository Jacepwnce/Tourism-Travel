import './Header.scss'

const  backGroundHeader = new URL('../../new-traveler/src/assets/img/Header/bg.png');


function Header() {
    return (
        <header className="header">
            <img src={backGroundHeader} alt="" srcset="" />
            <div className="header__left">
                <div className="header__left_logo">
                    
                    <span>Travel</span>
                 
                </div>
            </div>
            <div className='header__right'>
                <div className='header__right_navigations'>
                    <nav className='navigations__items'>
                        <a href="">О НАС</a>
                        <a href="">МАРШРУТЫ</a>
                        <a href="">ПРАЙС</a>
                        <a href="">КОНТАКТЫ</a>
                    </nav>
                </div>
            </div>
        </header>
    );
  }
  
  export default Header;
  
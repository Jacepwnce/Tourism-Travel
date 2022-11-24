import './Header.scss'



function Header() {
    return (
        <header className="header">
            <div className="header__left">
                <div className="header__left_logo">
                    
                    <span>Travel</span>
                </div>
            </div>
            <div className='header__right'>
                <div className='navigations'>
                    <nav>
                        <a href="">1</a>
                        <a href="">2</a>
                        <a href="">3</a>
                        <a href="">4</a>
                    </nav>
                </div>
            </div>
        </header>
    );
  }
  
  export default Header;
  
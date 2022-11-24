import './Header.scss'
import '../logo.svg'

function Header(props) {
    return (
        <header className="header">
            <div className="header__top">
                <div className="hedaer__top_logo">
                    <img src = {'logo.svg'}/>
                </div>
            </div>
        </header>
    );
  }
  
  export default Header;
  
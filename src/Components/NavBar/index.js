import { Layout, Menu} from 'antd';
import './style.css';
import CartWidget from './CartWidget';
import CategoryDropdown from './CategoryDropdown';
import {Link} from 'react-router-dom'


const { Header} = Layout;


const NavBar = () =>{
    return(
        
    <>
        <Header>
                <Link to={'/'}>    
                    <div className="logo" >
                        Jav Commerce
                    </div> 
                </Link>  
            <Menu theme="dark" mode="horizontal">               
                <Menu.Item key="3">
                    <CartWidget/>
                </Menu.Item>
                <Menu.Item key="1" className="customMenu"> 
                    <CategoryDropdown/>
                </Menu.Item>         
            </Menu>
        </Header>
    </>
    
    )


}

export default NavBar
import { Layout, Menu} from 'antd';
import './style.css';
import CartWidget from './CartWidget';
import CategoryDropdown from './CategoryDropdown'


const { Header} = Layout;


const NavBar = () =>{
    return(
        
    <>
        <Header>
        <div className="logo" >
            Jav Commerce
        </div>    
            <Menu theme="dark" mode="horizontal">               
                <Menu.Item key="3"><a href="https://www.google.com" target="blank" ><CartWidget/></a></Menu.Item>
                <Menu.Item key="1" className="customMenu"> 
                    <CategoryDropdown/>
                </Menu.Item>         
            </Menu>
        </Header>
    </>
    
    )


}

export default NavBar
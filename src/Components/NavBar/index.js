import { Layout, Menu} from 'antd';
import './style.css'
import {UserOutlined,MenuOutlined} from '@ant-design/icons';
import CartWidget from './CartWidget';

const { Header} = Layout;

const NavBar = () =>{
    return(
        
    <>
        <Header>
        <div className="logo" >
            Jav Commerce
        </div>    
        <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1" className="customMenu"><a href="https://www.google.com" target="blank" ><MenuOutlined className="customIcon"/>Menú</a></Menu.Item>
            <Menu.Item key="2" ><a href="https://www.google.com" target="blank" ><UserOutlined className="customIcon"/></a></Menu.Item>
            <Menu.Item key="3"><a href="https://www.google.com" target="blank" ><CartWidget/></a></Menu.Item>
        </Menu>
        </Header>
    </>
    
        )


}

export default NavBar
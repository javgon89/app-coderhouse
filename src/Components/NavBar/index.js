import { Layout, Menu} from 'antd';


const { Header} = Layout;

const NavBar = ()=>{
    return(
        
    <>
        <Header>
        <div className="logo" >
            Jav Commerce
        </div>    
        <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><a href="https://www.google.com" target="blank">Option 3</a></Menu.Item>
            <Menu.Item key="2"><a href="https://www.google.com" target="blank">Option 2</a></Menu.Item>
            <Menu.Item key="3"><a href="https://www.google.com" target="blank">Option 1</a></Menu.Item>
        </Menu>
        </Header>
    </>
    
        )


}

export default NavBar
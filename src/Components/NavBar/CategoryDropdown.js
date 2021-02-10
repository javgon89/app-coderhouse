import { Menu,Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import{NavLink} from 'react-router-dom'

const menu=(
        <Menu>
        <Menu.Item>
            <NavLink to={"/category/skate"} className="categoryStyle" activeClassName="selectedCategory">
                Skate
            </NavLink>
          
        </Menu.Item>
        <Menu.Item>
            <NavLink to={"/category/urban"} className="categoryStyle" activeClassName="selectedCategory" >
                Urban
            </NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to={"/category/running"} className="categoryStyle" activeClassName="selectedCategory" >
               Running
            </NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to={"/"} className="categoryStyle">
                Todas
            </NavLink>
        </Menu.Item>      
    </Menu>
    )


const CategoryDropdown = ()=> {
    return(


        <Dropdown overlay={menu}>
             <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>Categorías <DownOutlined /></div>
        </Dropdown>
    )
  };

  export default CategoryDropdown
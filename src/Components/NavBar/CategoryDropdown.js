import { Menu,Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';

const menu=(
        <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/">
            Categoría A
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/">
            Categoría B
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/">
            Categoría C
            </a>
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
import Img1 from '../img/nike.jpg';
import Img2 from '../img/nike-2.jpg';
import Img3 from '../img/vans.jpg';
import Img4 from '../img/vans-2.jpg';
import Img5 from '../img/fallen.jpg';
import Img6 from '../img/circa.jpg';
import Img7 from '../img/emerica.jpg';
import Img8 from '../img/etnies.jpg';
import Img9 from '../img/dc-1.jpg';
import Img10 from '../img/dc-2.jpg';
import Img11 from '../img/dc-3.jpg';
import Img12 from '../img/dc-4.jpg';
import Img13 from '../img/dc-5.jpg';
import Img14 from '../img/vans-3.jpg';
import {getFirestore} from '../firebase';

const dataBase = getFirestore();
const newProductsCollection = dataBase.collection('newProducts');
newProductsCollection.add(productList)


const productList=[    
    
    {title:"Zapatillas Nike SB 1", price:5000, stock:12, image:Img1, category:"urban",description:"Las Nike SB Zoom Stefan Janoski RM combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento."},
    {title:"Zapatillas Nike SB 2", price:6300, stock:13, image:Img2, category:"urban",description:"Las Nike SB Zoom Stefan Janoski RM combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento."},
    {title:"Zapatillas Vans 1", price:9000, stock:11, image:Img3, category:"urban",description:"Las Vans RF combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento." },
    {title:"Zapatillas Vans 2", price:8500, stock:10, image:Img4, category:"skate",description:"Las Vans ED Zoom Stefan Janoski RM combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento." },
    {title:"Zapatillas Fallen", price:4000, stock:9, image:Img5, category:"skate",description:"Las Fallen trooper combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento." },
    {title:"Zapatillas Circa", price:6500, stock:20, image:Img6, category:"skate",description:"Las Circa RRR combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento." },
    {title:"Zapatillas Emerica", price:7000, stock:14, image:Img7, category:"skate",description:"Las Emerica JKK combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento." },
    {title:"Zapatillas Etnies", price:6000, stock:22, image:Img8, category:"skate",description:"Las Etnies 111 combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento." },
    {title:"Zapatillas DC 1", price:4200, stock:30, image:Img9, category:"skate" ,description:"Las DC 124 combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento."},
    {title:"Zapatillas DC 2", price:5300, stock:14, image:Img10, category:"skate",description:"Las DC EE  combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento." },
    {title:"Zapatillas DC 3", price:4000, stock:30, image:Img11, category:"skate",description:"Las DC AA  combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento." },
    {title:"Zapatillas DC 4", price:5300, stock:11, image:Img12, category:"running",description:"Las DC SD  combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento." },
    {title:"Zapatillas DC 5", price:5300, stock:2, image:Img13, category:"urban",description:"Las DC EW  combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento." },
    {title:"Zapatillas Vans 3", price:5300, stock:3, image:Img14, category:"urban",description:"Las Vans Old School combinan un look minimalista con un ajuste moderno. El modelo se ha actualizado con una nueva plantilla suave y una suela exterior flexible para ofrecer un mejor contacto con la tabla desde el primer momento." },    
    ]

export default productList




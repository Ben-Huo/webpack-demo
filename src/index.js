import './style.css';
import './style.less';

import abc from '../images/pic.jpg'


// 写入到html的内容
var element = document.createElement('span');
element.innerHTML = `
<span>hello webpack</span><br>
<img src='${abc}'>
`;
document.body.appendChild(element)
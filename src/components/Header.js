import headerimg from '../images/headerimg.png'
const  Header =()=>
{
    return (
        <div className="header">
    
        <div className="headerTitles">

        <span className="headerTitleSm">React & Node </span>
        <span className="headerTitleLg">Blog </span>
        </div>
        <img src={headerimg} alt=""/>
        </div>
        )
}
export default Header;
import './Header.css'
const Header = ()=>{

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()

    return <div className="Header">
        <h3>오늘은 🗓️ </h3>
        <h1>{`${year}년 ${month}월 ${day}일`}</h1>
    </div>
}
export default Header 
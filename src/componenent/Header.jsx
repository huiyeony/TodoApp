import "./Header.css";
const Header = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <div className="Header">
      <span>{`오늘은, ${year}년 ${month}월 ${day}일`}</span>
    </div>
  );
};
export default Header;

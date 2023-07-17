import "./topBox.scss";
import { topDealUsers } from "../../data.ts";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top deals</h1>
      <div className="list">
        {topDealUsers.map((user) => {
          return (
          
            <div className="listItem" key={user.id}>
              <div className="user">
                <img src={user.img} alt="" className="user_image" />
                <div className="user_info">
                <span className="user_fullname">{user.username}</span>
                <span className="user_email">{user.email}</span>
                </div>
              </div>
              <span className="amount">{user.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopBox;

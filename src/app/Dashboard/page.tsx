import React from "react";
import MenuCard from "../components/organisms/Card/MenuCard";
const testCardList = [
  { source: "/next.svg", title: "aaa", text: "sumple text" },
  { source: "/next.svg", title: "bbb", text: "sumple text" },
  { source: "/next.svg", title: "ccc", text: "sumple text" },
  { source: "/next.svg", title: "ddd", text: "sumple text" },
  { source: "/next.svg", title: "eee", text: "sumple text" },
  { source: "/next.svg", title: "fff", text: "sumple text" },
  { source: "/next.svg", title: "ggg", text: "sumple text" },
];

const user = { userName: "Taro", userId: "001" };

const page = () => {
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <h2 className=" text-3xl">myMenu</h2>
        <div className="flex gap-3 items-center">
          <p>{user.userName}さんようこそ</p>
          <p>userId:{user.userId}</p>
        </div>
      </div>
      <hr />
      <div className="my-8 flex flex-wrap  gap-[4rem]">
        {testCardList.map((item) => {
          return (
            <MenuCard
              key={item.title}
              thumbneil={item.source}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;

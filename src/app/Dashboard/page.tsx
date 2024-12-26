import React from "react";
import MenuCard from "../components/organisms/Card/MenuCard";
const testCardList = [
  {
    source: "/thumbnail.png",
    title: "契約中の案件を確認する",
    text: "sample text",
  },
  { source: "/thumbnail.png", title: "終了した契約一覧", text: "sample text" },
  { source: "/thumbnail.png", title: "請求書発行", text: "sample text" },
  { source: "/thumbnail.png", title: "月別請求額確認", text: "sample text" },
  { source: "/thumbnail.png", title: "確定申告用機能", text: "sample text" },
  { source: "/thumbnail.png", title: "給与明細", text: "sample text" },
  { source: "/thumbnail.png", title: "個人情報編集", text: "sample text" },
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

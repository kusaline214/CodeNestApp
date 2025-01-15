import React from "react";
import MenuCard from "../components/organisms/Card/MenuCard";
import Link from "next/link";

type testCardListTypes = {
  source: string;
  title: string;
  text: string;
  href: string;
  target?: string;
  rel?: string;
};
const testCardList: testCardListTypes[] = [
  {
    source: "/card1.jpg",
    title: "貸与PC環境構築",
    text: "FigJamで弊社のプロジェクト内容が確認できます。",
    href: "https://www.figma.com/board/xfNXYPvsNxXj2k6PmGqK0o/%E7%84%A1%E9%A1%8C?node-id=0-1&t=5t8C7Od40mChrlqt-1",
    target: "_brank",
    rel: "noopener noreferrer",
  },
  {
    source: "/thumbnail.png",
    title: "終了した契約一覧",
    text: "sample text",
    href: "",
  },
  {
    source: "/thumbnail.png",
    title: "請求書発行",
    text: "sample text",
    href: "",
  },
  {
    source: "/thumbnail.png",
    title: "月別請求額確認",
    text: "sample text",
    href: "",
  },
  {
    source: "/thumbnail.png",
    title: "確定申告用機能",
    text: "sample text",
    href: "",
  },
  {
    source: "/thumbnail.png",
    title: "給与明細",
    text: "sample text",
    href: "",
  },
  {
    source: "/thumbnail.png",
    title: "個人情報編集",
    text: "sample text",
    href: "",
  },
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
        {testCardList.map((item, index) => {
          return (
            <Link
              href={item.href}
              target={item.target}
              rel={item.rel}
              key={index}
            >
              <MenuCard
                thumbneil={item.source}
                title={item.title}
                text={item.text}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;

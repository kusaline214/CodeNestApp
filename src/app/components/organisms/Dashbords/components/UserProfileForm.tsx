"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// 都道府県リスト
const prefectures = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];

const mbtiOptions = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];
// コンポーネントの型を定義 (TypeScript を使用)
type UserProfileFormProps = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

const UserProfileForm: React.FC<UserProfileFormProps> = ({
  openModal,
  setOpenModal,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, // ここでエラー情報を取得
  } = useForm();
  // フォーム管理用のフック
  const [isPrefectureOpen, setIsPrefectureOpen] = useState(false);
  const [selectedPrefecture, setSelectedPrefecture] = useState("");
  const [selectedMbti, setSelectedMbti] = useState("");
  const [isMbtiOpen, setIsMbtiOpen] = useState(false);
  const onSubmit = (data: Record<string, unknown>) => {
    alert(`Form submitted with data: ${JSON.stringify(data)}`);
    setOpenModal(false); // モーダルを閉じる
    reset(); // フォームをリセット
  };

  // モーダル表示中に背景を固定する処理
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.classList.remove("no-scroll"); // クリーンアップ
    };
  }, [openModal]);

  return (
    <div className="" style={{ zIndex: 10 }}>
      {/* モーダルの実装 */}
      {openModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "90%",
              maxHeight: "80vh",
              overflowY: "auto",
              maxWidth: "400px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2>ユーザー追加</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div
                style={{ display: "flex", gap: "16px", marginBottom: "16px" }}
              >
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", marginBottom: "8px" }}>
                    名前
                  </label>
                  <input
                    {...register("lastName", { required: true })}
                    type="text"
                    placeholder="姓を入力"
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      visibility: "hidden",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    ダミー
                  </label>
                  <input
                    {...register("firstName", { required: true })}
                    type="text"
                    placeholder="名を入力"
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              <div
                style={{ display: "flex", gap: "16px", marginBottom: "16px" }}
              >
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", marginBottom: "8px" }}>
                    名前(フリガナ)
                  </label>
                  <input
                    {...register("lastNameKana", {
                      required: "姓(フリガナ)は必須項目です",
                      validate: (value) =>
                        /^[ァ-ンー]*$/.test(value) ||
                        "カタカナのみ入力してください",
                    })}
                    type="text"
                    placeholder="セイを入力"
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      boxSizing: "border-box",
                    }}
                  />
                  {errors.lastNameKana && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {String(errors.lastNameKana.message)}
                    </p>
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      visibility: "hidden",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    ダミー
                  </label>
                  <input
                    {...register("firstNameKana", {
                      required: "名(フリガナ)は必須項目です",
                      validate: (value) =>
                        /^[ァ-ンー]*$/.test(value) ||
                        "カタカナのみ入力してください",
                    })}
                    type="text"
                    placeholder="メイを入力"
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      boxSizing: "border-box",
                    }}
                  />
                  {errors.firstNameKana && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {String(errors.firstNameKana.message)}
                    </p>
                  )}
                </div>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  メールアドレス
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="メールアドレスを入力"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  電話番号
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  placeholder="電話番号を入力"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  郵便番号
                </label>
                <input
                  {...register("zipcode", { required: true })}
                  type="text"
                  placeholder="郵便番号を入力"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  maxLength={8} // 郵便番号の形式 (XXX-XXXX) に合わせて最大文字数を指定
                  onChange={(e) => {
                    // 入力値を取得
                    let value = e.target.value;

                    // 数字とハイフン以外を削除
                    value = value.replace(/[^0-9]/g, "");

                    // 3文字目にハイフンを自動追加
                    if (value.length > 3) {
                      value = `${value.slice(0, 3)}-${value.slice(3)}`;
                    }

                    // 値を手動でフォームにセット
                    e.target.value = value;
                  }}
                />
              </div>

              <div style={{ marginBottom: "16px", position: "relative" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  都道府県
                </label>
                <div
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "8px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => setIsPrefectureOpen(!isPrefectureOpen)}
                >
                  <span>{selectedPrefecture || "都道府県を選択"}</span>
                  <span
                    style={{
                      border: "6px solid transparent",
                      borderTopColor: "#000",
                    }}
                  ></span>
                </div>
                {isPrefectureOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%", // 開いたリストを親要素の下に表示
                      left: 0,
                      width: "100%",
                      maxHeight: "200px",
                      overflowY: "auto",
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      zIndex: 9999,
                    }}
                  >
                    {prefectures.map((prefecture, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedPrefecture(prefecture);
                          setIsPrefectureOpen(false);
                        }}
                        style={{
                          padding: "8px",
                          cursor: "pointer",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        {prefecture}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  市区町村
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="市区町村を入力"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  番地
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="番地を入力"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  ビル・マンション名・部屋番号
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="ビル・マンション名を入力"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  生年月日
                </label>
                <input
                  {...register("birthdate", { required: true })}
                  type="date"
                  placeholder="生年月日を入力"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div style={{ marginBottom: "16px", position: "relative" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  MBTI
                </label>
                <div
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "8px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => setIsMbtiOpen(!isMbtiOpen)}
                >
                  {" "}
                  <span>{selectedMbti || "MBTIを選択"}</span>
                  <span
                    style={{
                      border: "6px solid transparent",
                      borderTopColor: "#000",
                      content: "''",
                    }}
                  ></span>
                </div>
                {isMbtiOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%", // リストを親要素の下に表示
                      left: 0,
                      width: "100%",
                      maxHeight: "200px",
                      overflowY: "auto",
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      zIndex: 9999,
                    }}
                  >
                    {mbtiOptions.map((mbti, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedMbti(mbti);
                          setIsMbtiOpen(false);
                        }}
                        style={{
                          padding: "8px",
                          cursor: "pointer",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        {mbti}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "8px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#ccc",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  登録
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileForm;

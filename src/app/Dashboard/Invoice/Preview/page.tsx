import React from "react";
type mockDataRypes = {
  name: string;
  address: string;
  invoiceDate: string;
  dueDate: string;

  items: [
    {
      name: string;
      quantity: string;
      unitPrice: string;
      total: number;
    }
  ];
};
const mockData = {
  name: "宛名",
  address: "住所",
  invoiceDate: "請求日",
  dueDate: "支払い期限",
  items: [
    {
      name: "item.name",
      quantity: "quantity",
      unitPrice: "unitPrice",
      total: 100,
    },
    {
      name: "item.name",
      quantity: "quantity",
      unitPrice: "unitPrice",
      total: 100,
    },
    {
      name: "item.name",
      quantity: "quantity",
      unitPrice: "unitPrice",
      total: 100,
    },
    {
      name: "item.name",
      quantity: "quantity",
      unitPrice: "unitPrice",
      total: 100,
    },
    {
      name: "item.name",
      quantity: "quantity",
      unitPrice: "unitPrice",
      total: 100,
    },
  ],
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const page = (data: any) => {
  return (
    <div>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>請求書</h1>
        <p>
          <strong>宛名:</strong> {mockData.name}
        </p>
        <p>
          <strong>住所:</strong> {mockData.address}
        </p>
        <p>
          <strong>請求日:</strong> {mockData.invoiceDate}
        </p>
        <p>
          <strong>支払い期限:</strong> {mockData.dueDate}
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                項目
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                数量
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                単価
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                合計
              </th>
            </tr>
          </thead>
          <tbody>
            {mockData.items.map((item, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.name}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.quantity}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.unitPrice}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>合計金額: {data.totalAmount}円</h2>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./week1.css";

const Week1 = ({ menuListData, handlerClick }) => {
  {
    /* 餐點管理工具
    Level 1：將菜單轉為資料格式 
    Level 2：可以重新設定菜單的庫存數量 
      (渲染畫面） 
        (菜單調整品項按鈕) 
    Level 3（挑戰）：可以重新設定品項名稱*/
  }

  //     id: 1,
  //     name: "珍珠奶茶",
  //     description: "香濃奶茶搭配QQ珍珠",
  //     price: 50,
  //     quantity: 20,
  //   },
  //   {
  //     id: 2,
  //     name: "冬瓜檸檬",
  //     description: "清新冬瓜配上新鮮檸檬",
  //     price: 45,
  //     quantity: 18,
  //   },
  //   {
  //     id: 3,
  //     name: "翡翠檸檬",
  //     description: "綠茶與檸檬的完美結合",
  //     price: 55,
  //     quantity: 34,
  //   },
  //   {
  //     id: 4,
  //     name: "四季春茶",
  //     description: "香醇四季春茶，回甘無比",
  //     price: 45,
  //     quantity: 10,
  //   },
  //   {
  //     id: 5,
  //     name: "阿薩姆奶茶",
  //     description: "阿薩姆紅茶搭配香醇鮮奶",
  //     price: 50,
  //     quantity: 25,
  //   },
  //   {
  //     id: 6,
  //     name: "檸檬冰茶",
  //     description: "檸檬與冰茶的清新組合",
  //     price: 45,
  //     quantity: 20,
  //   },
  //   {
  //     id: 7,
  //     name: "芒果綠茶",
  //     description: "芒果與綠茶的獨特風味",
  //     price: 55,
  //     quantity: 18,
  //   },
  //   {
  //     id: 8,
  //     name: "抹茶拿鐵",
  //     description: "抹茶與鮮奶的絕配",
  //     price: 60,
  //     quantity: 20,
  //   },
  // ];
  return (
    <div>
      <h3>第一週作業</h3>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>品項名稱</th>
            <th>品項描述</th>
            <th>品項價格</th>
            <th>庫存</th>
            <th>編輯</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
          {menuListData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.itemName}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <Button
                    type="button"
                    variant="primary"
                    className="addItem"
                    onClick={() => handlerClick(item.id, "add")}
                  >
                    +
                  </Button>
                  <span className="p-2">{item.quantity}</span>
                  <Button
                    type="button"
                    variant="danger"
                    className="minusItem"
                    onClick={() => handlerClick(item.id)}
                  >
                    -
                  </Button>
                </td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Week1;

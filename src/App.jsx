//可用箭頭函式或是function
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Week1 from "./components/week1/Week1";
import Week2 from "./components/week2/Week2";
import Week3 from "./components/week3/Week3";
import Week4 from "./components/week4/Week4";
const menuList = [
  {
    id: 1,
    itemName: "珍珠奶茶",
    description: "香濃奶茶搭配QQ珍珠",
    price: 50,
    quantity: 20,
  },
  {
    id: 2,
    itemName: "冬瓜檸檬",
    description: "清新冬瓜配上新鮮檸檬",
    price: 45,
    quantity: 18,
  },
  {
    id: 3,
    itemName: "翡翠檸檬",
    description: "綠茶與檸檬的完美結合",
    price: 55,
    quantity: 34,
  },
  {
    id: 4,
    itemName: "四季春茶",
    description: "香醇四季春茶，回甘無比",
    price: 45,
    quantity: 10,
  },
  {
    id: 5,
    itemName: "阿薩姆奶茶",
    description: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
    quantity: 25,
  },
  {
    id: 6,
    itemName: "檸檬冰茶",
    description: "檸檬與冰茶的清新組合",
    price: 45,
    quantity: 20,
  },
  {
    id: 7,
    itemName: "芒果綠茶",
    description: "芒果與綠茶的獨特風味",
    price: 55,
    quantity: 18,
  },
  {
    id: 8,
    itemName: "抹茶拿鐵",
    description: "抹茶與鮮奶的絕配",
    price: 60,
    quantity: 20,
  },
];
function App() {
  const [menuListData, setmenuListData] = useState(menuList);
  const [editItem, setEditItem] = useState(null);
  const handlerClick = (id, state) => {
    //console.log("有成功執行這行"); //click事件有執行這行
    const newData = menuListData.map((data) => {
      return data.id === id
        ? {
            ...data,
            quantity:
              state === "minus"
                ? data.quantity > 0
                  ? data.quantity - 1
                  : 0
                : data.quantity + 1,
          }
        : data;
    });

    setmenuListData(newData);
    // console.log(menuListData); //也有執行這行
  };
  //編輯品項內容-這裡最重要的就是要取得“要被編輯的該品項資料”
  const handleEditClick = (id) => {
    //透過.find方法取的該項要被編輯的產品資料
    const editData = menuListData.find((data) => {
      return data.id === id;
    });
    //把需要編輯的該品項資料藉由useState寫入
    setEditItem(editData);
    console.log(editData);
  };

  const handleChangeKeyValue = (e) => {
    const { name, value } = e.target;
    setEditItem((data) => ({ ...data, [name]: value }));
  };

  const submit = () => {
    console.log("submit");
    // const { id, itemName, description, price } = editItem;
    const newEditData = menuListData.map((data) => {
      return data.id === editItem.id
        ? {
            ...data,
            itemName: editItem.itemName,
            description: editItem.description,
            price: editItem.price,
          }
        : data;
    });
    setEditItem(newEditData);
    console.log(newEditData); //有執行這行
    cancel();
  };
  const cancel = () => {
    setEditItem(null);
  };

  return (
    <div>
      <Header />
      <Week1
        editItem={editItem}
        menuListData={menuListData}
        handlerClick={handlerClick}
        handleEditClick={handleEditClick}
        handleChangeKeyValue={handleChangeKeyValue}
        submit={submit}
        cancel={cancel}
      />
      <hr />
      <Week2 />
      <hr />
      <Week3 />
      <hr />
      <Week4 />
    </div>
  );
}

export default App;

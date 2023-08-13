import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import "./week1.css";

function Week1({
  menuListData,
  handlerClick,
  handleEditClick,
  handleChangeKeyValue,
  editItem,
  submit,
  cancel,
}) {
  {
    /* 餐點管理工具
    Level 1：將菜單轉為資料格式
    Level 2：可以重新設定菜單的庫存數量
      (渲染畫面）
        (菜單調整品項按鈕)
    Level 3（挑戰）：可以重新設定品項名稱*/
  }

  return (
    <div className="container">
      <h3>第一週作業</h3>
      <hr />
      <div className="d-flex">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>品項名稱</th>
              <th>品項描述</th>
              <th>品項價格</th>
              <th>庫存</th>
              <th>編輯</th>
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
                      onClick={() => handlerClick(item.id)}
                    >
                      +
                    </Button>
                    <span className="p-2">{item.quantity}</span>
                    <Button
                      type="button"
                      variant="danger"
                      className="minusItem"
                      onClick={() => handlerClick(item.id, "minus")}
                    >
                      -
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="success"
                      type="button"
                      onClick={() => handleEditClick(item.id)}
                    >
                      編輯品項
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {editItem !== null ? (
          <Card>
            <Card.Header>編輯品項</Card.Header>
            <Card.Body>
              <div className="mb-3">
                <Form.Label htmlFor="editName">品項名稱</Form.Label>
                <Form.Control
                  type="text"
                  id="editName"
                  name="itemName"
                  value={editItem.itemName}
                  onChange={handleChangeKeyValue}
                />
              </div>
              <div className="mb-3">
                <Form.Label htmlFor="editDescrip">品項描述</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  id="editDescrip"
                  value={editItem.description}
                  onChange={handleChangeKeyValue}
                />
              </div>
              <div className="mb-3">
                <Form.Label htmlFor="editPrice">品項價格</Form.Label>
                <Form.Control
                  type="number"
                  id="editPrice"
                  name="price"
                  min="0"
                  value={editItem.price}
                  onChange={handleChangeKeyValue}
                />
              </div>

              <Stack direction="horizontal" gap={4}>
                <Button variant="success" onClick={submit}>
                  保存
                </Button>
                <div className="vr" />
                <Button variant="secondary" onClick={cancel}>
                  取消
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Week1;

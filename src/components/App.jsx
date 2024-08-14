import React, { useState } from "react";

// 定義名為 App 的功能性組件
function App() {
  // 使用 useState 鉤子來管理 fullName 狀態，初始值為一個包含 fName 和 lName 的對象，
  // 大括號第二功能，定義物件。兩者初始值都為空字符串
  const [fullName, setFullName] = useState({
    fName: "", // 儲存名字
    lName: "", // 儲存姓氏
  });

  // 定義名為 handleChange 的函數，用於處理輸入變更事件
  function handleChange(event) {
    // 解構賦值，從事件目標中提取出 value 和 name
    //　在外部獲取event的屬性，透過新定義的變量，在set函數內直接調用
    const { value, name } = event.target;

    // 使用 setFullName 更新狀態，prevValue 是前一個狀態的值
    setFullName((prevValue) => {
      // 判斷輸入框的 name 屬性是 "fName" 還是 "lName"
      if (name === "fName") {
        // 如果是 "fName"，更新 first name 的值，保留 last name 的值不變
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        // 如果是 "lName"，更新 last name 的值，保留 first name 的值不變
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  // 返回組件的 JSX 結構
  return (
    <div className="container">
      {/* 顯示包含 greeting 的標題，動態顯示 fullName 中的 fName 和 lName */}
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      {/* 表單元素 */}
      <form>
        {/* 用於輸入 first name 的輸入框，變更時調用 handleChange 函數 */}
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        {/* 用於輸入 last name 的輸入框，變更時調用 handleChange 函數 */}
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        {/* 提交按鈕 */}
        <button>Submit</button>
      </form>
    </div>
  );
}

// 將 App 組件作為預設導出
export default App;

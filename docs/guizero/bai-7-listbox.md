# Bài 7: ListBox trong guizero

## 1. ListBox là gì?

`ListBox` là danh sách lựa chọn cho phép người dùng chọn **một mục** hoặc **nhiều mục**.
Thường dùng trong các menu chọn tỉnh, danh sách sản phẩm, danh sách người dùng, v.v.

---

## 2. Cú pháp tạo ListBox

```python
from guizero import App, ListBox

app = App()
listbox = ListBox(app, items=["A", "B", "C"])
app.display()
```

---

## 3. Các thuộc tính quan trọng

### ➤ `items`

Danh sách các mục hiển thị.

```python
listbox.items = ["Item 1", "Item 2"]
```

### ➤ `value`

Lấy mục đang được chọn.

```python
selected = listbox.value
listbox.value = "Item 2"
```

### ➤ Chọn nhiều mục (`multiselect=True`)

```python
box = ListBox(app, items=["A", "B", "C"], multiselect=True)
```

### ➤ Thêm và xoá mục

```python
listbox.append("New item")
listbox.remove("A")
```

### ➤ Lấy danh sách tất cả mục đang chọn (nếu multiselect)

```python
selected = listbox.value
```

---

## 4. Sự kiện khi chọn mục

```python
def on_select():
    print("Đã chọn:", listbox.value)

listbox = ListBox(app, items=["A", "B"], command=on_select)
```

---

## 5. Ví dụ đầy đủ

```python
from guizero import App, ListBox, Text, PushButton, info

app = App(title="Demo ListBox")

Text(app, "Chọn một món ăn:")
foods = ["Bánh mì", "Phở", "Bún bò", "Cơm tấm"]

box = ListBox(app, items=foods, width=20, height=6)

def show_choice():
    info("Bạn chọn", box.value)

PushButton(app, text="Xác nhận", command=show_choice)

app.display()
```

---

# 🎯 BÀI TẬP LUYỆN TẬP

## **Bài tập 1 – Chọn màu**

Tạo ListBox gồm: `"Red", "Green", "Blue"`.
Khi bấm nút "Hiển thị", hiện thông báo:
**"Bạn đã chọn: màu"**

---

## **Bài tập 2 – Chọn nhiều sở thích**

Tạo ListBox `multiselect=True` với các mục:
`"Bóng đá", "Âm nhạc", "Du lịch", "Đọc sách"`
Nút "Xem kết quả" → hiển thị **danh sách tất cả mục được chọn**.

Gợi ý: `",".join(listbox.value)`.

---

## **Bài tập 3 – Danh sách động**

Tạo giao diện với:

* 1 TextBox để nhập mục mới
* 1 nút “Thêm” → thêm vào ListBox
* 1 nút “Xoá mục đang chọn” → xoá mục được chọn trong ListBox


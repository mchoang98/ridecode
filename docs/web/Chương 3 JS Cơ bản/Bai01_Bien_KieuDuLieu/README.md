# Bài 01: Biến và Kiểu dữ liệu 

## Mục tiêu bài học
- Hiểu được các cách khai báo biến trong JavaScript (`var`, `let`, `const`)
- Nắm được các kiểu dữ liệu cơ bản trong JavaScript
- Phân biệt được phạm vi (scope) và khả năng thay đổi (mutable/immutable) của biến
- Áp dụng được các toán tử số học, so sánh và logic trong biểu thức điều kiện

## Nội dung chính

### 1. Khai báo biến
- `var`: khai báo kiểu cũ, có phạm vi function
- `let`: khai báo biến có thể thay đổi, phạm vi block
- `const`: khai báo hằng số không thể thay đổi, phạm vi block

Ví dụ:
```js
let name = "Alice";
const PI = 3.14;
var age = 18;
```

### 2. Kiểu dữ liệu cơ bản
| Kiểu dữ liệu | Ví dụ |
|--------------|-------|
| Number       | `42`, `3.14`, `-7` |
| String       | `"hello"`, `'world'` |
| Boolean      | `true`, `false` |
| Undefined    | Biến chưa gán giá trị |
| Null         | Giá trị rỗng cố ý |
| Object       | `{name: "Phú", age: 25}` |
| Array        | `[1, 2, 3]` |

### 3. Phạm vi biến
- `var` có phạm vi toàn hàm (function scope)
- `let` và `const` có phạm vi khối (block scope – ví dụ trong `if`, `for`)

Ví dụ:
```js
if (true) {
  var x = 1;
  let y = 2;
}
console.log(x); // OK
console.log(y); // Error
```

### 4. Toán tử phổ biến
#### Toán tử số học:
`+`, `-`, `*`, `/`, `%`

#### Toán tử so sánh:
`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

#### Toán tử logic:
`&&` (và), `||` (hoặc), `!` (phủ định)

Ví dụ:
```js
let a = 5, b = 10;
console.log(a < b && b < 20); // true
```


## Bài tập

### Bài 1 – Kiểm tra tuổi đủ điều kiện
Yêu cầu người dùng nhập vào tuổi. Nếu từ 18 tuổi trở lên thì in ra "Bạn đủ tuổi", ngược lại in "Bạn chưa đủ tuổi".

---

### Bài 2 – Tính diện tích hình chữ nhật
Viết chương trình khai báo chiều dài và chiều rộng hình chữ nhật, tính diện tích và in ra màn hình.

---

### Bài 3 – Kiểm tra số chẵn/lẻ
Yêu cầu người dùng nhập vào một số bất kỳ. In ra thông báo đó là số chẵn hay số lẻ.

---

### Bài 4 – So sánh hai số
Yêu cầu người dùng nhập vào hai số. In ra số lớn hơn trong hai số, hoặc thông báo nếu chúng bằng nhau.

---

### Bài 5 – Tính chỉ số BMI
Viết chương trình yêu cầu người dùng nhập cân nặng (kg) và chiều cao (m). Tính và hiển thị chỉ số BMI theo công thức:


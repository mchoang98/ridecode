# Bài 08 - Dom

## Mục tiêu bài học

* Hiểu cách lấy dữ liệu từ các thẻ form: input, radio, checkbox, select
* Biết thao tác DOM để xử lý dữ liệu form
* Thực hành xử lý sự kiện `submit`, `input`, `change`
* Hiểu cách ngăn reload trang khi submit form
* Biết validate (kiểm tra hợp lệ) dữ liệu người dùng nhập

---

## Nội dung chính

### 1. Các thành phần cơ bản trong Form HTML

```html
<form id="myForm">
  <input type="text" name="username" placeholder="Tên người dùng" />
  <input type="password" name="password" placeholder="Mật khẩu" />
  <input type="checkbox" name="agree" /> Đồng ý
  <button type="submit">Đăng nhập</button>
</form>
```

---

### 2. Bắt sự kiện `submit` và lấy dữ liệu

```js
let form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Ngăn reload trang

  let username = form.username.value;
  let password = form.password.value;
  let agreed = form.agree.checked;

  console.log(username, password, agreed);
});
```

---

### 3. Lấy dữ liệu từ radio, select, checkbox

```html
<select id="city">
  <option value="hanoi">Hà Nội</option>
  <option value="hcm">TP.HCM</option>
</select>
```

```js
let selectedCity = document.getElementById("city").value;
```

```html
<input type="radio" name="gender" value="male" checked /> Nam
<input type="radio" name="gender" value="female" /> Nữ
```

```js
let gender = document.querySelector('input[name="gender"]:checked').value;
```

---

### 4. Validate dữ liệu người dùng nhập

```js
if (username.trim() === "") {
  alert("Vui lòng nhập tên người dùng");
  return;
}
if (password.length < 6) {
  alert("Mật khẩu phải từ 6 ký tự trở lên");
  return;
}
```

---

### 5. Hiển thị dữ liệu ra giao diện

```js
document.getElementById("result").innerText = `Xin chào ${username}`;
```

---

### 6. Ví dụ đầy đủ: Form Đăng ký đơn giản

```html
<form id="signupForm">
  <input name="email" placeholder="Email">
  <input name="password" type="password" placeholder="Mật khẩu">
  <button>Đăng ký</button>
</form>

<p id="result"></p>

<script>
  let form = document.getElementById("signupForm");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let email = form.email.value;
    let password = form.password.value;
    document.getElementById("result").innerText = `Tài khoản ${email} đã đăng ký!`;
  });
</script>
```

---

## Bài tập

### Bài 1 – Hiển thị tên người dùng

Tạo form với 1 ô input tên, 1 nút "Hiển thị". Khi nhấn, hiển thị ra `<p>` lời chào với tên vừa nhập.

---

### Bài 2 – Kiểm tra độ dài mật khẩu

Tạo form gồm input mật khẩu. Khi nhấn submit, kiểm tra nếu mật khẩu ít hơn 6 ký tự thì cảnh báo lỗi.

---

### Bài 3 – Tính chỉ số BMI

Tạo form gồm input chiều cao (cm) và cân nặng (kg). Khi submit, tính và hiển thị chỉ số BMI.

---

### Bài 4 – Đăng ký môn học (checkbox)

Tạo form với nhiều checkbox là tên các môn học. Khi submit, in ra danh sách môn học đã chọn.

---

### Bài 5 – Tạo bảng thông tin người dùng

Tạo form nhập tên, email, giới tính (radio), thành phố (select). Khi nhấn "Lưu", thêm dòng mới vào bảng hiển thị bên dưới.


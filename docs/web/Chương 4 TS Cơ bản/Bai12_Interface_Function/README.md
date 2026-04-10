# Bai12\_Interface\_Function

## Mục tiêu bài học

* Hiểu interface trong TypeScript là gì và mục đích sử dụng
* Biết cách định nghĩa interface cho object và function
* Biết dùng interface để kiểm soát kiểu dữ liệu
* Làm việc với function type và optional parameter
* Áp dụng interface trong việc thiết kế hệ thống code rõ ràng hơn

---

## Nội dung chính

### 1. Interface là gì?

Interface dùng để **mô tả hình dạng (shape)** của một object hoặc function. Nó là một bản hợp đồng về kiểu, giúp TypeScript kiểm tra chặt chẽ dữ liệu.

---

### 2. Interface cho Object

```ts
interface Person {
  name: string;
  age: number;
  isStudent?: boolean; // optional
}

let p1: Person = {
  name: "Phú",
  age: 22
};
```

> Dùng `?` để biến một thuộc tính thành tùy chọn.

---

### 3. Interface cho Function (Function Type)

```ts
interface SumFunction {
  (a: number, b: number): number;
}

const cong: SumFunction = (x, y) => x + y;
```

---

### 4. Interface mở rộng (extends)

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let myDog: Dog = {
  name: "LuLu",
  breed: "Husky"
};
```

---

### 5. Optional và Default Parameter trong hàm

```ts
function sayHi(name: string = "bạn"): void {
  console.log("Xin chào", name);
}

sayHi(); // Xin chào bạn
sayHi("Phú"); // Xin chào Phú
```

---

### 6. Interface kết hợp với Class (nâng cao)

```ts
interface Car {
  brand: string;
  drive(): void;
}

class Toyota implements Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive() {
    console.log(`Đang lái xe ${this.brand}`);
  }
}

const xe = new Toyota("Vios");
xe.drive();
```

---

## Bài tập

### Bài 1 – Tạo interface cho User

Định nghĩa một `User` có: `username`, `email`, `isActive`. Tạo 2 user và in ra thông tin.

---

### Bài 2 – Interface function cộng 2 số

Tạo interface mô tả hàm nhận vào 2 số, trả về tổng. Cài đặt hàm đó và thử truyền vào các giá trị khác nhau.

---

### Bài 3 – Interface kế thừa

Tạo interface `Product` có `name`, `price`. Tạo interface `Book` kế thừa `Product` và thêm `author`. Khởi tạo 2 book.

---

### Bài 4 – Optional parameter

Viết hàm `greet(name?: string)` hiển thị `"Hello"` + tên nếu có, còn không thì in `"Hello bạn"`.

---

### Bài 5 – Kết hợp interface và class

Tạo interface `Animal` có `name` và `makeSound()`. Viết class `Cat` triển khai interface đó.



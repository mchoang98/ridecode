Dưới đây là phiên bản **Bài 15 – Ôn tập TypeScript**, tập trung củng cố toàn bộ kiến thức TypeScript cơ bản đã học từ bài 11 đến 14:

---

# Bai15\_Ontap\_TypeScript

## Mục tiêu bài học

* Hệ thống hóa toàn bộ kiến thức đã học trong TypeScript
* Phân biệt rõ cách sử dụng các tính năng: kiểu dữ liệu, interface, function, class, generic
* Nhận diện lỗi thường gặp khi code TypeScript
* Thực hành các bài tập tổng hợp để củng cố kỹ năng viết code TypeScript rõ ràng, an toàn

---

## Nội dung chính

### 1. Kiểu dữ liệu cơ bản trong TS

```ts
let username: string = "Phú";
let age: number = 22;
let isAdmin: boolean = false;
let tags: string[] = ["typescript", "js"];
let anything: any = 123;
```

---

### 2. Interface và Type Alias

```ts
interface User {
  username: string;
  age: number;
  isActive?: boolean;
}

type Status = "active" | "inactive";
```

---

### 3. Hàm có kiểu rõ ràng

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

function sum(a: number, b: number): number {
  return a + b;
}
```

---

### 4. Generic Function & Constraint

```ts
function identity<T>(arg: T): T {
  return arg;
}

function printLength<T extends { length: number }>(val: T): void {
  console.log(val.length);
}
```

---

### 5. Class và kế thừa

```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} barks`);
  }
}
```

---

### 6. Access Modifier: `public`, `private`, `protected`

```ts
class Account {
  private balance: number;
  constructor(balance: number) {
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }
}
```

---

### 7. Interface + Class

```ts
interface Vehicle {
  drive(): void;
}

class Car implements Vehicle {
  drive() {
    console.log("Driving car...");
  }
}
```

---

### 8. Generic Class

```ts
class Storage<T> {
  private items: T[] = [];
  add(item: T) {
    this.items.push(item);
  }
  getItems(): T[] {
    return this.items;
  }
}
```

---

## Bài tập

### Bài 1 – Định nghĩa interface và dùng object

Tạo interface `Product` có `name`, `price`, `quantity`. Viết hàm `totalValue(product: Product): number`.

---

### Bài 2 – Function Generic

Viết hàm `swap<T, U>(a: T, b: U): [U, T]` để hoán đổi 2 giá trị bất kỳ.

---

### Bài 3 – Class quản lý user

Tạo class `UserManager` có thể thêm user, xoá user, lấy danh sách user. Mỗi user theo interface `User`.

---

### Bài 4 – Kế thừa và override

Tạo class `Person` có `name`, `speak()`. Tạo class `Student` kế thừa `Person`, override `speak()`.

---

### Bài 5 – Dùng Generic với interface

Tạo interface `ApiResponse<T>` có `data`, `status`. Tạo 2 biến response sử dụng với kiểu `string` và `User`.

---

### Bài 6 – Đọc dữ liệu từ mảng object

Viết hàm generic `filterByKey<T>(arr: T[], key: keyof T, value: any): T[]` để lọc object theo một thuộc tính nhất định.


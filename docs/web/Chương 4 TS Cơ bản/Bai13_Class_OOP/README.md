# Bai13\_Class\_OOP

## Mục tiêu bài học

* Hiểu được khái niệm **Class** trong TypeScript
* Biết cách khai báo class, constructor, thuộc tính và phương thức
* Hiểu được tính **kế thừa**, **tính đóng gói**, và **tính trừu tượng**
* Biết sử dụng `public`, `private`, `protected`
* Biết kết hợp class với `interface` và `readonly`, `static`

---

## Nội dung chính

### 1. Class trong TypeScript

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`Tôi tên là ${this.name}, ${this.age} tuổi`);
  }
}

const p = new Person("Phú", 22);
p.introduce();
```

---

### 2. Access modifier: `public`, `private`, `protected`

```ts
class BankAccount {
  public name: string;
  private balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }
}

const acc = new BankAccount("Phú", 1000);
console.log(acc.getBalance()); // hợp lệ
// console.log(acc.balance); // ❌ lỗi vì balance là private
```

---

### 3. Kế thừa (Inheritance)

```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} phát ra âm thanh`);
  }
}

class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} sủa: Gâu gâu`);
  }
}

const d = new Dog("LuLu");
d.speak();
```

---

### 4. Static property & method

```ts
class MathUtils {
  static PI = 3.14;

  static square(n: number): number {
    return n * n;
  }
}

console.log(MathUtils.PI);
console.log(MathUtils.square(5));
```

---

### 5. Readonly property

```ts
class Config {
  readonly appName: string = "MyApp";
}

const c = new Config();
// c.appName = "NewName"; ❌ lỗi, vì readonly
```

---

### 6. Class implements Interface

```ts
interface Vehicle {
  brand: string;
  drive(): void;
}

class Car implements Vehicle {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive(): void {
    console.log(`Xe ${this.brand} đang chạy...`);
  }
}
```

---

## Bài tập

### Bài 1 – Tạo class Product

Tạo class `Product` có thuộc tính `name`, `price`, `quantity`, có hàm `getTotal()` trả về tổng giá trị sản phẩm.

---

### Bài 2 – Class kế thừa

Tạo class `Employee` với thuộc tính `name`, `salary`, và method `info()`. Tạo class `Manager` kế thừa `Employee`, thêm thuộc tính `bonus` và override hàm `info()`.

---

### Bài 3 – Dùng `private` và `getBalance()`

Tạo class `Account` có thuộc tính `owner`, `balance` là `private`. Viết hàm nạp tiền và rút tiền, không cho rút quá số dư.

---

### Bài 4 – `static` và `readonly`

Tạo class `Circle` có thuộc tính `readonly radius`, và phương thức static `getArea(r: number)` trả về diện tích.

---

### Bài 5 – Kết hợp Interface + Class

Tạo interface `Shape` có `draw()` và `getArea()`. Tạo class `Rectangle` và `Circle` implement `Shape`.


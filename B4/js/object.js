// khai bao (declare) ------------------------
var myObj = {
    "full name":"Thanh Tuyen",
    age: 16,
};

// object constructor (xay dung doi tuong - ham tao) -------------------
function User(firstName, lastName, ava) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.ava = ava;

    this.getName = function () {
        return this. firstName + "" + this.lastName;
    };
}

// tao doi tuong 
var me = new User("Thanh", "Tuyen", "...");
console.table(me);
console.log(me.constructor)
console.log(student.constructor)
console.log(student._proto_)
















// them thuoc tinh --------------------------
me.class = null;
console.table(me);

// object prototype ---------------------------
// them 1 thuoc tinh
User.prototype.email = "abc@gmail.com";
User.prototype.getEmail = function () {
    return this.email;
};

const other = new User("abc", "abc", "...");
console.table(other);

//read, update -------------------------
me.firstName = "ABC";
me["lastName"] = "XYZ";
console.table(me);

console.log(me["abc"]); // underfined
console.log(me.abc); // underfined

// delete -----------------------------------------
delete me["class"];
delete me.ava;
console.table(me)
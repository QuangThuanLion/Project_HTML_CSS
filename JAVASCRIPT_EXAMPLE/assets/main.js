// Object
var myKey = 'email';
var object = {
    name: 'Thuan',
    age: 24,
    address: 'Quang Binh - Dong Hoi',
    [myKey]: 'quangthuansmt@gmail.com'
};
delete object.email;
delete object.address;

// Object constructor
// trong js co the khong can khoi tao doi tuong trong objectconstructor ma co the them vao tu ngoai van duoc
function ObjectConstructor(firstName, lastName, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.getName = function() {
        return `${this.firstName} - ${this.lastName}`;
    }
}

var author = new ObjectConstructor('Thuan', 'Nguyen', 'Quang Binh - Dong Hoi');
var user = new ObjectConstructor('Huong', 'Lan', 'Na Noi');

author.title = 'Javascript';
user.email = 'quangthuansmt@gmail.com';

console.log(author.getName());
console.log(user.getName());

class Student {
    constructor(firstName, lastName, avatar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
    }

    getName = function() {
        return `${this.firstName} - ${this.lastName} - ${this.avatar}`;
    }
}

class Subject extends Student {
    constructor(firstName, lastName, avatar, subject1, subject2, subject3) {
        super(firstName, lastName, avatar);
        this.subject1 = subject1;
        this.subject2 = subject2;
        this.subject3 = subject3;
    }

    showName = function() {
        return `${this.getName()} - ${this.subject1} - ${this.subject2} - ${this.subject3}`;
    }
}

var student = new Student('Trung', 'Hoang', 'avatar');
var subject = new Subject('Trung', 'Hoang', 'avatar', 'Match', 'History', 'English');
console.log(student.getName());
console.log(subject.showName());
console.log("--------------PROTOTYPE-------------")

function Car(name, product, category) {
    this.name = name;
    this.product = product;
    this.category = category;
    this.showCar = function() {
        return `${this.name} - ${this.product} - ${this.category} - ${this.publishDate}`;
    }
}

Car.prototype.publishDate = '2021-11-02';
Car.prototype.getShowCar = function() {
    return `${this.name} - ${this.publishDate}`;
}

var car = new Car('Vision', 'Honda', 'MotorBike');
var car1 = new Car('AB', 'Wave', 'Xe May');
console.log(car.showCar());
console.log(car.getShowCar());
console.log(car1.showCar());
console.log(car1.getShowCar());
console.log("--------------FOR-------------")

var myArray = ['Thuan', 'Nguyen', 'Khac', 'Quang'];
var myString = 'NguyenKhacQuangThuan';
for (const key in myArray) {
    console.log(key);
}
for (const key in myString) {
    console.log(myString[key])
}

for (var i = 0; i <= 100; i += 5) {
    console.log(i);
}
console.log("--------------FOR-------------")
for (var i = 100; i >= 0; i -= 5) {
    console.log(i);
}
console.log("--------------FOREACH-------------")
    //tao ra 1 mang moi ma them khoa hoc truoc name
var courses = [{
        id: 1,
        name: 'Javascript',
        coin: 12
    },
    {
        id: 2,
        name: 'PHP',
        coin: 112
    },
    {
        id: 3,
        name: 'Java',
        coin: 1256
    },
    {
        id: 4,
        name: 'ReactJs',
        coin: 756
    },
    {
        id: 5,
        name: 'Node Js',
        coin: 45
    },
]

function courseHandler(course, index, originArray) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Coin text: ${course.coin}`,
        index,
        originArray,
    }
}
var newCourses = courses.map(courseHandler);
console.log(newCourses)

var coin = 0;
for (const course of courses) {
    coin += course.coin;
}
console.log(coin);

courses.reduce(function(accumlator, currentValue, currentIndex, originArray) {
    var accumtor = accumlator + currentValue.coin;
    console.table({
        accumlator: accumtor,
        currentValue: currentValue,
        currentIndex: currentIndex,
    });
    return accumtor;
}, 0);

console.log("--------------INCLUDES-------------")
var nameThuan = new String('Nguyen Khac Quang Thuan');
var arrayThuan = new Array(
    'Javascript',
    'PHP',
    'Node_Js',
    'TypeScript'
)
var objectThuan = {
    name: 'Thuan',
    age: 26,
    class: 'Batch_152'
}
console.log(nameThuan.includes('Khac', 0));
console.log(arrayThuan.includes('Node_Js', 0));
for (const infor of Object.values(objectThuan)) {
    console.log(infor);
}

console.log("--------------MATH-------------");

console.log('Math.PI', Math.PI);
console.log('Math.round()', Math.round(3.444));
console.log('Math.round()', Math.round(3.7568));
console.log('Math.ceil()', Math.ceil(3.1454));
console.log('Math.floor()', Math.floor(3.54564));
console.log('Math.abs()', Math.abs(-4));
console.log('Math.random()', Math.random());
console.log('Math.min()', Math.min(100, -99, -41, 50));
console.log('math.max()', Math.max(100, 500, 32121, 5674568));

console.log("----------------------------------------------CALLBACK-------------------------------------");

function myFunction(param) {
    param('hoc Lap Trinh');
}

function myCallback(param) {
    console.log(param)
};

myFunction(myCallback);

var arrayCar = [
    'BMW',
    'HuynDai',
    'Honda',
    'Suzuki'
]

var htmlCarView = arrayCar.map(function(car, index) {
    return car;
});
console.log(htmlCarView.join('-'));

console.log('---CALLBACK---MAP----');
Array.prototype.map2 = function(callBack) {
    var arrayLength = this.length;
    var output = [];
    if (typeof callBack === 'function') {
        for (var i = 0; i < arrayLength; i++) {
            var result = callBack(this[i], i);
            output.push(result);
        }
    } else {
        throw 'Typeof is not a function !';
    }
    return output;
}

var htmlViewCar2 = arrayCar.map2(function(car, index) {
    return car;
});

console.log(htmlViewCar2.join('---'));

var Example = [{
        id: 1,
        name: 'Javascript',
        coin: 25,
        price: 10
    },
    {
        id: 2,
        name: 'PHP',
        coin: 112,
        price: 7
    },
    {
        id: 3,
        name: 'Java',
        coin: 12,
        price: 25
    },
    {
        id: 4,
        name: 'ReactJs',
        coin: 12,
        price: 798
    },
    {
        id: 5,
        name: 'Node Js',
        coin: 12,
        price: 96
    },
]
console.log('---CALLBACK---FOREACH----');
Example.forEach(function(course, index) {
    console.log(index, course)
});

console.log('---CALLBACK---REDUDE----');
var resultReduce = Example.reduce(function(accumulate, curentValue, currentIndex, orginArray) {
    return accumulate + curentValue.coin + curentValue.price;
}, 0);
console.log(resultReduce);

console.log('---CALLBACK---FIND----');
var resultFind = Example.find(function(course, index) {
    return course.name == 'Java';
});
console.log(resultFind);

console.log('---CALLBACK---FILTER----');
var resultFilter = Example.filter(function(course, index) {
    return course.coin === 12;
});
console.log(resultFilter);

console.log('---CALLBACK---EVERY----');
var resultEvery = Example.every(function(course, index) {
    return course.coin === 12;
});
console.log(resultEvery);

console.log('---CALLBACK---SOME----');
var resultSome = Example.some(function(course, index) {
    return course.coin === 12;
});
console.log(resultSome);

console.log("-----------------------------------CALLBACK---CUSTOM---------------------------------------");

console.log('---CALLBACK---FOREACH----CUSTOM-----');
Array.prototype.forEach2 = function(callBack) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callBack(this[index], index, this);
        }
    }
};
Example.forEach2(function(course, index) {
    console.log(index, course);
});

console.log('---CALLBACK---FIND----CUSTOM-----');
Array.prototype.find2 = function(callBack) {
    if (typeof callBack === 'function') {
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                var result = callBack(this[index], index, this);
                if (result === true) {
                    return this[index];
                }
            }
        }
        return {};
    }
};
var resultFindCustom = Example.find2(function(course, index) {
    return course.name === 'ReactJs';
});
console.log(resultFindCustom);

console.log('---CALLBACK---FILTER----CUSTOM-----');
Array.prototype.filter2 = function(callBack) {
    var output = [];
    if (typeof callBack === 'function') {
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                var result = callBack(this[index], index, this);
                if (result === true) {
                    output.push(this[index]);
                }
            }
        }
    }
    return output;
};
var resultFilterCustom = Example.filter2(function(course, index) {
    return course.coin === 12;
});
console.log(resultFilterCustom);

console.log('---CALLBACK---REDUCE----CUSTOM-----');
Array.prototype.reduce2 = function(callBack, initialValue) {
    var arrayLength = this.length;
    var output = typeof initialValue === 'undefined' ? 0 : initialValue;
    if (typeof callBack === 'function') {
        for (var index = 0; index < arrayLength; index++) {
            output = callBack(output, this[index], index, this);
        }
        return output;
    }
};
var resultReduceCustom = Example.reduce2(function(accumulate, currentValue, currentIndex, originArray) {
    return accumulate + currentValue.coin + currentValue.price;
}, 0);
console.log(resultReduceCustom);

console.log('---CALLBACK---EVERY----CUSTOM-----');
Array.prototype.every2 = function(callBack) {
    var arrayLength = this.length;
    for (var index = 0; index < arrayLength; index++) {
        var result = callBack(this[index], index, this);
        if (result === false) {
            return false;
        }
    }
    return true;
};
var resultEveryCustom = Example.every2(function(course, index) {
    return course.coin === 12;
});
console.log(resultEveryCustom);
console.log('---CALLBACK---SOME----CUSTOM-----');

Array.prototype.some2 = function(callBack) {
    if (typeof callBack === 'function') {
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                var result = callBack(this[index], index, this);
                if (result === true) {
                    return true;
                }
            }
        }
        return false;
    }
};
var resultSomeCustom = Example.some2(function(course, index) {
    return course.coin === 12;
});
console.log(resultSomeCustom);

console.log("----------------------------------HTML DOM--------------------------------------");
var box = document.querySelector('.box');
console.log(box.innerText);
console.log(box.textContent);

var box1Element = document.querySelector('.box1');
Object.assign(box1Element.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green',
});

var h1Element = document.querySelector('h1');
setInterval(() => {
    h1Element.classList.toggle('h1');
}, 1000);

console.log("----------------------------------HTML DOM EVENT--------------------------------------");

var input = document.querySelector('input[type="text"]');
input.oninput = function(event) {
    console.log(event.target.value);
};

input.onkeyup = function(event) {
    switch (event.which) {
        case 27:
            {
                console.log('Exit');
                break;
            }
        case 32:
            {
                console.log(event.which);
                console.log('SPACE');
                break;
            }
    }
};

var ulElement = document.querySelector('.ul');

ulElement.onmousedown = function(event) {
    event.preventDefault();
}

ulElement.onclick = function(event) {
    console.log(event.target.innerText)
}

var stopPropagation = document.querySelector('.stopPropagation');
var spanElement = document.querySelector('.span');

stopPropagation.onclick = function(event) {
    console.log('DIV')
}

spanElement.onclick = function(event) {
    event.stopPropagation();
    console.log('CLICK ME SPAN')
}

var btnElement = document.querySelector('.btn');

function taskOne() {
    console.log('TASK ONE')
}

function taskTwo() {
    console.log('taskTWO')
}
btnElement.addEventListener('click', taskOne);
btnElement.addEventListener('click', taskTwo);

setTimeout(() => {
    btnElement.removeEventListener('click', taskOne)
}, 3000);

setTimeout(() => {
    btnElement.removeEventListener('click', taskTwo);
}, 5000);

console.log("----------------------------------PROMISE--------------------------------------");
var promise = new Promise(function(resolve, reject) {
    var student = {
        id: 1,
        name: 'Thuan Nguyen Khac Quang',
        address: 'Quang Binh - Dong Hoi',
        age: 13
    }
    resolve(student);
    reject('ERROR 402');
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((eror) => {
        console.log(eror)
    })
    .finally(() => {
        console.log('DONE')
    });

var promise_2 = new Promise(function(resolve, reject) {
    var student = {
        id: 1,
        name: 'Thuan Nguyen Khac Quang',
        address: 'Quang Binh - Dong Hoi',
        age: 13
    }
    resolve(student);
    //reject('ERROR');
});

promise_2
    .then((result) => {
        return new Promise(function(resolve, reject) {
            var student = {
                id: 2,
                name: 'Nguyen Manh Ha',
                address: 'Hoan Lao',
                age: 20
            }
            resolve(student)
        })
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('DONE')
    })

var promise_3 = Promise.resolve({
    id: 3,
    name: 'Nguyen Manh Song',
    address: 'Hoan Lao _ Cu Nam',
    age: 546
});

var promise_4 = Promise.resolve({
    product: 'Hon Da',
    category: 'Xe o to',
    publishDate: '2020-11-20'
})

var promiseAll = Promise.all([promise_3, promise_4])
    .then(([data1, data2]) => {
        var result = {
            ...data1,
            ...data2
        }
        console.log(result);
    })
    .catch(() => {
        console.log('ERROR');
    })

var user_test = [{
        id: 1,
        name: 'Quang Thuan'
    },
    {
        id: 2,
        name: 'Nguyen Manh Ha'
    },
    {
        id: 3,
        name: 'Hoang Trung Tuyen'
    }
];

var comment_test = [{
        id: 1,
        user_id: 2,
        content: 'Anh Thuan dep trai qua'
    },
    {
        id: 2,
        user_id: 1,
        content: 'Khong co gì em ơi, đó là chuyện đương nhiên mà'
    },
    {
        id: 3,
        user_id: 2,
        content: 'Anh nói gì cũng đúng'
    },
    {
        id: 4,
        user_id: 1,
        content: 'Cảm ơn em nhé !'
    },
    {
        id: 5,
        user_id: 1,
        content: 'Em còn câu hỏi nào nữa không!'
    },
    {
        id: 6,
        user_id: 2,
        content: 'Dạ không anh cảm ơn anh nhé !'
    },
    {
        id: 7,
        user_id: 1,
        content: 'Ừ không có gì, bye em nha !'
    }
];
// B1. lấy được toàn bộ id của user_id
// B2. từ id lấy được đó lấy được những comment của userId đó trong comment
// B3: hien thi tu commentTest trươc xong lay ten cua user

var arrayComments = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(comment_test);
    }, 2000);
});

function getUserById(userId) {
    return new Promise(function(resolve, reject) {
        var result = user_test.filter(function(user, index) {
            return userId.includes(user.id);
        });
        resolve(result);
    })
}

arrayComments
    .then((comments) => {
        var userIds = comments.map(function(userId, index) {
            return userId.user_id;
        });
        return [userIds, comments]
    })
    .then(([userIds, comments]) => {
        return getUserById(userIds)
            .then((user) => {
                return {
                    user,
                    comments
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => console.log('DONE'))
    })
    .then((data) => {
        var ulElement = document.querySelector('.test_promise');
        var html = data.comments.map(function(comment, index) {
            let elementLi = document.createElement('li');
            var users = data.user.find(function(user, index) {
                return user.id === comment.user_id;
            });
            elementLi.textContent = `${users.name} : ${comment.content}`;
            return elementLi;
        });
        ulElement.append(...html);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('DONE');
    })

console.log("----------------------------------FETCH--------------------------------------");
var postApi = 'http://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        var htmls = data.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        });
        document.querySelector('.div_fetch').innerHTML = htmls.join(' ');
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('DONE');
    })

console.log("----------------------------------ES6--------------------------------------");
var es6Student = {
    nameNew: 'Thuan',
    address: 'Quang Binh',
    age: 12,
    children: {
        nameNew: 'Nguyen Manh Ha'
    }
};

var arrayStudent = ['orange', 'apple', 'purse', 'samsung'];

var { nameNew, address, age, children: { nameNew: childreName } } = es6Student;
console.log(nameNew);
console.log(address);
console.log(age);
console.log(childreName);

var [orange, apple, purse, samsung] = arrayStudent;
console.log(apple);
console.log(purse);
console.log(samsung);

function argurement() {
    console.log(arguments)
}

argurement(1, 2, 3, 4, 5);

var array1 = ['javascript', 'php', 'reactjs'];
var array2 = ['java', 'nodejs'];

console.log(array1.concat(array2));
console.log(...array1, ...array2);

var defaultConfig = {
    api: 'https://www.youtube.com/watch?v=MJZICS7nQk8&list=PL_-VfJajZj0VgpFpEVFzS5Z-lkXtBe-x5&index=101',
    apiVersion: 1.0,
    other: 'other'
};

var newDefaultConfig = {
    ...defaultConfig,
    api: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/append',
    description: 'description'
};

console.log(newDefaultConfig);

var tip = 100;
(function() {
    console.log('I have $' + husband());

    function wife() {
        return tip * 2;
    };

    function husband() {
        return wife() / 2;
    };
    var tip = 10;

})();


console.log(hosting);

var hosting = 12;

var a = 10;
var b = a;
console.log(a)
console.log(b);


var object = {
    name: 'Thuan',
    age: 24,
    address: 'Quang Binh - Dong Hoi',
    [myKey]: 'quangthuansmt@gmail.com'
};
object.description = "description";
console.log(object)

var a = 10;
var b = "10";
console.log(a === b);

console.log('-----------------------TEST-----------------------')
var object1 = { name: 'Thuan' };
var object2 = { name: 'Thuan' };
var object3 = object1;

object1 = 'Ha';

console.log(object1);
console.log(object2);
console.log(object3);
console.log(object1 === object2);
console.log(object1 == object3);

function testScopte() {
    var fullName = 'Thuan Nguyen Khac Quang';
    console.log(fullName);
}
testScopte();
console.log('----------------TEST SCOPE----------------')
a = 10;
b = 20;
if (a > 5) {
    var fullName = 'Thuan Nguyen Khac Quang 1';
    if (b > 10) {
        var fullName1 = 'Ha Huy Tap';
        console.log(fullName1)
    }
    console.log(fullName)
} else {
    var age = 96;
    console.log(age);
}

console.log(fullName);
console.log(fullName1);

function test1(first, last) {
    console.log(first, last);
    var fullNameTest1 = 'NGUYEN TIEN THANH';
    var fullNameTest1 = 'NGUYEN DIEU THAO 11111';

    function test2(first, last) {
        var fullNameTest = 'NGUYEN DIEU THAO 1';
        console.log(fullNameTest1);
        console.log(fullNameTest);
        console.log(first, last);
    }
    console.log(fullNameTest1);
    test2('Quang', 'Dung')
}
test1('Thuan', 'Nguyen');

const demoScope = 'Ha Thi Song';

{
    {
        {
            {
                {
                    console.log(demoScope);
                    let demoScope = 'Ha Thi Song 3';
                }
            }
        }
    }
}
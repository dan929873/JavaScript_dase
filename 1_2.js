'use sirict'

// 1.2

// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
// типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.

// es5
function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function(text_edit){
    this.text = text_edit;
}
//
// let obj = new Post('daniil', 'zero', '24.09.2010');
// alert(obj.author + ', ' + obj.text + ', ' + obj.date);
// obj.edit('my first text');
// alert(obj.author + ', ' + obj.text + ', ' + obj.date);

// es6
// class Post{
//     constructor(author, text, date) {
//         this.author = author;
//         this.text = text;
//         this.date = date;
//     }
//     edit(text_edit) {
//         this.text = text_edit;
//     }
// }
// let obj = new Post('daniil', 'zero', '24.09.2010');
// alert(obj.author + ', ' + obj.text + ', ' + obj.date);
// obj.edit('my first text');
// alert(obj.author + ', ' + obj.text + ', ' + obj.date);

// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
// помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
// свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
//     Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
// highlighted значение true.

// es5
// function AttachedPost(author, text, date){
//     Post.call(this, author, text, date);
//     this.highlighted = false;
// }
// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;
//
// AttachedPost.prototype.makeTextHighlighted = function (){
//     this.highlighted = true;
// }
// let obj2 = new AttachedPost('ivan', 'test', '13.08.2020');
// obj2.edit('second test');
// obj2.makeTextHighlighted();
// alert(obj2.author + ', ' + obj2.text + ', ' + obj2.date + ', ' + obj2.highlighted);


// es6
class AttachedPost extends Post{
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted(){
        this.highlighted = true;
    }
}
let obj2 = new AttachedPost('ivan', 'test', '13.08.2020');
obj2.edit('second test');
obj2.makeTextHighlighted();
alert(obj2.author + ', ' + obj2.text + ', ' + obj2.date + ', ' + obj2.highlighted);

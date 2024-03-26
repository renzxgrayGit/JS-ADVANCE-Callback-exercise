let Student = function(name) {
    this.name = name;
    this.hp = 10;
    this.int = 10;
    this.study = function() {
        this.hp--;
        this.int++;
        console.log(`${this.hp}, ${this.int}`);
    }
}

let student1 = new Student('Marcus');
let student2 = new Student('John');

student1.study();  // decrease hp by 1 and increase int by 1
student1.study();  // decrease hp by 1 and increase int by 1



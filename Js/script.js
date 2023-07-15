class Add {
  constructor(...words) {
      this.words = words;
  }
  //your code goes here
  print() {
    const result = this.words.map(word => "$" + word);1
    let combinedString = result.join('');
    console.log(combinedString);
  }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu$");
var y = new Add("this", "is", "awesome$");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit$");
x.print();
y.print();
z.print();

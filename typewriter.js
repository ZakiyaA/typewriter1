const sentence = "hello there from lighthouse labs \n";
let interval = 0;
for (let char = 0; char < sentence.length; char ++) {
  setTimeout(() => {
    process.stdout.write(sentence[char]);
  }, interval += 50) // <= 1s delay to make it noticeable. Can dial it down later.
}
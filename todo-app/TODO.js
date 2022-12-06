// grab all tags from html

const form = document.querySelector(".form");
console.log(form);
console.log(document.querySelector("[data-form]"));
const lists = document.querySelector(".lists");
const input = document.querySelector("input");
console.log(input)
console.log(lists)


//make global input_array
inputs_array = [];

//doing the form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let id = Math.random() *999999; //creates a random number to give the event an id.
    console.log(id)
    const todo = new Todo(id, input.value);
    inputs_array = [...inputs_array, todo];
    UI.display_data();
    console.log (inputs_array)
})

//instance of object
class Todo {
    constructor(id, todo){
        this.id = id;
        this.todo = todo;
    }
}

//display data
class UI{
    static display_data(){
        let display_data = inputs_array.map((item) => {
            return `
                <div class="todo">
                    <p>${item.todo}</p>
                    <span>❌</span>
                </div>
            `
        });
        console.log(lists);
        lists.innerHTML = display_data.join(" ");
    }



}
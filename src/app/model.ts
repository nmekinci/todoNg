export class Model {
    user;
    items;

    constructor() {
        this.user = 'model name';
        this.items = [
            new TodoItem('cienma',false),
            new TodoItem('breakfast',true),
            new TodoItem('book',false),
            new TodoItem('sport',false)
          ]
    }
}

export class TodoItem {
    description;
    action;

    constructor(description:string,action:string|boolean) {
        this.description = description;
        this.action = action;
    }
}
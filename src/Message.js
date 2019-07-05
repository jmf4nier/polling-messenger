class Message{
    static counter = 0;
    constructor(content){
        this.content = content
        this.render()
    }
    render(){
        let list = document.querySelector('#messages')
        let newLi = document.createElement('li')
        newLi.innerText = this.content
        list.append(newLi)
        Message.counter++
        // console.log(Message.counter);
    }
}

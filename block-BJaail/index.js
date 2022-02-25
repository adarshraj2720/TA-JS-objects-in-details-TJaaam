class Booklist{
    constructor(root,list=[]){
        this.books=list;
        this.root=root;

    }
    add(title,author,isbn){
        let book=new Book(title,author,isbn);
        this.books.push(book);
        this.createUI()
        return  this.books
    }
    handledelete(id){
        let index=this.books.findIndex((book)=> book.id ===id);
        this.books.splice(index,1);
        this.createUI();
        
    }
    createUI(){
        this.root.innerHTML="";
        this.books.forEach((book)=>{
            let ui=book.createUI()
            ui.querySelector('span').addEventListener("click",this.handledelete.bind(this,book.id))
            this.root.append(ui)
        })
    }
}



class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
        this.id=`id-${Date.now()}`
    }
    createUI(){
       
        let li=document.createElement('li');
        li.style.backgroundColor="rgb(177, 178, 179)"
        li.style.width="100%"
        li.style.display="flex"
        li.style.paddingLeft="6px"
        li.style.paddingRight="6px"
        li.style.color="black"
        li.style.marginBottom="10px"
       
        li.style.alignItems="center"
        li.style.justifyContent="space-between"
        let title=document.createElement('p');
        title.innerText=this.title;
        let author=document.createElement('p');
        author.innerText=this.author
        let isbn=document.createElement('p');
        isbn.innerText=this.isbn;
        let cross=document.createElement('span')
        cross.innerText="❌";
        cross.style.cursor="pointer"


        li.append(title,author,isbn,cross)

        return li;
    }

}
let form=document.querySelector('form')
let title=form.elements[0];
let author=form.elements[1];
let isbn=form.elements[2];

let input= document.querySelectorAll(`input`);
let mybook=new Booklist(document.querySelector(".Book"));
mybook.add("silver Lining Playbook","Sam Mendis",2134213687565);


function handlesubmit(event){
    event.preventDefault();
    this.title=title.value;
    this.author=author.value;
    this.isbn=isbn.value;
    mybook.add(this.title,this.author,this.isbn);

    // this.title=" ";
    // this.author=" ";
    // this.isbn=" ";
    title.value=""
    author.value=""
    isbn.value=""

}

// input.forEach((elm) => elm.addEventListener("keyup",(event) =>{
//     event.preventDefault()
//     if(event.keyCode===13){
//         event.innerHTML=""
     
//         // mybook.add(event.target.value)
//        mybook.add( event.target.value=this.title)
        
//     }
// }))



// input.addEventListener("keyup",(event)=>{
//     if(event.keyCode===13){
//         mybook.add(event.target.value)
//     }
// })
form.addEventListener("submit",this.handlesubmit.bind(this))
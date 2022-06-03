// let url = 'https://dummyjson.com/products?skip=5&limit=10';

let contentC = document.querySelector('.content_container')


fetch('https://dummyjson.com/products?skip=5&limit=10')
.then((response) =>{
    return response.json();
})
.then((json) =>{
    let phones = json.products;
    phones.forEach((phones) =>{
        let phoneItem = document.createElement('div');
        phoneItem.classList.add('content');

        let showContent = document.createElement("div");
        showContent.classList.add('detail')
        showContent.innerHTML = `
        <div class="wrapper" id="start">
            <div class = " product">
                <h3 class="title1" id="title">${phones.title}</h3>
                <h1 id="desciption">${phones.description}</h1>
                <p id="price">เริ่มต้นที่ ฿${phones.price}</p>
                <div class="btn">
                    <button class="button">ซื้อ</button>
                    <a href="#">ดูเพิ่มเติม <i class="fas fa-angle-right"></i></a>
                </div>
                <div class="picture">
                     <img src="${phones.thumbnail}" alt="">
                </div>
             </div>
        
        </div>`
        
        phoneItem.append(showContent);
        contentC.append(phoneItem);
        
    })
    
})
.catch((error) =>{
    console.log(error.message);
})
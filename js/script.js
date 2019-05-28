let pizzaIngridients = {

    BBQ_sauce: [25, 22],
    eggplant: [45, 38],
    parsley: [30, 25],
    pineapple: [25, 25],
    pesto: [50, 18],
    onion: [10, 32],
    garlic: [20, 46],
    mushrooms: [15, 33],
    cheddar_cheese: [35, 70],
    chili_sauce: [15, 12],
    bulgarian_pepper: [20, 31],
    marinara_sauce: [25, 13],
    mozzarella_cheese: [32, 29],
    mustard: [10, 49],
    sous_vide: [19, 26],
    chicken_fillet: [33, 45],
    hunting_sausages: [12, 40],
    pepperoni: [9, 16],
    corn: [11, 21],
    sweet_pepper: [15, 24],
    tomatoes: [17, 23],
    pesto_sauce: [24, 13], 
    ham: [42, 13],
    bacon: [13, 34],
    oyster: [28, 31],
    munich_sausages: [34, 12],
    chili_pepper: [19, 32],
    tuna_sauce: [16, 60],
    Bulgarian_pepper: [37, 31],
    parmesan_cheese: [29, 31]
}

let pizzaArr = [
    {   name: 'picca_ot_shefa',
        ingrid: {
            chili_pepper: [19, 32],
            tuna_sauce: [16, 60],
            Bulgarian_pepper: [37, 31],
            parmesan_cheese: [29, 31],
            cheddar_cheese: [35, 70]
        }
    },

    {   name: 'americano',
        ingrid: {
            BBQ_sauce: [25, 20],
            eggplant: [45, 30],
            pesto: [50, 15],
            mushrooms: [15, 33],
            cheddar_cheese: [35, 70]
        },
    },

    {   name: 'karbonara',
        ingrid: {
            parsley: [30, 25],
            chili_sauce: [15, 12],
            bulgarian_pepper: [20, 31],
            cheddar_cheese: [35, 70]
        }
    },  

    {   name: 'americano_metrovaya',
        ingrid: {
            chili_pepper: [19, 32],
            tuna_sauce: [16, 60],
            Bulgarian_pepper: [37, 31],
            parmesan_cheese: [29, 31]
        }
    }, 

    {   name: 'bavarskaya',
        ingrid: {
            mozzarella_cheese: [32, 29],
            mustard: [10, 49],
            sous_vide: [19, 26],
            chicken_fillet: [33, 45],
            hunting_sausages: [12, 40]
        }
    },
    
    {   name: 'gurmeo',
        ingrid: {
            BBQ_sauce: [25, 20],
            parsley: [30, 25],
            pineapple: [25, 25],
            pesto: [50, 15],
            eggplant: [45, 30]
        }
    },

    {   name: 'kalcone',
        ingrid: {
            garlic: [20, 46],
            pineapple: [25, 25],
            pesto: [50, 15],
            mushrooms: [15, 33],
            eggplant: [45, 30]
        }
    },
     
    {   name: 'bavarskaya_metrovaya',
        ingrid: {
            cheddar_cheese: [35, 70],
            chili_sauce: [15, 12],
            bulgarian_pepper: [20, 31],
            marinara_sauce: [25, 13],
            mozzarella_cheese: [32, 29],
            chili_sauce: [15, 12],
            bulgarian_pepper: [20, 31],
            marinara_sauce: [25, 13]
        }
    },
    
    {   name: 'berluskoni',
        ingrid: {
            pesto_sauce: [24, 13], 
            ham: [42, 13],
            bacon: [13, 34]
        }
    },
    
    {   name: 'chetyre_syra',
        ingrid: {
            parsley: [30, 25],
            pineapple: [25, 25],
            pesto: [50, 18],
            mustard: [10, 49],
            sous_vide: [19, 26],
            chicken_fillet: [33, 45]
        }
    },

    {   name: 'diablo',
        ingrid: {
            munich_sausages: [34, 12],
            chili_pepper: [19, 32],
            tuna_sauce: [16, 60],
            cheddar_cheese: [35, 70],
            chili_sauce: [15, 12],
            bulgarian_pepper: [20, 31]
        }
    },
    
    {   name: 'diablo_metrovaya',
        ingrid: {
            mushrooms: [15, 33],
            cheddar_cheese: [35, 70],
            chili_sauce: [15, 12],
            tomatoes: [17, 23],
            pesto_sauce: [24, 13], 
            ham: [42, 13],
            bacon: [13, 34]
        }
    },
    
    {   name: 'margarita', 
        ingrid: {
            munich_sausages: [34, 12],
            chili_pepper: [19, 32],
            tuna_sauce: [16, 60],
            chili_sauce: [15, 12],
            bulgarian_pepper: [20, 31]
        }
    },
    
    {   name: 'ovoshcnaya',
        ingrid: {
            mushrooms: [15, 33],
            cheddar_cheese: [35, 70],
            chili_sauce: [15, 12],
            bulgarian_pepper: [20, 31],
            marinara_sauce: [25, 13],
            mozzarella_cheese: [32, 29],
            mustard: [10, 49],
            sous_vide: [19, 26]
        }
    },

    {   name: 'pollo',
        ingrid: {
            chili_sauce: [15, 12],
            bulgarian_pepper: [20, 31],
            marinara_sauce: [25, 13],
            mozzarella_cheese: [32, 29]
        }
    },
    
    {   name: 'pollo_metrovaya',
        ingrid: {
            tomatoes: [17, 23],
            pesto_sauce: [24, 13], 
            ham: [42, 13],
            bacon: [13, 34]
        }
    }  
];

(function(){
    for (let i = 0; i < pizzaArr.length; i++) {
        
        let caloriesValue = 0;
        let priceValue = 0;
        
        for(let key in pizzaArr[i].ingrid) {
            
            caloriesValue += pizzaArr[i].ingrid[key][0];
            priceValue    += pizzaArr[i].ingrid[key][1];
    
        }
        pizzaArr[i].calories = caloriesValue;
        pizzaArr[i].price = priceValue;
    }
})();

let listBtn = document.querySelector('.btn-list');

listBtn.addEventListener('click', function() {
    
    let productList = document.createElement('section');
    productList.classList.add('product-list');    
    showPizza(pizzaArr, 'item', productList)

});

let gridBtn = document.querySelector('.btn-grid');

gridBtn.addEventListener('click', function() {
    
    let productGrid = document.createElement('section');
    productGrid.classList.add('product-grid');
    
    showPizza(pizzaArr, 'card', productGrid);

    let addBtns    = Array.from(document.querySelectorAll('.btn-add'));
    let removeBtns = Array.from(document.querySelectorAll('.btn-remove'))

    addBtns.forEach(elem => elem.addEventListener('click', callAddIngridient) );
    removeBtns.forEach(elem => elem.addEventListener('click', removeIngridient) );

});

function callAddIngridient() {

    let currentIngridients = this.parentNode.previousElementSibling.textContent.split(', ');
    
    let nonIngridients = JSON.parse(JSON.stringify(pizzaIngridients));

    currentIngridients.forEach(elem => {
        elem = elem.replace(/ /g, '_');
        for(let key in nonIngridients)
            if(key == elem) delete nonIngridients[key];
    });

    animate(this, nonIngridients);
}

function animate(button, nonIngridients) {
    
    if (button.innerText == 'Submit') {

        button.nextElementSibling.addEventListener('click',removeIngridient);

        button.innerText = 'Add ingridients';
        button.parentNode.previousElementSibling.previousElementSibling.classList.remove('show-ingridients');
        button.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('show-ingridients');
        button.parentNode.parentNode.previousElementSibling.classList.remove('hide-img');

        button.parentNode.parentNode.removeChild(button.parentNode.previousElementSibling);
    
    } else {
        
        button.nextElementSibling.removeEventListener('click',removeIngridient);

        let addIngridients = document.createElement('div');
        addIngridients.classList.add('ingridients-to-add');
    
        for(let key in nonIngridients) {
            
            let span = document.createElement('span');
            span.innerText = key.replace(/_/g, ' ');
            addIngridients.appendChild(span);
            span.addEventListener('click', function(e) {
                
                let composition = e.target.parentNode.previousElementSibling;

                e.target.parentNode.removeChild(e.target);
                composition.innerText += `, ${e.target.textContent}`;
            
                e.target.textContent.replace(/ /g, '_');
        
                for(let i = 0; i < pizzaArr.length; i++)
                    if(pizzaArr[i].name == addIngridients.previousElementSibling.previousElementSibling.textContent.replace(/ /g, '_'))
                        if (key == e.target.textContent.replace(/ /g, '_'))
                            pizzaArr[i].ingrid[key] = nonIngridients[key]
                
                let calories = composition.nextElementSibling.nextElementSibling.nextElementSibling;
                let price    = composition.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
            
                recalculate(composition, calories, price);

            });
        
        }

        button.innerText = 'Submit';
        button.parentNode.previousElementSibling.classList.add('show-ingridients');
        button.parentNode.previousElementSibling.previousElementSibling.classList.add('show-ingridients');
        button.parentNode.parentNode.previousElementSibling.classList.add('hide-img');

        button.parentNode.parentNode.insertBefore(addIngridients, button.parentNode); 
    }
}

function removeIngridient() {

    if(this.innerText == 'Submit') {
        
        this.previousElementSibling.addEventListener('click', callAddIngridient);

        this.innerText = 'Remove ingridients';
        this.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('ingridients-to-remove');
        this.parentNode.parentNode.previousElementSibling.classList.remove('ingridients-to-remove');
        this.parentNode.parentNode.removeChild(this.parentNode.previousElementSibling.previousElementSibling);
        
        let temp = Array.from(this.parentNode.previousElementSibling.children);
        let tempStr = ''
        
        for(let i = 0; i < temp.length; i++)
            tempStr += temp[i].textContent;

        this.parentNode.previousElementSibling.innerText = tempStr;
        this.parentNode.previousElementSibling.removeEventListener('click', listener);

    } else {
        
        this.previousElementSibling.removeEventListener('click', callAddIngridient);

        let composition = this.parentNode.previousElementSibling;
        let name        = composition.previousElementSibling;
        let imgWrapepr  = composition.parentNode.previousElementSibling;
        let tempArr     = composition.textContent.split(', ');
        let h4          = document.createElement('h4');

        name.classList.add('ingridients-to-remove');
        imgWrapepr.classList.add('ingridients-to-remove');
        this.innerText = 'Submit';

        h4.innerText = 'Remove ingridients by click'

        setTimeout(function() {
            composition.parentNode.insertBefore(h4, composition)
        },300);

        composition.innerText = '';
        tempArr.forEach((elem, index) => {

            let span = document.createElement('span');

            if(index === tempArr.length - 1) 
                span.innerText = elem;
            else
                span.innerText = `${elem}, `;

            composition.appendChild(span);
            
        });

        composition.addEventListener('click', listener);
    }

}

function listener(e) {
    
    let temp        = Array.from(e.target.parentNode.children);
    let calories    = e.target.parentNode.nextElementSibling.nextElementSibling;
    let price       = e.target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling;
    let currentCard = e.target.parentNode.previousElementSibling.previousElementSibling.textContent.replace(/ /g, '_');
    let targetIng   = e.target.textContent.replace(/, /g, '').replace(/ /g, '_');


    for(let i = 0; i < pizzaArr.length; i++)
        if(pizzaArr[i].name == currentCard)
            delete pizzaArr[i].ingrid[targetIng];
    
    e.target.parentNode.removeChild(e.target);
    temp.splice(temp.indexOf(e.target), 1);

    for(let i = 0; i < temp.length; i++)
        temp[i] = temp[i].textContent.replace(/, /g, '');

    recalculate(temp, calories, price, currentCard);
}

function recalculate(composition, calories, price, currentCard) {
    
    let tempArr;
    
    Array.isArray(composition) ? tempArr = composition : tempArr = composition.textContent.split(', ');

    let newCalories = 0;
    let newPrice    = 0;
    
    tempArr.forEach(elem => {
        elem = elem.replace(/ /g, '_');
        for(let key in pizzaIngridients)
            if(key == elem) {
                newCalories += pizzaIngridients[key][0];
                newPrice += pizzaIngridients[key][1];
            }
    });
    
    calories.innerText = newCalories;
    price.innerText    = newPrice;

    let key;

    if(Array.isArray(composition))
        key = currentCard;
    else
        key = composition.previousElementSibling.textContent.replace(/ /g, '_')
    
    for(let i = 0; i < pizzaArr.length; i++)
        if(pizzaArr[i].name == key) {            
            pizzaArr[i].calories = newCalories
            pizzaArr[i].price    = newPrice
        }

}

function showPizza(pizzaArr, figureClass, productWrapper) {

    const products = document.querySelector('.products');

    while (products.firstChild)
        products.removeChild(products.firstChild);

    for(let i = 0; i < pizzaArr.length; i++) {

        let card        = document.createElement('figure');
        let img         = document.createElement('img');
        let imgWrapepr  = document.createElement('div');
        let figcaption  = document.createElement('figcaption');
        let name        = document.createElement('h2');
        let composition = document.createElement('p');
        let calories    = document.createElement('p');
        let price       = document.createElement('h2');
        let buttonWrapper = document.createElement('div');
        let add         = document.createElement('button');
        let remove      = document.createElement('button');
        let order       = document.createElement('button');

        card.classList.add(figureClass);
        name.classList.add('name');
        imgWrapepr.classList.add('img-wrapper');
        buttonWrapper.classList.add('btn-wrapper');
        composition.classList.add('composition');
        calories.classList.add('calories');
        price.classList.add('price');

        imgWrapepr.appendChild(img);
        card.appendChild(imgWrapepr);
        card.appendChild(figcaption);
        
        add.className    = 'btn btn-add';
        remove.className = 'btn btn-remove';
        add.innerText    = 'Add ingridients';
        remove.innerText = 'Remove ingridients';
        order.className  = 'btn btn-order';
        order.innerText  = 'Add to order';

        buttonWrapper.appendChild(add);
        buttonWrapper.appendChild(remove);
        figcaption.appendChild(name);

        if(figureClass === 'card') { 
            figcaption.appendChild(composition);
            figcaption.appendChild(buttonWrapper);
        }

        figcaption.appendChild(calories);
        figcaption.appendChild(price);
        figcaption.appendChild(order);
        
        
        let nameValue = pizzaArr[i].name;
        let compositionValue = '';

        for(let key in pizzaArr[i].ingrid)
            compositionValue += `${key.replace(/_/g, ' ')}, `;

        compositionValue = compositionValue.slice(0, compositionValue.length - 2);

        img.setAttribute('src', `${figureClass}_photo/${nameValue}.png`);
        img.setAttribute('alt', nameValue.replace(/_/g, ' '));

        name.innerText        = nameValue.replace(/_/g, ' ');
        composition.innerText = compositionValue;
        calories.innerText    = pizzaArr[i].calories;
        price.innerText       = pizzaArr[i].price;

    
        productWrapper.appendChild(card);
    }

    products.appendChild(productWrapper);
}

let sortKcal  = document.querySelector('.btn-sort-calories');
let sortPrice = document.querySelector('.btn-sort-price');

sortKcal.addEventListener('click', function() {
    
    let wrapper     = document.querySelector('.products').childNodes;
    let figureClass = wrapper[0].childNodes[0].className;

    while (wrapper[0].firstChild)
        wrapper[0].removeChild(wrapper[0].firstChild);

    sortPizza(sortKcal, 'calories');

    showPizza(pizzaArr, figureClass, wrapper[0]);

    let addBtns    = Array.from(document.querySelectorAll('.btn-add'));
    let removeBtns = Array.from(document.querySelectorAll('.btn-remove'))

    addBtns.forEach(elem => elem.addEventListener('click', callAddIngridient) );
    removeBtns.forEach(elem => elem.addEventListener('click', removeIngridient) );

});

sortPrice.addEventListener('click', function() {
    
    let wrapper     = document.querySelector('.products').childNodes;
    let figureClass = wrapper[0].childNodes[0].className;

    while (wrapper[0].firstChild)
        wrapper[0].removeChild(wrapper[0].firstChild);

    sortPizza(sortKcal, 'price');

    showPizza(pizzaArr, figureClass, wrapper[0]);

    let addBtns    = Array.from(document.querySelectorAll('.btn-add'));
    let removeBtns = Array.from(document.querySelectorAll('.btn-remove'))

    addBtns.forEach(elem => elem.addEventListener('click', callAddIngridient) );
    removeBtns.forEach(elem => elem.addEventListener('click', removeIngridient) );

});

function sortPizza(button, property) {

    if(button.classList.contains('expensive')) {

        button.classList.remove('expensive');
        button.classList.add('chip');
        pizzaArr.sort((a, b) => a[property] > b[property] ? 1 : -1);

    } else {

        button.classList.remove('chip');
        button.classList.add('expensive');
        pizzaArr.sort((a, b) => a[property] < b[property] ? 1 : -1);

    }
}
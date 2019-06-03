for(let key in localStorage)
    if(key != 'poltavarost')
        localStorage.removeItem(key);

let data = {
    basket: [],
    customPizza: []
}

class Pizza {
    constructor(name, ingrid, calories, price) {
        this.name     = name;
        this.ingrid   = ingrid;
        this.calories = calories;
        this.price    = price;
    }
}

const pizzaIngridients = {

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

const pizzaArr = [
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
            bacon: [13, 34],
            pineapple: [25, 25]
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

let customPizzaArr = [];

let orderedPizzaArr = [];

const showBtn = document.querySelector('.show-pizzas');

showBtn.addEventListener('click', function(e) {

    let productWrapper = document.createElement('section');
    let mainWrapper    = document.querySelector('.products');

    document.querySelector('.create-pizza').classList.add('opacity-1');

    if (e.target.classList.contains('btn-icon')) {

        document.querySelector('.sort').classList.add('opacity-1');

        if(e.target.parentNode.classList.contains('btn-grid')) {

            productWrapper.classList.add('product-grid');
            showPizza(pizzaArr, 'card', productWrapper, mainWrapper);

            
        } else if (e.target.parentNode.classList.contains('btn-list')) {

            productWrapper.classList.add('product-list');    
            showPizza(pizzaArr, 'item', productWrapper, mainWrapper);
        }
        
    }

});

showBtn.addEventListener('click', function(e) {

    if(JSON.parse(localStorage['poltavarost']).customPizza.length > 0) {

        document.querySelector('.remove-custom').classList.add('opacity-1');

        customPizzaArr = JSON.parse(localStorage['poltavarost']).customPizza;
        
        let mainWrapper    = document.querySelector('.custom-products');
        let productWrapper = document.createElement('section');

        document.querySelector('.create-pizza').classList.add('opacity-1');

        if (e.target.classList.contains('btn-icon')) {
    
            document.querySelector('.sort').classList.add('opacity-1');
    
            if(e.target.parentNode.classList.contains('btn-grid')) {
    
                productWrapper.classList.add('product-grid');
                showPizza(customPizzaArr, 'card', productWrapper, mainWrapper);
    
                
            } else if (e.target.parentNode.classList.contains('btn-list')) {
    
                productWrapper.classList.add('product-list');    
                showPizza(customPizzaArr, 'item', productWrapper, mainWrapper);
            }
        }
    }
});

calcValues(0);

function calcValues(index) {

    let arr;

    if(index > 99)
        arr = customPizzaArr;
    else
        arr = pizzaArr;


    for (let i = 0; i < arr.length; i++) {
        
        let caloriesValue = 0;
        let priceValue    = 0;
        
        for(let key in arr[i].ingrid) {
            
            caloriesValue += arr[i].ingrid[key][0];
            priceValue    += arr[i].ingrid[key][1];
    
        }

        arr[i].calories = caloriesValue;
        arr[i].price    = priceValue;
    }
}

function animate() {
    
    let currentIndex  = parseInt(this.getAttribute('data'));

    let innerWrapper = document.querySelector(`.inner-wrapper[data="${currentIndex}"]`);
    let imgWrapepr   = document.querySelector(`.img-wrapper[data="${currentIndex}"]`);
    let figcaption   = document.querySelector(`figcaption[data="${currentIndex}"]`);
    let composition  = document.querySelector(`.composition[data="${currentIndex}"]`);

    if (innerWrapper.classList.contains('show-ingridients')) {

        this.innerText = 'Change composition';

        composition.removeEventListener('click', changeComposition);

        figcaption.children[1].style.opacity = '0';
        innerWrapper.style.transition = 'transform 350ms ease-in-out';
        innerWrapper.style.transform = 'translateY(240px)';

        setTimeout(function() {

            figcaption.removeChild(figcaption.children[1]);
            
            innerWrapper.style.transition = 'unset';
            innerWrapper.style.transform  = 'translate(0)';
            
            imgWrapepr.style.display = 'block';
            
            setTimeout(function() {
                imgWrapepr.style.opacity = '1';
            }, 25);
            
            innerWrapper.classList.remove('show-ingridients');
            imgWrapepr.classList.remove('show-ingridients');

        }, 300);
    
    } else {
        
        this.innerText = 'Submit';

        let ingridientsToAdd = document.createElement('div');
        ingridientsToAdd.classList.add('ingridients-to-add');
        ingridientsToAdd.setAttribute('data', currentIndex);

        ingridientsToAdd.addEventListener('click', changeComposition);
        composition.addEventListener('click', changeComposition);

        fillIngridientsToAdd(ingridientsToAdd, currentIndex);

        innerWrapper.style = '';
        innerWrapper.style.transition = 'transform 350ms ease-in-out';
        figcaption.insertBefore(ingridientsToAdd, this);
        innerWrapper.classList.add('show-ingridients');
        imgWrapepr.style.opacity = '0';

        setTimeout(function() {

            let height = imgWrapepr.getBoundingClientRect().height + 'px';

            ingridientsToAdd.style.height = height;
            ingridientsToAdd.style.display = 'block';
            
            setTimeout(function() {
                ingridientsToAdd.style.opacity = '1';
            }, 25);
        
            imgWrapepr.style.display = 'none';
            innerWrapper.style.transition = 'unset';
            innerWrapper.style.transform = 'translate(0)';

        }, 300);   
    }
}

function fillIngridientsToAdd(element, index) {
    
    let nonIngridients     = JSON.parse(JSON.stringify(pizzaIngridients));

    if(index > 99) index -= 100;

    let currentIngridients = Array.from(document.querySelectorAll('.composition')[index].children);

    currentIngridients.forEach(elem => {
        elem = elem.textContent.replace(/ /g, '_');
        for(let key in nonIngridients)
            if(key == elem) 
                delete nonIngridients[key];  
    });

    for(let key in nonIngridients) {
        let span = document.createElement('span');
        span.innerText = key.replace(/_/g, ' ');
        element.appendChild(span);
    }
}

function changeComposition(e) {

    let targetElem   = e.target;
    let parentELem   = targetElem.parentNode;
    let currentIndex = parseInt(parentELem.getAttribute('data'));
    let currentIndexCopy = parseInt(parentELem.getAttribute('data'));
    let tempPizzaArr;

    if (currentIndex > 99) {
        tempPizzaArr = customPizzaArr;
        currentIndexCopy -= 100;
    } else
        tempPizzaArr = pizzaArr;

    if(!targetElem.classList.contains('composition') && !targetElem.classList.contains('ingridients-to-add'))
        if(!parentELem.classList.contains('composition')) {
            
            parentELem.removeChild(targetElem);
            document.querySelector(`.composition[data="${currentIndex}"]`).appendChild(targetElem);
            
            let key = targetElem.textContent.replace(/ /g, '_');
            tempPizzaArr[currentIndexCopy].ingrid[key] = pizzaIngridients[key];
        
        } else if(!parentELem.classList.contains('ingridients-to-add')) {

            parentELem.removeChild(targetElem);
            document.querySelector('.ingridients-to-add').appendChild(targetElem);

            let key = targetElem.textContent.replace(/ /g, '_');
            delete tempPizzaArr[currentIndexCopy].ingrid[key];

        }

    calcValues(currentIndex);
    showNewValues(currentIndex);
}

function showNewValues(index) {

    let calories = document.querySelector(`.calories[data="${index}"]`);
    let price    = document.querySelector(`.price[data="${index}"]`);
    let indexCopy = index;

    if(index > 99) {
        indexCopy -= 100;
        calories.innerText = customPizzaArr[indexCopy].calories;
        price.innerText    = customPizzaArr[indexCopy].price;
    } else {
        calories.innerText = pizzaArr[index].calories;
        price.innerText    = pizzaArr[index].price;
    }

}

function showPizza(pizzaArr, figureClass, productWrapper, mainWrapper) {

    while (mainWrapper.firstChild)
        mainWrapper.removeChild(mainWrapper.firstChild);

    for(let i = 0; i < pizzaArr.length; i++) {

        let element     = document.createElement('figure');
        let img         = document.createElement('img');
        let imgWrapepr  = document.createElement('div');
        let figcaption  = document.createElement('figcaption');
        let name        = document.createElement('h2');
        let calories    = document.createElement('p');
        let price       = document.createElement('h2');
        let order       = document.createElement('button');
        let composition  = document.createElement('p');
        let innerWrapper = document.createElement('div');
        let change       = document.createElement('button');

        let nameValue = pizzaArr[i].name;

        element.classList.add(figureClass);
        name.classList.add('name');
        imgWrapepr.classList.add('img-wrapper');
        calories.classList.add('calories');
        price.classList.add('price');

        imgWrapepr.appendChild(img);
        element.appendChild(imgWrapepr);
        element.appendChild(figcaption);

        if (mainWrapper.classList.contains('custom-products')) {

            element.setAttribute('data', i + 100);
            imgWrapepr.setAttribute('data', i + 100);
            figcaption.setAttribute('data', i + 100);
            name.setAttribute('data', i + 100);
            calories.setAttribute('data', i + 100);
            price.setAttribute('data', i + 100);
            order.setAttribute('data', i + 100);
            composition.setAttribute('data', i + 100);
            innerWrapper.setAttribute('data', i + 100);
            change.setAttribute('data', i + 100);
            img.setAttribute('data', i + 100);
            img.setAttribute('src', `default_photo/default.png`);

        } else {

            element.setAttribute('data', i);
            imgWrapepr.setAttribute('data', i);
            figcaption.setAttribute('data', i);
            name.setAttribute('data', i);
            calories.setAttribute('data', i);
            price.setAttribute('data', i);
            order.setAttribute('data', i);
            composition.setAttribute('data', i);
            innerWrapper.setAttribute('data', i);
            change.setAttribute('data', i);
            img.setAttribute('data', i);
            img.setAttribute('src', `${figureClass}_photo/${nameValue}.png`);

        }

        order.className  = 'btn btn-order';
        order.innerText  = 'Add to order';
        
        order.addEventListener('click', function() {
            addToOrder(this);
        });

        figcaption.appendChild(name);

        if(figureClass === 'card') {

            change.className    = 'btn btn-change';
            change.innerText    = 'Change composition';

            composition.classList.add('composition');
            innerWrapper.classList.add('inner-wrapper');

            innerWrapper.appendChild(name);
            innerWrapper.appendChild(calories);
            innerWrapper.appendChild(composition);

            figcaption.appendChild(innerWrapper);
            figcaption.appendChild(change);

            for(let key in pizzaArr[i].ingrid) {
                let span = document.createElement('span');
                span.innerText = key.replace(/_/g, ' ');
                composition.appendChild(span);
            }

            change.addEventListener('click', animate);
        } else {
            figcaption.appendChild(calories);
        }
        
        figcaption.appendChild(price);
        figcaption.appendChild(order);

        img.setAttribute('alt', nameValue.replace(/_/g, ' '));

        name.innerText     = nameValue.replace(/_/g, ' ');
        calories.innerText = pizzaArr[i].calories;
        price.innerText    = pizzaArr[i].price;

        productWrapper.appendChild(element);
    }

    mainWrapper.appendChild(productWrapper);

    setTimeout(function(){
        productWrapper.classList.add('opacity-1');
    }, 15);
}

function addToOrder(contex) {

    let wrapper = document.querySelector('.wrapper');

    Array.from(wrapper.children).forEach(elem => {
        if (elem.classList.contains('order-details-wrapper'))
            wrapper.removeChild(elem);
    });

    let tempPizzaArr;
    let orderDetailsWrapper = document.createElement('section');
    let orderDetails        = document.createElement('section');
    let h3                  = document.createElement('h3');
    let pizzaName           = document.createElement('span');
    let currentPrice        = document.createElement('div');
    let currentPriceParag   = document.createElement('p');
    let pizzaAmount         = document.createElement('input');
    let span1               = document.createElement('span');
    let pizzaPrice          = document.createElement('span');
    let span2               = document.createElement('span');
    let currentPriceValue   = document.createElement('span');
    let btnSubmit           = document.createElement('button');
    let close               = document.createElement('span');
    let currentIndex        = parseInt(contex.getAttribute('data'));
    let currentIndexCopy    = parseInt(contex.getAttribute('data'));

    if(currentIndex > 99) {
        currentIndex -= 100;
        tempPizzaArr = customPizzaArr;
    } else {
        tempPizzaArr = pizzaArr;
    }

    let pizzaPriceValue   = tempPizzaArr[currentIndex].price;

    orderDetailsWrapper.classList.add('order-details-wrapper');
    orderDetails.classList.add('order-details');
    pizzaName.classList.add('pizza-name');
    currentPrice.classList.add('current-price');
    currentPriceParag.classList.add('current-price-parag');
    
    pizzaAmount.classList.add('pizza-amount');
    pizzaAmount.setAttribute('type', 'number');
    pizzaAmount.setAttribute('name', 'pizza-amount');
    pizzaAmount.setAttribute('value', '1');
    pizzaAmount.setAttribute('min', '1');
    pizzaAmount.setAttribute('max', '50');

    pizzaName.innerText = tempPizzaArr[currentIndex].name.replace(/_/g, ' ');

    pizzaPrice.classList.add('pizza-price');
    currentPriceValue.classList.add('current-price-value');
    btnSubmit.className = ' btn btn-submit-order';
    btnSubmit.innerText = 'Add to busket';
    btnSubmit.setAttribute('data', currentIndexCopy);
    close.classList.add('close');

    span1.innerText             = String.fromCharCode('215');
    pizzaPrice.innerText        = pizzaPriceValue;
    span2.innerText             = String.fromCharCode('61');
    currentPriceValue.innerText = pizzaPriceValue;

    pizzaAmount.addEventListener('change', function() {
        
        let newValue = parseInt(pizzaAmount.value);
        currentPriceValue.innerText = newValue * pizzaPriceValue;

    });

    h3.appendChild(document.createTextNode('How many '));
    h3.appendChild(pizzaName);
    h3.appendChild(document.createTextNode(' you would like to order?'));

    currentPriceParag.appendChild(pizzaAmount);
    currentPriceParag.appendChild(span1);
    currentPriceParag.appendChild(pizzaPrice);
    currentPriceParag.appendChild(span2);
    currentPriceParag.appendChild(currentPriceValue);

    currentPrice.appendChild(currentPriceParag);
    
    orderDetails.appendChild(h3);
    orderDetails.appendChild(currentPrice);
    orderDetails.appendChild(btnSubmit);
    orderDetails.appendChild(close);

    document.body.style.overflow = 'hidden';
    orderDetailsWrapper.appendChild(orderDetails);
    wrapper.appendChild(orderDetailsWrapper);

    setTimeout(function(){
        orderDetailsWrapper.classList.add('opacity-1');
    }, 15);

    btnSubmit.addEventListener('click', function(){
        addToBasket(this);
    });

    orderDetailsWrapper.addEventListener('click', closeOrderDetails);
}

function closeOrderDetails(e) {

    if (e.target.classList.contains('close') ||
        e.target.classList.contains('order-details-wrapper') ||
        e.target.classList.contains('btn-submit-order')) {

        document.querySelector('.order-details-wrapper').classList.remove('opacity-1');

        setTimeout(function() {
            document.querySelector('.wrapper').removeChild(document.querySelector('.order-details-wrapper'));
            document.body.style = '';
        }, 250);
    }

}

function addToBasket(context) {
    
    let currentIndex = parseInt(context.getAttribute('data'));
    let pizzaAmount  = parseInt(document.querySelector('.pizza-amount').value);
    let currentPriceValue = parseInt(document.querySelector('.current-price-value').textContent);

    if(currentIndex > 99) {
        currentIndex -= 100;
        tempPizzaArr = customPizzaArr;
        tempPizzaArr[currentIndex]['custom'] = true;
    } else {
        tempPizzaArr = pizzaArr;
    }

    tempPizzaArr[currentIndex].orderedAmount = pizzaAmount;
    tempPizzaArr[currentIndex].orderedPrice  = currentPriceValue;

    if (localStorage['poltavarost'])
        orderedPizzaArr = JSON.parse(localStorage['poltavarost']).basket;

    orderedPizzaArr.push(JSON.parse(JSON.stringify(tempPizzaArr[currentIndex])));

    data.basket      = orderedPizzaArr;
    data.customPizza = customPizzaArr;

    localStorage['poltavarost'] = JSON.stringify(data);

    showOrderAmount();
}

if(localStorage['poltavarost'])
    showOrderAmount();

function showOrderAmount() {

    let amount       = document.querySelector('.amount');
    let pizzaAmount  = 0;
    let tempArr      = JSON.parse(localStorage['poltavarost']).basket;

    tempArr.forEach(elem => pizzaAmount += elem.orderedAmount);

    amount.innerText = pizzaAmount;
}

const shoppingCard = document.querySelector('.shopping-card');

shoppingCard.addEventListener('click', showBasket);

function showBasket() {

    if (JSON.parse(localStorage['poltavarost']).basket.length === 0) return;

    let basketWrapper = document.querySelector('.basket-wrapper');
    let orderList     = document.querySelector('.order-list');

    basketWrapper.style.display = 'flex';
    setTimeout(function(){
        basketWrapper.classList.add('show-basket');
    }, 15);
    document.body.style.overflow = 'hidden';

    basketWrapper.addEventListener('click', function(e) { 
        if (e.target.classList.contains('basket-wrapper')) {
            basketWrapper.classList.remove('show-basket');
            setTimeout(function(){
                basketWrapper.style.display = 'none';
                document.body.style = '';
            }, 250);

            while(orderList.firstChild)
                orderList.removeChild(orderList.firstChild);
        }
    });

    showOrderedPizzas();
}

function showOrderedPizzas() {

    let orderedArr    = JSON.parse(localStorage['poltavarost']).basket;
    let orderList     = document.querySelector('.order-list');
    let sum      = document.querySelector('.sum');
    let sumValue = 0;

    orderedArr.forEach((elem, index) => {

        let pizzaName = elem.name;

        let orderItem        = document.createElement('figure');
        let imgWrapper       = document.createElement('div');
        let img              = document.createElement('img');
        let figcaption       = document.createElement('figcaption');
        let h3               = document.createElement('h3');
        let orderPizzaAmount = document.createElement('input');
        let pizzaPrice       = document.createElement('pizza-price');
        let remove           = document.createElement('span');

        orderItem.classList.add('order-item');
        imgWrapper.classList.add('img-wrapper');
        orderPizzaAmount.classList.add('order-pizza-amount');
        pizzaPrice.classList.add('pizza-price');
        remove.classList.add('remove');

        remove.addEventListener('click', removeOrderedPizza);

        if (elem['custom'] == true)
            img.setAttribute('src', `default_photo/default.png`);
        else
            img.setAttribute('src', `card_photo/${pizzaName}.png`);

        img.setAttribute('alt', pizzaName);

        h3.innerText = pizzaName.replace(/_/g, ' ');
        h3.setAttribute('data', index);

        orderPizzaAmount.setAttribute('type', 'number');
        orderPizzaAmount.setAttribute('value', elem.orderedAmount);
        orderPizzaAmount.setAttribute('min', '1');
        orderPizzaAmount.setAttribute('max', '50');
        orderPizzaAmount.setAttribute('data', index);

        orderPizzaAmount.addEventListener('change', function() {
            
            let tempArr  = JSON.parse(localStorage['poltavarost']).basket;
            let newValue = parseInt(this.value);
            let currentIndex = parseInt(this.getAttribute('data'));
            let orderItemArr = Array.from(document.querySelector('.order-list').children);
            let indexInArr;

            orderItemArr.forEach(elem => {
                if (elem.getAttribute('data') == currentIndex)
                    indexInArr = orderItemArr.indexOf(elem);
            });

            tempArr[indexInArr].orderedAmount = newValue;
            tempArr[indexInArr].orderedPrice  = newValue * tempArr[indexInArr].price;
            
            showNewValuesBasket(tempArr);

            data.basket = tempArr;

            localStorage['poltavarost'] = JSON.stringify(data);
        
        });

        orderItem.setAttribute('data', index);
        remove.setAttribute('data', index);

        pizzaPrice.innerText = elem.price;

        imgWrapper.appendChild(img);

        figcaption.appendChild(h3);
        figcaption.appendChild(orderPizzaAmount);
        figcaption.appendChild(pizzaPrice);

        orderItem.appendChild(imgWrapper);
        orderItem.appendChild(figcaption);
        orderItem.appendChild(remove);

        orderList.appendChild(orderItem);

        sumValue += elem.orderedPrice;

    });

    sum.innerText = sumValue;
}

function removeOrderedPizza() {

    let currentIndex = parseInt(this.getAttribute('data'));
    let orderList    = document.querySelector('.order-list');
    let orderItem    = document.querySelector(`.order-item[data="${currentIndex}"]`);
    let tempArr      = JSON.parse(localStorage['poltavarost']).basket;
    let orderItemArr = Array.from(orderList.children);
    let indexToRemove;

    orderList.removeChild(orderItem);
    
    orderItemArr.forEach(elem => {
        if (elem.getAttribute('data') == currentIndex)
            indexToRemove = orderItemArr.indexOf(elem);
    });

    tempArr.splice(indexToRemove, 1);

    showNewValuesBasket(tempArr);

    data.basket = tempArr;

    localStorage['poltavarost'] = JSON.stringify(data);

}

function showNewValuesBasket(array) {

    let amount       = document.querySelector('.amount');
    let sum          = document.querySelector('.sum');
    let amountValue  = 0;
    let sumValue     = 0;

    array.forEach(elem => {
        amountValue += elem.orderedAmount;
        sumValue    += elem.orderedPrice;
    });

    amount.innerText = amountValue;
    sum.innerText = sumValue;
}

const btnSendOrder = document.querySelector('.btn-send-order');

btnSendOrder.addEventListener('click', function() {

    let orderList = document.querySelector('.order-list');

    while (orderList.firstChild)
        orderList.removeChild(orderList.firstChild);
    
    document.querySelector('.sum').innerText = 0;

    document.querySelector('.basket-wrapper').style = '';
    document.body.style = '';
    document.querySelector('.amount').innerText = 0;
    orderedPizzaArr = [];
    data.basket = [];
    localStorage['poltavarost'] = JSON.stringify(data);

    alert('Your order was accepted');
    
});

const createPizza = document.querySelector('.create-pizza');

createPizza.addEventListener('click', function() {
    
    let constructorWrapper = document.querySelector('.pizza-constructor-wrapper');
    let availableIngridients = document.querySelector('.available-ingridients-wrapper');
    let selectedIngridients = document.querySelector('.selected-ingridients-wrapper');

    constructorWrapper.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    setTimeout(function () {
        constructorWrapper.style.opacity = '1';
    }, 15);

    if (!availableIngridients.firstChild && !selectedIngridients.firstChild) {

        for (key in pizzaIngridients) {

            let span = document.createElement('span');
            span.classList.add('ingridient');
            span.innerText = key.replace(/_/g, ' ');
            availableIngridients.appendChild(span);

        }
    }

    constructorWrapper.addEventListener('click', closeConstructor);

});

const btnSubmitName        = document.querySelector('.btn-submit-name');
const availableIngridients = document.querySelector('.available-ingridients-wrapper');
const selectedIngridients  = document.querySelector('.selected-ingridients-wrapper');

btnSubmitName.addEventListener('click', function() {

    let name = document.querySelector('.custom-name');

    document.querySelector('.entered-name-value').innerText = name.value;
    
    name.value = '';

});

availableIngridients.addEventListener('click', function(e) {
    if (e.target.classList.contains('ingridient')) {
        availableIngridients.removeChild(e.target);
        selectedIngridients.appendChild(e.target);
        calcCustomValue(selectedIngridients);
    }
});

selectedIngridients.addEventListener('click', function(e) {
    if (e.target.classList.contains('ingridient')) {
        selectedIngridients.removeChild(e.target);
        availableIngridients.appendChild(e.target);
        calcCustomValue(selectedIngridients);
    }
});

function closeConstructor(e) {
    
    if(e.target.classList.contains('pizza-constructor-wrapper') || 
        e.target.classList.contains('close-constructor')) {

        let constructorWrapper = document.querySelector('.pizza-constructor-wrapper');

        constructorWrapper.style.opacity = '0';
            
        setTimeout(function () {
            constructorWrapper.style.display = 'none';
        }, 250);        
            
        document.body.style = '';
    }
}

const removeAllCustom    = document.querySelector('.remove-all');
const removeTargetCustom = document.querySelector('.remove-target');

removeAllCustom.addEventListener('click', function() {
    
    let wrapper = document.querySelector('.custom-products').childNodes[0];

    customPizzaArr   = [];
    data.customPizza = customPizzaArr;
    wrapper.classList.remove('opacity-1');
    document.querySelector('.remove-custom').classList.remove('opacity-1');
    
    setTimeout(function() {
        document.querySelector('.custom-products').removeChild(wrapper);
    }, 300);

    localStorage['poltavarost'] = JSON.stringify(data);

});

removeTargetCustom.addEventListener('click', function() {

    let wrapper = document.querySelector('.custom-products').childNodes[0];

    if (!wrapper.firstChild.classList.contains('remove-target-item')) {

        Array.from(wrapper.children).forEach(elem => elem.classList.add('remove-target-item'));
        
        wrapper.addEventListener('click', removeTargetPizza);

        removeTargetCustom.classList.add('remove-target-btn');
    } else {

        Array.from(wrapper.children).forEach(elem => elem.classList.remove('remove-target-item'));
        
        wrapper.removeEventListener('click', removeTargetPizza);

        removeTargetCustom.classList.remove('remove-target-btn');
    }

});

function removeTargetPizza(e) {
    
    let wrapper = document.querySelector('.custom-products').childNodes[0];
    let currentIndex = parseInt(e.target.getAttribute('data')) - 100;
    let currentIndexCopy = parseInt(e.target.getAttribute('data'));
    let currentItem;  

    if (wrapper.classList.contains('product-list'))
        currentItem = document.querySelector(`.item[data="${currentIndexCopy}"]`);
    else if (wrapper.classList.contains('product-grid'))
        currentItem = document.querySelector(`.card[data="${currentIndexCopy}"]`);

    if(!isNaN(currentIndex)) {
        
        customPizzaArr.splice(currentIndex, 1);
        data.customPizza = customPizzaArr;
        
        localStorage['poltavarost'] = JSON.stringify(data);
        wrapper.removeChild(currentItem);

        if(!wrapper.firstChild) {
            document.querySelector('.remove-custom').classList.remove('opacity-1');
            removeTargetCustom.classList.remove('remove-target-btn');
        }
    
    }
}


function calcCustomValue(selectedIngridients) {

    let tempArr = Array.from(selectedIngridients.children);

    if (tempArr.length === 0) {
        document.querySelector('.result-calories').textContent = 0;
        document.querySelector('.result-price').textContent    = 0;
    }

    let calories = 0;
    let price    = 0;

    tempArr.forEach(elem => {
        elem = elem.textContent.replace(/ /g, '_');

        for(let key in pizzaIngridients)
            if(key == elem) {
                calories += pizzaIngridients[key][0];
                price    += pizzaIngridients[key][1];
            }

        document.querySelector('.result-calories').textContent = calories;
        document.querySelector('.result-price').textContent    = price;
    });

}

const submitCustom = document.querySelector('.submit-custom');

submitCustom.addEventListener('click', function() {
    
    let name     = document.querySelector('.entered-name-value');
    let calories = parseInt(document.querySelector('.result-calories').textContent);
    let price    = parseInt(document.querySelector('.result-price').textContent);

    if (name.textContent && calories && price) {
        
        let mainWrapper = document.querySelector('.products').childNodes[0];
        let tempArr     = Array.from(document.querySelector('.selected-ingridients-wrapper').children);
        let newPizza;
        
        let ingridients = new Object();

        tempArr.forEach(elem => {
            elem = elem.textContent.replace(/ /g, '_');
        
            for(key in pizzaIngridients)
                if(key == elem) {
                    ingridients[key] = pizzaIngridients[key];
                }
        });

        newPizza = new Pizza(name.textContent, ingridients, calories, price);
        customPizzaArr.push(newPizza);

        let orderedArr = JSON.parse(localStorage['poltavarost']).basket;

        data.basket = orderedArr;
        data.customPizza = customPizzaArr;

        localStorage['poltavarost'] = JSON.stringify(data);
        
        let productWrapper = document.createElement('section');

        if (mainWrapper.classList.contains('product-grid')) {
            productWrapper.classList.add('product-grid');
            showPizza(customPizzaArr, 'card', productWrapper, document.querySelector('.custom-products'));
        } else if (mainWrapper.classList.contains('product-list')) {
            productWrapper.classList.add('product-list');
            showPizza(customPizzaArr, 'item', productWrapper, document.querySelector('.custom-products'));
        }

        document.querySelector('.pizza-constructor-wrapper').style.opacity = '0';
        
        setTimeout(function () {
            document.querySelector('.pizza-constructor-wrapper').style.display = 'none';
        }, 250);        
        
        document.body.style = '';  
        name.textContent = '';
        document.querySelector('.remove-custom').classList.add('opacity-1');

    } else if(!name.textContent) {
        alert('Enter pizza name!');
    } else if(!price) {
        alert('Choose at least one ingridient');
    }
});

const sortText = document.querySelector('.sort-text');
const howSort  = document.querySelector('.how-sort');

sortText.addEventListener('click', function(e) {
    
    let target   = e.target;
    let selected = document.querySelector('.selected');

    let toggle = howSort.className.split(' ')[1];

    if(target.classList.contains('calories-sort') || target.classList.contains('price-sort')) {
        
        if (target.classList.contains('price-sort') && selected.classList.contains('selected-calories')) {

            selected.classList.remove('selected-calories');
            selected.classList.add('selected-price');
            
            target.classList.add('opacity-1');
            target.previousElementSibling.classList.remove('opacity-1');

            sortPizza(target.className.split('-')[0], toggle);

        } else if (target.classList.contains('calories-sort') && selected.classList.contains('selected-price')) {

            selected.classList.remove('selected-price');
            selected.classList.add('selected-calories');

            target.classList.add('opacity-1');
            target.nextElementSibling.classList.remove('opacity-1');

            sortPizza(target.className.split('-')[0], toggle);

        } else if (!selected.classList.contains('selected-price') && !selected.classList.contains('selected-calories')) {
            
            selected.classList.add(`selected-${target.textContent}`);
            target.classList.add('opacity-1');
            sortPizza(target.className.split('-')[0], toggle);

        }
    }    
});

howSort.addEventListener('click', function() {

    let currentClass = document.querySelector('.selected').className.split('-')[1];

    if (howSort.classList.contains('cheap')) {

        howSort.classList.remove('cheap');
        howSort.classList.add('expensive');
        sortPizza(currentClass, 'expensive');

    } else if (howSort.classList.contains('expensive')) {

        howSort.classList.add('cheap');
        howSort.classList.remove('expensive');
        sortPizza(currentClass, 'cheap');

    }
});

function sortPizza(property, toggle) {

    let mainWrapper = document.querySelector('.products');
    let wrapper = mainWrapper.childNodes[0];

    while(wrapper.firstChild)
        wrapper.removeChild(wrapper.firstChild);
    
    if (toggle === 'cheap')
        pizzaArr.sort((a, b) => a[property] > b[property] ? 1 : -1);
    else if(toggle === 'expensive')
        pizzaArr.sort((a, b) => a[property] < b[property] ? 1 : -1);

    if(wrapper.classList.contains('product-grid'))
        showPizza(pizzaArr, 'card', wrapper, mainWrapper);
    else if(wrapper.classList.contains('product-list'))
        showPizza(pizzaArr, 'item', wrapper, mainWrapper);

}
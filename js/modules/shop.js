import { products } from "./product.js";
const list = document.querySelector('.ec-products__list');

export function shop() {
    console.log(products);

    list.innerHTML = products.map(({ category, name, price, image, id }) =>
        `<li class="ec-products__item" data-category=${category} data-product-id="blend">
            <article class="ec-product-card">
              <a class="ec-product-card__link" href="./detail.html?id=${id}">
                <figure class="ec-product-card__figure">
                  <img class="ec-product-card__image" src=${image} alt=${name}
                    width="600" height="600" loading="lazy" />
                </figure>
                <p class="ec-product-card__category">${category}</p>
                <h2 class="ec-product-card__name">${name}</h2>
              </a>
              <p class="ec-product-card__price"><span>¥${price}</span><small>（税込）</small></p>
              <button class="ec-product-card__button" type="button" data-add-to-cart="blend"
                aria-label="${name}をカートに追加">ADD TO CART</button>
            </article>
          </li>`

    ).join('');
}
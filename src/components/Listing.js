


export default function Listing({ items }) {


    const item = items.map(el => {
        el
        console.log(el)
    })


    return
    (
        <div class="item-list">
            <div class="item">
                <div class="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN} />
                    </a>
                </div>
                <div class="item-details">
                    <p class="item-title">{item.title}</p>
                    <p class="item-price">{item.currency_code}{item.price}</p>
                    <p class="item-quantity level-medium">12 left</p>
                </div>
            </div>
        </div>
    )



}

Listing.defaultProp = {
    items: []
}
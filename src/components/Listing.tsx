import React from 'react';
import { Item } from '../types';

interface ListingProps {
    items: Item[];
}

const Listing: React.FC<ListingProps> = ({ items }) => {
    const formatPrice = (price: string, currency: string) => {
        switch (currency) {
            case 'USD':
                return `$${price}`;
            case 'EUR':
                return `€${price}`;
            default:
                return `${price} ${currency}`;
        }
    };

    const truncateTitle = (title: string) => {
        return title.length > 50 ? `${title.slice(0, 50)}…` : title;
    };

    const getQuantityClass = (quantity: number) => {
        if (quantity <= 10) return 'level-low';
        if (quantity <= 20) return 'level-medium';
        return 'level-high';
    };

    return (
        <div className="item-list">
            {items.map(item => (
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} alt={item.title} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{truncateTitle(item.title)}</p>
                        <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
                        <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>
                            {item.quantity} left
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Listing;

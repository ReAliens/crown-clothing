import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { Link } from 'react-router-dom';
import './collection-preview.style.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <span className='title'>
            <Link to={`/shop/${title.toLowerCase()}`}>
                {title}
            </Link>
        </span>
        <div className='preview'>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </div>

    </div>
)

export default CollectionPreview;
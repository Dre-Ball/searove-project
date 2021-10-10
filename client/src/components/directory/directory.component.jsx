import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        
        this.state = {
            sections: [{
                title: 'Catamaran',
                imageUrl: 'https://cdn.pixabay.com/photo/2021/07/27/12/34/port-6496782_960_720.jpg',
                size: 'large',
                id: 1,
                linkUrl: 'boats'
            },
            {
                title: 'Yacht',
                imageUrl: 'https://cdn.pixabay.com/photo/2020/02/11/12/07/portofino-4839356__340.jpg',
                size: 'medium',
                id: 2,
                linkUrl: 'boats'
            },
            {
                title: 'Sailboat',
                imageUrl: 'https://cdn.pixabay.com/photo/2018/10/07/10/24/sailboat-3729599__340.jpg',
                size: 'medium',
                id:3,
                linkUrl: 'boats'
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory
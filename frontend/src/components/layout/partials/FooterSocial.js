import React from 'react';
import classNames from 'classnames';
import {SocialIcon} from 'react-social-icons';

const FooterSocial = ({
                          className,
                          ...props
                      }) => {

    const classes = classNames(
        'footer-social',
        className
    );

    return (
        <div
            {...props}
            className={classes}
        >
            <ul className="list-reset">
                <li>
                    <SocialIcon url="https://www.linkedin.com/in/ricardobolio/" bgColor="#f35d8b"
                                style={{height: 25, width: 25}}/>
                </li>
                <li>
                    <SocialIcon url="https://twitter.com/rbolio" bgColor="#f35d8b" style={{height: 25, width: 25}}/>
                </li>
                <li>
                    <SocialIcon url="https://www.instagram.com/rbolio/" bgColor="#f35d8b"
                                style={{height: 25, width: 25}}/>
                </li>
            </ul>
        </div>
    );
}

export default FooterSocial;
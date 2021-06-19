import React from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

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
          <SocialIcon url="https://www.linkedin.com/in/ricardobolio/"/>
        </li>
        <li>
          <SocialIcon url="https://twitter.com/rbolio"/>
        </li>
        <li>
          <SocialIcon url="https://www.instagram.com/rbolio/"/>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;
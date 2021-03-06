import React, { Component } from 'react';
import { Link } from 'gatsby';
import '../../../sass/main.scss';

class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home',
      },
      {
        id: 1,
        path: '/about',
        name: 'about',
      },
      {
        id: 2,
        path: '/menu',
        name: 'menu',
      },
      {
        id: 3,
        path: '/contact',
        name: 'contact',
      },
    ],
  };

  render() {
    let toggleNav;

    const clientWidth =
      typeof window !== `undefined`
        ? window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        : 400;

    if (this.props.navbarOpen) {
      toggleNav = 'link-wrapper';
    } else if (clientWidth >= 768) {
      toggleNav = 'link-wrapper';
    } else {
      toggleNav = 'link-wrapper--disabled';
    }

    return (
      <ul className={toggleNav} open={this.props.navbarOpen}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.path} className="nav-link">
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NavbarLinks;

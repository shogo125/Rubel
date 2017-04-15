import React from 'react';
import {Link} from 'react-router';

// TODO React でかく utils内にコンポーネントとして構築
// (function() {
//     var burger = document.querySelector('.nav-toggle');
//     var menu = document.querySelector('.nav-menu');
//     burger.addEventListener('click', function() {
//         burger.classList.toggle('is-active');
//         menu.classList.toggle('is-active');
//     });
// })();

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav is-dark has-shadow" id="top">
          <div className="container">
            <div className="nav-left">
              <a className="nav-item" href="../index.html">
                <span>Title</span>
              </a>
            </div>
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="nav-right nav-menu is-hidden-tablet">
              <Link to="/dashboard" className="nav-item is-tab active">
                Dashboard
              </Link>
              <Link to="/posts" className="nav-item is-tab">
                Posts
              </Link>
              <Link to="/new-post" className="nav-item is-tab">
                NewPost
              </Link>
              <Link to="/categories" className="nav-item is-tab">
                Categories
              </Link>
              <Link to="/tags" className="nav-item is-tab">
                Tags
              </Link>
              <Link to="/config" className="nav-item is-tab">
                Config
              </Link>
            </div>
          </div>
        </nav>
        <div className="columns">
          <aside className="column is-2 aside hero is-fullheight is-hidden-mobile">
            <div>
              <div className="uploader has-text-centered">
                <a className="button">
                  <i className="fa fa-upload"></i>
                </a>
              </div>
              <div className="main">
                <div className="title">Main</div>
                <Link to="/dashboard" className="item active">
                  <span className="icon">
                    <i className="fa fa-tachometer"></i>
                  </span>
                  <span className="name">Dashboard</span>
                </Link>
                <Link to="/dashboard/posts" className="item">
                  <span className="icon">
                    <i className="fa fa-list"></i>
                  </span>
                  <span className="name">Posts</span>
                </Link>
                <Link to="/dashboard/new-post" className="item">
                  <span className="icon">
                    <i className="fa fa-pencil"></i>
                  </span>
                  <span className="name">NewPost</span>
                </Link>
                <Link to="/dashboard/categories" className="item">
                  <span className="icon">
                    <i className="fa fa-th-list"></i>
                  </span>
                  <span className="name">Categories</span>
                </Link>
                <Link to="/dashboard/tags" className="item">
                  <span className="icon">
                    <i className="fa fa-tags"></i>
                  </span>
                  <span className="name">Tags</span>
                </Link>
                <Link to="/dashboard/config" className="item">
                  <span className="icon">
                    <i className="fa fa-cog"></i>
                  </span>
                  <span className="name">Config</span>
                </Link>
              </div>
            </div>
          </aside>
          <div className="content column is-10">
            {this.props.children}
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="has-text-centered">
              <p>
                <strong>Bulma</strong>
                by
                <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
              </p>
              <p>
                <a className="icon" href="https://github.com/jgthms/bulma">
                  <i className="fa fa-github"></i>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

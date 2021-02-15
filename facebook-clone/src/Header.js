import React from "react";
import logo from "./logo-doodle.png";
import { Avatar } from "@material-ui/core";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="logo" />
        <div className="header__input">
          <input placeholder="Search Doodle" type="text" />
          <button>
            <span className="material-icons">search</span>
          </button>
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <button>
            <span className="material-icons">home</span>
          </button>
        </div>
        <div className="header__option">
          <button>
            <span className="material-icons">flag</span>
          </button>
        </div>
        <div className="header__option">
          <button>
            <span className="material-icons">subscriptions</span>
          </button>
        </div>
        <div className="header__option">
          <button>
            <span className="material-icons">storefront</span>
          </button>
        </div>
        <div className="header__option">
          <button>
            <span className="material-icons">supervised_user_circle</span>
          </button>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Sean Shine</h4>
        </div>
        <div className="header__option">
          <button>
            <span className="material-icons">add</span>
          </button>
        </div>
        <div className="header__option">
          <button>
            <span className="material-icons">forum</span>
          </button>
        </div>
        <div className="header__option">
          <button>
            <span className="material-icons">notifications_active</span>
          </button>
        </div>
        <div className="header__option">
          <button>
            <span className="material-icons">expand_more</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

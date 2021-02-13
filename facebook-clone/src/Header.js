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
          <input type="text" />
          <button>
            <span class="material-icons">search</span>
          </button>
        </div>
      </div>
      <div className="header__center">
        <div className="header__option">
          <button>
            <span className="material-icons">home</span>
          </button>
          <button>
            <span className="material-icons">flag</span>
          </button>
          <button>
            <span className="material-icons">subscriptions</span>
          </button>
          <button>
            <span className="material-icons">storefront</span>
          </button>
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
        <button>
          <span class="material-icons">add</span>{" "}
        </button>
        <button>
          <span class="material-icons">forum</span>{" "}
        </button>
        <button>
          <span class="material-icons">notifications_active</span>{" "}
        </button>
        <button>
          <span class="material-icons">expand_more</span>{" "}
        </button>
      </div>
    </div>
  );
}

export default Header;

import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

import logoIgnite from "../../assets/logo-ignite.svg";

import * as S from "./styles";

export function Header() {
  return (
    <S.HeaderContainer>
      <NavLink to="/">
        <img src={logoIgnite} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  );
}

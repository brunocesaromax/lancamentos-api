package com.example.lancamentoapi.security;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

public class UserSession extends User {

    private static final long serialVersionUID = 1L;

    @Getter
    private com.example.lancamentoapi.model.User user;

    public UserSession(com.example.lancamentoapi.model.User user, Collection<? extends GrantedAuthority> authorities) {
        super(user.getEmail(), user.getPassword(), authorities);
        this.user = user;
    }
}

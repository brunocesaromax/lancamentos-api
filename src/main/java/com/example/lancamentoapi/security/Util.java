package com.example.lancamentoapi.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Util {

    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        System.out.println(encoder.encode("maria"));
    }
}

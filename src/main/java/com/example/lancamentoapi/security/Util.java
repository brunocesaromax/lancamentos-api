package com.example.lancamentoapi.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Util {

    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//        $2a$10$6v9JTwJNt1gngxGTy51ecON5Sx.m8aJ2HZPz.i2moVeP8.2oUAZAO
        System.out.println(encoder.encode("admin"));
    }
}

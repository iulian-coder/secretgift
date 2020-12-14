package com.codecool.secretgift.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class Buna {


    @GetMapping
    public String hello(){
        return "Buna";
    }
}

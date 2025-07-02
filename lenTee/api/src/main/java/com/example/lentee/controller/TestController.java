package com.example.lentee.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class TestController {
 
    @GetMapping("/api/hello")
    public String hello() {
        return "안녕하세요! 백엔드에서 보낸 메시지입니다.";
    }
 }
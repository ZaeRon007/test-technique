package com.alten.shop.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alten.shop.model.dto.userRegisterDto;
import com.alten.shop.model.response.simpleToken;
import com.alten.shop.services.userService;

@RestController
@RequestMapping("/alten/auth")
public class userController {
    
    @Autowired
    public userService userService;

    @PostMapping("/register")
    public ResponseEntity<?> userRegister(@RequestBody userRegisterDto userRegisterDto){
        String token = userService.register(userRegisterDto);

        if(token.isEmpty())
            return ResponseEntity.badRequest().body("Username already exist !");

        return ResponseEntity.ok().body(new simpleToken(token));
    }
}

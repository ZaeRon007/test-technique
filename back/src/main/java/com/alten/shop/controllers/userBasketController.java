package com.alten.shop.controllers;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alten.shop.model.dto.userBasketDto;
import com.alten.shop.services.userBasketService;

@RestController
@RequestMapping("/alten/shop/basket")
public class userBasketController {
    @Autowired
    userBasketService userBasketService;

    @PostMapping("/{id}")
    public ResponseEntity<?> addProductToUserBasket(@PathVariable String id, @RequestBody userBasketDto userBasketDto) throws ParseException{
        return ResponseEntity.ok().body(userBasketService.addProductToUserBasket(id, userBasketDto));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchProductToUserBasket(@PathVariable String id, @RequestBody userBasketDto userBasketDto) throws NumberFormatException, ParseException{
        return ResponseEntity.ok().body(userBasketService.patchProductFromUserBasket(id, userBasketDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProductToUserBasket(@PathVariable String id) throws NumberFormatException, ParseException{
        userBasketService.deleteProductFromUserBasket(id);
        return ResponseEntity.ok().body("item deleted !!");
    }
}

package com.alten.shop.model.response;

import lombok.Data;

@Data
public class simpleToken {
    private String token;

    public simpleToken(String inputToken){
        this.token = inputToken;
    }
}

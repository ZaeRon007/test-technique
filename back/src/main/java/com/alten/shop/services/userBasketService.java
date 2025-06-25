package com.alten.shop.services;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alten.shop.model.userBasketEntity;
import com.alten.shop.model.dto.userBasketDto;
import com.alten.shop.repository.userBasketRepository;

@Service
public class userBasketService {
    @Autowired
    userService userService;

    @Autowired
    userBasketRepository userBasketRepository;

    public userBasketEntity addProductToUserBasket(String product_id, userBasketDto userBasketDto) throws ParseException {
        userBasketEntity entity = userBasketRepository.findByProductIdAndUserId(Integer.parseInt(product_id), userService.getMe());

        if (entity != null) {
            entity.setQuantity(entity.getQuantity() + userBasketDto.getQuantity());
            entity.setUpdatedAt(new TimeService().getTime());
            userBasketRepository.save(entity);
            return entity;
        } else {
            userBasketEntity userBasket = new userBasketEntity();
            userBasket.setUserId(userService.getMe());
            userBasket.setProductId(Integer.parseInt(product_id));
            userBasket.setQuantity(userBasketDto.getQuantity());
            userBasket.setCreatedAt(new TimeService().getTime());
            userBasket.setUpdatedAt(new TimeService().getTime());
            userBasketRepository.save(userBasket);
            return userBasket;
        }

    }

    public Object patchProductFromUserBasket(String product_id, userBasketDto userBasketDto) throws NumberFormatException, ParseException {
        userBasketEntity entity = userBasketRepository.findByProductIdAndUserId(Integer.parseInt(product_id),userService.getMe());
        entity.setQuantity(userBasketDto.getQuantity());
        entity.setUpdatedAt(new TimeService().getTime());
        userBasketRepository.save(entity);
        return entity;
    }

    public void deleteProductFromUserBasket(String product_id) throws NumberFormatException, ParseException {
        userBasketRepository.delete(userBasketRepository.findByProductIdAndUserId(Integer.parseInt(product_id),userService.getMe()));
    }

}

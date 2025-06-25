package com.alten.shop.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.alten.shop.model.userBasketEntity;

@Repository
public interface userBasketRepository extends CrudRepository<userBasketEntity,Integer>{
    userBasketEntity findByProductIdAndUserId(int product_id, int user_id);
    
}

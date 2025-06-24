package com.alten.shop.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.alten.shop.model.productEntity;

@Repository
public interface productRepository extends CrudRepository<productEntity,Integer>{
    productEntity findById(int id);
}

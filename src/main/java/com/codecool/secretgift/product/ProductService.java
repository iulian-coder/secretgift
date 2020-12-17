package com.codecool.secretgift.product;

import com.codecool.secretgift.order.OrderModel;
import com.codecool.secretgift.order.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProductService {

    private final ProductRepository productRepository;


    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;

    }


    public List<ProductModel> findAllProducts() {
    return productRepository.findAll();
    }




}

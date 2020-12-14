package com.codecool.secretgift;

import com.codecool.secretgift.product.ProductModel;
import com.codecool.secretgift.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DbInit implements CommandLineRunner {

    private final ProductRepository productRepository;

    @Autowired
    public DbInit(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @Override
    public void run(String... args) throws Exception {
        ProductModel productModel1 = new ProductModel(1,"Camasa",45.50,
                "https://via.placeholder.com/550x750");
        productRepository.save(productModel1);
    }
}

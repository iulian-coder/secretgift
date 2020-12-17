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
        ProductModel productModel1 = new ProductModel(1,
                "Canapea",
                50.00,
               "Some quick example text to build on the card title and make up the bulk of the card's content.",
                "https://i.imgur.com/SOMPPzU.jpg");
        ProductModel productModel2 = new ProductModel(
                2,
                "Birou cu scaun",
                50.00,
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
                "https://i.imgur.com/eu74Mje.jpg"
        );
        productRepository.save(productModel1);
        productRepository.save(productModel2);
    }
}

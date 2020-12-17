package com.codecool.secretgift.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {

    @NotNull
    private int productId;
    @NotNull
    private int quantity;

    @NotNull
    private String customerEmail;


}

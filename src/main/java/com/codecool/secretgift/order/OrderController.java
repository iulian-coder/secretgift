package com.codecool.secretgift.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/order")
@CrossOrigin("*")
public class OrderController {

    private final OrderService orderService;


    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    @GetMapping
    public List<OrderModel> getAllOrders(){
        return orderService.getAllOrders();
    }

    @PostMapping
    public UUID receiveOrder(@RequestBody List<OrderDTO> orderDTOList){
       return orderService.registerOrder(orderDTOList);
    }
}

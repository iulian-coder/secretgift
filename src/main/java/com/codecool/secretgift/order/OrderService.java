package com.codecool.secretgift.order;

import com.codecool.secretgift.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
    }

    public List<OrderModel> getAllOrders(){
       return orderRepository.findAll();
    }

    public UUID registerOrder(List<OrderDTO> orderDTOList){
//        Generate order number reference - todo simplify the number and a table to store
        UUID orderRefCod = UUID.randomUUID();
        for (OrderDTO item : orderDTOList) {
            OrderModel orderModel = new OrderModel();
            orderModel.setQuantity(item.getQuantity());
            orderModel.setOrderRefCod(orderRefCod);
            orderModel.setCustomerEmail(item.getCustomerEmail());
            orderModel.setProductModel(productRepository.getOne(item.getProductId()));
            orderRepository.save(orderModel);
        }
        return orderRefCod;
    }
}

package com.restaurant.mfp.rserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan({"com.restaurant.mfp.rserver.model.menuItems", "com.restaurant.mfp.rserver.model.staffing"})
public class RestaurantServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(RestaurantServerApplication.class, args);
    }

}

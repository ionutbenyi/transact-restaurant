package com.restaurant.mfp.rserver.model.menuItems;

import javax.persistence.*;

@Entity
@Table(schema = "restaurant-items-db.items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;
    private int grams;
    private int price;

    public Item(int id, String name, int grams, int price) {
        this.id = id;
        this.name = name;
        this.grams = grams;
        this.price = price;
    }

    public Item(String name, int grams, int price) {
        this.name = name;
        this.grams = grams;
        this.price = price;
    }

    public Item() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getGrams() {
        return grams;
    }

    public void setGrams(int grams) {
        this.grams = grams;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}

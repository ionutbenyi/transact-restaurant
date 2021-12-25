package com.restaurant.mfp.rserver.controller;

import com.restaurant.mfp.rserver.dao.menuItems.MenuItemService;
import com.restaurant.mfp.rserver.model.menuItems.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/item")
public class ItemController {
    private final MenuItemService itemService;

    @Autowired
    public ItemController(MenuItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/menu")
    public List<Item> findAll() {
        return itemService.findAll();
    }

    @GetMapping("/menu/find_name")
    public Item findByName( @RequestParam(required = true) String name ) throws Exception {
        return itemService.getItemByName(name);
    }

    @GetMapping("/menu/find_id")
    public Item findById( @RequestParam(required = true) Integer id ) throws Exception {
        return itemService.getItemById(id);
    }

    @PostMapping("/new_entry")
    public Integer insert(@RequestBody Item item) {
        return itemService.insert(item);
    }

    @PutMapping(value = "/{id}")
    public Item update(@PathVariable("id") Integer id, @RequestBody Item item) {
        return itemService.update(id, item);
    }
}

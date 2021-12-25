package com.restaurant.mfp.rserver.dao.menuItems;

import com.restaurant.mfp.rserver.model.menuItems.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MenuItemService {

    private final ItemRepositoryInterface itemsRepository;

    @Autowired
    public MenuItemService(ItemRepositoryInterface itemsRepository) {
        this.itemsRepository = itemsRepository;
    }

    public Item getItemByName(String itemName) throws Exception {
        Item itemObject = itemsRepository.getItemByName(itemName);
        if (itemObject == null) {
            throw new Exception("Item not found by name");
        }
        return itemObject;
    }

    public Item getItemById(Integer id) throws Exception {
        Item itemObject = itemsRepository.getById(id);
        if (itemObject == null) {
            throw new Exception("Item not found by id");
        }
        return itemObject;
    }

    public List<Item> findAll() {
        List<Item> allItems = itemsRepository.findAll();
        return new ArrayList<>(allItems);
    }

    public Integer insert(Item aDTO) {
        return itemsRepository
                .save(aDTO)
                .getId();
    }

    public Item update(Integer id, Item aDTO) {
        Optional<Item> announcementOptional = itemsRepository.findById(id);
        if (!announcementOptional.isPresent()) {
            return null;
        }
        Item itemObject = announcementOptional.get();
        itemObject.setGrams(aDTO.getGrams());
        itemObject.setName(aDTO.getName());
        itemObject.setPrice(aDTO.getPrice());
        return itemsRepository.save(itemObject);
    }

    public void delete(Integer id) {
        this.itemsRepository.deleteById(id);
    }
}

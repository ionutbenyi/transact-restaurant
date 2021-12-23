package com.restaurant.mfp.rserver.dao.menuItems;

import com.restaurant.mfp.rserver.model.menuItems.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Integer> { }

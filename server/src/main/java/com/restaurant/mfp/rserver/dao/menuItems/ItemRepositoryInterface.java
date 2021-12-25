package com.restaurant.mfp.rserver.dao.menuItems;

import com.restaurant.mfp.rserver.model.menuItems.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepositoryInterface extends JpaRepository<Item, Integer> {

    @Query(value = "SELECT s " +
            "FROM Item s WHERE s.name=?1 " +
            "ORDER BY s.id")
    Item getItemByName(String itemName);

    @Query(value = "SELECT s " +
            "FROM Item s WHERE s.id=?1 ")
    Item getById(Integer id);

}

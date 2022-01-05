package com.restaurant.mfp.rserver.dao.staffing;

import com.restaurant.mfp.rserver.model.staffing.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StaffRepositoryInterface extends JpaRepository<Staff, Integer> {

    @Query(value = "SELECT s " +
            "FROM Staff s WHERE s.name=?1 " +
            "ORDER BY s.id")
    List<Staff> getStaffByName(String staffName);

    @Query(value = "SELECT s " +
            "FROM Staff s WHERE s.id=?1 ")
    Staff getById(Integer id);
}

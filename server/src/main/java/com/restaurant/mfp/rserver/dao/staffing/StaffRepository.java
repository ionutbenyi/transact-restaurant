package com.restaurant.mfp.rserver.dao.staffing;

import com.restaurant.mfp.rserver.model.staffing.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffRepository extends JpaRepository<Staff, Integer> { }

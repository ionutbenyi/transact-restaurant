package com.restaurant.mfp.rserver.dao.staffing;

import com.restaurant.mfp.rserver.model.menuItems.Item;
import com.restaurant.mfp.rserver.model.staffing.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StaffService {

    private final StaffRepositoryInterface staffRepository;

    @Autowired
    public StaffService(StaffRepositoryInterface staffRepository) {
        this.staffRepository = staffRepository;
    }

    public List<Staff> getStaffByName(String itemName) throws Exception {
        List<Staff> staffList = staffRepository.getStaffByName(itemName);
        if (staffList.isEmpty()) {
            throw new Exception("Staff not found by name");
        }
        return staffList;
    }

    public Staff getStaffById(Integer id) throws Exception {
        Staff staffObject = staffRepository.getById(id);
        if (staffObject == null) {
            throw new Exception("Staff not found by id");
        }
        return staffObject;
    }

    public List<Staff> findAll() {
        List<Staff> allStaffing = staffRepository.findAll();
        return new ArrayList<>(allStaffing);
    }

    public Integer insert(Staff aDTO) {
        return staffRepository
                .save(aDTO)
                .getId();
    }

    public Staff update(Integer id, Staff aDTO) {
        Optional<Staff> staffOptional = staffRepository.findById(id);
        if (!staffOptional.isPresent()) {
            return null;
        }
        Staff staffObject = staffOptional.get();
        staffObject.setName(aDTO.getName());
        staffObject.setEmail(aDTO.getEmail());
        staffObject.setPassword(aDTO.getPassword());
        staffObject.setRole(aDTO.getRole());
        staffObject.setUsername(aDTO.getUsername());

        return staffRepository.save(staffObject);
    }

    public void delete(Integer id) {
        this.staffRepository.deleteById(id);
    }
}

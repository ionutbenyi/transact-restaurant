package com.restaurant.mfp.rserver.controller;

import com.restaurant.mfp.rserver.dao.staffing.StaffService;
import com.restaurant.mfp.rserver.model.staffing.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/staff")
public class StaffController {

    private final StaffService staffService;

    @Autowired
    public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }

    @GetMapping("/search")
    public List<Staff> findAll() {
        return staffService.findAll();
    }

    @GetMapping("/search/find_name")
    public List<Staff> findByName( @RequestParam(required = true) String name ) throws Exception {
        return staffService.getStaffByName(name);
    }

    @GetMapping("/search/find_id")
    public Staff findById( @RequestParam(required = true) Integer id ) throws Exception {
        return staffService.getStaffById(id);
    }

    @PostMapping("/new_employee")
    public Integer insert(Staff employee) {
        return staffService.insert(employee);
    }

    @PutMapping(value = "/")
    public Staff update(@RequestBody Staff s) {
        return staffService.update(s.getId(), s);
    }

    @DeleteMapping("/")
    public void delete(@RequestBody Staff s) {
        staffService.delete(s.getId());
    }
}

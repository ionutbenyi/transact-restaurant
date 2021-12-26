package com.restaurant.mfp.rserver.model.staffing;
import javax.persistence.*;

@Entity
@Table(schema = "staff")
public class Staff {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String email;
    private String password;
    private String role1;
    private String username;

    public Staff(int id, String name, String email, String password, String role, String username) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role1 = role;
        this.username = username;
    }
    public Staff(String name, String email, String password, String role, String username) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role1 = role;
        this.username = username;
    }
    public Staff() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role1;
    }

    public void setRole(String role1) {
        this.role1 = role1;
    }

    public int getId() { return id; }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

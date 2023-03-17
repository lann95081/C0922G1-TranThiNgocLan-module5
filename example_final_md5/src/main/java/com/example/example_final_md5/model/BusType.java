package com.example.example_final_md5.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class BusType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer busTypeId;
    private String busTypeName;

    @OneToMany(mappedBy = "busType")
    @JsonBackReference
    private Set<Bus> buses;

    public BusType() {
    }

    public Set<Bus> getBuses() {
        return buses;
    }

    public void setBuses(Set<Bus> buses) {
        this.buses = buses;
    }

    public Integer getBusTypeId() {
        return busTypeId;
    }

    public void setBusTypeId(Integer busTypeId) {
        this.busTypeId = busTypeId;
    }

    public String getBusTypeName() {
        return busTypeName;
    }

    public void setBusTypeName(String busTypeName) {
        this.busTypeName = busTypeName;
    }
}
